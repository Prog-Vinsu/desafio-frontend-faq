import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";
import type { FaqApiResponse, FaqItem } from "src/components/models";

export const useFaqStore = defineStore('faq', () => {
  const items = ref<FaqItem[]>([]);
  const loading = ref(false);
  const error = ref(false);
  const searchTerm = ref('');

  async function fetchFaqs() {
    loading.value = true;
    error.value = false;

    try {
      const response = await axios.get<FaqApiResponse>('/api/v1/public-answer');
      const rawList = response.data?.data || [];

      items.value = rawList
        .filter(item => item.ticket && item.ticket.description)
        .map(item => {
          const title = item.ticket.description as string;
          const content = item.answer || '';
          const plainText = content.replace(/<[^>]*>?/gm, ' ');

          return {
            id: item.id,
            title,
            content,
            searchString: `${title} ${plainText}`.toLowerCase()
          };
        });

    } catch (err) {
      console.error('Erro ao carregar FAQ:', err);
      error.value = true;
    } finally {
      loading.value = false;
    }
  }

  function setSearchTerm(term: string) {
    searchTerm.value = term;
  }

  const filteredItems = computed(() => {
    if (!searchTerm.value) return items.value;

    const term = searchTerm.value.toLowerCase().trim();

    return items.value.filter(item => item.searchString.includes(term));
  });

  const hasResults = computed(() => filteredItems.value.length > 0);

  return {
    items,
    loading,
    error,
    searchTerm,
    fetchFaqs,
    setSearchTerm,
    filteredItems,
    hasResults
  };
});

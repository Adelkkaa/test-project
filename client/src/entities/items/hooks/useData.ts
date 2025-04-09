import { useCallback, useEffect, useState } from "react";
import { IItemListType } from "../model/types";
import { fetchItemsApi } from "../api/itemsApi";

interface UseDataResult {
  items: IItemListType[];
  isLoading: boolean;
  error: Error | null;
}

export function useData(): UseDataResult {
  const [state, setState] = useState<UseDataResult>({
    items: [],
    isLoading: true,
    error: null,
  });

  const fetchItems = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, isLoading: true }));
      const data = await fetchItemsApi();
      setState({ items: data, isLoading: false, error: null });
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error : new Error("Unknown error"),
      }));
    }
  }, []);

  useEffect(() => {
    fetchItems();
    const interval = setInterval(fetchItems, 10000);

    return () => clearInterval(interval);
  }, [fetchItems]);

  return state;
}
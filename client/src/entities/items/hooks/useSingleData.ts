import { useCallback, useEffect, useState } from "react";
import { IItemListType } from "../model/types";
import { fetchSingleItemApi } from "../api/itemsApi";

interface UseDataResult {
  item: IItemListType | null;
  isLoading: boolean;
  error: Error | null;
}

export function useSingleData(id: string): UseDataResult {
  const [state, setState] = useState<UseDataResult>({
    item: null,
    isLoading: true,
    error: null,
  });

  const fetchItem = useCallback(async () => {
    try {
      if (!id) {
        throw new Error("ID is not defined");
      }
      setState((prev) => ({ ...prev, isLoading: true }));
      const data = await fetchSingleItemApi(id);
      setState({ item: data, isLoading: false, error: null });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error : new Error("Unknown error"),
      }));
    }
  }, []);

  useEffect(() => {
    fetchItem();
  }, [fetchItem]);

  return state;
}

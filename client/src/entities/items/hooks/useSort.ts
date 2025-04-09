import { useCallback, useMemo, useState } from 'react';
import { IItemListType } from '../model/types';

type TSortBy = 'ASC' | 'DESC';

export function useSort(items: IItemListType[]): [IItemListType[], TSortBy, () => void] {
	const [sortBy, setSortBy] = useState<TSortBy>('ASC');
	
	const sortedItems = useMemo(() => {
		return [...items].sort((a, b) => 
		  sortBy === 'ASC' ? a.id - b.id : b.id - a.id
		);
	  }, [items, sortBy]);
	  
	  const handleSortClick = useCallback(() => {
		setSortBy(prev => prev === 'ASC' ? 'DESC' : 'ASC');
	  }, []);
	
	return [sortedItems, sortBy, handleSortClick]
}


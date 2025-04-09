import  {
  useMemo,
  useState,
  useCallback,
} from "react";
import { useData, useSort, SubTitle } from "@/entities/items";
import { SearchInput } from "@/entities/search-input";
import { ItemsVirtualList } from "@/widgets/ItemsVirtualList";
import { Button } from "@/shared/ui";

import "./ListPage.scss";

function ListPage() {
  const { items, isLoading, error } = useData();
  const [sortedItems, sortBy, handleSortClick] = useSort(items);
  const [activeItemId, setActiveItemId] = useState<number | null>(null);
  const [query, setQuery] = useState<string>("");

  const filteredItems = useMemo(() => {
    if (!query) return sortedItems;
    return sortedItems.filter((item) =>
      `${item.id}`.includes(query.toLowerCase().trim())
    );
  }, [query, sortedItems]);

  const activeItemText = activeItemId ?? "Empty";

  const handleItemClick = useCallback((id: number) => {
    setActiveItemId(id);
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={"list-wrapper"}>
      <div className="list-header">
        <h1 className={"list-title"}>List Page</h1>
        <SubTitle>{activeItemText}</SubTitle>
        <Button onClick={handleSortClick}>
          Sort ({sortBy === "ASC" ? "ASC" : "DESC"})
        </Button>
        <SearchInput
          value={query}
          onChange={setQuery}
          placeholder="Filter by ID"
        />
      </div>
      <div className="list-container" style={{ flex: 1 }}>
        {filteredItems.length === 0 ? (
          <span>{items.length === 0 ? "Loading..." : "No items found"}</span>
        ) : (
          <ItemsVirtualList
            items={filteredItems}
            activeItemId={activeItemId}
            handleItemClick={handleItemClick}
          />
        )}
      </div>
    </div>
  );
}

export default ListPage;

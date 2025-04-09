import { IItemListType, ListItem } from '@/entities/items';
import { VirtualList } from '@/features/VirtualList';
import React, { FC } from 'react'

interface IItemsVirtualListProps {
    items: IItemListType[];
    activeItemId: number | null;
    handleItemClick: (id: number) => void;
}

const Row: FC<{
  data: IItemsVirtualListProps;
  index: number;
  style: React.CSSProperties;
}> = ({ data, index, style }) => {
  const item = data.items[index];
  const isActive = data.activeItemId === item.id;

  return (
    <div style={style}>
      <ListItem
        isactive={isActive}
        id={item.id}
        name={item.name}
        description={item.description}
        onClick={() => data.handleItemClick(item.id)}
      />
    </div>
  );
};

export const ItemsVirtualList: FC<IItemsVirtualListProps> = ({
  items,
  activeItemId,
  handleItemClick
}) => {
  const itemData = {
    items,
    activeItemId,
    handleItemClick
  };

  return (
    <VirtualList 
      itemData={itemData}
      itemCount={items.length}
      itemSize={100}
    >
      {Row}
    </VirtualList>
  );
};
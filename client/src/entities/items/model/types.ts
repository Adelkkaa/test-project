export interface IItemListType {
  id: number;
  name: string;
  description: string;
}

export interface IListItemProps extends IItemListType {
  onClick: (id: number) => void;
  isactive: boolean;
}

import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { FunctionComponent, ReactElement } from "react";

interface IVirtualListProps<T> {
  itemData: T;
  itemCount: number;
  itemSize: number;
  children: FunctionComponent<{
    data: T;
    index: number;
    style: React.CSSProperties;
  }>;
}

export const VirtualList = <T,>({
  itemData,
  itemCount,
  itemSize,
  children: Row,
}: IVirtualListProps<T>): ReactElement => {
  return (
    <AutoSizer>
      {({ height, width }: { height: number; width: number }) => (
        <List
          height={height}
          width={width}
          itemCount={itemCount}
          itemSize={itemSize}
          itemData={itemData}
        >
          {Row}
        </List>
      )}
    </AutoSizer>
  );
};
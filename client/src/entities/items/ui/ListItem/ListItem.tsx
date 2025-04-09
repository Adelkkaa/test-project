import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/shared/ui";
import './ListItem.scss';
import { IListItemProps } from "../../model/types";

export const ListItem: React.FC<IListItemProps> = ({
  id,
  name,
  description,
  onClick,
  isactive,
}) => {
  const handleItemClick = () => {
    onClick(id);
  };
  return (
    <li className={isactive ? "list-item active" : "list-item"}>
      <Link to={`/${id}`}>
        <div className={"list-item-actions"}>
          <div>
            ID: <b>{id}</b>
          </div>
          <Button onClick={handleItemClick} disabled={isactive}>
            {isactive ? "Active" : "Set Active"}
          </Button>
        </div>
        <div>{name}</div>
        <div className={"list-item__description"}>{description}</div>
      </Link>
    </li>
  );
};


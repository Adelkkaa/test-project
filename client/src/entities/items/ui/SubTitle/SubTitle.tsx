import { PropsWithChildren } from "react";
import "./SubTitle.scss";

export const SubTitle: React.FC<PropsWithChildren> = ({ children }) => (
    <h2 className={"list-subtitle"}>Active Item ID: {children}</h2>
  );
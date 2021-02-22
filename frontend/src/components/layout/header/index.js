import Nav from "./nav";
import { isEmpty } from "lodash";

export default function Header({ menus, header }) {
  if (isEmpty(menus)) {
    return null;
  }
  //   console.log("HEADER COMP:", menus);
  return (
    <header>
      <Nav headerMenus={menus} header={header}></Nav>
    </header>
  );
}

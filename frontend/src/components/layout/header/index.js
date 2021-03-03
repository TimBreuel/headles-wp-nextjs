import Nav from "./nav";
import { isEmpty } from "lodash";

export default function Header({ header, headerMenus }) {
  console.log("HEADER", headerMenus);
  if (isEmpty(headerMenus)) {
    return null;
  }
  //   console.log("HEADER COMP:", menus);
  return (
    <header>
      <Nav headerMenus={headerMenus} header={header}></Nav>
    </header>
  );
}

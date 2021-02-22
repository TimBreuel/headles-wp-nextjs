import { gql } from "@apollo/client";
import MenuFragment from "./fragments/menus";
import HeaderFooter from "./fragments/headerFooter";

export const GET_MENUS = gql`
  {
   ${HeaderFooter}
  }
  ${MenuFragment}
`;

import { isEmpty, isArray } from "lodash";
import { sanitize } from "../../../utils/miscellaneous";
import Link from "next/link";

export default function Footer({ footer, footerMenus }) {
  console.log("FOOTER", footer, "FOOTER_MENU", footerMenus);
  return (
    <footer className="bg-gray-800 p-6">
      <div class="flex flex-wrap -mx-2 overflow-hidden">
        <div class="my-2 px-2 w-1/3 overflow-hidden sm:w-full lg:w-1/3 xl:w-1/3">
          {
            <div
              dangerouslySetInnerHTML={{ __html: sanitize(footer.sidebarOne) }}
              className="text-gray-300"
            ></div>
          }
        </div>

        <div class="my-2 px-2 w-1/3 overflow-hidden sm:w-full lg:w-1/3 xl:w-1/3">
          {
            <div
              dangerouslySetInnerHTML={{ __html: sanitize(footer.sidebarTwo) }}
              className="text-gray-300"
            ></div>
          }
        </div>

        <div class="my-2 px-2 w-1/3 overflow-hidden sm:w-full lg:w-1/3 xl:w-1/3">
          {!isEmpty(footerMenus) && isArray(footerMenus) ? (
            <ul>
              {footerMenus.map((footerMenu) => {
                return (
                  <li key={footerMenu.node.id}>
                    <Link href={footerMenu.node.path}>
                      <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        {footerMenu.node.label}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      </div>
      <div className="text-gray-300 text-center mt-6">
        {footer.copyrightText ? footer.copyrightText : "CodeCandy 2021"}{" "}
        <div>{footer.so}</div>
      </div>
    </footer>
  );
}
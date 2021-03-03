import Footer from "./footer";
import Header from "./header";
import Head from "next/head";
import Seo from "../seo";
import { isEmpty } from "lodash";
import { sanitize } from "../../utils/miscellaneous";

const Layout = ({ data, children }) => {
  //console.log("LAYOUT COMP:", data);

  if (isEmpty(data.page)) {
    return null;
  }

  const { page, header, footer, headerMenus, footerMenus } = data || {};
  return (
    <div>
      <Seo seo={page.seo} uri={page.uri}></Seo>
      <Head>
        <link rel="shortcut icon" href={header.favicon}></link>
        {page.seo.schemaDetails && (
          <script
            type="application/ld+json"
            className="yoast-schema-graph"
            key="yoastSchema"
            dangerouslySetInnerHTML={{
              __html: sanitize(page.seo.schemaDetails),
            }}
          />
        )}
      </Head>
      <Header header={header} headerMenus={headerMenus}></Header>
      <div className="h-almost-screen">{children}</div>
      <Footer footer={footer} footerMenus={footerMenus}></Footer>
    </div>
  );
};

export default Layout;

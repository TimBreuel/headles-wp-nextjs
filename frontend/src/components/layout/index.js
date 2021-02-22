import Footer from "./footer";
import Header from "./header";
import Head from "next/head";
const Layout = ({ data, children }) => {
  //console.log("LAYOUT COMP:", data);
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href={data.header.favicon}></link>
      </Head>
      <Header header={data.header} menus={data.wpMenus.headerMenus}></Header>
      {children}
      <Footer
        footer={data.footer}
        footerMenus={data.wpMenus.footerMenus}
      ></Footer>
    </div>
  );
};

export default Layout;

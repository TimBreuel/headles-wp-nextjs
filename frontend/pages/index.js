import Head from "next/head";
import { GET_MENUS } from "../src/queries/get-menus.js";
import client from "../src/apollo/client";
import Layout from "../src/components/layout/index";

export default function Home({ data }) {
  return (
    <div>
      <Layout data={data}></Layout>
    </div>
  );
}

export async function getStaticProps(context) {
  const { data, loading, networkStatus } = await client.query({
    query: GET_MENUS,
  });

  //console.log("dataFetch", data);
  return {
    props: {
      data: {
        header: data.header || [],
        wpMenus: {
          headerMenus: data.headerMenus.edges,
          footerMenus: data.footerMenus.edges,
        },
        footer: data.footer || [],
      },
    }, // will be passed to the page component as props
    revalidate: 1, //in with time next create a new updated static version
  };
}

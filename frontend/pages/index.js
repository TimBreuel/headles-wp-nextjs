import Head from "next/head";
import { GET_MENUS } from "../src/queries/get-menus.js";
import client from "../src/apollo/client";
import Layout from "../src/components/layout/index";
import { GET_PAGE } from "../src/queries/pages/get-page";
import { handleRedirectsAndRerturnData } from "../src/utils/slugs.js";

export default function Home({ data }) {
  return (
    <div>
      <Layout data={data}></Layout>
    </div>
  );
}

export async function getStaticProps() {
  const { data, errors } = await client.query({
    query: GET_PAGE,
    variables: {
      uri: "/",
    },
  });

  //console.log("dataFetch", data);
  const defaultProps = {
    props: {
      data: data || {},
    }, // will be passed to the page component as props
    revalidate: 1, //in with time next create a new updated static version
  };

  return handleRedirectsAndRerturnData(defaultProps, data, errors, "page");
}

// {
//   header: data.header || [],
//   wpMenus: {
//     headerMenus: data.headerMenus.edges,
//     footerMenus: data.footerMenus.edges,
//   },
//   footer: data.footer || [],
// },

import { GET_PAGES_URI } from "../src/queries/pages/get-pages";
import { isEmpty } from "lodash";
import { GET_PAGE } from "../src/queries/pages/get-page";
import { useRouter } from "next/router";
import client from "../src/apollo/client";

const Pages = ({ data }) => {
  console.log("DATA PAGES:", data);
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return <div>{data.page.title}</div>;
};

export default Pages;

export const getStaticProps = async ({ params }) => {
  const { data } = await client.query({
    query: GET_PAGE,
    variables: {
      uri: params.slug.join("/"),
    },
  });
  console.log("GET STATIC DATA", data);
  return {
    props: {
      data: data,
    },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: GET_PAGES_URI,
  });

  const pathsData = [];

  data.pages.nodes &&
    data.pages.nodes.map((page) => {
      if (!isEmpty(page.uri)) {
        const slugs = page.uri.split("/").filter((pageSlug) => pageSlug);
        pathsData.push({ params: { slug: slugs } });
      }
    });

  return {
    paths: pathsData,
    fallback: true,
  };
};
/**
 * Since the page name uses catch-all routes,
 * for example [...slug],
 * that's why params would contain slug which is an array.
 * For example, If we need to have dynamic route '/foo/bar'
 * Then we would add paths: [ params: { slug: ['foo', 'bar'] } } ]
 * Here slug will be an array is ['foo', 'bar'], then Next.js will statically generate the page at /foo/bar
 *
 * At build time next js will will make an api call get the data and
 * generate a page bar.js inside .next/foo directory, so when the page is served on browser
 * data is already present, unlike getInitialProps which gets the page at build time but makes an api
 * call after page is served on the browser.
 *
 * @see https://nextjs.org/docs/basic-features/data-fetching#the-paths-key-required
 *
 * @returns {Promise<{paths: [], fallback: boolean}>}
 */

// {
//     menus: {
//       headerMenus: data.wpMenus.headerMenus.edges || [],
//       footerMenus: data.wpMenus.footerMenus.edges || [],
//     },
//     page: data.page ?? {},
//     path: params.slug.join("/"),
//   },
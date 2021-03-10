import { isEmpty } from "lodash";

export const FALLBACK = "blocking";
export const PAGES_COUNT = 10;

export const isCustomPageUri = (uri) => {
  const pagesToExclude = ["/"];
  return pagesToExclude.includes(uri);
};

export const handleRedirectsAndRerturnData = (
  defaultProps,
  data,
  errors,
  field,
  isPreview = false,
  loginRedirectURL = ""
) => {
  // console.log("HANDLE404: ", data);
  if (isPreview && null === data[field]) {
    return {
      redirect: {
        destination: loginRedirectURL || "/",
        statusCode: 307,
      },
    };
  }

  if (field && isEmpty(data[field])) {
    //console.log("FIELD", data[filed]);
    //returns the default 404 page with a status code of 404
    return {
      notFound: true,
    };
  }

  return defaultProps;
};

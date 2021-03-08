import { isEmpty } from "lodash";

export const isCustomPageUri = (uri) => {
  const pagesToExclude = ["/"];
  return pagesToExclude.includes(uri);
};

export const handleRedirectsAndRerturnData = (
  defaultProps,
  data,
  errors,
  field
) => {
  // console.log("HANDLE404: ", data);
  if (isEmpty(data)) {
    return {
      redirect: {
        destination: "/503",
        statusCode: 301,
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

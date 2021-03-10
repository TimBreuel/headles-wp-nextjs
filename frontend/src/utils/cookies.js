import cookie from "cookie";

export function parseCookie(req) {
  return cookie.parse(req ? req.headers.cookie : "");
}

export function getAuthToken(req) {
  const cookies = parseCookie(req);
  return cookies["auth"] || "";
}

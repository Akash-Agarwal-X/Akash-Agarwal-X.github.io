/** Prefix with CRA PUBLIC_URL when the site is served from a subpath (e.g. GitHub project pages). */
export function publicAsset(pathname) {
  const base = (process.env.PUBLIC_URL || "").replace(/\/$/, "");
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}${path}`;
}

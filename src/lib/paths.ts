const rawBase = import.meta.env.BASE_URL;
const basePath = rawBase === "/" ? "" : rawBase.replace(/\/$/, "");

export function pathWithBase(path: string) {
  if (/^(https?:)?\/\//.test(path) || path.startsWith("#")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (normalizedPath === "/") {
    return basePath ? `${basePath}/` : "/";
  }

  return `${basePath}${normalizedPath}`;
}

export function pathWithoutBase(pathname: string) {
  const withoutBase = basePath && pathname.startsWith(basePath)
    ? pathname.slice(basePath.length)
    : pathname;

  const normalizedPath = withoutBase || "/";
  return normalizedPath !== "/" && normalizedPath.endsWith("/")
    ? normalizedPath.slice(0, -1)
    : normalizedPath;
}

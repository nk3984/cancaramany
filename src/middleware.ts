import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale, locales } from "@/i18n/config";

const gatedDocumentPaths = new Set([
  "/documents/Can-Caramany-Konzept-Dossier.pdf",
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (gatedDocumentPaths.has(pathname)) {
    return new NextResponse("Not Found", { status: 404 });
  }

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const segment = pathname.split("/")[1];
  if (isLocale(segment)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname =
    pathname === "/"
      ? `/${defaultLocale}`
      : `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images|api).*)",
    "/documents/:path*",
  ],
};

// Ensure locales stay referenced for tooling
void locales;

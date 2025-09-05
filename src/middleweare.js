
// copy this code from repitation folder
import { NextResponse } from "next/server";

export default async function middleware(request) {
	const cookie = request.cookies.get("AuthToken");

	if (!cookie) {
		return NextResponse.redirect(new URL("/login", request.url));
	}
}

export const config = {
	matcher: ["/dashboard/:path*"]
};





import axios from "axios";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith("/collections")) {
        // extract the id from the URL
        // console.log("Middleware run");
        const id = request.nextUrl.pathname.split("/")[2];

        const checkCollection = async () => {
            try {
                const response = await fetch(`${process.env.API_URL}/collections/${id}`);
                if (response.status !== 200) throw new Error("Collection not found");
                return NextResponse.next();
            } catch (error) {
                return NextResponse.error();
            }
        };

        return checkCollection();
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: "/collections/:collectionId*",
};

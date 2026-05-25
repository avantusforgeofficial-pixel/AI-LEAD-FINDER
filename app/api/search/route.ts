import { NextResponse } from "next/server";
import { filterLeads } from "@/lib/mock-data";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const query = url.searchParams.get("query") ?? "";
  const filters = {
    country: url.searchParams.get("country") ?? "All",
    industry: url.searchParams.get("industry") ?? "All",
    size: url.searchParams.get("size") ?? "All",
    quality: url.searchParams.get("quality") ?? "All",
    hiring: url.searchParams.get("hiring") ?? "All",
  };

  return NextResponse.json(filterLeads(query, filters));
}

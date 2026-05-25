import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { leadId } = body;

  return NextResponse.json({ success: true, leadId, message: `Lead ${leadId} saved to favorites.` });
}

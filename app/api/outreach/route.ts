import { NextResponse } from "next/server";

const templates: Record<string, string> = {
  email: "Subject: Hi {{name}}, let’s scale your growth pipeline\n\nHi {{name}},\n\nI noticed {{company}} is investing in {{signal}}. We help teams like yours convert that momentum into more qualified meetings with a proven outreach cadence.\n\nWould you be open to a quick 15-minute call this week?\n\nBest,\nAI Lead Finder",
  linkedin: "Hi {{name}}, I’m impressed by {{company}}’s recent activity around {{signal}}. I’d love to share a concise strategy for turning that interest into tangible sales pipeline growth.",
  whatsapp: "Hey {{name}}! I saw {{company}} is actively hiring and expanding. We help teams convert that energy into high-converting outreach and faster lead follow-up.",
};

export async function POST(request: Request) {
  const body = await request.json();
  const { leadId, channel, tone } = body;
  const generated = templates[channel] ?? templates.email;

  return NextResponse.json({
    leadId,
    channel,
    tone,
    message: generated.replace("{{name}}", "Team").replace("{{company}}", "your company").replace("{{signal}}", tone || "recent signals"),
  });
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { generateOutreach } from "@/lib/api";

const channels = ["email", "linkedin", "whatsapp"];
const tones = ["casual", "professional", "growth-focused"];

export default function OutreachPage() {
  const [leadId, setLeadId] = useState("1");
  const [channel, setChannel] = useState("email");
  const [tone, setTone] = useState("professional");
  const [result, setResult] = useState<string>("");
  const [working, setWorking] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setWorking(true);
    const response = await generateOutreach({ leadId, channel, tone });
    setResult(response.message);
    setWorking(false);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">AI Outreach</p>
          <h1 className="mt-3 text-3xl font-semibold text-white">Generate cold messages instantly</h1>
          <p className="mt-4 text-slate-300">Create email, LinkedIn, and WhatsApp templates with a premium content assistant.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="glass-panel rounded-[2rem] border border-white/10 p-6">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">Lead ID</label>
                <Input value={leadId} onChange={(event) => setLeadId(event.target.value)} placeholder="1" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">Channel</label>
                <Select value={channel} onChange={(event) => setChannel(event.target.value)}>
                  {channels.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">Tone</label>
                <Select value={tone} onChange={(event) => setTone(event.target.value)}>
                  {tones.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </div>
              <Button type="submit" className="w-full" disabled={working}>
                {working ? "Generating..." : "Generate message"}
              </Button>
            </form>
          </div>
          <div className="glass-panel rounded-[2rem] border border-white/10 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Generated template</p>
            <Textarea readOnly value={result || "Your personalized outreach message will appear here."} />
          </div>
        </div>
      </div>
    </main>
  );
}

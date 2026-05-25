import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md rounded-[2rem] border border-white/10 bg-slate-900/85 p-10 shadow-glow backdrop-blur-xl">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Create account</p>
          <h1 className="mt-3 text-3xl font-semibold text-white">Sign up for AI Lead Finder</h1>
        </div>
        <form className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">Name</label>
            <Input type="text" placeholder="Your name" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">Email</label>
            <Input type="email" placeholder="team@company.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">Password</label>
            <Input type="password" placeholder="Create a password" />
          </div>
          <Button type="submit" className="w-full">Create account</Button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-400">
          Already have an account? <Link href="/auth/login" className="text-white hover:text-accent">Log in</Link>
        </p>
      </div>
    </main>
  );
}

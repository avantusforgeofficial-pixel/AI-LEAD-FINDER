'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, TrendingUp, Users, MessageSquare } from 'lucide-react';
import Button from '@/components/Button';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950/20 to-gray-950">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Zap size={20} className="text-white" />
          </div>
          <span className="font-bold text-lg">LeadFinder</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/auth/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/auth/register">
            <Button variant="primary">Sign Up</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Find Your Next Best Lead with <span className="text-blue-400">AI</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Discover high-quality leads, generate personalized outreach messages, and manage your entire sales pipeline with AI-powered intelligence.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/auth/register">
            <Button variant="primary" size="lg">
              Get Started Free
              <ArrowRight size={20} />
            </Button>
          </Link>
          <Button variant="secondary" size="lg">
            Watch Demo
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            {
              icon: Users,
              title: 'Smart Lead Discovery',
              description: 'AI-powered search finds the most relevant leads for your business',
            },
            {
              icon: MessageSquare,
              title: 'AI Outreach',
              description: 'Generate personalized messages that convert with AI assistance',
            },
            {
              icon: TrendingUp,
              title: 'Pipeline Management',
              description: 'Organize and track leads through your sales pipeline',
            },
          ].map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-gray-900/50 backdrop-blur-md border border-gray-800 rounded-lg p-8 text-left hover:border-gray-700 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-blue-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
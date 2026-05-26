'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { mockLeads } from '@/lib/leads';
import { outreachTemplates, generateSubject, generateOutreachMessage } from '@/lib/outreach';
import { Send, Copy, RefreshCw } from 'lucide-react';

const OutreachPage: React.FC = () => {
  const [selectedTemplateId, setSelectedTemplateId] = useState(outreachTemplates[0].id);
  const [selectedLeadId, setSelectedLeadId] = useState(mockLeads[0].id);
  const [variables, setVariables] = useState<Record<string, string>>({
    first_name: 'John',
    company_name: 'Acme Corp',
    industry: 'Technology',
    sender_name: 'You',
  });
  const [generatedSubject, setGeneratedSubject] = useState('');
  const [generatedMessage, setGeneratedMessage] = useState('');

  const template = outreachTemplates.find((t) => t.id === selectedTemplateId);
  const lead = mockLeads.find((l) => l.id === selectedLeadId);

  const handleGenerateMessage = async () => {
    if (!template) return;
    try {
      const subject = await generateSubject(selectedTemplateId, {
        ...variables,
        first_name: lead?.name.split(' ')[0] || variables.first_name,
        company_name: lead?.company || variables.company_name,
        industry: lead?.industry || variables.industry,
      });
      const message = await generateOutreachMessage(selectedTemplateId, {
        ...variables,
        first_name: lead?.name.split(' ')[0] || variables.first_name,
        company_name: lead?.company || variables.company_name,
        industry: lead?.industry || variables.industry,
      });
      setGeneratedSubject(subject);
      setGeneratedMessage(message);
    } catch (error) {
      console.error('Failed to generate message:', error);
    }
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generatedMessage);
  };

  return (
    <div className="flex bg-gray-950">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header title="AI Outreach" subtitle="Generate personalized messages with AI" />

        <div className="p-6 max-w-6xl mx-auto space-y-6">
          {/* Selection Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Template Selection */}
            <Card variant="glass" className="p-6 space-y-4">
              <h2 className="text-lg font-bold">Select Template</h2>
              <div className="space-y-2">
                {outreachTemplates.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTemplateId(t.id)}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      selectedTemplateId === t.id
                        ? 'bg-blue-600/20 border-blue-600'
                        : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <p className="font-medium">{t.name}</p>
                    <p className="text-sm text-gray-400 mt-1">{t.subject}</p>
                  </button>
                ))}
              </div>
            </Card>

            {/* Lead Selection */}
            <Card variant="glass" className="p-6 space-y-4">
              <h2 className="text-lg font-bold">Select Lead</h2>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {mockLeads.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => setSelectedLeadId(l.id)}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      selectedLeadId === l.id
                        ? 'bg-blue-600/20 border-blue-600'
                        : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <p className="font-medium">{l.name}</p>
                    <p className="text-sm text-gray-400">{l.company}</p>
                  </button>
                ))}
              </div>
            </Card>
          </div>

          {/* Template Preview */}
          {template && (
            <Card variant="glass" className="p-6 space-y-4">
              <h2 className="text-lg font-bold">Template Preview</h2>
              <div className="bg-gray-800/50 rounded-lg p-4 space-y-3">
                <div>
                  <p className="text-gray-400 text-sm">Subject:</p>
                  <p className="text-white font-mono text-sm">{template.subject}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Variables: {template.variables.join(', ')}</p>
                </div>
              </div>
            </Card>
          )}

          {/* Generate Button */}
          <Button
            variant="primary"
            size="lg"
            onClick={handleGenerateMessage}
            className="w-full flex items-center justify-center gap-2"
          >
            <RefreshCw size={20} />
            Generate Personalized Message
          </Button>

          {/* Generated Message */}
          {generatedMessage && (
            <div className="grid md:grid-cols-2 gap-6">
              <Card variant="glass" className="p-6 space-y-4">
                <h2 className="text-lg font-bold">Subject Line</h2>
                <div className="bg-gray-800/50 rounded-lg p-4 text-white font-mono text-sm break-words">
                  {generatedSubject}
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleCopyMessage}
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Copy size={16} />
                  Copy Subject
                </Button>
              </Card>

              <Card variant="glass" className="p-6 space-y-4">
                <h2 className="text-lg font-bold">Message Body</h2>
                <div className="bg-gray-800/50 rounded-lg p-4 text-white text-sm whitespace-pre-wrap break-words max-h-64 overflow-y-auto">
                  {generatedMessage}
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleCopyMessage}
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Copy size={16} />
                  Copy Message
                </Button>
              </Card>
            </div>
          )}

          {/* Send Options */}
          {generatedMessage && (
            <Card variant="glass" className="p-6 space-y-4">
              <h2 className="text-lg font-bold">Send Options</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Button variant="primary" className="flex items-center justify-center gap-2">
                  <Send size={18} />
                  Send Email
                </Button>
                <Button variant="secondary" className="flex items-center justify-center gap-2">
                  <Copy size={18} />
                  Copy to Clipboard
                </Button>
                <Button variant="ghost" className="flex items-center justify-center gap-2">
                  <RefreshCw size={18} />
                  Regenerate
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default OutreachPage;
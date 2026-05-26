import { OutreachTemplate } from '@/types/index';

export const outreachTemplates: OutreachTemplate[] = [
  {
    id: '1',
    name: 'Initial Outreach',
    subject: 'Quick question about {{company_name}}',
    body: `Hi {{first_name}},

I noticed {{company_name}} is doing some interesting work in {{industry}}. I thought you might be interested in how companies like yours are using AI to streamline {{department}} operations.

Would you be open to a quick 15-minute conversation?

Best regards,
{{sender_name}}`,
    variables: ['first_name', 'company_name', 'industry', 'department', 'sender_name'],
    createdAt: new Date('2026-05-20'),
  },
  {
    id: '2',
    name: 'Value Proposition',
    subject: '{{company_name}} - {{percent}}% efficiency gain opportunity',
    body: `Hi {{first_name}},

Based on your company profile, we've helped similar organizations in {{industry}} achieve a {{percent}}% improvement in {{metric}}.

I'd love to explore if this could be relevant for {{company_name}}.

Are you free for a 20-minute call next {{day}}?

Regards,
{{sender_name}}`,
    variables: ['first_name', 'company_name', 'industry', 'percent', 'metric', 'day', 'sender_name'],
    createdAt: new Date('2026-05-20'),
  },
  {
    id: '3',
    name: 'Referral Follow-up',
    subject: '{{referrer_name}} suggested we connect',
    body: `Hi {{first_name}},

{{referrer_name}} recently recommended I reach out to you. They mentioned {{company_name}} might benefit from {{solution}}.

I'd be happy to share more context and see if it makes sense to chat.

Best,
{{sender_name}}`,
    variables: ['first_name', 'referrer_name', 'company_name', 'solution', 'sender_name'],
    createdAt: new Date('2026-05-20'),
  },
];

// AI-powered message generation (mock)
export async function generateOutreachMessage(
  templateId: string,
  variables: Record<string, string>
): Promise<string> {
  const template = outreachTemplates.find(t => t.id === templateId);
  if (!template) throw new Error('Template not found');

  let body = template.body;
  Object.entries(variables).forEach(([key, value]) => {
    const pattern = new RegExp(`{{${key}}}`, 'g');
    body = body.replace(pattern, value);
  });

  return body;
}

// Generate subject line with template variables
export async function generateSubject(
  templateId: string,
  variables: Record<string, string>
): Promise<string> {
  const template = outreachTemplates.find(t => t.id === templateId);
  if (!template) throw new Error('Template not found');

  let subject = template.subject;
  Object.entries(variables).forEach(([key, value]) => {
    const pattern = new RegExp(`{{${key}}}`, 'g');
    subject = subject.replace(pattern, value);
  });

  return subject;
}

import { Lead, DashboardStats } from '@/types/index';

// Mock leads data
export const mockLeads: Lead[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@techcorp.com',
    company: 'TechCorp Inc',
    title: 'VP of Sales',
    phone: '+1-555-0101',
    website: 'techcorp.com',
    industry: 'Technology',
    companySize: '500-1000',
    location: 'San Francisco, CA',
    linkedinUrl: 'linkedin.com/in/johnsmith',
    score: 92,
    status: 'new',
    source: 'LinkedIn',
    tags: ['enterprise', 'sales', 'hot'],
    notes: 'Highly interested in AI solutions',
    savedAt: new Date('2026-05-20'),
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.j@innovateai.io',
    company: 'InnovateAI',
    title: 'CTO',
    phone: '+1-555-0102',
    website: 'innovateai.io',
    industry: 'Artificial Intelligence',
    companySize: '50-100',
    location: 'Austin, TX',
    linkedinUrl: 'linkedin.com/in/sarahjohnson',
    score: 88,
    status: 'contacted',
    source: 'API',
    tags: ['startup', 'tech', 'interested'],
    notes: 'Follow up next week',
    savedAt: new Date('2026-05-19'),
    lastContacted: new Date('2026-05-25'),
  },
  {
    id: '3',
    name: 'Michael Chen',
    email: 'mchen@globalsystems.com',
    company: 'Global Systems Ltd',
    title: 'Head of IT',
    phone: '+1-555-0103',
    website: 'globalsystems.com',
    industry: 'Enterprise Software',
    companySize: '1000+',
    location: 'New York, NY',
    linkedinUrl: 'linkedin.com/in/michaelchen',
    score: 85,
    status: 'interested',
    source: 'Direct',
    tags: ['enterprise', 'it', 'qualified'],
    notes: 'Budget approved for Q3',
    savedAt: new Date('2026-05-18'),
    lastContacted: new Date('2026-05-24'),
  },
  {
    id: '4',
    name: 'Emily Rodriguez',
    email: 'emily@startupventure.co',
    company: 'StartupVenture',
    title: 'Founder & CEO',
    phone: '+1-555-0104',
    website: 'startupventure.co',
    industry: 'SaaS',
    companySize: '10-50',
    location: 'Los Angeles, CA',
    linkedinUrl: 'linkedin.com/in/emilyrodriguez',
    score: 79,
    status: 'new',
    source: 'Referral',
    tags: ['startup', 'saas'],
    notes: 'Referred by Alex Wilson',
    savedAt: new Date('2026-05-21'),
  },
  {
    id: '5',
    name: 'David Kim',
    email: 'dkim@financeplus.com',
    company: 'FinancePlus',
    title: 'VP Operations',
    phone: '+1-555-0105',
    website: 'financeplus.com',
    industry: 'Financial Services',
    companySize: '200-500',
    location: 'Chicago, IL',
    linkedinUrl: 'linkedin.com/in/davidkim',
    score: 82,
    status: 'lost',
    source: 'Email',
    tags: ['enterprise', 'finance'],
    notes: 'Budget constraints mentioned',
    savedAt: new Date('2026-05-17'),
    lastContacted: new Date('2026-05-23'),
  },
];

// Filter helpers
export function filterLeads(leads: Lead[], filters: {
  query?: string;
  industry?: string[];
  status?: string[];
  minScore?: number;
  maxScore?: number;
}): Lead[] {
  return leads.filter(lead => {
    if (filters.query) {
      const q = filters.query.toLowerCase();
      const matches = lead.name.toLowerCase().includes(q) ||
        lead.email.toLowerCase().includes(q) ||
        lead.company.toLowerCase().includes(q);
      if (!matches) return false;
    }

    if (filters.industry?.length && !filters.industry.includes(lead.industry)) {
      return false;
    }

    if (filters.status?.length && !filters.status.includes(lead.status)) {
      return false;
    }

    if (filters.minScore !== undefined && lead.score < filters.minScore) {
      return false;
    }

    if (filters.maxScore !== undefined && lead.score > filters.maxScore) {
      return false;
    }

    return true;
  });
}

// Calculate dashboard stats
export function calculateStats(leads: Lead[]): DashboardStats {
  return {
    totalLeads: leads.length,
    contactedLeads: leads.filter(l => l.status !== 'new').length,
    interestedLeads: leads.filter(l => l.status === 'interested').length,
    conversionRate: leads.length > 0
      ? Math.round((leads.filter(l => l.status === 'interested').length / leads.length) * 100)
      : 0,
    avgScore: leads.length > 0
      ? Math.round(leads.reduce((sum, l) => sum + l.score, 0) / leads.length)
      : 0,
  };
}

// Get unique industries
export function getIndustries(leads: Lead[]): string[] {
  return Array.from(new Set(leads.map(l => l.industry))).sort();
}

// Get unique company sizes
export function getCompanySizes(leads: Lead[]): string[] {
  return Array.from(new Set(leads.map(l => l.companySize))).sort();
}

// Get unique locations
export function getLocations(leads: Lead[]): string[] {
  return Array.from(new Set(leads.map(l => l.location))).sort();
}

# AI-LEAD-FINDER

AI Lead Finder is a lead generation engine scaffold designed to parse user queries, build structured lead search results, and prepare enriched lead data for CRM export.

## Project Structure

- `src/types.ts` — core lead data schema and search result types.
- `src/parser.ts` — query parser for industry, location, and optional filters.
- `src/lead-generator.ts` — generation pipeline, scoring logic, and result builder.
- `src/data-source.ts` — sample lead records and query filtering logic.
- `src/cli.ts` — CLI entrypoint for running queries and printing JSON output.

## Sample data

The current implementation includes a local sample dataset in `src/data-source.ts`.
This dataset is meant to demonstrate enrichment and query filtering while the real lead source connector is built.

## Quick Start

Install dependencies:

```bash
npm install
```

Run the CLI with a sample query:

```bash
npm run start -- "Find IT companies in Germany"
```

## Output Format

The output is a strict JSON object with this shape:

```json
{
  "query": "",
  "total_leads": 0,
  "leads": [
    {
      "business_name": "",
      "industry": "",
      "location": "",
      "website": null,
      "email": null,
      "phone": null,
      "socials": {
        "linkedin": null,
        "instagram": null
      },
      "company_size": "Unknown",
      "activity_status": "Unknown",
      "intent_signals": [],
      "lead_score": 0,
      "lead_category": "COLD"
    }
  ]
}
```

## Next Steps

- Connect `src/lead-generator.ts` to real data sources.
- Implement business record extraction and contact enrichment.
- Add outreach template generation and lead ranking improvements.

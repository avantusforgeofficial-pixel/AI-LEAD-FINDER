import { generateLeadsForQuery } from "./lead-generator";

async function run(): Promise<void> {
  const query = process.argv.slice(2).join(" ").trim();
  if (!query) {
    console.error("Usage: npm run start -- \"Find IT companies in Germany\"");
    process.exit(1);
  }

  const result = await generateLeadsForQuery(query);
  process.stdout.write(JSON.stringify(result, null, 2));
}

run().catch((error) => {
  console.error("Lead generation failed:", error);
  process.exit(1);
});

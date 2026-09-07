const fs = require("fs");
const { loadEnvConfig } = require("@next/env");

loadEnvConfig(process.cwd());

const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

console.log("length:", token.length);
console.log("starts_pk:", token.startsWith("pk."));
console.log("has_whitespace:", /\s/.test(token));

const raw = fs.readFileSync(".env.local", "utf8");
const line = raw.split(/\r?\n/).find((entry) => entry.includes("MAPBOX"));
if (line) {
  const value = line.slice(line.indexOf("=") + 1);
  console.log("raw_value_length:", value.length);
  console.log("raw_trim_needed:", value !== value.trim());
}

async function main() {
  if (!token) {
    console.log("style_status: no_token");
    return;
  }

  const styleRes = await fetch(
    `https://api.mapbox.com/styles/v1/mapbox/light-v11?access_token=${encodeURIComponent(token)}`,
  );
  console.log("style_status:", styleRes.status);

  const tileRes = await fetch(
    `https://api.mapbox.com/v4/mapbox.mapbox-streets-v8/3/4/5.vector.pbf?access_token=${encodeURIComponent(token)}`,
  );
  console.log("tile_status:", tileRes.status);
}

main().catch((error) => {
  console.log("fetch_error:", error.message);
});

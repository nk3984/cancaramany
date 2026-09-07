const { loadEnvConfig } = require("@next/env");

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

console.log("exists:", Boolean(token));
console.log("prefix:", token ? token.slice(0, 3) : "(none)");

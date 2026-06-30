export default {
  preset: process.env.NITRO_PRESET || (process.env.VERCEL === "1" ? "vercel" : "cloudflare_pages"),
};

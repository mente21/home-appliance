export default {
  presets: [process.env.VERCEL === "1" ? "vercel" : "cloudflare_pages"],
};

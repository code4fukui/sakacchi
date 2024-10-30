import { canvas2jpeg } from "https://code4fukui.github.io/uranaukagami/static/canvas2jpeg.js";
import { fetchCBOR } from "https://code4fukui.github.io/wsutil/fetchCBOR.js";

export const analyzeImage = async (canvasElement, prompt) => {
  const imgbin = canvas2jpeg(canvasElement, 600);
  const param = { imgbin, prompt };
  const res = await fetchCBOR("/api/imagerecog", param);
  return parseJSON(res);
};

export const parseJSON = (s) => {
  const n = s.indexOf("```json\n");
  if (n < 0) return s;
  const m = s.indexOf("\n```", n + 8);
  if (m < 0) return s;
  const s2 = s.substring(n + 8, m);
  return JSON.parse(s2);
};

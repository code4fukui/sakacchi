import { canvas2jpeg } from "https://code4fukui.github.io/uranaukagami/static/canvas2jpeg.js";
import { fetchCBOR } from "https://code4fukui.github.io/wsutil/fetchCBOR.js";

export const analyzeImage = async (canvasElement, prompt) => {
  const imgbin = canvas2jpeg(canvasElement, 600);
  const param = { imgbin, prompt };
  const res = await fetchCBOR("/api/imagerecog", param);
  return res;
};




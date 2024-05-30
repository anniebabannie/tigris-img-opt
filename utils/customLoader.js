export default function customLoader({ src, width, quality }) {
  const s = src;
  const w = width ? `?width=${width}` : '';
  const q = quality ? `&quality=${quality}` : '';
  return `https://cachefly-tigris.internal/${s}${w}${q}`;
}
export default function customLoader({ src, width, quality }) {
  return `https://cachefly-tigris.fly.dev/${src}${width ? `?width=${width}` : ''}${quality ? `&quality=${quality}` : ''}`;
}
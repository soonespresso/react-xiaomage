/* export function getImageBySizes(url, size) {
  return url + `?param=${size}y${size}`;
} */

function formatPrice(price) {
  if (typeof price !== 'number') {
    price = Number(price) || 0;
  }
  return `￥ ${price.toFixed(2)}`;
}
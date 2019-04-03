export default function limit(arr) {
  return length => arr.filter((_, i) => i <= length);
}

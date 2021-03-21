export function validateTextLength(text, min, max) {
  return text.length > min && text.length <= max;
}

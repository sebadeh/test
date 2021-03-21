export function formatCase(word: string) {
  let result = word.replace(/([A-Z])/g, " $1");
  let formattedWord = result.charAt(0).toUpperCase() + result.slice(1);
  return formattedWord;
}

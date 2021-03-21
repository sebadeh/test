export function validateNumber(value: any) {
  console.log(value, parseInt(value) > 0);
  return parseInt(value) > 0;
}

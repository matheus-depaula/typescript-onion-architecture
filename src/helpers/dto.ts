export function dtoHasSufficientProperties(dto: object): boolean {
  return Object.keys(dto).filter(e => e !== undefined).length > 1;
}

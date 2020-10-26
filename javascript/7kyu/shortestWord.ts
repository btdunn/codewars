export function findShort(s: string): number {
  let words: string[] = s.split(' ')
  let shortest = words.reduce((shorty, current) => {
    return shorty.length < current.length ? shorty : current;
  })
  return shortest.length
}
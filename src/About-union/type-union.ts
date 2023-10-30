function additionOrContact(x: number | string, y: number | string) {
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y;
  }
  return `${x}${y}`;
}

console.log(additionOrContact('10', '20'));

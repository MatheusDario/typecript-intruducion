const objectA: {
  key: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  key: 'firstKey',
  keyB: 'secondKey',
};

objectA.key = 'I change value';
objectA.keyC = 'thirdKey';
objectA.keyD = 'anotherValue';

console.log(objectA);

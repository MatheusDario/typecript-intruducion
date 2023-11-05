const colorsObj = {
  vermelho: 'red',
  verde: 'green',
  preto: 'black',
};

type ColorsObj = typeof colorsObj;
type ColorsKeys = keyof ColorsObj;

function translateColors(cor: ColorsKeys, cores: ColorsObj): string {
  return cores[cor];
}

console.log(translateColors('preto', colorsObj));

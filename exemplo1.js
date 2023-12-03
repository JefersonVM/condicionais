const temIngresso = true;
const censura = 16;
const idade = 18;

if (temIngresso) {
  if (idade >= censura) {
    console.log("Pode entrar");
  } else {
    console.log("Não pode entrar por causa da idade");
  }
} else {
  console.log("Não pode entrar por falta de ingresso");
}

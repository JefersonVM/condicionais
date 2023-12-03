const temIngresso = true;
const censura = 16;
const idade = 16;
const estaComPais = false;

if (temIngresso && idade >= censura || temIngresso && estaComPais) {
    console.log('Pode entrar');
} else {
    console.log('Não pode entrar');
}

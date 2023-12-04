const valorDaCompra = 100;
const numeroDeParcelas = 7;

if (numeroDeParcelas === 1) {
  console.log(
    `Você pagará ${valorDaCompra - 0.1 * valorDaCompra} reais à vista.`
  );
} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
  console.log(
    `Você pagará ${numeroDeParcelas} vezes de ${(
      valorDaCompra / numeroDeParcelas
    ).toFixed(2)} reais.`
  );
} else if (numeroDeParcelas > 6 && numeroDeParcelas <= 12) {
  console.log(
    `Você pagará ${numeroDeParcelas} vezes de ${(
      valorDaCompra / numeroDeParcelas +
      0.01 * valorDaCompra
    ).toFixed(2)} reais com juros de 0.01% ao mês.`
  );
} else {
  console.log("Número de parcelas inválido.");
}

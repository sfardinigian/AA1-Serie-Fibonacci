function mostrarNumero() {
  const valor = parseInt(document.getElementById("numero").value);

  if (isNaN(valor) || valor < 0) {
    document.getElementById("resultado").textContent = "Error... Ingresa un número válido (0 o mayor).";
    return;
  }

  const resultado = fibonacci(valor);
  document.getElementById("resultado").textContent = "El resultado del número de su serie Fibonacci es: " + resultado;
}

function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0, b = 1, temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}
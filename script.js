document.addEventListener('DOMContentLoaded', () => {
  // Seleção de elementos
  const btnAcess = document.getElementById('botao-acessibilidade');
  const opcsAcess = document.getElementById('opcoes-acessibilidade');
  const btnAument = document.getElementById('aumentar-fonte');
  const btnDiminuir = document.getElementById('diminuir-fonte');
  let tam = 1;

  // Função para alternar visibilidade das opções de acessibilidade
  btnAcess.addEventListener('click', () => {
    btnAcess.classList.toggle('rotacao-botao');
    opcsAcess.classList.toggle('apresenta-lista');
  });

  // Função para aumentar o tamanho da fonte
  btnAument.addEventListener('click', () => {
    tam = Math.min(tam + 0.1, 2); // Limita o aumento máximo a 2rem
    document.body.style.fontSize = `${tam}rem`;
  });

  // Função para diminuir o tamanho da fonte
  btnDiminuir.addEventListener('click', () => {
    tam = Math.max(tam - 0.1, 0.8); // Limita a diminuição mínima a 0.8rem
    document.body.style.fontSize = `${tam}rem`;
  });
});

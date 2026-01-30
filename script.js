
const imc = {
    abaixoDoPeso: { faixa: 'Abaixo do peso', mensagem: 'IMC abaixo.', cor: 'info' },
    pesoNormal: { faixa: 'Peso normal', mensagem: 'IMC saudável.', cor: 'sucesso' },
    sobrepeso: { faixa: 'Sobrepeso', mensagem: 'IMC elevado.', cor: 'alerta' },
    obesidadeGrau1: { faixa: 'Obesidade I', mensagem: 'Risco moderado.', cor: 'perigo' },
    obesidadeGrau2: { faixa: 'Obesidade II', mensagem: 'Risco alto.', cor: 'perigo' },
    obesidadeGrau3: { faixa: 'Obesidade III', mensagem: 'Risco crítico.', cor: 'critico' }
  };

function calcularImc(peso, altura) {
    return peso / (altura ** 2);
}

function classificarImc(valorImc) {

    if (valorImc < 18.5) return imc.abaixoDoPeso;
    else if (valorImc >= 18.5 && valorImc < 25) return imc.pesoNormal;
    else if (valorImc >= 25 && valorImc < 30) return imc.sobrepeso;
    else if (valorImc >= 30 && valorImc < 35) return imc.obesidadeGrau1;
    else if (valorImc >= 35 && valorImc < 40) return imc.obesidadeGrau2;
    else if(valorImc >= 40) return imc.obesidadeGrau3;
};


const form = document.querySelector('form');
const pesoInput = document.querySelector('#peso');
const alturaInput = document.querySelector('#altura');
const section = document.querySelector('.container-forms');

form.addEventListener('submit', (event) => {
  const div = document.createElement('div');
  div.innerHTML = '';
  event.preventDefault();

  const peso = Number(pesoInput.value.replace(',', '.'));
  const altura = Number(alturaInput.value.replace(',', '.'));

  if (Number.isNaN(peso) || Number.isNaN(altura) || peso <= 0 || altura <= 0) {
    alert('Peso e altura devem ser números maiores que zero.');
    return;
  }


  const valorImc = calcularImc(peso, altura);
  const resultado = classificarImc(valorImc);

  div.classList.add('resultado', resultado.cor);
  div.innerHTML = `
    <p><strong>IMC:</strong> ${valorImc.toFixed(2)}</p>
    <p><strong>${resultado.faixa}</strong></p>
    <p>${resultado.mensagem}</p>
  `;
  section.appendChild(div);
});


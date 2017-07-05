var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++)
  {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var pesoValido = validaPesoTabela(peso);
    var alturaValida = validaAlturaTabela(altura);

    var imc = calculoImc(peso, altura);
    var tdImc = paciente.querySelector('.info-imc');

    saidaFinalTabela(pesoValido, alturaValida);
  }

function calculoImc(peso, altura)
    {
      var imc = 0;
      imc = peso / (altura * altura);
      return imc.toFixed(2);
    }

function validaPesoTabela(peso)
  {
    pesoValido = true;
    if(peso >= 400 || peso <= 10)
      {
       pesoValido = false;
      }
    return pesoValido;
  }

function validaAlturaTabela(altura)
  {
    alturaValida = true;
    if(altura >= 2.60 || altura <= 0.4)
      {
        alturaValida = false;
      }
    return alturaValida;
  }

function saidaFinalTabela(pesoValido, alturaValida)
  {
    if(!pesoValido)
      tdPeso.textContent = 'Peso inválido.';

    if(!alturaValida)
      tdAltura.textContent = 'Altura inválida.';

    if(pesoValido == false || alturaValida == false)
      {
        tdImc.textContent = 'Dados inválidos.'
        paciente.classList.add('paciente-invalido')
      }
    else tdImc.textContent = imc;
  }

var botaoAdd = document.querySelector('#adicionar-paciente');

botaoAdd.addEventListener('click', function(event){
  event.preventDefault();

  var formulario = document.querySelector('#formulario-add');
  var infoPaciente = obterDadosFormulario(formulario);
  var pacienteTr = montaTr(infoPaciente);

  saidaFormulario(infoPaciente, pacienteTr, formulario);
});

function obterDadosFormulario(formulario)
  {
    var infoPaciente = {
      nome: formulario.nome.value,
      peso: formulario.peso.value,
      altura: formulario.altura.value,
      gordura: formulario.gordura.value,
      imc: calculoImc(formulario.peso.value, formulario.altura.value)
    }
    return infoPaciente;
  }

function montaTr(infoPaciente)
  {
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(infoPaciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(infoPaciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(infoPaciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(infoPaciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(infoPaciente.imc, 'info-imc'));

    return pacienteTr;
  }

function montaTd(dado, classe)
  {
     var td = document.createElement('td');
     td.textContent = dado;
     td.classList.add(classe);

     return td;
  }

function saidaFormulario(infoPaciente, pacienteTr, formulario)
  {
    alturaValida = validaAlturaTabela(infoPaciente.altura);
    pesoValido = validaPesoTabela(infoPaciente.peso);

    var erros = [];

    var mensagemErro = document.querySelector('#mensagemErro');
    retornaErro(infoPaciente, alturaValida, pesoValido, erros);

    if(erros.length <= 0)
      {
        var tabelaPacientes = document.querySelector('#tabela-pacientes');
        tabelaPacientes.appendChild(pacienteTr);
        mensagemErro.innerHTML = '';
        formulario.reset();
      }
    else
      {
        mensagemErro.innerHTML = '';
        erros.forEach(function (nErro)
          {
            var erro = nErro;
            erro = document.createElement('li');
            erro.textContent = nErro;
            mensagemErro.appendChild(erro);
          })
      }
  }

function retornaErro(infoPaciente, alturaValida, pesoValido, erros){
  if(infoPaciente.nome == 0)
    erros.push('É necessário adicionar um nome ao paciente.');
  if(!alturaValida)
    erros.push('Altura inválida.');
  if(!pesoValido)
    erros.push('Peso inválido.');
  if(infoPaciente.gordura == 0)
    erros.push('Adicione um valor de gordura.');
}

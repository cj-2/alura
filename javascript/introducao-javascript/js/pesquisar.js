var pesquisar = document.querySelector('#pesquisar');

pesquisar.addEventListener('input', function (){
  var pacientes = document.querySelectorAll('.paciente');

  if(this.value.length > 0)
    {
      for (var i = 0; i < pacientes.length; i++) {
        paciente = pacientes[i];
        nomeTd = paciente.querySelector('.info-nome');
        nome = nomeTd.textContent;

        var expressao = new RegExp(this.value, 'i');
        if(!expressao.test(nome))
          paciente.classList.add('sumir');
        else
          paciente.classList.remove('sumir');
      }
    }
  else
    {
      for (var i = 0; i < pacientes.length; i++) {
        paciente = pacientes[i];
        paciente.classList.remove('sumir');
      }
    }

});

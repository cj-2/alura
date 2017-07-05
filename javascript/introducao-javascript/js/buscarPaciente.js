var botaoBuscar = document.querySelector('#buscar-paciente');

botaoBuscar.addEventListener('click', function()
  {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

    xhr.addEventListener('load', function()
      {
        var erroAjax = document.querySelector('#erroAjax');
        if(xhr.status == 200)
          {
            erroAjax.classList.add('sumir');
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente)
              {
                var pacienteTr = montaTr(paciente);
                var tabelaPacientes = document.querySelector('#tabela-pacientes');
                tabelaPacientes.appendChild(pacienteTr);
              })
          }
          else
            {
              console.log(xhr.status);
              console.log(xhr.responseText);
              erroAjax.classList.remove('sumir');
            }

      });
    xhr.send();

  });

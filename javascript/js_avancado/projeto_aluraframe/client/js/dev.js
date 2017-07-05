var campos = [
  document.querySelector('#data'),
  document.querySelector('#valor'),
  document.querySelector('#quantidade')
];

console.log(campos);
var tbody = document.querySelector('tbody');

document.querySelector('.form').addEventListener('submit', function(event){

  event.preventDefault();
  var tr = document.createElement('tr');

  campos.forEach(function(campo){
    var td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = campo.value;
  });

  var volume = document.createElement('td');
  volume.textContent = campos[1].value * campos[2].value;
  tr.appendChild(volume);
  tbody.appendChild(tr);

});

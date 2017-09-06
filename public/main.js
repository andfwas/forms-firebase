var form = document.getElementById('pokeForm')
var image = document.createElement('img')


form.addEventListener('submit', function(event) {
  event.preventDefault();
  var id = event.target.elements.pokeId.value
  // console.log(id);
  fetch('http://pokeapi.co/api/v2/pokemon/' + id)
  .then(function(response) {
    return response.json()
    .then(function(pokeData) {
      console.log(pokeData);
    })
  })
})

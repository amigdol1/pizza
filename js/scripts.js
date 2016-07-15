function Pizza(toppings, size) {
  this.toppings = toppings,
  this.size = size
}

Pizza.prototype.cost = function(){
  return this.size * 5
}

$(document).ready(function() {
  var pizzaInput = new Pizza();
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    var inputToppings = $("input:checkbox:checked").map(function(){
      return $(this).val();
    }).toArray()
    var inputSize = $("input:radio[name=size]:checked").val();

    var newPizza = new Pizza(inputToppings, inputSize);
    newPizza.cost();

    console.log(newPizza.toppings)
    console.log(newPizza.size)
    console.log(newPizza.cost())
  });
});

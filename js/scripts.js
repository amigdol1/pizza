function Pizza(toppings, size) {
  this.toppings = [],
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

    console.log(inputToppings)
    console.log(inputSize)

    var newPizza = new Pizza(inputToppings, inputSize);
    newPizza.cost();

    console.log(newPizza.cost())
  });
});



//will call on pizza.toppings to print out
//will call on pizza.size to print out
//will call on cost() to print out
//push the checkbox values to the array. push the size to the empty string

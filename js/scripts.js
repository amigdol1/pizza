function Pizza(toppings, size) {
  this.toppings = toppings,
  this.size = size
}

Pizza.prototype.cost = function(){
  return this.size * 9
}

$(document).ready(function() {
  var pizzaInput = new Pizza();
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    var inputName = $("#name").val();
    var inputPhone = $("#phone").val();
    var inputToppings = $("input:checkbox:checked").map(function(){
      return $(this).val();
      }).toArray()
    var inputSize = $("input:radio[name=size]:checked").val();
    var newPizza = new Pizza(inputToppings, inputSize);
    newPizza.cost();

    $("#result").text("Thank you, " + inputName + ". You ordered a fancy pizza with the following item(s): " + newPizza.toppings.join(", ") + ". This will be ready in 2 to 4 hours and will cost: $" + newPizza.cost());
  });
});

function pizza(toppings, size) {
  this.toppings = [],
  this.size = size
}

$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    var toppings = $("input:checkbox:checked").map(function(){
        return $(this).val();
    }).toArray()
    var size = $("input:radio[name=size]:checked").val();
    console.log(size)
    console.log(toppings)
  });
});

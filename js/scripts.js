// function pizza {
//   this.toppings: [],
//   this.size: size
// }

$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    var size = $("input:radio[name=size]:checked").val();
    var toppings = $("input:checkbox:checked").map(function(){
        return $(this).val();
    }).toArray()
    console.log(size)
    console.log(toppings)
  });
});

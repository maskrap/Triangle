$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();

    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());

    if (side1 === side2 && side2 === side3 && side3 === side1) {
      $('#equ').show();
    }

      else if (side1 === side2 || side1 === side3 || side2 === side3) {
        $('#iso').show();
      }

      else if ((side1 + side2) >= side3)  {
        $('#not').show();
      }
      else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
        $('#sca').show();
      }




  });
});

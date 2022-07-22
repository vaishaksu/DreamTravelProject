
function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");

  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName).style.visibility="visible";

}

//ready function when page loads
$(document).ready(function () {
  //button add value in table
  //insert value to table 
  $("#wbtnAddValueInGrid").on("click", function () {

      //get 2 rows values
      var txtInputVal1 = $("#txtCellValue1").val();
      var txtInputVal2 = $("#txtCellValue2").val();

      //add above 2 coumn/row value in to the table
      $("#grid").append("<p>hi</p>");


      //clear input text
      $("#txtCellValue1").val(""); $("#txtCellValue2").val("");

      //assign click event so that animate to height will incerase by 50px
      //color will chage to grey
      $(".trTable").on("click", function () {
          this.style.backgroundColor = "grey";
          $(this).animate({height:"50px"});
      })
  });

});


/*Delete the event*/
function deleteEvent(elementId) {
  var myobj = document.getElementById(elementId);
  var result = confirm("Do you want to delete this event? ")
  if(result){
    document.getElementById(elementId).style.display ="none";
    myobj.remove();
  }
} 


/*button click*/

$(document).ready(function() {
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});
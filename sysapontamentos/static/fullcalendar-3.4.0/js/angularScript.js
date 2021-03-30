function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");

    console.log("Lista : " + li);


    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i];
        console.log("Valor : " + a.innerHTML);
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
        if(input == ""){
            restoreValuesDisplay();
        }
    }
}


$(function() {
  $("#Activities").autocomplete({
    source: "/api/get_drugs/",
    minLength: 2,
  });
});


function restoreValuesDisplay() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");

    console.log("Lista : " + li);


    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i];
        console.log("Valor : " + a.innerHTML);
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }

    }
}
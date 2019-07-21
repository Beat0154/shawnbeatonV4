function validate(idspan,idinput) {
    valid = true;
    var span = document.getElementById(idspan);
    var input = document.getElementById(idinput);
    if (input.value == ""){
        span.style.display = "block";
        valid = false;
    }
    return valid;
}

function remove(id) {
 var x = document.getElementById(id);
 x.style.display = "none";
}
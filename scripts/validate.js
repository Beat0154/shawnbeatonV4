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
function validateAll(){
    var valid = 1;
    valid &= validate('span1','input1');
    valid &= validate('span2','input2'); 
    valid &= validate('span3','input3');
    return valid == 1;
}

function remove(id) {
 var x = document.getElementById(id);
 x.style.display = "none";
}
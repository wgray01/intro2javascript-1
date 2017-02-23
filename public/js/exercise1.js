function findLargest() {

    //Get Values//
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    var number3 = document.getElementById('number3').value;

    //Validate Values//
    if (isNaN(number1) || number1.length == 0) {
        alert('Number 1 is not a number, or is empty!!');
        return;
    }
    if (isNaN(number2) || number2.length == 0) {
        alert('Number 2 is not a number, or is empty!!');
        return;
    }
    if (isNaN(number3) || number3.length == 0) {
        alert('Number 3 is not a number, or is empty!!');
        return;
    }
    //Convert to an actual number//
    var n1 = Number(number1);
    var n2 = Number(number2);
    var n3 = Number(number3);

    //Find Largest Value//
    if (n1 > n2) {
        if (n2 > n3) {
            alert('The largest number is ' + n1);
        } else {
            alert('The largest number is ' + n3);
        }
    } else {
        if (n2 > n3) {
            alert('The largest number is ' + n2);
        } else {
            alert('The largest number is ' + n3);
        }
    }

}

function clearForm() {
    var inputs = document.getElementsByTagName("input");

    for (var i = 0; i < inputs.length; i++) {
        var control = inputs[i];
        control.value = '';
    }

}

function checkValue(input) {
    if (isNaN(input.value)) {
        alert(input.value + ' is not a number Try it again!!');
        input.value = '';
        input.focus();
    }
}
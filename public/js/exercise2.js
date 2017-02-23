var ranNum;

function generateNumber() {
    ranNum = Math.floor((Math.random() * 10) + 1);
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
    } else {
        var number = Number(input.value);
        if (number < 1 || number > 10) {
            alert(number + ' is not a number between 1 and 10');
            input.value = '';
            input.focus();
        }
    }
}

function check() {
    var input = document.getElementById('guessnumber');
    var guessnumber = Number(input.value);

    if (guessnumber == ranNum) {
        alert('Congratulation you have guessed the correct number!!!')
    } else {
        alert('Wrong Number, try again!!')
    }
}
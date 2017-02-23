function getAverage() {
    var numbersList = document.getElementById('numberslist');
    var numbersArray = numbersList.split(',');

    for (var 1 = 0; i < numbersArray.length; i++) {
        if (isNaN(numbersArray[i]) || numbersArray[i].length == 0) {
            alert(numbersArray[i] + ' is not a number');
            return;
        }
    }
    var accumulator = 0;
    for (var i = 0; i < numbersArray.length; i++) {
        var value = Number(numbersArray[i]);
        accumulator = accumulator + value;
    }
    var average = accumulator / numbersArray.length;
    alert('The average is: ' + average);
}

function clearForm() {
    var inputs = document.getElementsByTagName("input");

    for (var i = 0; i < inputs.length; i++) {
        var control = inputs[i];
        control.value = '';
    }

}
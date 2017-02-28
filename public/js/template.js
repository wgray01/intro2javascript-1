function clearForm() {
    var inputs = document.getElementsByTagName("input");

    for (var i = 0; i < inputs.length; i++) {
        var control = inputs[i];
        control.value = '';
    }

}
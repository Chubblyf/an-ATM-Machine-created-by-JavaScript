function withdraw() {
    var amount = document.getElementById('amount').value;
    var result = document.getElementById('result');
    var notes = [500, 200, 100, 50, 20, 10];
    var notesCount = [0, 0, 0, 0, 0, 0];

    for (var i = 0; i < notes.length; i++) {
        if (amount >= notes[i]) {
            notesCount[i] = Math.floor(amount / notes[i]);
            amount -= notesCount[i] * notes[i];
        }
    }

    result.innerHTML = "<h2>Dispensed Notes:</h2>"
    for (var j = 0; j < notes.length; j++) {
        if (notesCount[j] > 0) {
            result.innerHTML += notesCount[j] + " notes of Rs " + notes[j] + "<br>";
        }
        }
}
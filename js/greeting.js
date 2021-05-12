var today = new Date();
var Hr = today.getHours();

// Here you can change the greetings and your name
var name = 'Nico';
var lateTxt = 'Go to Sleep, ';
var morningTxt = 'Good morning, ';
var afterTxt = 'Good afternoon, ';
var evenTxt = 'Good evening, ';

if (Hr >= 0 && Hr < 8) {
    document.getElementById('greetings').innerText = lateTxt + name;
} else if (Hr >= 8 && Hr < 12) {
    document.getElementById('greetings').innerText = morningTxt + name;
} else if (Hr >= 12 && Hr < 18) {
    document.getElementById('greetings').innerText = afterTxt + name;
} else {
    document.getElementById('greetings').innerText = evenTxt + name;
}

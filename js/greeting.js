var today = new Date();
var Hr = today.getHours();

// Here you can change the greetings and your name
var name = 'Nico';
var lateTxt = 'Go to Sleep, ';
var morningTxt = 'Good morning, ';
var afterTxt = 'Good afternoon, ';
var evenTxt = 'Good evening, ';

if (Hr >= 6 && Hr < 12) {
    document.getElementById('greetings').innerText = lateTxt + name;
} else if (Hr >= 12 && Hr < 16) {
    document.getElementById('greetings').innerText = morningTxt + name;
} else if (Hr >= 16 && Hr < 22) {
    document.getElementById('greetings').innerText = afterTxt + name;
} else {
    document.getElementById('greetings').innerText = evenTxt + name;
}

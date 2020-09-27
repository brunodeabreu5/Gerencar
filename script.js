var per1 = document.getElementByName('p1');
var per2 = document.getElementByName('p2');
var per3 = document.getElementByName('p3');
var rs = document.getElementById('res');

function calc() {
    if (per1 == 's') {
        var per1 = 1;
    } else if (per1 == n) {
        var per1 = 2;
    } else {
        alert('Por favor, digite um valor válido!');
    }

    if (per2 == s) {
        var per2 = 1;
    } else if (per2 == n) {
        var per2 = 2;
    } else {
        alert('Por favor, digite um valor válido!');
    }

    if (per3 == s) {
        var per3 = 3;
    } else if (per3 == n) {
        var per3 = 1;
    } else {
        alert('Por favor, digite um valor válido!');
    }
    var rs = (per1 + per2 + per2);
    innerHTML.res += ` ${rs}`;
}
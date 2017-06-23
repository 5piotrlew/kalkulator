'use strict';

function calc(wartosc) {

    switch (wartosc) {
        case 1:
            wyswietlacz.innerHTML = wyswietlacz.innerHTML + jeden.innerHTML;
            break;
        case 2:
            wyswietlacz.innerHTML = wyswietlacz.innerHTML + dwa.innerHTML;
            break;
        case 3:
            wyswietlacz.innerHTML = wyswietlacz.innerHTML + trzy.innerHTML;
            break;
        case 4:
            wyswietlacz.innerHTML = wyswietlacz.innerHTML + cztery.innerHTML;
            break;
        case 5:
            wyswietlacz.innerHTML = wyswietlacz.innerHTML + piec.innerHTML;
            break;
        case 6:
            wyswietlacz.innerHTML = wyswietlacz.innerHTML + szesc.innerHTML;
            break;
        case 7:
            wyswietlacz.innerHTML = wyswietlacz.innerHTML + siedem.innerHTML;
            break;
        case 8:
            wyswietlacz.innerHTML = wyswietlacz.innerHTML + osiem.innerHTML;
            break;
        case 9:
            wyswietlacz.innerHTML = wyswietlacz.innerHTML + dziewiec.innerHTML;
            break;
        case 0:
            wyswietlacz.innerHTML = wyswietlacz.innerHTML + zero.innerHTML;
            break;

    }
}

var wyswietlacz = document.getElementById('wyswietlacz');
var zero = document.getElementById('zero');
var jeden = document.getElementById('jeden');
var dwa = document.getElementById('dwa');
var trzy = document.getElementById('trzy');
var cztery = document.getElementById('cztery');
var piec = document.getElementById('piec');
var szesc = document.getElementById('szesc');
var siedem = document.getElementById('siedem');
var osiem = document.getElementById('osiem');
var dziewiec = document.getElementById('dziewiec');
var przecinek = document.getElementById('przecinek');
var dzielenie = document.getElementById('dzielenie');
var mnozenie = document.getElementById('mnozenie');
var dodawanie = document.getElementById('dodawanie');
var odejmowanie = document.getElementById('odejmowanie');
var suma = document.getElementById('suma');

jeden.addEventListener('click', function (e) {
    calc(1);
});
dwa.addEventListener('click', function (e) {
    calc(2);
});
trzy.addEventListener('click', function (e) {
    calc(3);
});
cztery.addEventListener('click', function (e) {
    calc(4);
});
piec.addEventListener('click', function (e) {
    calc(5);
});
szesc.addEventListener('click', function (e) {
    calc(6);
});
siedem.addEventListener('click', function (e) {
    calc(7);
});
osiem.addEventListener('click', function (e) {
    calc(8);
});
dziewiec.addEventListener('click', function (e) {
    calc(9);
});
zero.addEventListener('click', function (e) {
    calc(0);
});
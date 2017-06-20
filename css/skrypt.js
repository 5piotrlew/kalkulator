'use strict';

function calc(){
    console.log('click');
    document.getElementById("wyswietlacz").innerHTML = 7;
}

document.getElementById("siedem").onclick = calc;

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




document.getElementById("zero").addEventListener("click", function(){
    document.getElementById("wyswietlacz").innerHTML = 0;
})
alert("Welcome Ankit in calculator👏👏");
let num = document.getElementById("num");

function a() {
    let value = (document.getElementById('num').value);
    value+="7";
    document.getElementById('num').value = value;
}

function b() {
    let value = (document.getElementById('num').value);
    value+="8";
    document.getElementById('num').value = value;
}

function c() {
    let value = (document.getElementById('num').value);
    value+="9";
    document.getElementById('num').value = value;
}

function d() {
    let value = (document.getElementById('num').value);
    value+="4";
    document.getElementById('num').value = value;
}

function e() {
    let value = (document.getElementById('num').value);
    value+="5";
    document.getElementById('num').value = value;
}

function f() {
    let value = (document.getElementById('num').value);
    value+="6";
    document.getElementById('num').value = value;
}

function g() {
    let value = (document.getElementById('num').value);
    value+="/";
    document.getElementById('num').value = value;
}

function h() {
    let value = (document.getElementById('num').value);
   value+="1";
   document.getElementById('num').value = value;
}

function i() {
    let value = (document.getElementById('num').value);
    value+="2";
    document.getElementById('num').value = value;
}

function j() {
    let value = (document.getElementById('num').value);
    value+="3";
    document.getElementById('num').value = value;
}

function k() {
    let value = (document.getElementById('num').value);
    value += "*";
    document.getElementById('num').value = value;
}

function l() {
    let value = (document.getElementById('num').value);
    value+=".";
    document.getElementById('num').value = value;
}

function m() {
    let value = (document.getElementById('num').value);
    value+="0";
    document.getElementById('num').value = value;
}

function n() {
    let value = (document.getElementById('num').value);
    value+="-";
    document.getElementById('num').value = value;
}

function o() {
    let value = (document.getElementById('num').value);
    value+="+";
    document.getElementById('num').value = value;
}

function p() {
    let value = (document.getElementById('num').value);
    value+="*3.14";
    document.getElementById('num').value = value;
}

function q() {
    let value = (document.getElementById('num').value);
    value+="**";
    document.getElementById('num').value = value;
}

function r() {
    let value = (document.getElementById('num').value);
    value = value/100;
    document.getElementById('num').value = value;
}

function clr() {
    let value = (document.getElementById('num').value);
    value = "";
    document.getElementById('num').value = value;
}

function btn() {
   let res = (document.getElementById("num").value);
   var textInput = (document.getElementById("num").value);
   res = eval(textInput);
   document.getElementById("num").value = res;
}
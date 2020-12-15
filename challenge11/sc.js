function dito(){
    var a = +document.getElementById('box1').value;
    var b = +document.getElementById('box2').value;
    var c = a % b;
     document.getElementById('result').value = c;
}
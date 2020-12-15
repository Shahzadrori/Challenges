function Edg(){
    var a = +document.getElementById('side1').value;
    var b = +document.getElementById('side2').value;
    let c = ((a  + b) - 1);
  let d =  document.getElementById('result')
   
  d.value = c;
}
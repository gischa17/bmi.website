function hitungBMI(event){

event.preventDefault();

let berat =
document.getElementById("berat").value;

let tinggi =
document.getElementById("tinggi").value/100;

let bmi = berat/(tinggi*tinggi);

localStorage.setItem(
"bmi",
bmi.toFixed(2)
);

window.location.href="hasil.html";
}

window.onload=function(){

let nilai=localStorage.getItem("bmi");

if(nilai){

document.getElementById("nilaiBMI")
.innerText="Nilai BMI: "+nilai;

let kategori="";

if(nilai<18.5)
kategori="Kurus";

else if(nilai<25)
kategori="Normal";

else if(nilai<30)
kategori="Overweight";

else
kategori="Obesitas";

document.getElementById("kategoriBMI")
.innerText="Kategori: "+kategori;
}
}
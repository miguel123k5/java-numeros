function nombreyedad(){
    let num1,num2,num3,mayoria,nombre1,nombre2,nombre3,nombre;

    nombre1=prompt("ingrese el nombre de la primera persona");
    num1=parseInt(prompt("ingrese la edad"));
    nombre2=prompt("ingrese el nombre de la segunda persona");
    num2=parseInt(prompt("ingrese la edad"));
    nombre3=prompt("ingrese el nombre de la tercera persona");
    num3=parseInt(prompt("ingrese la edad"));

    if (num1 >= num2 && num1 >= num3){
        mayoria = num1,nombre = nombre1;

    }else if (num2 >= num1 && num2 >= num3){
        mayoria = num2,nombre = nombre2;

    }else{
        mayoria = num3,nombre = nombre3;
    }

    alert("Quien es mayor de los 3 presentes es, " + nombre + " con " + mayoria + " años");
}


function random2(){
    for (let i = 1; i <=3; i++){
        let num = parseInt (Math.random()*100);
        alert (num);
    }
}
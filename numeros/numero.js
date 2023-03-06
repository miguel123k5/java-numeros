function numero(){
    var n1 = prompt ("ingrese un numero");
    if (!isNaN(n1)){
        alert("el valor: "+"'"+n1+"'" +" se encuentra dentro de los parametros pedidos.");
    }else{
        alert("el valor: "+"'"+n1+"'" +" no forma parte de la escala numerica.");
    }
};


function numerorandom(){
    let num = parseInt(Math.random()*100);
    alert(num)
}



imagen1 = '<img src="../images/foto1.jpg" height="250px" width="250px" />'
imagen2 = '<img src="../images/foto2.jpg" height="250px" width="250px" />'
imagen3 = '<img src="../images/foto3.jpg" height="250px" width="250px" />'
imagen4 = '<img src="../images/foto4.jpg" height="250px" width="250px" />'
imagen5 = '<img src="../images/foto5.jpg" height="250px" width="250px" />'
imagen6 = '<img src="../images/foto6.jpg" height="250px" width="250px" />'
imagen7 = '<img src="../images/foto7.jpg" height="250px" width="250px" />'
imagen8 = '<img src="../images/foto8.jpg" height="250px" width="250px" />'
imagen9 = '<img src="../images/foto9.jpg" height="250px" width="250px" />'
imagen10 = '<img src="../images/foto10.jpg" height="250px" width="250px" />'

var fotos = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10];

var aleatorios = new Array(5);
var numeroImagen = 0;




function iniciar() {
    numeroImagen = 0;
    aleatoriosR(fotos)

    console.log(aleatorios)

    document.getElementById('anterior').disabled = true;

    document.getElementById('imagen').innerHTML = aleatorios[numeroImagen];
}


function siguiente() {
    numeroImagen = numeroImagen + 1;

    console.log(numeroImagen)

    if (numeroImagen == 4) {
        document.getElementById('siguiente').disabled = true;

    } else {


        if(numeroImagen>0){
            document.getElementById('anterior').disabled = false;
        }

        document.getElementById('siguiente').disabled = false;

    }

    document.getElementById('imagen').innerHTML = aleatorios[numeroImagen];

}

function anterior() {

    if (numeroImagen === 0) {
        document.getElementById('anterior').disabled = true;

    } else {



        if(numeroImagen<4){
            document.getElementById('siguiente').disabled = false;

        }
        document.getElementById('anterior').disabled = false;

    }
    console.log(numeroImagen)
    document.getElementById('imagen').innerHTML = aleatorios[numeroImagen];
    numeroImagen = numeroImagen - 1;

}



function aleatoriosR(elementos) {

    var numaletorios=numerosAleatorios(elementos)
    console.log(numaletorios[0])
    console.log(numaletorios[1])
    console.log(numaletorios[2])
    console.log(numaletorios[3])
    console.log(numaletorios[4])

    for (var i = 0; i < 5; i++){
        aleatorios[i]=fotos[numaletorios[i]]
    }


}


function numerosAleatorios() {
    var cantidadNumeros = 5;
    var myArray = []
    while(myArray.length < cantidadNumeros ){
      var numeroAleatorio = Math.ceil(Math.random()*9);
      var existe = false;
      for(var i=0;i<myArray.length;i++){
        if(myArray [i] == numeroAleatorio){
            existe = true;
            break;
        }
      }
      if(!existe){
        myArray[myArray.length] = numeroAleatorio;
      }
    
    }

    return myArray;
}





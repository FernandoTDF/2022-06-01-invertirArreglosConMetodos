let tamanoArreglo:number = Number(prompt("ingrese la dimension del arreglo"));
let arregloA:number[]=new Array(tamanoArreglo);


function cargarVector(vCargar : number[], cantidadCargar : number) {
  let indice:number;
  for (indice=0; indice<cantidadCargar; indice++) {
  vCargar[indice] = Number(prompt("Ingrese el valor de la posición " + indice + ": "));
  };
};



function invertirArreglo(arregloNormal:number[]){
  let indice:number;
  let indiceInvertido:number = (arregloNormal.length-1);
  let arregloInvertido:number[]= new Array(tamanoArreglo);

  for (indice=0; indice<tamanoArreglo; indice++){
      arregloInvertido[indiceInvertido]=arregloNormal[indice];
      indiceInvertido-=1;
    };
  console.log(arregloNormal);
  console.log(arregloInvertido);
};




cargarVector(arregloA,tamanoArreglo);
invertirArreglo(arregloA);
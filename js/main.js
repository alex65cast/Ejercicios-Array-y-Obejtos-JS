// EJERCICIO 1

const longitud = () => {
  let array = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

  console.log(`La longitud del array es ${array.length}`);
};

const elementoAleatorio = () => {
  let array = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

  const aleatorio = array[Math.round(Math.random() * array.length)];

  console.log(`El elemento aleatorio es ${aleatorio}`);
};

// EJERCICIO 2

const sistemaSolar = () => {
  planetas = ["Sol", "Tierra", "Saturno", "Pluton"];
};

// EJERCICIO 3

const editarArray = () => {
  let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];

  javascript1.shift("DOM");
  console.log(javascript1);

  javascript1.unshift("Objetos");
  console.log(javascript1);

  javascript1.pop();
  console.log(javascript1);

  javascript1.push("ArraysDificiles");
  console.log(javascript1);

  let copiaArray = javascript1.slice(2, 4);
  console.log(copiaArray);

  let indice = javascript1.indexOf("Funciones");
  console.log(indice);
};

// EJERCICIO 4

const inversaArray = () => {
  let nombre = "Hola";

  let arrayNombre = Array.from(nombre);
  console.log(arrayNombre);
  let arrayInverso = arrayNombre.reverse();
  console.log(arrayInverso);

  let nombreInverso = String(arrayInverso);
  console.log(nombreInverso);
};

// EJERCICIO 5

const intercalarArray = () => {
  let array1 = [1, 2, 3];
  let array2 = [4, 5, 6];

  let arrayDef = [];

  for (let i = 0; i < array1.length; i++) {

    arrayDef.push(array1[i]);

    arrayDef.push(array2[i]);

    console.log(arrayDef);
  }
};

// EJERCICIO 6

const arrayConcat = () =>{

    let array = [1,2,3,4,5,6,7,8,9,10];
    let arrayPares = [];
    let arrayImpares = [];

    for(let i = 0; i<array.length; i++){

        if(array[i] % 2 == 0){
            arrayPares.push(array[i]);

        } else {
            arrayImpares.push(array[i]);
        
        }
    
    }
    
    let arrayNuevo = arrayPares.concat(arrayImpares);
    console.log(arrayNuevo);

}

// EJERCICIO 7

const arrayMayor5 = () =>{

    let array = [1,2,3,4,5,6,7,8,9,10];

    let arrayFiltro = array.filter(number => number > 5 );
    console.log(arrayFiltro); 

}

// EJERCICIO 8

const repeticion = () =>{

    let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
    let javascript2 = ["Objetos", "Arrays", "ParseInt"];

    for(let i = 0; i<javascript1.length; i++){

        for(let x = 0; x<javascript2.length; x++){

            if( javascript1[i] == javascript2[x]){
                console.log('La palabra repetida es '+javascript1[i]);
            }

        }
        
    }
}

//EJERCICIO 10

const datosPersona = () =>{

    let datos = {

        nombre: 'Alex',
        apellidos: 'Castejon',
        edad: 24,
        direccion: 'Calle alicante',
        ciudad: 'Madrid'
    };

    console.log(datos.nombre,datos.apellidos);
}

// EJERCICIO 11

const datosPersona2 = () =>{

    let datos = {

        nombre: 'Alex',
        apellidos: 'Castejon',
        edad: 24,
        direccion: 'Calle alicante',
        ciudad: 'Madrid'
    };

    let {nombre, apellidos, edad, direccion, ciudad} = datos;

    console.log(nombre);
    console.log(apellidos);
    console.log(edad);

}

// EJERCICIO 12

const propiedades = () =>{

    let array = [
    {
        nombre:'Pepe',
        apellidos : 'Gonzalez'
    },

    {
        nombre: 'Alex',
        apellidos: 'Cast'

    },

    {
        nombre: 'Hector',
        apellidos: 'Garcia'

    }];

    let nombres = array.map(elementos => elementos.nombre);
    console.log(nombres);
}

// EJERCICIO 13

const receta = () =>{

    let recetaCocina =
        {
            nombre : 'Bocadillo de tortilla',
            tiempoPreparacion : '7 min',
            ingredientes: ['Pan, tortilla de patatas']
        }

        console.log(recetaCocina.nombre)
        console.log(recetaCocina.tiempoPreparacion)
        console.log(recetaCocina.ingredientes)
    
}

// EJERCICIO 14

const receta2 = () =>{

    let recetaCocina = [
        {
            nombre : 'Bocadillo de tortilla',
            tiempoPreparacion : '7 min',
            ingredientes: ['Pan, tortilla de patatas']
        },
        {
            nombre : 'Bocadillo de Jamon',
            tiempoPreparacion : '5 min',
            ingredientes: ['Pan, Jamon serrano y queso']
        },
        {
            nombre : 'Bocadillo de Pavo',
            tiempoPreparacion : '3 min',
            ingredientes: ['Pan de molde, Pavo y queso']
        }
        
    ];

    let lista = recetaCocina.map(elements => {
        // console.log(elements.nombre)
        // console.log(elements.tiempoPreparacion)
        // console.log(elements.ingredientes)

        for(const propiedad in elements){
            console.log(elements[propiedad])
        }
    });
    
}


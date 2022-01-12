// Propiedad intelectual: Esta prueba fue desarrollada por TCIT el año 2014 y registrada bajo propiedad intelectual, cualquier publicación o difamación podría estar sujeta a acciones legales. Hay otras empresas que nos han copiado esta prueba, no aceptes imitaciones, exige el original xD
// No realizar la prueba en repl.it al hacerlo su respuesta queda disponible para otros postulantes, tampoco subirla a repositorios de github públicos

// Sección de declaraciones, NO EDITAR

// Responsables de los cuarteles
const paddockManagers = [ 
  { id: 1, taxNumber: '132254524', name: 'JUAN TAPIA BURGOS'},
  { id: 2, taxNumber: '143618668', name: 'EFRAIN SOTO VERA'},
  { id: 3, taxNumber: '78903228', name: 'CARLOS PEREZ GONZALEZ'},
  { id: 4, taxNumber: '176812737', name: 'ANDRES VIÑALES CIENFUEGOS'},
  { id: 5, taxNumber: '216352696', name: 'OSCAR PEREZ ZUÑIGA'},
  { id: 6, taxNumber: '78684747', name: 'JOAQUIN ANDRADE SANDOVAL' }
];

// Tipo de cuartel, en el cual se utiliza el tipo de producto plantado
const paddockType = [ 
  { id: 1, name: 'PALTOS' },
  { id: 2, name: 'AVELLANOS' },
  { id: 3, name: 'CEREZAS' },
  { id: 4, name: 'NOGALES' },
]

// Un paddock representa un cuartel de un campo (Entiéndase también como potrero o parcela), el área está representada en m2, harvestYear es el año en el que se sembró el cuartel
const paddocks = [ 
  { paddockManagerId: 6, farmId: 1, paddockTypeId: 1, harvestYear: 2019, area: 1200 },
  { paddockManagerId: 1, farmId: 3, paddockTypeId: 4, harvestYear: 2019, area: 500 },
  { paddockManagerId: 5, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 20000 },
  { paddockManagerId: 2, farmId: 2, paddockTypeId: 3, harvestYear: 2021, area: 8401},
  { paddockManagerId: 3, farmId: 1, paddockTypeId: 1, harvestYear: 2020, area: 2877 },
  { paddockManagerId: 5, farmId: 2, paddockTypeId: 2, harvestYear: 2017, area: 15902 },
  { paddockManagerId: 3, farmId: 3, paddockTypeId: 2, harvestYear: 2018, area: 1736 },
  { paddockManagerId: 2, farmId: 3, paddockTypeId: 3, harvestYear: 2020, area: 2965 },
  { paddockManagerId: 4, farmId: 3, paddockTypeId: 4, harvestYear: 2018, area: 1651 },
  { paddockManagerId: 5, farmId: 1, paddockTypeId: 1, harvestYear: 2018, area: 700 },
  { paddockManagerId: 1, farmId: 2, paddockTypeId: 1, harvestYear: 2019, area: 7956 },
  { paddockManagerId: 5, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 3745 },
  { paddockManagerId: 6, farmId: 1, paddockTypeId: 3, harvestYear: 2021, area: 11362 },
  { paddockManagerId: 2, farmId: 3, paddockTypeId: 3, harvestYear: 2021, area: 300 },
  { paddockManagerId: 3, farmId: 2, paddockTypeId: 2, harvestYear: 2020, area: 19188 },
  { paddockManagerId: 3, farmId: 1, paddockTypeId: 1, harvestYear: 2019, area: 17137 },
  { paddockManagerId: 4, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 100 },
  { paddockManagerId: 2, farmId: 1, paddockTypeId: 3, harvestYear: 2019, area: 11845 },
  { paddockManagerId: 5, farmId: 2, paddockTypeId: 1, harvestYear: 2018, area: 15969 },
  { paddockManagerId: 1, farmId: 3, paddockTypeId: 1, harvestYear: 2029, area: 10420 },
  { paddockManagerId: 5, farmId: 2, paddockTypeId: 3, harvestYear: 2010, area: 3200 },
  { paddockManagerId: 6, farmId: 1, paddockTypeId: 2, harvestYear: 2012, area: 10587 },
  { paddockManagerId: 2, farmId: 2, paddockTypeId: 2, harvestYear: 2018, area: 16750 }
];

const farms = [ 
  { id: 1, name: 'AGRICOLA SANTA ANA' },
  { id: 2, name: 'VINA SANTA PAULA' },
  { id: 3, name: 'FORESTAL Y AGRICOLA LO ENCINA' }
];

/*
  SECCIÓN PROBLEMAS
    - No promover la copia:
	  - No preguntar en StackOverflow, foros, o similares ya que estas preguntas/respuestas quedan disponibles a otros candidatos
	  - No subir a repositorios públicos (github, o similares)
	  - Otros sitios como codepen o editores de texto on-line (codepen, repl, o similares), dejan guardado el código, por lo que les pedimos tampoco usar editores on-line, la mejor forma de debuggear su código es usando un intérprete de javascript como node y ejecutarlo de manera local
	  - Para nosotros es fácil detectar pruebas con copia, no pierda su tiempo intentando hacerlo
	  - Posteriormente, se evaluará conocimiento en es6 en entrevistas presenciales
    - Las siguientes son preguntas básicas de Javascript y manejo de datos. Se evaluará eficiencia, ORDEN y claridad del código entregado.
    - Se debe programar un algoritmo para cada método y que este retorne lo requerido.
    - Debe usar nombres explicativos para sus variables.
    - Usar sintaxis ES6.
    - Los resultados son evaluados con un test automatizado, revise que sus retornos sean con la estructura de datos solicitada en cada pregunta.
	- Métodos menos verbosos, DRY, y buenas prácticas en el código mejoran el puntaje final de su prueba
	- Si necesita hacer supuestos que afecten las respuestas entregadas, por favor déjelos escritos en el cuerpo del correo cuando envíe su prueba (No en este archivo). Supuestos que contradigan lo solicitado, no serán considerados como válidos.
	- Su prueba debe ejecutarse sin errores con: node nombre-apellido.js
  - Su prueba debe ejecutarse sin errores en la consola del inspector de Google Chrome
*/
// Tip: Una hectárea equivale a 10.000m2

// 0 Arreglo con los ids de los responsables de cada cuartel
function listPaddockManagerIds() {
  return paddockManagers.map((paddockManager) => paddockManager.id);
};

// 1 Arreglo con los ruts de los responsables de los cuarteles, ordenados por nombre
function listPaddockManagersByName() {
  // CODE HERE
  const listPaddockManagersByName = arr =>
   arr
    .map(row=>row)
    .sort((a,b)=>a.name.localeCompare(b.name))
    .map(({name,taxNumber}) => `${name}, ${taxNumber}`)

let result = listPaddockManagersByName( paddockManagers )

console.log( paddockManagers )
console.log( result )
};

// 2 Arreglo con los nombres de cada tipo de cultivo, ordenados 
//decrecientemente por la suma TOTAL de la cantidad de hectáreas plantadas de 
//cada uno de ellos.
function sortPaddockTypeByTotalArea( ) {
  // CODE HERE
 
}

// 3 Arreglo con los nombres de los administradores,
// ordenados decrecientemente por la suma TOTAL de hectáreas que administran.
function sortFarmManagerByAdminArea(administrador = paddocks, campo =farms ) {
  // CODE HERE
 
  let areaTotalesPoCampo = administrador.reduce((contadorTotales, cadaElemento) => {
    contadorTotales[cadaElemento.paddockManagerId] = (contadorTotales[cadaElemento.paddockManagerId] || 0) + cadaElemento.area;
    return contadorTotales;
}, {});

let areaTotalPorCampoOrdenados = Object.keys(areaTotalesPorCampo).sort(
    function(a, b) {
        return areaTotalesPorCampo[b] - areaTotalesPorCampo[a]
    });
// Obtener nombres por id
for (let x in areaTotalPorCampoOrdenados) {
    for (let y in campos) {
        if (campo[y].id == areaTotalPorCultivoOrdenados[x]) {
          areaTotalPorCultivoOrdenados[x] = cultivos[y].name;
        }
    }
}
return areaTotalPorCampoOrdenados;
}


// 4 Objeto en que las claves sean los nombres de los campos y los valores un arreglo con 
//los ruts de sus administradores ordenados alfabéticamente por nombre.
function farmManagerNames() {
  // CODE HERE
  var objectFarmskPaddocks = {};
  for (let farms in farms) {
      let nombreCampoPorAdministrador = unionPaddocksAccountsFarms.filter((paddocks) => {
          return paddocks.nameFarms === farms[farms].name
      }).map(paddocks => Paddocks.name).sort()

      let valorUnicoNombreCampoPorAdministrador = Array.from(new Set(nombreCampoPorAdministrador));
      let contenedorDeCampo = [];
      for (let index in valorUnicoNombreCampoPorAdministrador) {
          existeCampo = paddocks.filter(paddocks => {
              return paddocks.name === valorUnicoNombreCampoPorAdministrador[index]
          });
          if (existeCampo.length > 0) {
              contenedorDeCampo.push(existeCampo[0]);
          }
      }
      objectFarmsPaddocks[farms[farms].name] = contenedorDeAdmi.map(paddocks => paddocks.taxNumber);

  }
  return objectFarmsPaddocks;

}


// 5 Arreglo ordenado decrecientemente con los m2 totales de cada campo que tengan más de 
//2 hectáreas en Paltos
function biggestAvocadoFarms() {
  // CODE HERE
}

// 6 Arreglo con nombres de los administradores de la FORESTAL Y AGRÍCOLA LO ENCINA, 
//ordenados por nombre, que trabajen más de 1000 m2 de Cerezas
function biggestCherriesManagers() {
  // CODE HERE
}

// 7 Objeto en el cual las claves sean el nombre del administrador y el valor un arreglo 
//con los nombres de los campos que administra, ordenados alfabéticamente
function farmManagerPaddocks() {
  // CODE HERE
  let farm = {};
  for (let indexFarms in farms) {
      let totalAreaByPaddock = (unionPaddockAccountsFarms.filter(a => a.nameFarms === farms[indexFarms].name)
          .reduce((contadorTotales, cadaElemento) => {
              contadorTotales[cadaElemento.paddockManagerId] = (contadorTotales[cadaElemento.paddockManagerId] || 0) + cadaElemento.area;
              return contadorTotales
          }, {}));
      // Se recorren  y se dejan el menor
      for (let index in totalAreaByPaddockManagerId) {
          if (totalAreaByPaddockManagerId[index] === Math.min(...Object.values(totalAreaByPaddockManagerId))) {
            farm[farms[indexFarms].name] = index;
          }
      }
  }
  return farm;
}

// 8 Objeto en que las claves sean el tipo de cultivo concatenado con su año de
// plantación (la concatenación tiene un separador de guión ‘-’, por ejemplo AVELLANOS-2020) 
//y el valor otro objeto en el cual la clave sea el id del administrador y el valor el nombre
// del administrador
function paddocksManagers() {
  // CODE HERE
}

// 9 Agregar nuevo administrador con datos ficticios a "paddockManagers" y agregar un nuevo 
//cuartel de tipo NOGALES con 900mts2, año 2017 de AGRICOLA SANTA ANA, administrado por este 
//nuevo administrador 
// Luego devolver el lugar que ocupa este nuevo administrador en el ranking de la pregunta 3.
// No modificar arreglos originales para no alterar las respuestas anteriores al correr la 
//solución
function newManagerRanking() {
  // CODE HERE
  const administrador = paddockManagers.slice(0, paddockManagers.length);
  const campo = paddocks.slice(0, paddocks.length);

  let saldoEmpleadoNuevo = 9000;

  let administradorNuevo = {
      id: Math.max(...administrador.map(a => a.id)) + 1,
      taxNumber: '128358897',
      name: 'ALEJANDRA RODRIGUEZ RODRIGUEZ'
  }
  let cuentaNueva = {
      clientId: administradorNuevo.id,
      paddockManagerId: 3,
      area: saldoEmpleadoNuevo
  }
  administrador.push(administradorNuevo);
  campo.push(cuentaNueva);

  posicion = sortFarmManagerByAdminArea(campo, administrador).findIndex(a => a === administradorNuevo.name) + 1;
  return (`El lugar que ocupa ${administradorNuevo.name} en el ranking es del lugar ${posicion}`)
}
}


// No modificar, eliminar o alterar cualquier línea de código o comentario de acá para abajo
// Cualquier cambio hará que su prueba quede invalidada automáticamente
console.log('Pregunta 0');
console.log(listPaddockManagerIds());
console.log('Pregunta 1');
console.log(listPaddockManagersByName());
console.log('Pregunta 2');
console.log(sortPaddockTypeByTotalArea());
console.log('Pregunta 3');
console.log(sortFarmManagerByAdminArea());
console.log('Pregunta 4');
console.log(farmManagerNames());
console.log('Pregunta 5');
console.log(biggestAvocadoFarms());
console.log('Pregunta 6');
console.log(biggestCherriesManagers());
console.log('Pregunta 7');
console.log(farmManagerPaddocks());
console.log('Pregunta 8');
console.log(paddocksManagers());
console.log('Pregunta 9');
console.log(newManagerRanking());


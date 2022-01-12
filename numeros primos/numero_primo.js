//ejericico 1

///n=10
//[2, 3, 5]

function generarPrimos(n) {

    if (typeof n === 'number' &&  Number.isInteger(n)) {
        if (n >= 2){
            let primos = [];
            let hayPrimo = [];

            for(let i = 1; i <= n; ++i) {
                hayPrimo.push(true);
            }

            for(let i = 2; i <= n; ++i) {
                if (hayPrimo[i]) {
                    primos.push(i);   
               //
               //
               //
               //

                    for(let j = 1; j * i <= n; ++j){
                    hayPrimo[i * j] = false;
                }


                }
            }
            return primos;
        } else {
            throw Error('El numero debe ser mayor o igual a 1.');
        }
     } else {
            throw TypeError('El argumento debe ser un numero entero.');
        }
    }
    try{

        console.log(generarPrimos(10)); //[2,3,5]
    }catch (e){
        console.log('Error: ${e.message}');

    }

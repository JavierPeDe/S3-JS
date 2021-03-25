
//Despues de cada operacion hay que clickar al =
// Variables
var num_1 = 0;
var num_2 = 0;
var operador = "";
refresh(); //inicializamos el display

//añadimos el numero: añadimos el numero presionado al display
function addNum(num) {
    if (num_1 == 0 && num_1 !== "0.") {
        num_1 = num;
    }
    else {
        num_1 += num;
    }
    refresh()
}

//añade la coma: punto decimal
function coma() {
    if (num_1 == 0) {
        num_1 = "0.";
    }
    else {
        if (num_1.indexOf(".") == -1) {
            num_1 += ".";
        }
    }
    refresh()
}

// Funcion AC : Pone las variables a 0
function AC() {
    num_1 = 0;
    num_2 = 0;
    operador = "";
    refresh()
}

// Selector de operacion: pasamos el valor del display a num_2 y inicializamos para el siguiente numero
function SelectorOperador(oper) {
    
    operador = oper;
  
 
    num_2 = parseFloat(num_1);
    num_1 = 0;
    refresh()
}
    


//Funcion borrar
function borrar() {
    if (1 < num_1.toString().length) {
        num_1 = num_1.toString().slice(0, -1);
    }
    else if (num_1 != 0) {
        num_1 = 0;
    } //Borra si era un numero negativo. 
    if (num_1 == '-') {
        num_1 = 0;
    }
    refresh();
}

//Lo he modificiado un poco para que funcione con la nueva interficie
function calculadora() {
    switch (operador) {
        case "suma":

            num_1 = parseFloat(num_1) + num_2;
            break;
        case "resta":
            num_1 = num_2 - num_1;
            break
        case "divisio":
            //Condicio per que no doni error. 
            if (num_1 == 0) {
                num_1 = "Error: Infinit"
            }
            else {
                num_1 = num_2 / num_1;
            }
            break;
        case "multiplicacio":
            num_1 = num_1 * num_2;
            break;
        default:
            console.log("Error en operador funcion calculadora. ");
    }
    refresh();
   
}

//Muestra por pantalla la variable num_1
function refresh() {
    document.getElementById("resultat").value = num_1;
}

//Cambia el signo al numero del display
function negativo() {
    num_1 = num_1 * (-1);
    refresh();
}
const precioEntrada = 200;

const descEstudiante = 80;
const descTrainee = 50;
const descJunior = 15;

let totalEntrada = 0;

function calcularTotal() {
    const categoria = document.getElementById("categoria");
    const cantidad = document.getElementById("cantidad").value;

    const subTotal = cantidad * precioEntrada;

    switch (categoria.value) {
        case "0":
            totalEntrada = subTotal;
            break;
        case "1":
            totalEntrada = subTotal - (descEstudiante / 100 * subTotal);
            break;
        case "2":
            totalEntrada = subTotal - (descTrainee / 100 * subTotal);
            break;
        case "3":
            totalEntrada = subTotal - (descJunior / 100 * subTotal);
            break;
    }

    return totalEntrada
}

const mostrarTotalElement = document.querySelector("#total");

const btnResumen = document.querySelector("#btnResumen");
const btnBorrar = document.querySelector("#btnBorrar");

function mostrarResumen() {
    btnResumen.addEventListener("click", () => {

        let valido = validarFormulario()

        if(valido) {
            const total = calcularTotal();

            mostrarTotalElement.innerHTML = ` $${total}`
        } else {
            mostrarTotalElement.innerHTML = ` - `
        }
        
    });
}

mostrarResumen();

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const email = document.querySelector("#email");
const cantidad = document.querySelector("#cantidad");

let formValidado = false;

function validarFormulario() {

    nombre.addEventListener("input", () => {
        if (nombre.value !== "") {
            nombre.classList.remove("completar-form");
        } 
    });
    
    apellido.addEventListener("input", () => {
        if (apellido.value !== "") {
            apellido.classList.remove("completar-form");
        }
    });
    
    email.addEventListener("input", () => {
        if (email.value !== "") {
            email.classList.remove("completar-form");
        }
    });
    
    cantidad.addEventListener("input", () => {
        if (cantidad.value !== "") {
            cantidad.classList.remove("completar-form");
        }
    });

    categoria.addEventListener("input", () => {
        if (categoria.value !== "") {
            categoria.classList.remove("completar-form");
        }
    });

   if(nombre.value === "") {
    nombre.classList.add("completar-form");
   } else {
    nombre.classList.remove("completar-form");
   } 
   
   if (apellido.value === "") {
    apellido.classList.add("completar-form");
   } else {
    apellido.classList.remove("completar-form");
   }

   if (email.value === "") {
    email.classList.add("completar-form");
   } else {
    email.classList.remove("completar-form");
   }

   if (cantidad.value === "") {
    cantidad.classList.add("completar-form");
   } else {
    cantidad.classList.remove("completar-form");
   }

   if (categoria.value === "") {
    categoria.classList.add("completar-form");
   } else {
    categoria.classList.remove("completar-form");
   }

   if (
    nombre.value !== "" &&
    apellido.value !== "" &&
    email.value !== "" &&
    cantidad.value !== "" &&
    (categoria.value !== "" && !isNaN(categoria.value))
    ) {
        formValidado = true
    } else {
        formValidado = false;
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Complete todos los campos',
            showConfirmButton: false,
            timer: 1000
        })
    }
    
    return formValidado;
}

function vaciarForm() {
    btnBorrar.addEventListener("click",() => {
        nombre.value = ""
        apellido.value = ""
        email.value = ""
        cantidad.value = ""
        categoria.value = ""
        total.innerHTML = ""
    })
}

vaciarForm()
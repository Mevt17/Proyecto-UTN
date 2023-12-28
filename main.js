let currentStep = 1;
let nombre;
let apellido;
let email;


function showProcess() {
    let proceso = document.getElementById('process-container')
    proceso.style.display = "block";
    
}

function showStep(step) {
    let paso = document.getElementById('step'+step);
    paso.style.display = 'block';
}

function hideStep(step){
    document.getElementById('step'+step).style.display = 'none';
}

function nextStep(step){
    hideStep(currentStep);
    currentStep = step + 1;
    showStep(currentStep);
}

function prevStep(step){
    hideStep(currentStep);
    currentStep = step - 1;
    showStep(currentStep);

}

function send(event){

    event.preventDefault();

    nombre = document.getElementById('nombre').value;
    apellido = document.getElementById('Apellido').value;
    email = document.getElementById('Email').value;
    alert('Bienvenido a la comunidad');
    console.log(nombre, apellido, email);
    // document.getElementById('process-container').style.display = 'none';
    

    let datos = document.getElementById('user-data');
    datos.innerHTML = `
    <p>Nombre:${nombre}</p>
    <p>Apellido:${apellido}</p>
    <p>Email:${email}</p>
    `
}

showStep(currentStep);

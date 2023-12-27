let currentStep = 1;

function showProcess() {
    let proceso = document.getElementById('process-container')
    proceso.style.display = 'block';

    showProcess(currentStep);
}
function showStep(step){
    let paso = document.getElementById('step'+ step);
    paso.style.display='block'
}

function hideStep(step){
    document.getElementById('step'+step).style.display= 'none';
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
    alert('Bienvenido a la comunidad')
    document.getElementById('process-container')
    
}

showStep(currentStep);


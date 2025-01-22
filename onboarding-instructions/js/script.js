let currentStep = 0;

function nextStep(step) {
    document.getElementById('step' + currentStep).classList.remove('active');
    currentStep = step;
    document.getElementById('step' + currentStep).classList.add('active');
}

function prevStep(step) {
    document.getElementById('step' + currentStep).classList.remove('active');
    currentStep = step;
    document.getElementById('step' + currentStep).classList.add('active');
}

function launchVantaPage() {
    window.open('https://app.vanta.com/onboarding', '_blank');
}

// Initialize after DOM is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    // Set a timeout to move to step 1 after 3 seconds
    setTimeout(function() {
        nextStep(1);
    }, 3000);
});
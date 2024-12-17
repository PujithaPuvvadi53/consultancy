document.getElementById('servicesForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page
    
    const selectedServices = [];
    const services = document.querySelectorAll('input[name="service"]:checked');
    
    services.forEach(service => {
        selectedServices.push(service.value);
    });
    
    const responseMessage = document.getElementById('responseMessage');
    
    if (selectedServices.length > 0) {
        responseMessage.innerHTML = `<p>Thank you! You have selected the following services: <strong>${selectedServices.join(', ')}</strong></p>`;
    } else {
        responseMessage.innerHTML = '<p>Please select at least one service.</p>';
    }
});

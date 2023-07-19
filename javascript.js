document.addEventListener('DOMContentLoaded', () => {


    const userPassword = document.querySelector('#user_password');
    const confirmPassword = document.querySelector('#confirm_password');

    confirmPassword.addEventListener('input', () => {
        if (userPassword.value === confirmPassword.value) {
        // Modify the styles of userPassword element
        userPassword.style.backgroundColor = 'white'; // Example style change

        // Modify the styles of confirmPassword element
        confirmPassword.style.backgroundColor = 'white'; // Example style change
        } else {
        // Modify the styles of confirmPassword element
        confirmPassword.style.backgroundColor = 'red'; // Example style change
        }

        if (confirmPassword.value === ''){
            confirmPassword.style.backgroundColor = 'white';
        }
    });
});
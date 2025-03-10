import iziToast from "izitoast";  
import "izitoast/dist/css/iziToast.min.css";  

const form = document.querySelector('.form');  

form.addEventListener('submit', function(event) {  
    event.preventDefault(); // Запобігти перезавантаженню сторінки  

    const delay = Number(form.delay.value); // Отримати значення затримки  
    const state = form.state.value; // Отримати обране значення радіокнопок  

    createPromise(delay, state)  
        .then(() => {  
            iziToast.success({  
                title: 'Success',  
                message: `✅ Fulfilled promise in ${delay}ms`,  
                position: 'topRight',  
            });  
        })  
        .catch(() => {  
            iziToast.error({  
                title: 'Error',  
                message: `❌ Rejected promise in ${delay}ms`,  
                position: 'topRight',  
            });  
        });  
});  

// Функція для створення промісу  
function createPromise(delay, state) {  
    return new Promise((resolve, reject) => {  
        setTimeout(() => {  
            if (state === 'fulfilled') {  
                resolve();  
            } else {  
                reject();  
            }  
        }, delay);  
    });  
}  
import flatpickr from "flatpickr";  
import "flatpickr/dist/flatpickr.min.css";  
import iziToast from "izitoast";  
import "izitoast/dist/css/iziToast.min.css";  

const datetimePicker = document.getElementById('datetime-picker');  
const startButton = document.querySelector('[data-start]');  
const daysValue = document.querySelector('[data-days]');  
const hoursValue = document.querySelector('[data-hours]');  
const minutesValue = document.querySelector('[data-minutes]');  
const secondsValue = document.querySelector('[data-seconds]');  

let userSelectedDate = null;  
let timerId = null;  

const options = {  
    enableTime: true,  
    time_24hr: true,  
    defaultDate: new Date(),  
    minuteIncrement: 1,  
    onClose(selectedDates) {  
        userSelectedDate = selectedDates[0];  
        if (userSelectedDate < new Date()) {  
            iziToast.error({  
                title: 'Error',  
                message: 'Please choose a date in the future',  
                position: 'topRight'  
            });  
            startButton.disabled = true;  
        } else {  
            startButton.disabled = false;  
        }  
    },  
};  

flatpickr(datetimePicker, options);  

startButton.addEventListener('click', startTimer);  
startButton.disabled = true;   

function startTimer() {  
    startButton.disabled = true;  
    datetimePicker.disabled = true;  

    timerId = setInterval(() => {  
        const currentTime = new Date();  
        const timeDifference = userSelectedDate - currentTime;  

        if (timeDifference <= 0) {  
            clearInterval(timerId);  
            updateTimerDisplay(0, 0, 0, 0);  
            datetimePicker.disabled = false;  
            iziToast.success({  
                title: 'Success',  
                message: 'Countdown finished!',  
                position: 'topRight'  
            });  
            return;  
        }  

        const { days, hours, minutes, seconds } = convertMs(timeDifference);  
        updateTimerDisplay(days, hours, minutes, seconds);  
    }, 1000);  
}  

function updateTimerDisplay(days, hours, minutes, seconds) {  
    daysValue.textContent = addLeadingZero(days);  
    hoursValue.textContent = addLeadingZero(hours);  
    minutesValue.textContent = addLeadingZero(minutes);  
    secondsValue.textContent = addLeadingZero(seconds);  
}  

function convertMs(ms) {  
    const second = 1000;  
    const minute = second * 60;  
    const hour = minute * 60;  
    const day = hour * 24;  

    const days = Math.floor(ms / day);  
    const hours = Math.floor((ms % day) / hour);  
    const minutes = Math.floor(((ms % day) % hour) / minute);  
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);  

    return { days, hours, minutes, seconds };  
}  

function addLeadingZero(value) {  
    return String(value).padStart(2, '0');  
}  
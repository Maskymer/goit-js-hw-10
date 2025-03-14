import iziToast from 'izitoast' ;

document.getElementById('notification-form').addEventListener('submit', e => {
  e.preventDefault();

  const form = e.target;
  const delay = Number(form.delay.value);
  const state = form.state.value;

  createNotification(delay, state)
    .then(resolvedDelay => {
      iziToast.success({
        title: 'Успіх',
        message: `Повідомлення надіслано! Затримка: ${resolvedDelay} мс`,
      });
    })
    .catch(rejectedDelay => {
      iziToast.error({
        title: 'Помилка',
        message: `Не вдалося надіслати повідомлення. Затримка: ${rejectedDelay} мс`,
      });
    });
});

function createNotification(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

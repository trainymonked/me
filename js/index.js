const container = document.getElementsByClassName('container')[0];
const label = document.getElementById('label');
const suggestions = document.getElementById('suggestions');

label.innerText = 'Wait 10 seconds to get redirected to my Telegram';

const timer = setTimeout(() => window.location.replace("https://t.me/trainymonked"), 10000);
const cancel = document.createElement('input');
cancel.type = 'button';
cancel.value = 'Cancel';
cancel.onclick = () => {
    clearTimeout(timer);
    label.remove();
    cancel.remove();
};

container.insertBefore(cancel, suggestions);

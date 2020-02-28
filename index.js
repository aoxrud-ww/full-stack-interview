console.clear();

function getNotifications() {
  return Promise.resolve([
    { id: 1, unixTimestamp: 1, message: "Older" },
    { id: 2, unixTimestamp: 2, message: "Newer" },
    { id: 3, unixTimestamp: 0, message: "Oldest" },
    { id: 4, unixTimestamp: 5, message: "Newest" }
  ])
}



function getNotificationDialog(message, onClose) {
  const container = document.createElement('div');
  const msg = document.createElement('p');
  const close = document.createElement('button');

  container.appendChild(msg);
  container.appendChild(close);

  msg.innerHTML = message;
  close.innerHTML = "Close";
  container.setAttribute('role', 'alert');

  close.addEventListener('click', () => onClose(container));
  container.className = 'notification';

  return container;
}

function sortNotifications(notifications) {
  return notifications.sort((a, b) => b.unixTimestamp - a.unixTimestamp);
}

function getCachedNotifications() {
  if(window.localStorage.getItem('notifications')) {
    return Promise.resolve(JSON.parse(window.localStorage.getItem('notifications')));
  } else {
    return getNotifications().then(notifications => {
      window.localStorage.setItem('notifications', JSON.stringify(notifications));
    })
  }
}

function init() {


  getCachedNotifications()
    .then(notifications => {
      window.notificationsData = sortNotifications(notifications);

      window.notificationsData.forEach(notification => {
          const diaog = getNotificationDialog(notification.message, function(dialog) {
            notificationsContainer.removeChild(dialog);
            const index = window.notificationsData.findIndex(dialog => dialog.id === notification.id);
            window.notificationsData.splice(index, 1);
            window.localStorage.setItem('notifications', JSON.stringify(window.notificationsData));
          });
          notificationsContainer.appendChild(diaog);
        });
    });
}

const notificationsContainer = document.getElementById('notifications');


init();

document.getElementById('resetNotifications').addEventListener('click', () => {
  console.log('hi')
  window.localStorage.removeItem('notifications');
  init();
})


document.getElementById('showNotifications').addEventListener('click', () => {
  notificationsContainer.style.display = 'block';
})

document.getElementById('hideNotifications').addEventListener('click', () => {
  notificationsContainer.style.display = 'none';
})


document.getElementById('logNotifications').addEventListener('click', () => {
  console.log(window.notificationsData)
})




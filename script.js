const urlInput = document.getElementById('urlInput');
const goButton = document.getElementById('goButton');
const webFrame = document.getElementById('webFrame');

function loadURL() {
  const url = urlInput.value.trim();
  if (url === '') return;

  // Check if the URL contains "http://" or "https://"
  const hasProtocol = /^(https?:\/\/)/i.test(url);
  const completeURL = hasProtocol ? url : 'http://' + url;

  webFrame.src = completeURL;
}

goButton.addEventListener('click', loadURL);

urlInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    loadURL();
  }
});

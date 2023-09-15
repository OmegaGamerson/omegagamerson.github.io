const urlToFetch = 'https://example.com'; // Replace with the URL you want to fetch
fetch(`http://your-server-address:3000/proxy?url=${encodeURIComponent(urlToFetch)}`)
  .then(response => response.text())
  .then(data => {
    
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
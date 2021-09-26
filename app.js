const addGS = () => {
  const url =
    'https://script.google.com/macros/s/AKfycbyECVdwfr29tbCrcUzTLmF36oxcZENJV7MTE5IvtqG7XaKLmKDNGyN6J8BMs0lvEzzF/exec';

  fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    cache: 'no-cache',
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/json',
      
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({first:"New",last:"Man",age:45}), // body data type must match "Content-Type" header
  });
};

const testGS = () => {
  const url =
    'https://script.google.com/macros/s/AKfycbyECVdwfr29tbCrcUzTLmF36oxcZENJV7MTE5IvtqG7XaKLmKDNGyN6J8BMs0lvEzzF/exec';

  fetch(url)
    .then((d) => d.json())
    .then((d) => {
      document.getElementById('app').textContent = d[0].status;
    });
};

document.getElementById('btn2').addEventListener('click', addGS);

document.getElementById('btn').addEventListener('click', testGS);

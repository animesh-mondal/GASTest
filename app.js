const addGS = () => {
  const url =
    'https://script.google.com/macros/s/AKfycbye0AZmW0MDmuNG4TSAVwrQpWs6f8Q4IplkJ-4X59b2y_xERBDZ01Zp5oIfhzF2Nl-G/exec';

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
    body: JSON.stringify({name:"Animesh"}), // body data type must match "Content-Type" header
  });
};

const testGS = () => {
  const url =
    'https://script.google.com/macros/s/AKfycbye0AZmW0MDmuNG4TSAVwrQpWs6f8Q4IplkJ-4X59b2y_xERBDZ01Zp5oIfhzF2Nl-G/exec';

  fetch(url)
    .then((d) => d.json())
    .then((d) => {
      document.getElementById('app').textContent = d[0].status;
    });
};

document.getElementById('btn2').addEventListener('click', addGS);

document.getElementById('btn').addEventListener('click', testGS);

const addGS = () => {
  const url =
    'https://script.google.com/macros/s/AKfycbwKnGR3NBaEk3upxSYF20I3auMr8KLqtE_Tfp2eIOfL30ttfFnIHhnsBcW62lFifxjz/exec';

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
    'https://script.google.com/macros/s/AKfycbwKnGR3NBaEk3upxSYF20I3auMr8KLqtE_Tfp2eIOfL30ttfFnIHhnsBcW62lFifxjz/exec';

  fetch(url)
    .then((d) => d.json())
    .then((d) => {
      document.getElementById('app').textContent = d[0].status;
    });
};

document.getElementById('btn2').addEventListener('click', addGS);

document.getElementById('btn').addEventListener('click', testGS);

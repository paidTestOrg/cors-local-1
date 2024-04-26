// run `node index.js` in the terminal
const url = 'http://localhost:4000/posts';

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    console.log({ json });
  })
  .catch(console.error);

async function corsTest() {
  try {
    const response = await fetch(
      'https://archive.org/download/win3_Mineswee/win3_Mineswee.zip'
    );
    console.log(response.headers.get('content-type'));

    const res = await fetch('https://echo.zuplo.io/foo?bar=1');
    const json = await res.json();
    console.log(json.query.bar);
  } catch (e) {
    console.log('error', e);
  }
}

corsTest();

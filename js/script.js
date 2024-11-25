/*const publicKeyApi = 'd28ef029a68ad984b5e2be6fa65b6512';

async function getAllHeros() {
  const timeStamp = '1';
  const md5 = '051c2c5faf0162b6e3b25682a3af5a58';

  await fetch(`https://gateway.marvel.com:443/v1/public/characters?limit=100&apikey=${publicKeyApi}&ts=${timeStamp}&hash=${md5}`)
  .then((res) => res.json())
  .then(res => {
    const heros = res.data.results;

    console.log(heros);
  });
}

getAllHeros();
*/
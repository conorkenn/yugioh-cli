import fetch from 'node-fetch';

fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark Magician')
.then(response =>response.json())
.then(data => console.log(data))

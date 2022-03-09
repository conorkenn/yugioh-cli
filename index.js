import fetch from 'node-fetch';
import readlineSync from  'readline-sync';

const cardName = readlineSync.question("Enter Card Name: ")

var url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?name=' + cardName

fetch(url)
.then(response =>response.json())
.then((cardData) => {
  var data = cardData.data['0']
  console.log(data.name)
  console.log(data.desc)
})

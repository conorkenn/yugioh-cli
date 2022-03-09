import fetch from 'node-fetch';




fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark Magician')
.then(response =>response.json())
.then((cardData) => {
  var data = cardData.data['0']
  console.log(data.name)
})

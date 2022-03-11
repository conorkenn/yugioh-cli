import fetch from 'node-fetch';

const args = process.argv.slice(2);
if(args.length === 0){
  console.log("Enter a card as an argument")
}else{
  const cardName = args.toString().replace(',', " ");

  var url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?name=' + cardName;
  
  fetch(url)
  .then(response =>response.json())
  .then((cardData) => {
    var data = cardData.data['0']
    console.log('\n')
    console.log(data.name)
    console.log(data.type)
    console.log(data.desc)
    console.log('atk: ' + data.atk)
    console.log('def: ' + data.atk)
  });
}


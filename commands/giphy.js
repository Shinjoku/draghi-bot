/* Commands related to the Giphy API [Discord API takes care of outputting] */

// Searches a gif in the Giphy database and returns one of the first five
function gif(message, words) {

    let msg = 'Look ahst thdro\n';

    let math = require('./math.js');
    let giphy = require('giphy-api')();


    giphy.search(words)
        .then(res => {

            console.log('Got some shit? ' + (res.data.length > 0 ? 'YUPPP' : 'Nope.'));
            let gifIndex = math.getRandom(0, 5);
            let gif = res.data[gifIndex];
            message.channel.send(msg + gif.url);

        })
        .catch(err => {

            console.log('Erro: ' + err);
            message.channel.send('Não foi possível procurar: ' + err);

        });
}

exports = module.exports = gif;
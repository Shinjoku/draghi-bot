/* Commands related to the TasteDive API  */

// Music recommendations based on 0 to 3 bands the user likes
async function getRecommendations(message, words) {

    let request = require('request');

    let key = process.env.TASTEDIVE_TOKEN;

    const m = await message.channel.send('Searching for your recommendations... [RETRIEVING SOME SHIET]');

    // Obtém o tipo da pesquisa
    // let type = words.split(' ')[0];
    // let params;
    let query = words.replace(', ', '%2C').replace(' ', '+');
    console.log(query);

    let url = 'https://tastedive.com/api/similar?k=' + key;
    url += '&q=' + query;
    url += '&type=music';
    
    
    request(url, function(error, response, body) {
        
        console.log(body);
        let els = JSON.parse(body).Similar.Results;
        
        if(els.length == 0){
            m.edit("Couldn't find any band similar to that, sorry =S");
            return;
        }
            
        
        let msg = 'Here are some bands you might like:\n\n';
        for(let elt of els)
            msg += `${elt.Name},\n`;
        msg += '\nFor more options, go to tastedive.com!';
        m.edit(msg);
        
    });

}

exports = module.exports = getRecommendations;

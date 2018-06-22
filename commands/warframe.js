
async function getWarframe(message, words) {
    
    let request = require('request');
    
    
    let url, result;
    const msg = await message.channel.send('Procurando a batata prime!');
    
    
    if(words === 'cetus')
        url = 'https://api.warframestat.us/pc/cetusCycle';
    else
        msg.edit('Não suportamos nada mais q "cetus" no momento e.e');
    
    request(url, function(err, res, body) {
       
        console.log(body);
        result = JSON.parse(body);
        
        if(result.length == 0){
            msg.edit('Ñ consegui coletar as informações, operador!');
            return;
        }
        
        if(err){
            msg.edit(err);
            return;
        }
    });
    
    
    if(result.isDay == true)
        msg.edit('Vc vai ter que esperar mais ' + result.timeLeft +
        ' para capturar eidolones =(');
    else
        msg.edit('Corra, operador! Você tem mais ' + result.timeLeft +
        ' para capturar eidolones!!!');
    
    
}

exports = module.exports = getWarframe;
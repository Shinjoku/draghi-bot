
async function getWarframe(message, words) {
    
    let request = require('request');
    
    let url, result;
    
    const msg = await message.channel.send('Procurando a batata prime!');
    

    if(words === 'cetus')
        url = 'https://api.warframestat.us/pc/cetusCycle';
        
    else if(words === 'baro')
        url = 'https://api.warframestat.us/pc/voidTrader';
        
    else
        return msg.edit('Não suportamos nada mais q "cetus" e "baro" no momento e.e');
    
    request(url, function(err, res, body) {
       
        result = JSON.parse(body);

        if(result.length == 0)
            return msg.edit('Ñ consegui coletar as informações, operador!');

        
        if(words === 'cetus') {
            if(result.isDay){
                console.log("TA DE DIA");
                return msg.edit('Vc vai ter que esperar mais ' + result.timeLeft +
                ' para capturar eidolones =(');
            }
            else{
                console.log('TA DE NOITE');
                return msg.edit('Corra, operador! Você tem mais ' + result.timeLeft +
                ' para capturar eidolones!!!');
            }
        }
        else if(words === 'baro') {
            return msg.edit("O Baro Ki'Teer chegará em " + result.startString +
            " , em " + result.location);
        }
        
        if(err){
            msg.edit(err);
            return;
        }
    });
}

exports = module.exports = getWarframe;
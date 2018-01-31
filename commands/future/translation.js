const allowed_langs = ['english', 'dragon']

function translate(/* message, */lang, text){
	
	let request = require('request');
    let url;
    let language = lang.toLowerCase();
    
    if (language in allowed_langs)
        url = `https://www.thuum.org/ajax/dictionary/translate-${language}.php`
	
	let callback = (err, res, body) => {
		
		if (err){
			console.log('An error ocurred:', err);
			return;
		} // else the response status code was 200 and it's all ok
		
		console.log('Site data:', body)
		return body;
		
	}
	
	request.post({url: url, form: {translate_text: text}}, callback);
	
}

exports = module.exports = translate;
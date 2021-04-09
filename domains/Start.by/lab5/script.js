
//jQuery(document).ready(function($) {
	function start(){
	var json = {
		"Words": [
			"Анаконда",
			"Антарктида",
			"Бастурма"
		]
	}
	console.log (typeof(JSON.stringify(json)));//В строку
	var jsonString = '{"Words": [ "Анаконда", "Антаркида", "Бастурма" ]}';
	var jsonObject = $.parseJSON(jsonString);//в объект
	
	for (var i = 0; i < jsonObject.Words.length; i++) {//поиск по объекту
		if(jsonObject.Words[i][0] == "А"){
			console.log(jsonObject.Words[i]);
		}
	}
};
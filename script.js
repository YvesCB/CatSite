const Url='https://some-random-api.ml/img/cat'
function catPic(){
	$.getJSON(Url, function(data){
	console.log('Data:' + data["link"])
	document.getElementById("cat").src=data["link"]
	});
}
const factUrl='https://some-random-api.ml/facts/cat'
function catFact(){
	$.getJSON(factUrl, function(data){
	console.log('Data:' + data["fact"])
	document.getElementById("catfact").innerHTML=data["fact"]
	})
}
function doShit() {
	catPic();
	catFact();
}
window.onload = doShit();
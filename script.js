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
const dogUrl='https://some-random-api.ml/img/dog'
function dogPic(){
	$.getJSON(dogUrl, function(data){
	console.log('Data:' + data["link"])
	document.getElementById("dog").src=data["link"]
	});
}
const dogfactUrl='https://some-random-api.ml/facts/dog'
function dogFact(){
	$.getJSON(dogfactUrl, function(data){
	console.log('Data:' + data["fact"])
	document.getElementById("dogfact").innerHTML=data["fact"]
	})
}
function doCatStuff() {
	catPic();
	catFact();
}
function doDogStuff() {
	dogPic();
	dogFact();
}
function doAll() {
	doCatStuff();
	doDogStuff();
}
window.onload = doAll();
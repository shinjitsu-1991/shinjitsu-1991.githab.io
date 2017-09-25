var d= new Date();
var day=d.getDate();
var mounth=d.getMonth()+1;
var year=d.getFullYear();
var datePlace= document.getElementById('date');

document.ready=function(){
	datePlace.innerHTML=day+'.'+mounth+'.'+year;
};
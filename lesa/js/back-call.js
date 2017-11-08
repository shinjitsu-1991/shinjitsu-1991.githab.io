window.onload=function(){
var block=document.getElementById('back-call');
var cross=document.getElementsByClassName('close')[0];
var but=document.getElementsByClassName('call-but');
	
	Array.prototype.slice.call(but).forEach(function (but) {but.onclick = function(){
		block.style.display='flex';
		};
	})
	cross.onclick = function(){
		block.style.display='none';
	};
}

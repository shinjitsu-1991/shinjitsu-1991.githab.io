var tab;
var tabContent;

window.onload=function(){
	tabContent=document.getElementsByClassName('galery-content-block');
	tab=document.getElementsByClassName('tab');
	
	hideContent(1);
}

function hideContent(a){
	for(var i=a;i<tabContent.length;i++){
		tabContent[i].classList.remove('show');
		tabContent[i].classList.add('hide');
		tab[i].classList.remove('active-tab');
	}
}

document.getElementById('galery-menu').onclick=function(event){
	var target=event.target;
	if(target.className=='tab'){
		for(var i=0;i<tab.length;i++){
			if(target==tab[i]){
				showContent(i);
				break;
			}
		}
	}
}

function showContent(b){
	if(tabContent[b].classList.contains('hide')){
		hideContent(0);
		tab[b].classList.add('active-tab');
		tabContent[b].classList.remove('hide');
		tabContent[b].classList.add('show');
	}
}


var tab;
var tabContent;

window.onload=function(){
	tabContent=document.getElementsByClassName('section__item');
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

document.getElementById('tab-block').onclick=function(event){
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


//выпадающее меню в адаптивной версии

 $('#burger-adaptiv').click(function(){
    $('#burger-adaptiv').hide(100);
    $('#close-burger-adaptiv').show(100);
    $('.drop-menu').show(500);
    $('.head-baner__content').css({'visibility':'hidden'});
    $('.head-baner').css({'height':'900px'});
 });

 $('#close-burger-adaptiv').click(function(){
    $('#close-burger-adaptiv').hide(100);
    $('#burger-adaptiv').show(200);
    $('.drop-menu').hide(300);
    $('.head-baner__content').css({'visibility':'visible'});
    $('.head-baner').css({'height':'auto'});
 });
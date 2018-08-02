(function($){
  jQuery.fn.sliderBlock = function(){
    return this.each(function() {
    var mainVariable = $(this);
    mainVariable.addClass('mother');
    mainVariable.wrapAll('<div class="main-slider-wrap"></div>')
/*добавляем для основного блока с слайдами блок навигации*/
    mainVariable.after('<div class="slider-navi"><div class="slider-prev"></div><div class="slider-preview"><div class="slider-preview-wrap"></div></div><div class="slider-next"></div></div>');
/*доп обвертка для слайдов*/
        mainVariable.children().wrapAll('<div class=\'mother-wrap\'></div>');
    var slides=mainVariable.children('.mother-wrap').children();
    slides.addClass('item');
/*привязываем шарину блока навигации к шарине основного блока*/
    var mainWidth = mainVariable.width();
    mainVariable.closest('.main-slider-wrap').find('.slider-navi').width(mainWidth);
    mainVariable.children('.mother-wrap>div').width(mainWidth);
    var mainHeight = mainVariable.height();
    mainVariable.children('.mother-wrap').height(mainHeight);
/*копируем содержимое основного блока в навигационный для создания превью*/
    var motherContent = mainVariable.children('.mother-wrap').html();
    mainVariable.closest('.main-slider-wrap').find('.slider-preview-wrap').html(motherContent);
/*делаем у миниатюр пропорциональную высоту и ширину*/
    var ratio = mainWidth/mainHeight;
    var previewItemWidth = mainVariable.closest('.main-slider-wrap').find('.slider-preview-wrap .item').width();
    mainVariable.closest('.main-slider-wrap').find('.slider-preview-wrap .item').height(previewItemWidth/ratio)
/*принимаем основной блок как массив и считаем количество элементов*/
    var divs = mainVariable.closest('.main-slider-wrap').find('.mother-wrap>.item');
    var n = Number(divs.length);
/*принимаем блок превьюшек как массив*/
    var divsPreview = mainVariable.closest('.main-slider-wrap').find('.slider-preview-wrap>.item');
/**/
    mainVariable.children('.mother-wrap').css({'left':'0px'});
    divsPreview.eq(0).addClass('active');
/**/
    mainVariable.closest('.main-slider-wrap').find('.slider-next').on('click', function () {
        var curPosition=mainVariable.children('.mother-wrap').css('left');
        var curPositionNumb = parseInt(curPosition);
        var mainWidthNumb = Number(mainWidth);
        var newPosition = Number(curPositionNumb-mainWidthNumb);
        if(newPosition<(-((n-1)*mainWidthNumb))){
            newPosition=0;
            mainVariable.children('.mother-wrap').css({'left':newPosition+'px'})
        }
        else{
            mainVariable.children('.mother-wrap').css({'left':newPosition+'px'})
        }
        activePreviewItem(newPosition,mainWidthNumb);
    });
/**/
    mainVariable.closest('.main-slider-wrap').find('.slider-prev').on('click', function () {
        var curPosition=mainVariable.children('.mother-wrap').css('left');
        var curPositionNumb = parseInt(curPosition);
        var mainWidthNumb = Number(mainWidth);
        var newPosition = Number(curPositionNumb+mainWidthNumb);
        if(curPositionNumb==(0)){
            newPosition=(-(mainWidthNumb*(n-1)));
            mainVariable.children('.mother-wrap').css({'left':newPosition+'px'})
        }
        else{
            mainVariable.children('.mother-wrap').css({'left':newPosition+'px'})
        }
        activePreviewItem(newPosition,mainWidthNumb);
    });
/**/
    var previewItems = mainVariable.closest('.main-slider-wrap').find('.slider-preview .item');
    previewItems.each(function () {
        $(this).on('click', function () {
            var previewOrder = ($(this).index());
            var mainWidthNumb = Number(mainWidth);
            var newPosition = Number(mainWidthNumb*previewOrder);
            mainVariable.children('.mother-wrap').css({'left':-(newPosition)+'px'});
            activePreviewItem(newPosition,mainWidthNumb);
        })
    });
    function activePreviewItem(newPosition,mainWidthNumb) {
        var count = (Math.abs(newPosition/mainWidthNumb));
        mainVariable.closest('.main-slider-wrap').find('.slider-preview-wrap .item').removeClass('active');
        mainVariable.closest('.main-slider-wrap').find('.slider-preview-wrap .item').eq(count).addClass('active');
        var previewPosition= (count-2)*20;
        mainVariable.closest('.main-slider-wrap').find('.slider-preview-wrap').css({'right':previewPosition+'%'})
    };
})
};
})(jQuery);
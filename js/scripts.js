/* Scripts */
$(function()
{
   $('.footer .varieties > a').hover(
                 function()
                 {
                    $(this)
                       .children()
                       .filter('img')
                       .animate({
                                   width: 1.2 * block_width,
                                   height: 1.2 * block_height,
                                   left: - 0.1 * block_width,
                                   top: - 0.1 * block_height
                                }, 1000);
                 },
                 function()
                 {
                    $(this)
                       .children()
                       .filter('img')
                       .animate({
                                   width: block_width,
                                   height: block_height,
                                   left: 0,
                                   top: 0
                                }, 1000);

                 }

              ); 
   setVarieties(); 
});

/**
 *   Функция удаления "лишних" символов
 *   Входные данные: строка
 *   Выходные данные: строка
 */
   function trim(string)
   {
      return string.replace(/(^\s+)|(\s+$)/g, "");
   }
   
/**
 *   Функция расчета ширины окна браузера
 *   Входные данные: void
 *   Выходные данные: строка
 */
   function getClientWidth()
   {
      return document.compatMode=='CSS1Compat' && !window.opera?document.documentElement.clientWidth:document.body.clientWidth;
   }
   
/**
 *   Функция расчета высоты окна браузера
 *   Входные данные: void
 *   Выходные данные: строка
 */
   function getClientHeight()
   {
      if (document.body.clientHeight < document.documentElement.clientHeight )

         return document.documentElement.clientHeight;
      else
         return document.compatMode=='CSS1Compat' && !window.opera?document.documentElement.clientHeight:document.body.clientHeight; 
   }
       
function setVarieties()
{
   var width = getClientWidth();
   var height = getClientHeight();

   block_width = width / 5;
   block_height = block_width;

   $('.footer .varieties').height(2 * block_height);
   $('.footer .varieties > a')
      .width(block_width)
      .height(block_height);
   
   $('.footer .varieties > a img')
      .width( block_width)
      .height( block_height);
      

}

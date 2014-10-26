/* JAVASCRIPT */
var admin_menu = false;
jQuery(function()
{
     jQuery('.fixed_header').css('top', (admin_menu? '33px': '0px')); 
     console.log('Call function setFooterOffset');
     setTimeout('setFooterOffset()', 1000);

     // Set Preview products
     setPreviewProducts();
});   

   function setFooterOffset()
   {
      var document_height;

      var admin_menu_height;

      document_height = jQuery('body').height();

      if (admin_menu)
         document_height +=  29;

      if (document_height <= getClientHeight())
      {
         if (admin_menu)
            offset = 27;
         else
            offset = -3;

         result_offset =  (getClientHeight() - document_height) - jQuery('.footer').height() - offset;

         if (result_offset < 0)
            result_offset = 0; 

         jQuery('.footer').css('top', result_offset + 'px'); 
      }
      else
      {
         jQuery('.footer').css('top', '0px'); 
      }
   }

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
       
      
function setPreviewProducts()
{
   var width = getClientWidth();
   var height = getClientHeight();

   block_width = width / 5;
   block_height = block_width;

   jQuery('#page_wrapper .preview-products').height(2 * block_height);
   jQuery('#page_wrapper .preview-products .view-content > div')
      .width(block_width)
      .height(block_height);
   
   jQuery('#page_wrapper .preview-products .view-content > div img')
      .width( block_width)
      .height( block_height);
      

}

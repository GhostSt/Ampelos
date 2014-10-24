<div id="page_wrapper">
   <div class="fixed_header">
      <?php if ($site_name || $site_slogan || $logo)
      { ?>
         <!-- если задано имя сайта, слоган или лого выводим блок заголовков -->
         <hgroup>
            <?php if ($logo) { ?> <!-- Если задан логотип - выводим логотип -->
               <a title="<?php print t('Home'); ?>" rel="home" href="<?php print $front_page; ?>">
               <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>"/></a>
            <?php }  elseif ($site_name) { ?> <!-- Если заданно имя сайта - выводим -->
              <h1><a title="<?php print t('Home'); ?>" rel="home" href="<?php print $front_page; ?>">
              <?php print $site_name; ?></a></h1>
            <?php } elseif ($site_slogan) { ?> <!-- Если задан слоган сайта - выводим -->
              <h2><?php print $site_slogan; ?></h2>
            <?php } ?>
         </hgroup>
      <?php } ?>    

      <?php print_r( $primary_menu); ?>
      <script>
         $(function()
         {
            if ($('#admin-menu-wrapper').lenght) 
            {
               $('.fixed_header').css('top', '30px'); 
            }
         });
      </script>
   </div>
   <div class="header"></div>
   <div class="content"></div>
   <div class="footer"></div>
</div>

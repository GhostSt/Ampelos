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

      <?php 
         if (!empty($primary_menu))
            print_r( $primary_menu); 
      ?>
   </div>

   <?php if (!empty($header)) { ?>
   <div class="header">
      <?php echo $page['header']; ?>
   </div>
   <?php } ?>
   <div class="content">
      <?php if (!empty($breadcrumb)) { 
          print $breadcrumb;
       } ?>

      <?php 
      /*
      if (!empty($title))  
      }
         print render($title_suffix);
         echo $title; 
         print render($title_suffix);
      } 
      */
      ?>

      <?php if (!empty($messages)) { 
         echo $messages; 
      } ?>

      <?php if (!empty($tabs)) { 
         print render($tabs); 
      } ?>

      <?php if (!empty($page['content'])) { 
         print render($page['content']); 
      } ?>
   </div>
   <div class="footer">
      <?php if (!empty($page['footer'])) { 
         print render($page['footer']); 
      } ?>
   </div>
</div>

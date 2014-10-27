<?php

function ampelos_preprocess_page(&$vars) 
{
   if (isset($vars['main_menu'])) 
   {
      $vars['primary_menu'] = theme('links__system_main_menu', array(
                                                                      'links' => $vars['main_menu'],
                                                                      'attributes' => array(
                                                                                              'class' => array('main-menu')
                                                                                           )
                                                                   ));
   }
   else 
   {
      $vars['primary_menu'] = FALSE;
   }

   
   $secondary_menu = menu_tree('menu-secondary-menui');

   $vars['secondary_menu'] =  render($secondary_menu); 
}

function ampelos_js_alter(&$javascript)
{
    $javascript['misc/jquery.js']['data'] = base_path() . drupal_get_path('theme', 'ampelos')  . '/jquery-1.9.1.js'; 
    drupal_add_js('sites/all/libraries/fotorama/fotorama.js');
    drupal_add_css('sites/all/libraries/fotorama/fotorama.css');
}



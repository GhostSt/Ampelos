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
}

function ampelos_js_alter(&$javascript)
{
    $javascript['misc/jquery.js']['data'] = base_path() . drupal_get_path('theme', 'ampelos')  . '/jquery-1.9.1.js'; 
}


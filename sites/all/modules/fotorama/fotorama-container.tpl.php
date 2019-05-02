<div class="fotorama-container">
    <?php foreach ($imgs as $img): ?>
        <a href="<?php print $img['bigUri'];?>"><?php print render($img); ?></a>
    <?php endforeach; ?>    
</div>
<div class="contents col-md-12 col-xs-12 col-sm-12 nopaddingLR" data-aos-once="true">
	<?php if($header_title){?>
       
	<?php } ?>
	<?php if($header_title){?>
	<div class="desc">
		<?php echo html($header_contents);?>
	</div>
	<?php } ?>
	<?php if($tab_items){?>
	<ul class="product-tabs" style="margin-top:50px">
		<?php foreach($tab_items as $key => $tab){?>
		<li class="<?php if($tab['active']){?>active<?php } ?>">
			<a href="<?php echo $tab['link'];?>" class="<?php if($key == 2 | $key == 0){?>lastButton<?php } ?>"><?php echo $tab['title'];?></a>
		</li>
		<?php } ?>
	</ul>
	<?php } ?>
</div>
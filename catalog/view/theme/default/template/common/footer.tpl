<div id="footer-area">
	
<footer>
	<div class="container">

		<div class="footer-upper-contet">

			<div class="footer-contact-info">
				<h5><?= $store; ?></h5>
				<p class="m0">
				<?= $text_address; ?>: <?= $address; ?><br/>
				<?= $text_telephone; ?>: <a href="tel:<?= $telephone; ?>" ><?= $telephone; ?></a><br/>
				<?php if($fax){ ?>
					<?= $text_fax; ?>: <a href="fax:<?= $fax; ?>" ><?= $fax; ?></a><br/>
				<?php } ?>
				<?= $text_email; ?>: <a href="mailto:<?= $email; ?>" ><?= $email; ?></a><br/>

				<?php if($social_icons){ ?>
				<div class="footer-social-icons">
					<?php foreach($social_icons as $icon){ ?>
					<a href="<?= $icon['link']; ?>" title="<?= $icon['title']; ?>" alt="
								<?= $icon['title']; ?>" target="_blank">
						<img src="<?= $icon['icon']; ?>" title="<?= $icon['title']; ?>" class="img-responsive" alt="<?= $icon['title']; ?>" />
					</a>
					<?php } ?>
				</div>
				<?php } ?>
				</p>
			</div>

			<?php if ($menu) { ?>
				<?php foreach($menu as $links){ ?>
				<div class="footer-contact-links">
					<h5>
						<?php if($links['href'] != '#'){ ?>
						<?= $links['name']; ?>
						<?php }else{ ?>
						<a href="<?= $links['href']; ?>" 
							<?php if($links['new_tab']){ ?>
								target="_blank"
							<?php } ?>
							>
							<?= $links['name']; ?></a>
						<?php } ?>
					</h5>
					<?php if($links['child']){ ?>
					<ul class="list-unstyled">
						<?php foreach ($links['child'] as $each) { ?>
						<li><a href="<?= $each['href']; ?>"
							<?php if($each['new_tab']){ ?>
								target="_blank"
							<?php } ?>
							
							>
								<?= $each['name']; ?></a></li>
						<?php } ?>
					</ul>
					<?php } ?>
				</div>
				<?php } ?>
			<?php } ?>

		</div>
		
		<hr/>
		<div class="footer-bottom row">
			<div class="col-xs-12 col-sm-6">
				<p><?= $powered; ?></p>
			</div>
			<div class="col-xs-12 col-sm-6 text-sm-right">
				<p><?= $text_fcs; ?></p>
			</div>
		</div>
	</div>
</footer>
</div>
<div id="ToTopHover" ></div>

<?php if(isset($update_price_status) && $update_price_status) { ?>
	<script type="text/javascript">
    $(".product-inputs input[type='checkbox']").click(function() {
      var product_id = $(this).data('product-id');
      changePrice(product_id);
    });
    $(".product-inputs input[type='radio']").click(function() {
      var product_id = $(this).data('product-id');
      changePrice(product_id);
    });
    $(".product-inputs select").change(function() {
      var product_id = $(this).data('product-id');
      changePrice(product_id);
    });
    $(".input-number").blur(function() {
      var product_id = $(this).data('product-id');
      changePrice(product_id);
    });
    $(".input-number").parent(".input-group").find(".btn-number").click(function() {
      var product_id = $(this).data('product-id');
      changePrice(product_id);
    });
    function changePrice(product_id) {
      $.ajax({
        url: 'index.php?route=product/product/updatePrice&product_id=' + product_id,
        type: 'post',
        dataType: 'json',
        data: $('#product-'+ product_id + ' input[name=\'quantity\'], #product-'+ product_id + ' select, #product-'+ product_id + ' input[type=\'checkbox\']:checked, #product-'+ product_id + ' input[type=\'radio\']:checked'),
        success: function(json) {
          $('.alert-success, .alert-danger').remove();
          if(json['new_price_found']) {
            $('.product-price-'+product_id+' .price .price-new').html(json['total_price']);
            $('.product-price-'+product_id+' .price .price-tax').html(json['tax_price']);
          } else {
            $('.product-price-'+product_id+' .price .price-new').html(json['total_price']);
            $('.product-price-'+product_id+' .price .price-tax').html(json['tax_price']);
          }
        }
      });
    }
	</script>
<?php } ?>
<script>AOS.init({
	once: true
});</script>
<?php 
/* extension bganycombi - Buy Any Get Any Product Combination Pack */
echo $bganycombi_module; 
?>
</body></html>
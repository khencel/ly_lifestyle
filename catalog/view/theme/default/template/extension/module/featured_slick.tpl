
<div class="featured-module featured_<?= $uqid; ?>">
 <div class="custom-heading">
    <div class="header-product">
    <div class="head_label"><?= $heading_title; ?></div>
    <div class="under-Label">
        <span>Contrary to popular belief, Lorem Ipsum is not simply random text</span>
    </div>
    </div>
    <div class="head-featured row">
        <div class="col-md-6">
            <div class="head_label" style="text-align:left;padding-left:40px;"><?= $heading_title; ?></div>
            <div class="under-Label" style="text-align:left;padding-left:40px;">
                <span>Contrary to popular belief, Lorem Ipsum is not simply random text</span>
            </div>
        </div>

        <div class="col-md-6" style="text-align:right;padding-right:55px;">
          <button class="custom-button">VIEW ALL</button>
        </div>
    </div>

  </div>
  <div class="featured section relative" style="opacity: 0;">
    <div id="featured_slider_<?= $uqid; ?>" >
      <?php foreach ($products as $product) { ?>
        <?= html($product); ?>
      <?php } ?>
    </div>
    <script type="text/javascript">
      $(window).load(function(){
        setTimeout(function () {
          featured_product_slick<?= $uqid; ?>();
          AOS.init();
        }, 250);
      });

      function featured_product_slick<?= $uqid; ?>(){
        $("#featured_slider_<?= $uqid; ?>").on('init', function (event, slick) {
          $('#featured_slider_<?= $uqid; ?>').parent().removeAttr('style');
        });

        $("#featured_slider_<?= $uqid; ?>").slick({
          dots: false,
          infinite: false,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
          ],
          prevArrow: "<div class='pointer slick-nav left prev absolute' ><div class='absolute position-center-center'>
            <img src='image/catalog/general/left-min.png'>
          </div></div>",
          nextArrow: "<div class='pointer slick-nav right next absolute'><div class='absolute position-center-center'>
            <img src='image/catalog/general/right-min.png'>
          </i></div></div>",
        });
        
        $('.product-inputs').remove();
        $('.cart-buttons').remove();
      }
    </script>
  </div>
</div>
<?php echo $header; ?>
<div class="">
  <?php echo $content_top; ?>
  <div class="page_path">
      <?php foreach ($breadcrumbs as $key => $breadcrumb) { ?>
        <a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a>//
      <?php } ?>
  </div>
    
  
  <div class="row" style="padding-left:70px;padding-right:70px;">

    <div style="color:black;font-size:30px;font-weight:bold;padding:25px;text-align:center"><?php echo $heading_title; ?></div>
  
    <?php echo $column_left; ?>

    <?php if ($column_left && $column_right) { ?>
    <?php $class = 'col-sm-6'; ?>
    <?php } elseif ($column_left || $column_right) { ?>
    <?php $class = 'col-sm-9'; ?>
    <?php } else { ?>
    <?php $class = 'col-sm-12'; ?>
    <?php } ?>

    <div id="content" class="<?php echo $class; ?>">

      <div id="product-filter-replace">
        <div id="product-filter-loading-overlay"></div>
        
          <?php if ($products) { ?>
          
            <?php include_once('sort_order.tpl'); ?>
              
            <div id="product-filter-detect">
              
              <div class="row row-special">
                <div class="product-view">
                  <?php foreach ($products as $product) { ?>
                    <?php echo $product; ?>
                  <?php } ?>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-12 text-center"><?php echo $pagination; ?></div>
              </div>

            </div> <!-- product-filter-detect -->

          <?php } ?>

          <?php if (!$products) { ?>
          
            <p><?php echo $text_empty; ?></p>
            <div class="buttons hidden">
              <div class="pull-right"><a href="<?php echo $continue; ?>" class="btn btn-primary"><?php echo $button_continue; ?></a></div>
            </div>

          <?php } ?>

      </div> <!-- product-filter-replace -->
    </div> <!-- #content -->

    <?php echo $column_right; ?></div>
    <?php echo $content_bottom; ?>
</div>
<?php echo $footer; ?>

<script>
  $('#pg-banner-wrap').css({"background-image":"url('image/catalog/general/bg-min.png')","background-size": "cover","padding-top":"11%"});
  $('.page-banner-title').remove();
  $(window).on('scroll',function(e){
    var scrolled = $(this).scrollTop() > 50;
    $("header").css('background-color', scrolled ? '#fff' : "rgba(0, 0, 0, 0.0)");
  });
</script>

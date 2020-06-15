<?php echo $header; ?>
<div class="container-fluid" style="background-image:url('image/catalog/general/bg-min.png');background-size:cover">
  <?php echo $content_top; ?>
  <div class="page_path">
      <?php foreach ($breadcrumbs as $key => $breadcrumb) { ?>
        <a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a>//
      <?php } ?>
  </div>
  <div class="row"><?php echo $column_left; ?>
    <?php if ($column_left && $column_right) { ?>
    <?php $class = 'col-sm-6'; ?>
    <?php } elseif ($column_left || $column_right) { ?>
    <?php $class = 'col-sm-9'; ?>
    <?php } else { ?>
    <?php $class = 'col-sm-12'; ?>
    <?php } ?>
    <div id="content" class="<?php echo $class; ?>">
      <div class="row" style="margin-top:70px;margin-left:100px;margin-right:100px">
            <img src="image/catalog/products/shape-min.png" class="img-responsive" style="position:absolute;left:0px;top:200px"/>
            <div class="col-md-6" style="padding-left: 60px;padding-right: 60px">
                <img src="image/catalog/about/1-min.jpg" class="img-responsive"/>
            </div>
            <div class="col-md-6" style="padding-top:60px">
              <span class="head_label"><?php echo $heading_title; ?></span>
              <p style="margin-top:20px;font-weight:bold">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p style="margin-top:20px;font-weight:bold">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
              </p>
            </div>
      </div>
    </div>
    <?php echo $column_right; ?></div>
    
</div>
<?php echo $content_bottom; ?>
<?php echo $footer; ?>

<style type="text/css">
  .section-space{
    padding-bottom:0px !important;
  }
</style>

<script>
  $(window).on('scroll',function(e){
    var scrolled = $(this).scrollTop() > 50;
    $("header").css('background-color', scrolled ? '#fff' : "rgba(0, 0, 0, 0.0)");
  });
</script>

<?php echo $header; ?>

<div class="container-fluid">

  <div class="row"><?php echo $column_left; ?>
    <?php if ($column_left && $column_right) { ?>
    <?php $class = 'col-sm-6'; ?>
    <?php } elseif ($column_left || $column_right) { ?>
    <?php $class = 'col-sm-9'; ?>
    <?php } else { ?>
    <?php $class = 'col-sm-12'; ?>
    <?php } ?>
    <div id="content" class="<?php echo $class; ?>"><?php echo $content_top; ?><?php echo $content_bottom; ?></div>
  
    <?php echo $column_right; ?></div>
</div>
<?php echo $footer; ?>

<style>
  .section-space{
      padding:0px !important;
  }
  .html-44{
    padding-top:100px;
  }
  .featured-module{
    padding-left: 7%;
    padding-right: 7%;
  }

  #slideshow1>.owl-stage-outer{
    margin-left:10% !important;
      padding:0px !important;
  }

  #slideshow1>.owl-nav{
      display: block;
  }
  #slideshow1>.slider-dots>.owl-dot{
      bottom:-6px;
      margin-top:20px !important;
      height:10px !important;
      width:60% !important;
      left:0px !important;
  }

  #slideshow1>.slider-dots>.owl-dot.active{
      bottom:-6px;
      right:0px !important;
      height:10px !important;
      width:20% !important;
  }

  #slideshow1>.slider-dots{
      position:relative !important;
  }

  .home-parallax{
    background-image:url('image/catalog/bg.jpg');
    height: 430px; 
    text-align: center;
    position:relative;
    background-color: rgba( 0, 0, 0, 0.4);
    background-blend-mode: overlay;
  }

  #slideshow1{
    margin-top: 10%;
  }

  .owl-prev{
    height: 0px;
    top: -10%;
    left:75% !important;
  }

  .owl-next{
    height: 0px;
    top: -10%;
    right: 20% !important;
  }

  
</style>

<script>
  $('.header-product').remove();
  $('.html-44').removeClass('section-space');
  $(window).on('scroll',function(e){
    var scrolled = $(this).scrollTop() > 50;
    $("header").css('background-color', scrolled ? '#fff' : "rgba(0, 0, 0, 0.0)");
  });
</script>
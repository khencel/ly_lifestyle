<style>
  .slideshow-text-0{
    color:black;
    font-weight:bold;
  }
  .slideshow-text-1{
    color:black;
    font-size:15px !important;
    margin-left:50px;
    line-height: 1.8;
  }
  #slideshow0>.owl-stage-outer>.owl-stage>.owl-item.active>.relative>.slider-slideshow-description>.container>.slider-slideshow-description-texts{
    width: 50%;
    position:relative;
    left:40%;
  }
  .slider-slideshow-description-link{
    margin-left:50px;
    margin-top:30px;
  }

  
</style>

<div style="position:relative;">
<div id="slideshow<?= $module; ?>" class="relative owl-carousel"  style="opacity: 1; width: 100%;">
  
  <?php foreach ($banners as $banner) { ?>
    <div class="relative h100">
      <img src="<?= $banner['image']; ?>" alt="<?= $banner['title']; ?>" class="img-responsive hidden-xs" />
      <img src="<?= $banner['mobile_image']; ?>" alt="<?= $banner['title']; ?>" class="img-responsive visible-xs" />
      <?php if($banner['description']){ ?>
        <div class="slider-slideshow-description w100 absolute position-center-center background-type-<?= $banner['theme']; ?>">
          <div class="container">
            <div class="slider-slideshow-description-texts">
              <?= $banner['description']; ?>

              <?php if ( $banner['link'] && $banner['link_text'] ) { ?>
              <div class="slider-slideshow-description-link">
                <a href="<?= $banner['link']; ?>" class="custom-button">
                  <?= $banner['link_text']; ?>
                </a>
              </div>
              <!--class:slider-slideshow-description-link-->
              <?php } ?>
            </div>
            <!--class:slider-slideshow-description-texts-->
          </div>
          <!--class:container-->
        </div>
        
        
        <!--class:slider-slideshow-description-->
      <?php } ?>
      
      <?php if($banner['link']){ ?>
        <a href="<?= $banner['link']; ?>" class="block absolute position-left-top w100 h100"></a>
      <?php } ?>
      
    </div>
  <?php } ?>
</div>
<button style="position:absolute !important;right:0px !important;margin-right:10% !important;top:-16%;z-index:1" class="custom-button">VIEW ALL</button>
</div>
<?php //include('slideshow_script_slick.tpl'); ?>
<?php include('slideshow_script_owl.tpl'); ?>
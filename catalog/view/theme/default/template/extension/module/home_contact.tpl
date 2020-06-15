<div class="top-contents" >
   
    <div class="container-fluid">

        <div class="custom-heading">

        </div>
        <div class="row">
            <div class="col-lg-6 px-0 h-100">
             
                <!-- Responsive iFrame -->
<div class="Flexible-container">
<?= $gmap_iframe ?>
   
</div>
            </div>
            <div class="col-lg-6 py-5" style="background: url(image/<?php echo $top_contents_background_image; ?>) no-repeat;    background-size: cover">
                
                <div class="row">
                    <div class="col-lg-12">
                    <h3 class="text-center text-lg-left ml-4"><?php echo html($header_title); ?></h3>
                        <div class="row pl-4 mt-5">
                        
                            <div class="col-lg-4 ">
                            <p><?php echo html($title); ?></p>
                                <p><?php echo html($description); ?></p>
                                <ul class="list-unstyled border-left">
                                    <li><span><?= $text_telephone ?></span>
                                        <a href="tel:<?= $store_telephone; ?>" alt="<?= $store_telephone; ?>" title="<?= $store_telephone; ?>"><?= $store_telephone; ?></a>
                                    </li>
                                    <li><span><?= $text_fax ?></span>
                                        <a href="tel:<?= $fax; ?>" alt="<?= $fax; ?>" title="<?= $fax; ?>"><?= $fax; ?></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-8">
                              <p><?php echo html($title); ?></p>
                                <p><?php echo html($description); ?></p>
                                <ul class="list-unstyled border-left">
                                    <li><?= $address; ?></li>
                                    <li>
                                        <span><?= $text_email; ?></span>:
                                        <a href="mailto:<?= $config_email; ?>" alt="<?= $config_email; ?>" title="<?= $config_email; ?>"><?= $config_email; ?></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <form action="<?= $action; ?>" method="post" enctype="multipart/form-data" class=" form-contacts">

                    <div class="contact mt-3">
                        <div class="form-row p-0">
                            <div class="form-group col-md-6 group required">
                                <input type="text" name="firstname" value="<?= $firstname; ?>" id="input-firstname" class="form-control" placeholder="<?= $entry_firstname; ?>" />
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <?php if ($error_firstname) { ?>
                                    <div class="text-danger"><?= $error_firstname; ?></div>
                                <?php } ?>
                            </div>

                            <div class="form-group col-md-6 group required">
                                <input type="text" name="lastname" value="<?= $lastname; ?>" id="input-lastname" class="form-control" placeholder="<?= $entry_lastname; ?>" />
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <?php if ($error_lastname) { ?>
                                    <div class="text-danger"><?= $error_lastname; ?></div>
                                <?php } ?>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6 group required">
                                <input type="text" name="email" value="<?= $email; ?>" id="input-email" class="form-control" placeholder="<?= $entry_email; ?>" />
                                <span class="highlight"></span>
                                <span class="bar"></span>

                                <?php if ($error_email) { ?>
                                    <div class="text-danger"><?= $error_email; ?></div>
                                <?php } ?>
                            </div>

                            <div class="form-group col-md-6 group required">
                                <input type="tel" name="telephone" value="<?= $telephone; ?>" id="input-telephone" class="form-control input-number" placeholder="<?= $entry_telephone; ?>" />
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <?php if ($error_telephone) { ?>
                                    <div class="text-danger"><?= $error_telephone; ?></div>
                                <?php } ?>
                            </div>
                        </div>

                        <div class="form-row">

                            <div class="form-group  group required col-md-12">
                                <input type="text" name="subject" value="<?= $subject; ?>" id="input-subject" class="form-control" placeholder="<?= $entry_subject; ?>" />
                                <span class="highlight"></span>
                                <span class="bar"></span>
                            </div>
                            <?php if ($error_subject) { ?>
                                <div class="text-danger"><?= $error_subject; ?></div>
                            <?php } ?>



                            <div class="form-group group required message col-md-12 mb-0 ">
                                <div class="text-group">
                                    <textarea name="enquiry" id="input-enquiry" required="required" class="form-control" placeholder="<?= $entry_enquiry; ?>" rows="3"><?= $enquiry; ?></textarea>
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                </div>


                            </div>
                            <?php if ($error_enquiry) { ?>
                                <div class="text-danger"><?= $error_enquiry; ?></div>
                            <?php } ?>
                        </div>
                    </div>
                    <div class="contact-footer text-center ">
                        <?= $captcha; ?>
                        <button class="btn btn-primary btn-app-fill text-right float-right shadow" type="submit"><?= html($text_btn_submit); ?></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>





<script type="text/javascript">
    $(document).ready(function() {
        <?php if (isset($error)) { ?>
            $("html, body").animate({
                scrollTop: $(".form-contacts").offset().top
            }, 'slow');
        <?php } ?>
    });
</script>
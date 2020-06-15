<?= $header; ?>
<div class="container">
	<?= $content_top; ?>
	<ul class="breadcrumb">
		<?php foreach ($breadcrumbs as $breadcrumb) { ?>
			<li><a href="<?= $breadcrumb['href']; ?>"><?= $breadcrumb['text']; ?></a></li>
		<?php } ?>
	</ul>
	<div class="row"><?= $column_left; ?>
		<?php if ($column_left && $column_right) { ?>
			<?php $class = 'col-sm-6'; ?>
			<?php } elseif ($column_left || $column_right) { ?>
			<?php $class = 'col-sm-9'; ?>
			<?php } else { ?>
			<?php $class = 'col-sm-12'; ?>
		<?php } ?>
		<div id="content" class="<?= $class; ?>">
			<h2><?= $heading_title; ?></h2>
			<h3><?= $text_location; ?></h3>
			<div class="panel panel-default">
				<div class="panel-body">
					<div class="row">
						<div class="col-xs-12">
							<div class="iframe-wrap"><?= $gmap_iframe ?></div>
							<?php /* ?>
							<?php if ($geocode || $google_map) { ?>
								<div data-id="gmap_contact" data-toggle="gmap" class="gmap"
									<?php if($google_map){ ?>
										data-lat="<?= $google_map['lat']; ?>" 
										data-lng="<?= $google_map['lng']; ?>" 
										data-store="<?= $google_map['store']; ?>" 
										data-address="<?= $google_map['address']; ?>" 
									<?php } ?>
									data-geo="<?= $geocode; ?>">
									<div id="gmap_contact"></div>
								</div>
							<?php } ?>
							<?php */ ?>
						</div>
						<div class="col-sm-3"><strong><?= $store; ?></strong><br />
							<address>
								<?= $address; ?>
							</address>
						</div>
						<div class="col-sm-3"><strong><?= $text_telephone; ?></strong><br>
							<a href="tel:<?= $store_telephone; ?>" alt="<?= $store_telephone; ?>" title="<?= $store_telephone; ?>" ><?= $store_telephone; ?></a><br />
							<br />
							<?php if ($fax) { ?>
								<strong><?= $text_fax; ?></strong><br>
								<a href="fax:<?= $fax; ?>" alt="<?= $fax; ?>" title="<?= $fax; ?>" ><?= $fax; ?></a>
							<?php } ?>
						</div>
						<div class="col-sm-3">
							<?php if ($open) { ?>
								<strong><?= $text_open; ?></strong><br />
								<?= $open; ?><br />
								<br />
							<?php } ?>
							<?php if ($comment) { ?>
								<strong><?= $text_comment; ?></strong><br />
								<?= $comment; ?>
							<?php } ?>
						</div>
					</div>
				</div>
			</div>
			<?php if ($locations) { ?>
				<h3><?= $text_store; ?></h3>
				<div class="panel-group" id="accordion">
					<?php foreach ($locations as $index => $location) { ?>
						<div class="panel panel-default">
							<div class="panel-heading">
								<h4 class="panel-title">
									<a href="#collapse-location<?= $location['location_id']; ?>" class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" >
										<?= $location['name']; ?> <i class="fa fa-caret-down"></i>
									</a>
								</h4>
							</div>
							<div class="panel-collapse collapse" id="collapse-location<?= $location['location_id']; ?>" >
								<div class="panel-body">
									<div class="row">
											<div class="col-sm-12">
												<div class="iframe-wrap"><?= $location['gmap_iframe'] ?></div>
											</div>
										    <?php /*if ($location['geocode'] || $location['google_map']) { ?> 
												<div class="col-sm-12">
													<div data-id="gmap<?= $index; ?>" data-toggle="gmap" class="gmap"
														<?php if($location['google_map']){ ?>
															data-lat="<?= $location['google_map']['lat']; ?>" 
															data-lng="<?= $location['google_map']['lng']; ?>" 
															data-store="<?= $location['google_map']['store']; ?>" 
															data-address="<?= $location['google_map']['address']; ?>" 
														<?php } ?>
													>
													<div id="gmap<?= $index; ?>" ></div>
													</div>
												</div>
											<?php }*/ ?>
										
										<?php if ($location['image']) { ?>
											<div class="col-sm-3"><img src="<?= $location['image']; ?>" alt="<?= $location['name']; ?>" title="<?= $location['name']; ?>" class="img-thumbnail" /></div>
										<?php } ?>
										<div class="col-sm-3"><strong><?= $location['name']; ?></strong><br />
											<address>
												<?= $location['address']; ?>
											</address>
											<?php if ($location['geocode']) { ?>
												<a href="https://maps.google.com/maps?q=<?= urlencode($location['geocode']); ?>&hl=<?= $geocode_hl; ?>&t=m&z=15" target="_blank" class="btn btn-info"><i class="fa fa-map-marker"></i> <?= $button_map; ?></a>
											<?php } ?>
										</div>
										<div class="col-sm-3"> <strong><?= $text_telephone; ?></strong><br>
											<?= $location['telephone']; ?><br />
											<br />
											<?php if ($location['fax']) { ?>
												<strong><?= $text_fax; ?></strong><br>
												<?= $location['fax']; ?>
											<?php } ?>
										</div>
										<div class="col-sm-3">
											<?php if ($location['open']) { ?>
												<strong><?= $text_open; ?></strong><br />
												<?= $location['open']; ?><br />
												<br />
											<?php } ?>
											<?php if ($location['comment']) { ?>
												<strong><?= $text_comment; ?></strong><br />
												<?= $location['comment']; ?>
											<?php } ?>
										</div>
									</div>
								</div>
							</div>
						</div>
					<?php } ?>
				</div>
				
			<?php } ?>
			<form action="<?= $action; ?>" method="post" enctype="multipart/form-data" class="form-horizontal">
				<h3><?= $text_contact; ?></h3>
				<div class="contact-body">
					<div class="form-group required">
						<label class="control-label" for="input-name"><?= $entry_name; ?></label>
						<input type="text" name="name" value="<?= $name; ?>" id="input-name" class="form-control" placeholder="<?= $entry_name; ?>" />
						<?php if ($error_name) { ?>
							<div class="text-danger"><?= $error_name; ?></div>
						<?php } ?>								
					</div>
				
					<div class="form-group required">
						<label class="control-label" for="input-email"><?= $entry_email; ?></label>
						<input type="text" name="email" value="<?= $email; ?>" id="input-email" class="form-control" placeholder="<?= $entry_email; ?>" />
						<?php if ($error_email) { ?>
							<div class="text-danger"><?= $error_email; ?></div>
						<?php } ?>
					</div>
				
					<div class="form-group required">
						<label class="control-label" for="input-telephone"><?= $entry_telephone; ?></label>
						<input type="tel" name="telephone" value="<?= $telephone; ?>" id="input-telephone" class="form-control input-number" placeholder="<?= $entry_telephone; ?>" />
						<?php if ($error_telephone) { ?>
							<div class="text-danger"><?= $error_telephone; ?></div>
						<?php } ?>
					</div>

					<div class="form-group required">
						<label class="control-label" for="input-subject"><?= $entry_subject; ?></label>
						<input type="text" name="subject" value="<?= $subject; ?>" id="input-subject" class="form-control" placeholder="<?= $entry_subject; ?>" />
						<?php if ($error_subject) { ?>
							<div class="text-danger"><?= $error_subject; ?></div>
						<?php } ?>
					</div>

					<div class="form-group required">
						<label class="control-label" for="input-enquiry"><?= $entry_enquiry; ?></label>
						<textarea name="enquiry" rows="10" id="input-enquiry" class="form-control" placeholder="<?= $entry_enquiry; ?>"><?= $enquiry; ?></textarea>
						<?php if ($error_enquiry) { ?>
							<div class="text-danger"><?= $error_enquiry; ?></div>
						<?php } ?>
					</div>
				</div>
				<div class="contact-footer text-center">
					<?= $captcha; ?>
					<input class="btn btn-primary pull-sm-right" type="submit" value="<?= $button_submit; ?>" />
				</div>
			</form>
		</div>
	<?= $column_right; ?></div>
	<?= $content_bottom; ?>
</div>
<?= $footer; ?>

<button id="articles-filter-trigger-open" class="btn btn-primary" onclick="$('#articles-column-left').addClass('open');" ><?= $button_filter; ?></button>
<div id="articles-column-left" class="f16">
	<button id="articles-filter-trigger-close" class="btn btn-danger fixed position-right-top" onclick="$('#articles-column-left').removeClass('open');"> <i class="fa fa-times"></i> </button>
	<div class="elsie f30 upper pd-b40"><?= $text_categories ?></div>
	<div class="pd-b40">
		<div class="list-group news-ctgr">
		<?php foreach ($categories as $c) { ?>
			<div class="list-group-item">
				<a href="<?= $c['url'] ?>" class="block <?= $ncategory_id == $c['ncategory_id'] ? 'active' : '' ?>"><?= $c['name'] ?></a>
			</div>
		<?php } ?>
		</div>
	</div>
	<div class="elsie f30 upper pd-b40"><?= $text_year ?></div>
	<div class="list-group pd-b40">
		<?php $index = 0; ?>
				<?php foreach ($archives as $archive) { ?>
			<?php $index++ ?>
			<?php //if ($index > 1 && (count($archive['month']) > 3 || count($archive) > 4) && (count($archive) > 2 || count($archive['month']) > 5)) { ?>
				<span class="list-group-item hidesthemonths" style="cursor: pointer"><a href="<?php echo $archive['yr_href']; ?>" style="padding:0;"><?php echo $archive['year']; ?></a>
				<div class="list-group" <?= $achive_yr == $archive['year'] ? 'style="display: block;"' : 'style="display: none;"' ?>>
					<?php foreach ($archive['month'] as $month) { ?>
							<a class="list-group-item <?= $archive_query == ($archive['year'].'-'.$month['num']) ? 'active' : '' ?>" href="<?php echo $month['href']; ?>"><?php echo $month['name']; ?></a>
						<?php } ?>
				</div>
				</span>
			<?php /*} else { ?>
				<?php foreach ($archive['month'] as $month) { ?>
					<a href="<?php echo $month['href']; ?>" class="list-group-item"><?php echo $month['name']; ?></a>
				<?php } ?>
			<?php }*/ ?>
				<?php } ?>
			<?php echo !$archives ? 'No articles' : ''; ?>
	</div>
</div>
<script type="text/javascript">
$(document).ready(function () {
	$('.hidesthemonths').on('click', function () {
		$(this).find('div').slideToggle('fast');
	});
});
</script>
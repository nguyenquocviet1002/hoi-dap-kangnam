<style>
	<?php include(locate_template("Module/Header/header_knhd_1_0_0/sass/header_knhd_1_0_0.min.css")); ?>
</style>
<header class="header_knhd_1_0_0">
	<div class="container">
		<?php
			if ( is_front_page() && is_home() ) {
				$div = 'h1';
			} else {
				$div = 'div';
			}
			echo '
				<'.$div.' class="header_knhd_1_0_0__logo">
					<a href="/">
						<img width="167" height="79" src="'.$path.'/images/logo.png" alt="Hỏi đáp Kangnam">
					</a>
				</'.$div.'>
			';
		?>
		<?php
			if ( !is_front_page() && !is_home() ):
		?>
		<form class="header_knhd_1_0_0__search" action="/" id="searchform" name="searchform" method="get" onsubmit="return checkSearch()">
			<div class="header_knhd_1_0_0__input">
				<input id="s" name="s"  type="text" placeholder="Gõ câu hỏi...">
				<div class="header_knhd_1_0_0__close"><img width="12" height="12" src="<?php echo $path ?>images/icon-close.svg" alt="close search"></div>
				<div class="header_knhd_1_0_0__dropdown"></div>
			</div>
			<button type="submit" class="header_knhd_1_0_0__btnSearch"><img width="40" height="40" src="<?php echo $path ?>images/icon-search.svg" alt="Search"></button>
		</form>
		<!-- <div class="header_knhd_1_0_0__search">
			<div class="header_knhd_1_0_0__input">
				<input type="text" placeholder="Gõ câu hỏi...">
				<div class="header_knhd_1_0_0__close"><img width="12" height="12" src="<?php echo $path ?>images/icon-close.svg" alt=""></div>
				<div class="header_knhd_1_0_0__dropdown">
					<div class="header_knhd_1_0_0__item">
						<span class="header_knhd_1_0_0__iconNumber">1</span>
						<a href="#" class="header_knhd_1_0_0__link">Sau khi thực hiện phẫu thuật nâng, chỉnh sửa mũi bao lâu thì bệnh nhân có thể đi làm bình thường được?</a>
					</div>
					<div class="header_knhd_1_0_0__item">
						<span class="header_knhd_1_0_0__iconNumber">2</span>
						<a href="#" class="header_knhd_1_0_0__link">Sau khi thực hiện phẫu thuật nâng, chỉnh sửa mũi bao lâu thì bệnh nhân có thể đi làm bình thường được?</a>
					</div>
				</div>
			</div>
			<button class="header_knhd_1_0_0__btnSearch"><img width="40" height="40" src="<?php echo $path ?>images/icon-search.svg" alt=""></button>
		</div> -->
		<?php
			endif;
		?>
		<div class="header_knhd_1_0_0__action">
			<div class="header_knhd_1_0_0__btn header_knhd_1_0_0__iconSearch">
				<div class="header_knhd_1_0_0__icon"><img width="41" height="40" src="<?php echo $path ?>images/icon-search.svg" alt=""></div>
			</div>
			<div class="header_knhd_1_0_0__btn header_knhd_1_0_0__hotline">
				<a href="tel:19006466" class="header_knhd_1_0_0__icon" aria-label="call"><img width="41" height="40" src="<?php echo $path ?>images/call.svg" alt=""></a>
				<div class="header_knhd_1_0_0__text">
					<p class="header_knhd_1_0_0__textSmall">Hotline</p>
					<p class="header_knhd_1_0_0__textBold">1900.6466</p>
				</div>
			</div>
			<div class="header_knhd_1_0_0__btn header_knhd_1_0_0__regis knhd_tv">
				<div class="header_knhd_1_0_0__icon"><img width="41" height="40" src="<?php echo $path ?>images/calculator.svg" alt=""></div>
				<div class="header_knhd_1_0_0__text">
					<p class="header_knhd_1_0_0__textBold">Đặt lịch bác sĩ</p>
				</div>
			</div>
		</div>
	</div>
</header>

<script>
	<?php include(locate_template("Module/Header/header_knhd_1_0_0/js/header_knhd_1_0_0.min.js")); ?>
</script>

<?php // echo $field['html']; ?>
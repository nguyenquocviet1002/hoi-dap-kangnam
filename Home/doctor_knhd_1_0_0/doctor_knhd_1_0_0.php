<style>
    <?php include(locate_template("Module/Home/doctor_knhd_1_0_0/sass/doctor_knhd_1_0_0.min.css"));  ?>
</style>

<section class="doctor_knhd_1_0_0">
    <div class="doctor_knhd_1_0_0__list">
        <div class="doctor_knhd_1_0_0__scroll">
            <?php
                $related = get_posts( 
                    array( 
                        'post_type'=> 'doi-ngu-bac-si',
                        'numberposts' => 10, 
                        'order' => 'ASC',
                    ) 
                );
                if( $related ) foreach( $related as $key => $post ) {
                    setup_postdata($post); 
                    $time = get_the_date('d/m/Y');
                    $title = get_the_title();
                    $link = get_permalink();
                    $kim = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'large');            
                    $img = ($kim[0]!='')?$kim[0]:catch_that_image($post->ID);
                    $degree = get_field('degree');
                    $bs_sapo = get_field('bs_sapo');
                    echo'
                        <div class="doctor_knhd_1_0_0__item">
                            <div class="doctor_knhd_1_0_0__avt"><img width="100" height="100" src="'.$img.'" alt="'.$title.'"></div>
                            <div class="doctor_knhd_1_0_0__info">
                                <div class="doctor_knhd_1_0_0__position">'.$degree.'</div>
                                <a href="'.$link.'" class="doctor_knhd_1_0_0__name">'.$title.'</a>
                                <div class="doctor_knhd_1_0_0__desc">'.$bs_sapo.'</div>
                            </div>
                            <div class="doctor_knhd_1_0_0__btn">
                                <a class="quick_form" data-id="'.$post->ID.'" data-name="'.$title.'" href="#">Gửi câu hỏi</a>
                            </div>
                        </div>
                    ';	
                }
                wp_reset_postdata(); 
            ?>
        </div>
    </div>
</section>
<script>
    <?php include(locate_template("Module/Home/doctor_knhd_1_0_0/js/doctor_knhd_1_0_0.min.js"));  ?>
</script>
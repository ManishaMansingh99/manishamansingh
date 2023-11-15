// jQuery(document).ready(function($){
// 	var $timeline_block = $('.cd-timeline-block');

// 	$timeline_block.each(function(){
// 		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
// 			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
// 		}
// 	});

	  
// 	$(window).on('scroll', function(){
// 		console.log('Scroll event fired')
// 		$timeline_block.each(function(){
// 			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
// 				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
// 			}
// 		});
// 	});
// });


// jQuery(document).ready(function($){
//     var $timeline_block = $('.cd-timeline-block');
//     var $workSection = $('#work'); 

//     function isWorkSectionVisible() {
//         var workSectionOffset = $workSection.offset().top;
//         var windowBottom = $(window).scrollTop() + $(window).height();
//         return windowBottom >= workSectionOffset;
//     }

//     $timeline_block.each(function(){
//         if($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
//             $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
//         }
//     });

//     $(window).on('scroll', function(){
		
//         if (isWorkSectionVisible()) {
// 			console.log('Scroll event fired')
//             $timeline_block.each(function(){
//                 if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden')) {
//                     $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
//                 }
//             });
//         }
//     });
// });

jQuery(document).ready(function($){
    var $timeline_block = $('.cd-timeline-block');

    // Debounce function to limit the rate at which a function can fire
    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    // Function to handle the actual scroll event
    var checkTimelineBlocks = function() {
		console.log('Scroll event fired')
        $timeline_block.each(function(){
            if($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.05 && $(this).find('.cd-timeline-img').hasClass('is-hidden')) {
                $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
            }
        });
    };

    // Applying debounce to the scroll event
    $(window).on('scroll', debounce(checkTimelineBlocks, 50)); // Adjust the 50ms delay as needed
});

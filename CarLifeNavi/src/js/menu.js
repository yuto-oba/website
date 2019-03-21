
// 現在開いているページのメニューをactiveにする
$(function(){
	var page = './' + window.location.href.split('/').pop();

	$('.navbar-nav li a').each(function() {
		var $href = $(this).attr('href');

		if ($href == page) {
			$(this).parent().addClass("active");
			$(this).attr("href", "#");
		}
	});
});
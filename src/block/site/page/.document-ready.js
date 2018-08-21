$(document.body).on('appear', '.azbn_video', function(e, $affected) {
	$(this).get(0).play();
});
$(document.body).on('disappear', '.azbn_video', function(e, $affected) {
	$(this).get(0).pause();
});
$(".azbn_video").appear({force_process: true});
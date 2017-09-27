$(function(){
    $('#sidebarTogglebtn,.overlay').click(function(){
		$("#sidebar-wrapper").toggleClass('active');
		$('.overlay').fadeToggle();
	});
   
	/*$('#sidebar-wrapper .sidebar-close').click(function(){
		console.log('h');
		$("#sidebar-wrapper").removeClass('active');
		$('.overlay').fadeOut();
		// close dropdowns
        $('.collapse.in').toggleClass('in');
	})*/
})    
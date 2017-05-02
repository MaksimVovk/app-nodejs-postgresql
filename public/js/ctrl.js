$(document).ready(function(){
	$('.btn-delete').on('click', function(){
		var id = $(this).data('id');
		var url = '/delete/' + id;
		$.ajax({
			url: url,
			type: 'DELETE',
			success: function(result){
				window.location.href="/";
				console.log(result)
			},
			error: function(err){
				console.log(err)
			}
		})
	})
})
$().ready(function(){

	$.ajax({
		url: "data/list.json",
		dataType: "json",
		success: function(data){
			$.each(data, function(index, obj){
				addPerson(obj);
			});
		},
		error: function(jqXHR, status, error){
			console.log(status, error, jqXHR);
		}
	});
});

function addPerson(data){
	var imageUri = "";
	var imageAlt = data.name;
	if(data.image){
		imageUri = data.image;
		if(data.image_credit){
			imageAlt = imageAlt + " // Photo credit: " + data.image_credit;
		}
	}else{
		imageUri = "http://placehold.it/200x200?text=Image+Unavailable";
		imageAlt = imageAlt + " // Image not available.";
	}

	$('#people-list')
		.append(
			$("<div id='person-" + data.id + "''>").addClass('col-lg-4 col-sm-6 text-center')
			.append(
				$("<img>").addClass('img-circle img-responsive img-center').attr('src', imageUri).attr('alt', imageAlt).attr('title', imageAlt)
			)
			.append(
				$("<h3>").html(data.name + "&nbsp;")
				.append(
					$("<small>")
				)
			)
			.append(
				$("<p>").html(data.description)
			)
		);

	$.each(data.links, function(index, obj){
		$('#person-' + data.id + " > h3 > small").append(
			$("<a>").attr('href', obj.link).attr('title', obj.title).html(
				$("<i>").addClass('fa fa-' + obj.icon)
			)
		);
	});
}
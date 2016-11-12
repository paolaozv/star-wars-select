var template = '<option value="__value__" class="opciones">__opcion__</option>';

var templatePersonajes = '<div class="col s12 m4">' +
						    '<div class="card horizontal hoverable">' +
						      	'<div class="card-stacked">' +
						        	'<div class="card-content deep-orange lighten-2 white-text">' +
						          		'<p>Hi, my name is <strong>__name__</strong></p>' +
						        	'</div>' +
							    '</div>' +
					    	'</div>' +
					  	'</div>';

var cargarPagina = function() {
	$.getJSON("https://swapi.co/api/species/", mostrarEspecies);
	$("#species").change(seleccionar);
};

$(document).ready(cargarPagina);

var mostrarEspecies = function(response) {
	var especies = "";
	$.each(response.results, function(i, especie) {
		var id = "";
		var idUrl = "";
		for (var i = 0, l = especie.people.length; i < l; i++) {
				id += especie.people[i].substr(-3);
				idUrl = id.substring(0, id.length-1);
				console.log(idUrl);
		}
		especies += template
					.replace("__opcion__", especie.name)
					.replace("__value__", idUrl);

	});
	$("#species").append(especies);
};

var seleccionar = function(event) {
	event.preventDefault();
	var url = $(this).val().split("/");
	for (var i = 0, l = url.length; i < l; i++) {
		$.getJSON("https://swapi.co/api/people/" + url[i] + "/", function(response) {
			var personajes = templatePersonajes
					 		 .replace("__name__", response.name);
			console.log(response.name);
			$("#people").append(personajes);
		});
	}
	$("#people").children().remove();
};
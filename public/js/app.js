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
	$.getJSON("http://swapi.co/api/species/", mostrarEspecies);
	$("#species").change(seleccionar);
};

$(document).ready(cargarPagina);

var mostrarEspecies = function(response) {
	var especies = "";
	$.each(response.results, function(i, especie) {
		var id = "";
		for (var i = 0, l = especie.people.length; i < l; i++) {
				id += especie.people[i].substr(-3);
		}
		especies += template
					.replace("__opcion__", especie.name)
					.replace("__value__", id);

	});
	$("#species").append(especies);
	$(".opciones").attr("value", response.url);
};

var seleccionar = function(response) {
	alert($(this).val()); // 20|40|45
	for (var i = 0; i < 3; i++) {
		$.getJSON("http://swapi.co/api/people/" + $(this).val(), function() {
			var personajes = "";
			$.each(response, function(i, personaje) {
				personajes += templatePersonajes
					  		  .replace("__name__", personaje.name);
				console.log(response);
	});
	$("#people").append(personajes);
	});
	/*}*/
};

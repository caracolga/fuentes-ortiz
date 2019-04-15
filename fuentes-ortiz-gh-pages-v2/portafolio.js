// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/apeiron.jpg",
    title: "Ápeiron",
    about: "Revista dedicada a la opinión y debate entorno al suicidio",
}, {
    figure: "media/lampara.jpg",
    title: "Lámpara de sulfato de cobre",
    about: "Experimentación con material para la creación de luminaria",
}, {
    figure: "media/triza.jpg",
    title: "Triza",
    about: "Cocktail ahumado en base a licor de plátano, jarabe de porotos y sake, servido en berenjena subzero",
}, {
    figure: "media/gertrudis.jpg",
    title: "Revista Literaria",
    about: "Ejercicio de la Academia Literaria LMS",
}, {
    figure: "media/cartavendettabakery.jpg",
    title: "Carta Vendetta Bakery",
    about: "Rediseño Carta principal y de bebestibles Vendetta Bakery",
}, {
    figure: "media/MH.jpg",
    title: "Maniobra H",
    about: "Dispositivo que optimiza la realización de la maniobra de Heimlich",
}, {
    figure: "media/quimera.jpg",
    title: "Tipografía Quimera",
    about: "Tipografía digital de título para textos inspirada en las estalactitas",
}, {
    figure: "media/perrosbella.jpg",
    title: "Perros de Bellavista",
    about: "Fanzine sobre estudio etnográfico de perros callejeros de Bellavista",
}, {
    figure: "media/lavadora.jpg",
    title: "Afiche Lavadora Panasonic",
    about: "Diseño de gráfica y su valor adquirido",
}, {
    figure: "media/ramonojos.jpg",
    title: "ÖPHIC",
    about: "Diseño de interacción traducida en una performance para la fiesta ÖPHIC",
}, {
    figure: "media/repu.jpg",
    title: "REPÜ",
    about: "Experiencia educativa de la mujer mapuche educadora",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});

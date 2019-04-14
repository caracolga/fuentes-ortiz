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
    about: "Acá la va la cuarta",
}, {
    figure: "media/cartavendettabakery.jpg",
    title: "Carta Vendetta Bakery",
    about: "Rediseño Carta principal y de bebestibles Vendetta Bakery",
}, {
    figure: "media/MH.jpg",
    title: "Maniobra H",
    about: "Acá la va la sexta",
}, {
    figure: "media/quimera.jpg",
    title: "Tipografía Quimera",
    about: "Nulla pretium non sapien eget fermentum",
}, {
    figure: "media/perrosbella.jpg",
    title: "Perros de Bellavista",
    about: "Fanzine sobre estudio etnográfico de perros callejeros de Bellavista",
}, {
    figure: "media/lavadora.jpg",
    title: "Afiche Lavadora Panasonic",
    about: "Nulla pretium non sapien eget fermentum",
}, {
    figure: "media/ramonojos.jpg",
    title: "OPHIC",
    about: "Nulla pretium non sapien eget fermentum",
}, {
    figure: "media/repu.jpg",
    title: "REPÜ",
    about: "Nulla pretium non sapien eget fermentum",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});

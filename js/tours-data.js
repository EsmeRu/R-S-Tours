const allTours = [{ id: "001", name: "Coras Tours", image: "../img/tours.jpg", description: "Empresa local enfocada en promover los atractivos naturales de la ciudad de La Paz, B.C.S, México", price: "1500.00", phone: "(612) 103 1846", web: "www.corastours.com", email: "info@corastours.com", buttonLink: "../views/tour-1.html", styleImage: "tour-1"},
{ id: "002", name: "Choya Tours", image: "../img/choya-tour.jpg", description: "Creamos tours compartidos con la intención de mostrarte los rincones más emblemáticos de Baja California Sur.", price: "1500.00", phone: "(612) 223 2478", web: "www.choyatours.com.mx", email: "info@choyatours.com.mx", buttonLink: "../views/tour-2.html", styleImage: "tour-2-v2"},
{ id: "003", name: "Punta Baja Tours", image: "../img/punta-baja-tours.jpg", description: "Disfruta nadando con cientos de Lobos Marinos en la Isla Espíritu Santo en La Paz, B.C.S, México", price: "1500.00", phone: "(612) 15 6 02 91", web: " www.puntabaja.mx", email: "ventas@puntabaja.mx", buttonLink: "../views/tour-3.html", styleImage: "tour-3"},
{ id: "004", name: "Tuna Tuna Tours", image: "../img/tuna-tuna-tours.jpg", description: "Disfruta de una excursión llena de emoción en sus cómodos botes a esta hermosa isla a solo unas millas de La Paz", price: "2330.00", phone: "(612) 120 6957", web: " www.tunatunatours.com", email: "info@tunatunatours.com", buttonLink: "../views/tour-4.html", styleImage: "tour-4"},
{ id: "005", name: "Baja Desconocida Tours", image: "../img/baja-des-tours.jpg", description: "Baja Desconocida es una empresa de Turismo para los amantes de la naturaleza", price: "3000.00", phone: "(612) 166 2856", web: "www.bajades.com", email: "info@bajades.com", buttonLink: "../views/tour-5.html", styleImage: "tour-5"},
{ id: "006", name: "Sun Riders Tours", image: "../img/sun-rider-tours.jpg", description: "Nuestro corazón está aquí y queríamos crear una experiencia para mostrarte la belleza de Los Cabos y La Paz.", price: "2330.00", phone: "(612) 12 15161", web: "www.sunridertours.com/", email: "info@sunridertours.com", buttonLink: "../views/tour-6.html", styleImage: "tour-6"}];

if(localStorage.getItem('tours-data') == null){
    localStorage.setItem('tours-data', JSON.stringify(allTours))
}
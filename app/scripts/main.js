
var map = L.map('map').setView([43.744167, 4.220833], 10);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/benjipotter.jfci4bc0/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

//geomatys
var iconGeomatys = L.MakiMarkers.icon({icon: "rocket", color: "#ff8800", size: "m"});
var markerGeomatys = L.marker([43.6453771, 3.8763527], {icon: iconGeomatys}).addTo(map);
markerGeomatys.bindPopup("<div class='popupMap'><b>Geomatys</b></br>Ingénieur développeur de 2012 à aujourd'hui</br>Société de service spécialisée dans le traitement de l’information spatiale.<ul><li>Support et developpement autour de Liferay pour les projets Medpan, Seas-Gabon, Ose-guyamapa et Geosud;</li><li>Développement d’applications de diffusion de données et metadonnées spatiales supportant les standards OGC;</li><li>Gestion de build et de déploiement d’application via Jenkins sur des serveurs tomcat;</li></ul></div>").openPopup();

var iconEsii = L.MakiMarkers.icon({icon: "building", color: "#ff0000", size: "m"});
var markerEsii = L.marker([43.5821, 3.81085], {icon: iconEsii}).addTo(map);
markerEsii.bindPopup("<div class='popupMap'><b>ESII</b></br>Ingénieur développeur de 2007 à 2012.</br>Éditeur de logiciel autour de la gestion de flux physique, et gestion d’accueil.<ul><li>Gestion du projet Pôle Emploi;</li><li>Développement sur la suite logicielle eSirius : prise de rendez-vous par internet, envois de message (mail et sms),...</li></ul></div>");

var iconNelis = L.MakiMarkers.icon({icon: "pitch", color: "#3ea9f5", size: "m"});
var markerNelis = L.marker([43.61857,  3.91469], {icon: iconNelis}).addTo(map);
markerNelis.bindPopup("<div class='popupMap'><b>Nelis</b></br>Stagiaire Ingénieur développeur en 2007.</br>Editeur de la suite logicielle Nelis Selfcare – CRM/GRC, XRM, dans le domaine du B TO B.<ul><li>Optimisation du système de recherche sur l’outil Nëlis Selfcare:<ul><li>Travaux de recherche sur l’analyse de la phonétique française;</li><li>État de l’art des techniques de Traitement Automatique du Langage Naturel (analyse sémantique, syntaxique, lexicale);</li><li>Prototypes, tests et application des techniques TALN connues sur l’application Nëlis Selfcare;</li></ul></li></ul></div>");

var iconDhuoda = L.MakiMarkers.icon({icon: "town-hall", color: "#21990c", size: "m"});
var markerDhuoda = L.marker([43.82701,  4.356535], {icon: iconDhuoda}).addTo(map);
markerDhuoda.bindPopup("<div class='popupMap'><b>Lycée Dhuoda</b></br>Baccalaureat en 2001, puis BTS IRIS en 2004.</div>");

var iconUM2 = L.MakiMarkers.icon({icon: "town-hall", color: "#21990c", size: "m"});
var markerUM2 = L.marker([43.633528,  3.864856], {icon: iconUM2}).addTo(map);
markerUM2.bindPopup("<div class='popupMap'><b>UM2</b></br>Licence &amp; Master de 2004 à 2007.</br>Validation des parcours TOIL (Technologies Objet et Ingénierie Logicielle) et IDI (Interaction Document Information). Rédaction d’un mémoire sur les méthodes de recherche sur une base de connaissances</div>");
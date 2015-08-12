'use strict';


var map = L.map('map').setView([43.6100219,3.8741615], 12);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/benjipotter.jfci4bc0/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

//Acelys
var iconAcelys = L.MakiMarkers.icon({icon: 'rocket', color: '#b6002e', size: 'm'});
var markerAcelys = L.marker([43.6179553,3.9157289], {icon: iconAcelys}).addTo(map);
markerAcelys.bindPopup('<div class="popupMap">'+
                         '<a href="http://www.acelys.fr" target="_blank"><img src="images/logos/enterprise/acelys.png" alt="Acelys" class="logomap1"/></a>'+
                         '</br>Ingénieur développeur de 2015 à aujourd\'hui.'+
                         '</br>société de services et d\’ingénierie en informatique.'+
                         '<ul><li>Support et développement autour de Liferay pour SADA et l\'intranet d\'Acelys;</li>'+
                         '<li>Support et développement Documentum pour Orange et la TAM.</li></ul></div>').openPopup();

//geomatys
var iconGeomatys = L.MakiMarkers.icon({icon: 'rocket', color: '#ff8800', size: 'm'});
var markerGeomatys = L.marker([43.651190, 3.864753], {icon: iconGeomatys}).addTo(map);
markerGeomatys.bindPopup('<div class="popupMap">'+
                         '<a href="http://www.geomatys.com" target="_blank"><img src="images/logos/enterprise/geomatys.png" alt="Geomatys" class="logomap1"/></a>'+
                         '</br>Ingénieur développeur de 2012 à 2015'+
                         '</br>Société de service spécialisée dans le traitement de l’information spatiale.'+
                         '<ul><li>Support et développement autour de Liferay pour les projets Medpan, Seas-Gabon, Ose-guyamapa et Geosud;</li><li>Développement d\'applications de diffusion de données et metadonnées spatiales supportant les standards OGC;</li><li>Gestion de build et de déploiement d\'applications via Jenkins sur des serveurs tomcat.</li></ul></div>');

var iconEsii = L.MakiMarkers.icon({icon: 'rocket', color: '#ff0000', size: 'm'});
var markerEsii = L.marker([43.5821, 3.81085], {icon: iconEsii}).addTo(map);
markerEsii.bindPopup('<div class="popupMap">'+
                     '<a href="http://www.esii.com" target="_blank"><img src="images/logos/enterprise/esii.png" alt="esii" class="logomap1"/></a>'+
                     '</br>Ingénieur développeur de 2007 à 2012.'+
                     '</br>Éditeur de logiciel autour de la gestion de flux physique, et gestion d\'accueil.'+
                     '<ul><li>Gestion du projet Pôle Emploi;</li><li>Développement sur la suite logicielle eSirius : prise de rendez-vous par internet, envoi de message (mail et sms)...</li></ul></div>');

var iconNelis = L.MakiMarkers.icon({icon: 'rocket', color: '#3ea9f5', size: 'm'});
var markerNelis = L.marker([43.61857,  3.91469], {icon: iconNelis}).addTo(map);
markerNelis.bindPopup('<div class="popupMap">'+
                      '<a href="http://www.nelisxrm.com" target="_blank"><img src="images/logos/enterprise/nelis.png" alt="Nelis" class="logomap2"/></a>'+
                      '</br>Stagiaire Ingénieur développeur en 2007.'+
                      '</br>Editeur de la suite logicielle Nelis Selfcare – CRM/GRC, XRM, dans le domaine du B TO B. '+
                      '</br>Optimisation du système de recherche sur l\'outil Nëlis Selfcare:<ul><li>Travaux de recherche sur l\'analyse de la phonétique française;</li><li>État de l\'art des techniques de Traitement Automatique du Langage Naturel (analyse sémantique, syntaxique et lexicale);</li><li>Prototypes, tests et application des techniques TALN connues sur l\'application Nëlis Selfcare.</li></ul></div>');

var iconDhuoda = L.MakiMarkers.icon({icon: 'town-hall', color: '#21990c', size: 'm'});
var markerDhuoda = L.marker([43.82701,  4.356535], {icon: iconDhuoda}).addTo(map);
markerDhuoda.bindPopup('<div class="popupMap"><a href="http://www.lycee-dhuoda-nimes.com/" target="_blank"><img src="images/logos/enterprise/dhuoda.gif" alt="Lycée Dhuoda" class="logomap2"/></a></br>Baccalaureat en 2001, puis BTS IRIS en 2004.</div>');

var iconUM2 = L.MakiMarkers.icon({icon: 'town-hall', color: '#21990c', size: 'm'});
var markerUM2 = L.marker([43.633528,  3.864856], {icon: iconUM2}).addTo(map);
markerUM2.bindPopup('<div class="popupMap"><a href="http://www.fdsweb.univ-montp2.fr/" target="_blank"><img src="images/logos/enterprise/um2.png" alt="Université montpellier " class="logomap2"/></a></br>Licence &amp; Master de 2004 à 2007.</br>Validation des parcours TOIL (Technologies Objets et Ingénierie Logicielle) et IDI (Interaction Document Information). Rédaction d\'un mémoire sur les méthodes de recherche sur une base de connaissances.</div>');

// Disable drag and zoom handlers.
map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();


$( window ).konami({
   cheat: function() {
      $(document).mousemove(function(e){
         $('#yoshi').stop().animate({left:e.pageX, top:e.pageY});
      });
      $('#yoshi').css('display', 'block');
   }
});
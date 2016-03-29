/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/


var HTMLheaderName = '<a href="#bio" data-scroll class="brand-logo">%data%</a>';

var HTMLbioPic = '<img src="%data%" alt="Profile Picture">';
var HTMLheaderInfoName    = '<h4 id="bio-name">%data%</h4>';
var HTMLheaderInfoRole    = '<p id="bio-rol">%data%</p>';
var HTMLheaderInfoMessage = '<p id="bio-message">%data%</p>';

var HTMLcontactGeneric = '<ul id="contact-links-container"></div>';
var HTMLcontactItem = '<li class="contact-item"><a href="%dataLink%" target="_blank">%dataName%: %dataValue%</a></li>';

var HTMLskills = '<li class="skill-item"><span class="chip">%data%</span></li>';

var HTMLworkStart = '<div class="col s12">';
    HTMLworkStart += '<div class="card">';
    HTMLworkStart += '<div class="card-content">';
    HTMLworkStart += '<h4 class="card-title">%dataEmployer%</h4>';
    HTMLworkStart += '<h5>%dataTitle%</h5>'
    HTMLworkStart += '<p>%dataDescription%</p>';
    HTMLworkStart += '</div>';
    HTMLworkStart += '<div class="card-action">';
    HTMLworkStart += '<p>%dataDates%</p>';
    HTMLworkStart += '<p>%dataLocation%</p>';
    HTMLworkStart += '</div></div></div>';

var HTMLprojectStart = '<article class="col s12 m6 l4 portfolio-item" data-groups=\'["%dataCategory%"]\'>';
    HTMLprojectStart += '<div class="card">';
    HTMLprojectStart += '<div class="card-image waves-effect waves-block waves-light">';
    HTMLprojectStart += '<img class="activator" src="%dataPicture%" alt="Project Picture">';
    HTMLprojectStart += '</div>';
    HTMLprojectStart += '<div class="card-content">';
    HTMLprojectStart += '<h5 class="card-title activator grey-text text-darken-4">%dataTitle%<i class="material-icons right">more_vert</i></h5>';
    HTMLprojectStart += '<p><a href="%dataLink%">%dataLinkDescription%</a></p>';
    HTMLprojectStart += '</div>';
    HTMLprojectStart += '<div class="card-reveal">';
    HTMLprojectStart += '<span class="card-title grey-text text-darken-4">%dataTitle%<i class="material-icons right">close</i></span>';
    HTMLprojectStart += '<p>%dataDescription%</p>';
    HTMLprojectStart += '</div></div></article>';


var HTMLschoolStart = '<div class="col s12">';
    HTMLschoolStart += '<div class="card">';
    HTMLschoolStart += '<div class="card-content">';
    HTMLschoolStart += '<h4 class="card-title">%dataName%</h4>';
    HTMLschoolStart += '<h5>%dataDegree%</h5>'
    HTMLschoolStart += '</div>';
    HTMLschoolStart += '<div class="card-action">';
    HTMLschoolStart += '<p>%dataDates%</p>';
    HTMLschoolStart += '<p>%dataLocation%</p>';
    HTMLschoolStart += '</div></div></div>';

var HTMLonlineStart = '<div class="col s12">';
    HTMLonlineStart += '<div class="card">';
    HTMLonlineStart += '<div class="card-content">';
    HTMLonlineStart += '<h4 class="card-title">%dataName%</h4>';
    HTMLonlineStart += '<h5>%dataSchool%</h5>'
    HTMLonlineStart += '</div>';
    HTMLonlineStart += '<div class="card-action">';
    HTMLonlineStart += '<p>%dataDates%</p>';
    HTMLonlineStart += '<a href="%dataUrl%" target="a_blank">See my certificate</a>';
    HTMLonlineStart += '</div></div></div>';

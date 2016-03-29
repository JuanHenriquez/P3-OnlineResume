/* Escentials Objects

    1.- Bio.
    2.- Work.
    3.- Projects.
    4.- Education.

*/

// Global Variables:

var portfolio_container = $('#portfolio-container'),
        $sizer = portfolio_container.find('.shuffle__sizer'),
        portfolio_controls = $('#portfolio-controls a');

// Bio Object:

var bio = {
    "name": "Juan Henriquez",
    "role": "Front-End Developer",
    "contacts": {
        "email": "juanhenriquezzavarse18@gmail.com",
        "mobile": "0412-042-3397",
        "github": ["JuanHenriquez", "https://github.com/JuanHenriquez"],
        "twitter": ["@__juanhenriquez", "https://twitter.com/__juanhenriquez"],
        "google+": ["JuanHenriquez18", "https://plus.google.com/+JuanHenriquez18"],
        "location": "Urb Aguamarina ,Carabobo, Venezuela"
    },
    "bioPic": "images/perfil.jpg",
    "welcomeMessage": "Hello I'm Juan Henriquez, Fron-End Developer from Venezuela :)",
    "skills": ["HTML", "CSS", "JavaScript", "JQuery", "Angular.js", "Web Design", "Java", "Ruby", "Python", "C++", "Visual Basic"]
};


bio.display = function(){

    var data = "%data%"

    var formattedName     = HTMLheaderName.replace(data, bio.name),
        formattedInfoName = HTMLheaderInfoName.replace(data, bio.name),
        formattedRole     = HTMLheaderInfoRole.replace(data, bio.role),
        formattedMessage  = HTMLheaderInfoMessage.replace(data, bio.welcomeMessage),
        displayPicture    = HTMLbioPic.replace(data, bio.bioPic);


    $('#bio-pic').append(displayPicture);
    $('.nav-wrapper').prepend(formattedName);
    $('#personal-details').append(formattedInfoName)
                          .append(formattedRole)
                          .append(formattedMessage)
                          .append(HTMLcontactGeneric);

    var contact = bio.contacts,
        contactItem;


    // Iterate over contacts object in bio object.
    for(item in contact){
        if(contact.hasOwnProperty(item)){
            var name = " " + item.slice(0, 1).toUpperCase() + item.slice(1);

            /* If item is a Array then Item is a social link */
            if(contact[item] instanceof Array){
                contactItem = HTMLcontactItem.replace('%dataLink%', contact[item][1])
                                             .replace('%dataName%', name)
                                             .replace('%dataValue%', contact[item][0]);

                $('#contact-links-container').append(contactItem);
            }else {
                contactItem = HTMLcontactItem.replace('<a href="%dataLink%" target="_blank">%dataName%: %dataValue%</a>', '%dataName%: %dataValue%')
                                             .replace('%dataName%', name)
                                             .replace('%dataValue%', contact[item]);
                $('#contact-links-container').append(contactItem);
            }
        }
    }


    //Iterate over skills array.

    var skills = bio.skills,
        skillsFormatted;
    skills.forEach(function(skill){
        skillsFormatted = HTMLskills.replace('%data%', skill);
        $('#bio-skills-container').append(skillsFormatted);
    });

};

// Work Object:

var work = {
    "jobs": [{
            "employer": "Fiverr",
            "title": "Freelancer",
            "location": "Guacara, Ciudad Alianza",
            "dates": "2015 - Present",
            "description": "I work in Fiverr.com as a freelancer"
        }
    ]
};

work.display = function(){
    var formattedWork;

    work.jobs.forEach(function(job){
        formattedWork = HTMLworkStart.replace('%dataEmployer%', job.employer)
                                     .replace('%dataTitle%', job.title)
                                     .replace('%dataDescription%', job.description)
                                     .replace('%dataDates%', job.dates)
                                     .replace('%dataLocation%', job.location);
        $('#carousel-work').append(formattedWork);
    });
};

// Project Object.

var projects = {
    "projects": [{
            "title": "P2: Build a Portfolio",
            "dates": "2016",
            "description": "Developed a personal portfolio page using HTML, CSS, and the Materialize framework. The page is fully responsive and works on mobile, tablet, and desktop browsers.",
            "images": [
                "images/projectP2.png"
            ],
            "url": "https://github.com/JuanHenriquez/P2-BuildPortfolio",
            "urlDescription": "Github Repository",
            "category": "web-applications"
        }
    ]
};

projects.display = function(){

    var formattedProject;

    projects.projects.forEach(function(project){
        formattedProject = HTMLprojectStart.replace('%dataTitle%', project.title)
                                           .replace('%dataTitle%', project.title)
                                           .replace('%dataCategory%', project.category)
                                           .replace('%dataLink%', project.url)
                                           .replace('%dataLinkDescription%', project.urlDescription)
                                           .replace('%dataDescription%', project.description)
                                           .replace('%dataPicture%', project.images[0]);

        portfolio_container.prepend(formattedProject);

    });

};


// Education Object.
var education = {
    "schools": [{
            "name": 'Unidad Educativa "Los Pinos"',
            "location": "Guacara, Piedra Pintada",
            "degree": "General High School",
            "majors": [
                'JavaScript Engineer'
            ],
            "dates": "2008 - 2013",
            "url": "#"
        },
        {
            "name": "Universidad Jose Antonio Paez",
            "location": "Universidad Jose Antonio Paez",
            "degree": "Computer Engineer",
            "majors": [
                'Artificial Intelligence'
            ],
            "dates": "2013 - Present",
            "url": "#"
        }
    ],
    "onlineCourses": [{
            "title": "Udacity FRONT-END Nanodegree",
            "school": "Udacity",
            "date": "2016 - Present",
            "url": "https://profiles.udacity.com/u/juanhenriquezzavarse"
        },
        {
            "title": "Code School Courses (HTML, CSS, JavaScript, Ruby, Python, SQL)",
            "school": "Code School",
            "date": "2015 - Present",
            "url": "https://www.codeschool.com/users/1282092"
        },
        {
            "title": "Web Applications Development with HTML, CSS, JavaScrip, PHP, MySQL",
            "school": "ARSistemas",
            "date": "2015",
            "url": "http://arsistema.com/"
        }
    ]
};


education.display = function(){

    var formattedEducation,
        formattedEducationOnline;

    education.schools.forEach(function(school){
        formattedEducation = HTMLschoolStart.replace('%dataName%', school.name)
                                            .replace('%dataDegree%', school.degree)
                                            .replace('%dataDates%', school.dates)
                                            .replace('%dataLocation%', school.location)
                                            .replace('%dataLink%', school.url);
        $('#carousel-education').append(formattedEducation);

        school.majors.forEach(function(major){
            $('#education .card:last .majors-list').append('<li>' + major + '</li>');
        });
    });

    education.onlineCourses.forEach(function(course){
        formattedEducationOnline = HTMLonlineStart.replace('%dataName%', course.title)
                                                  .replace('%dataSchool%', course.school)
                                                  .replace('%dataUrl%', course.url)
                                                  .replace('%dataDates%', course.date);
        $('#carousel-education-online').append(formattedEducationOnline);
    });

};



// Render the sections.
bio.display();
work.display();
projects.display();
education.display();


/* Plugins */
$(document).ready(function(){
    $(".button-collapse").sideNav();
    $('.parallax').parallax();

    var owlWork = $('#carousel-work'),
        owlEducation = $('#carousel-education'),
        owlEducationOnline = $('#carousel-education-online');

    owlWork.owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            650: {
                items: 2
            }
        }
    });


    owlEducation.owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            650: {
                items: 2
            }
        }
    });

    owlEducationOnline.owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            650: {
                items: 2
            }
        }
    });

    $('#btn-work-right').click(function() {
        owlWork.trigger('next.owl.carousel');
    });

    $('#btn-work-left').click(function() {
        owlWork.trigger('prev.owl.carousel');
    });


    $('#btn-education-right').click(function() {
        owlEducation.trigger('next.owl.carousel');
    });

    $('#btn-education-left').click(function() {
        owlEducation.trigger('prev.owl.carousel');
    });

    $('#btn-education-online-right').click(function() {
        owlEducationOnline.trigger('next.owl.carousel');
    });

    $('#btn-education-online-left').click(function() {
        owlEducationOnline.trigger('prev.owl.carousel');
    });

    var portfolio_container = $('#portfolio-container'),
        $sizer = portfolio_container.find('.shuffle__sizer'),
        portfolio_controls = $('#portfolio-controls a');


    /* Shuffle Pluginf for sort projects */
    portfolio_container.shuffle({
        itemSelector: '.portfolio-item',
        sizer: $sizer
    });

    portfolio_controls.on('click', function(){
        var $this = $(this),
            isActive = $this.hasClass( 'active' ),
            group = isActive ? 'all' : $this.data( 'project' );

        if( !isActive ){
            $('#portfolio-controls .active').removeClass('active');
        }

        console.log(group);

        $this.toggleClass('active');
        portfolio_container.shuffle('shuffle', group);
    });


    portfolio_container.on('done.shuffle', function() {
        portfolio_container.shuffle('update');
    });

    smoothScroll.init();

});






/*$(document).click(function(loc){
    logClicks(loc.pageX, loc.pageY);
});


function inName(name){
    name = name.trim().split(' ');
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() +
        name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);*/

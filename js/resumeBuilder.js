var bio = {
    "name": "Rasala saivivek",
    "role": "web developer",
    "contacts": {
        "mobile": "9500062599",
        "github": "https://github.com/viveksai26",
        "email": "viveksai26@gmail.com",
        "location": "hyderabad"
    },
    "welcomeMessage": "welcome to my profile",
    "biopic": "images/mypic.jpg",
    "skill": ["web development", "python", "best guy"],
    "display": function bios() {
        var FormattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").append([FormattedName]);
        var FormattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header:last").append([FormattedRole]);
        var FomattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts:last").append([FomattedMobile]);
        var FomattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts:last").append([FomattedEmail]);
        var FomattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts:last").append([FomattedGithub]);
        var Fomattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts:last").append([Fomattedlocation]);

        var FomattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append([FomattedPic]);
        var Fomattedmsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append([Fomattedmsg]);


        if (bio.skill.length >= 0) {
            $("#header").append(HTMLskillsStart);
            var FormattedSkills = HTMLskills.replace("%data%", bio.skill[0]);
            $("#skills").append(FormattedSkills);
            var FormattedSkills1 = HTMLskills.replace("%data%", bio.skill[1]);
            $("#skills").append(FormattedSkills1);
            var FormattedSkills2 = HTMLskills.replace("%data%", bio.skill[2]);
            $("#skills").append(FormattedSkills2);
        }

    }
};
bio.display();

var education = {
    "schools": [{
            "name": "kennedy",
            "location": "hyderabad",
            "degree": "under-graduate",
            "dates": "2010-2012",
            "majors": ["maths", "physics", "chemistry"]
        },
        {
            "name": "srm",
            "location": "chennai",
            "degree": "graduation",
            "dates": "2013-2017",
            "majors": ["electronics", "communication", ]
        }
    ],
    "onlineCourses": [{
        "title": "front end web developer",
        "school": "udacity",
        "dates": "2017",
        "url": "https://in.udacity.com/"
    }],
    "display": function() {
        for (school = 0; school <= 1; school++) {
            $("#education").append(HTMLschoolStart);
            var FormattedEduName = HTMLschoolName.replace("%data%", education.schools[school].name);
            var FormattedEduDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var FormattedEduDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            var FormattedEduLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            var FormattedEduMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            var completeEdu = FormattedEduName + FormattedEduDegree + FormattedEduDates + FormattedEduLocation + FormattedEduMajor;
            $(".education-entry:last").append(completeEdu);
        }
        $(".education-entry:last").append(HTMLonlineClasses);
        var FormattedOnlTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[0].title);
        var FormattedOnlSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[0].school);
        var FormattedOnlDates = HTMLonlineDates.replace("%data%", education.onlineCourses[0].dates);
        var FormattedOnlUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[0].url);
        var FormattedAllOnline = FormattedOnlTitle + FormattedOnlSchool + FormattedOnlDates + FormattedOnlUrl;
        $(".education-entry:last").append(FormattedAllOnline);

    }
};

education.display();


var work = {
    "jobs": [{
            "employee": "infosys",
            "title": "web-developer",
            "location": "mysore",
            "dates": "going to join",
            "description": "going to join as a front-end web developer"
        },
        {
            "employee": "Srm",
            "title": "Aarush team leader",
            "location": "chennai",
            "dates": "2013-2017",
            "description": "worked as a team leader for various events"
        }
    ],
    "display": function displayWork() {
        for (job = 0; job <= 1; job++) {
            $("#workExperience").append(HTMLworkStart);
            var FormattedWorksemp = HTMLworkEmployer.replace("%data%", work.jobs[job].employee);
            var FormattedWorksloc = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var FormattedWorkstitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var FormattedWorksdates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var FormattedWorksdescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            var completework = FormattedWorksemp + FormattedWorkstitle + FormattedWorksdates + FormattedWorksloc + FormattedWorksdescription;
            $(".work-entry:last").append(completework);
        }
    }
};
work.display();


var project = {
    "title": "Automated Pest Control Robot",
    "dates": "1/2017-4/2017",
    "description": "This project basically automates the process of supplying pesticides and water to the farm and also monitering the farm conditions",
    "images": ["images/project.jpg", "images/project1.jpg"],
    "display": function projects() {
        $("#projects").append(HTMLprojectStart);
        var Formattedprojtitle = HTMLprojectTitle.replace("%data%", project.title);
        var Formattedprojdates = HTMLprojectDates.replace("%data%", project.dates);
        var Formattedprojdescription = HTMLprojectDescription.replace("%data%", project.description);
        var Formattedprojimages1 = HTMLprojectImage.replace("%data%", project.images[0]);
        var Formattedprojimages2 = HTMLprojectImage.replace("%data%", project.images[1]);
        var compproj = Formattedprojtitle + Formattedprojdates + Formattedprojdescription + Formattedprojimages1 + Formattedprojimages2;
        $(".project-entry").append(compproj);
    }
};
project.display();

function inName(name) {
    var finalName = name;
    name = name.split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].toLowerCase();
    Finalname = name.join(" ");
    return Finalname;
}

$(document).click(function(loc) {
    // your code goes here
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

function foot() {
    var FomattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#footerContacts").append([FomattedMobile]);
    var FomattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#footerContacts").append([FomattedEmail]);
    var FomattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#footerContacts").append([FomattedGithub]);
    var Fomattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#footerContacts").append([Fomattedlocation]);
}
foot();
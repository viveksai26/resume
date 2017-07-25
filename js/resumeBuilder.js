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
    "skills": ["web development", "python", "best guy"],
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

        $("#header:last").append(HTMLskillsStart);
        for (skill = 0; skill <= 2; skill++) {
            var FormattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(FormattedSkills);
        }
        FomattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#footerContacts").append([FomattedMobile]);
        FomattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#footerContacts").append([FomattedEmail]);
        FomattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#footerContacts").append([FomattedGithub]);
        Fomattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#footerContacts").append([Fomattedlocation]);
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
        for (onlcourse = 0; onlcourse < 1; onlcourse++) {
            $(".education-entry:last").append(HTMLonlineClasses);
            var FormattedOnlTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlcourse].title);
            var FormattedOnlSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlcourse].school);
            var FormattedOnlDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlcourse].dates);
            var FormattedOnlUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlcourse].url);
            var FormattedAllOnline = FormattedOnlTitle + FormattedOnlSchool + FormattedOnlDates + FormattedOnlUrl;
            $(".education-entry:last").append(FormattedAllOnline);
        }
    }
};

education.display();


var work = {
    "jobs": [{
            "employer": "infosys",
            "title": "web-developer",
            "location": "mysore",
            "dates": "going to join",
            "description": "going to join as a front-end web developer"
        },
        {
            "employer": "Srm",
            "title": "Aarush team leader",
            "location": "chennai",
            "dates": "2013-2017",
            "description": "worked as a team leader for various events"
        }
    ],
    "display": function displayWork() {
        for (job = 0; job <= 1; job++) {
            $("#workExperience").append(HTMLworkStart);
            var FormattedWorksemp = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
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


var projects = {
    "projects": [{
        "title": "Automated Pest Control Robot",
        "dates": "1/2017-4/2017",
        "description": "This project basically automates the process of supplying pesticides and water to the farm and also monitering the farm conditions",
        "images": ["images/project.jpg", "images/project1.jpg"]
    }],
    "display": function projec() {
        $("#projects").append(HTMLprojectStart);
        for (proj = 0; proj < 1; proj++) {
            var Formattedprojtitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
            var Formattedprojdates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
            var Formattedprojdescription = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);


            var compproj = Formattedprojtitle + Formattedprojdates + Formattedprojdescription;
            $(".project-entry").append(compproj);
            for (img = 0; img <= 1; img++) {
                var Formattedprojimages = HTMLprojectImage.replace("%data%", projects.projects[proj].images[img]);
                $(".project-entry").append(Formattedprojimages);
            }
        }
    }
};
projects.display();

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
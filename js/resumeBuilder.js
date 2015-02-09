var bio = {
  "name": "Yves Hughes",
  "role": "Front-end Developer",
  "welcomeMessage": "Hi! I'm Yves, and this is my JavaScript resume.",
  "contacts": {
    "mobile": "708.518.1111",
    "email": "yvesjr@me.com",
    "github": "yveshughes",
    "twitter": "@yvesjr",
    "location": "Plano, TX"
  },
  "bioPic": "images/profile.jpg",
  "skills": ["Web Design & Development","Print & Graphic Design","Film & Video","Marketing & Consulting"],
  
  display: function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedName + formattedRole);
    $("#topContacts").append(formattedMobile + formattedEmail + formattedGitHub + formattedTwitter + formattedLocation);
    $("#footerContacts").append(formattedMobile + formattedEmail + formattedGitHub + formattedTwitter + formattedLocation);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);
    $("#header").append(HTMLskillsStart);
    for (var e in bio.skills) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[e]);
      $("#skills").append(formattedSkill);
    }
  }
};


// work

var work = {
  "jobs": [{
    "employer": "AT&T",
    "title": "Lead Manager, eCommerce",
    "location": "Plano, TX",
    "dates": "2014 - Present",
    "description": "Primarily responsible for the user experience at att.com/partnerexchange. "
  },
  {
    "employer": "AT&T",
    "title": "Business Account Manager",
    "location": "Chicago, IL",
    "dates": "2011 - 2014",
    "description": "Sold mobility products and services to small to medium sized business while supporting designated Account Managers."
  },
  {
    "employer": "AT&T",
    "title": "Retail Sales Manager",
    "location": "Chicago, IL",
    "dates": "2010 - 2011",
    "description": "Leader a team of retail sales associates."
    }
  ],

  display: function() {
    for (var e in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[e].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[e].title);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[e].dates);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[e].location);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[e].description);
      $(".work-entry:last").append(formattedEmployer + formattedTitle);
      $(".work-entry:last").append(formattedDates);
      $(".work-entry:last").append(formattedLocation);
      $(".work-entry:last").append(formattedDescription);
    }
  }
};

// Projects


var project = {
  "projects": [{
    "title": "Cook County Bureau of Technology",
    "url": "http://www.cookcountyil.gov",
    "dates": "2013",
    "description": "Website design development for Cook County Bureau of Technology.",
    "image": "images/ccbot_360.jpg"
  }, {
    "title": "Housing Authority of Cook County",
    "url": "http://www.thehacc.org",
    "dates": "2012",
    "description": "Website design and development for the Housing Authority of Cook County.",
    "image": "images/hacc_360.jpg",
  }, {
    "title": "Forest Preserves of Cook County",
    "url": "http://www.fpdcc.com",
    "dates": "2010",
    "description": "Website design development for The Forest Preserves of Cook County.",
    "image": "images/fpdcc_360.jpg"
  },],

display: function() {
    for (var e in project.projects) {
      $("#projects").append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[e].title);
      formattedTitle = formattedTitle.replace("%url%", project.projects[e].url);
      var formattedDates = HTMLprojectDates.replace("%data%", project.projects[e].dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[e].description);
      var formattedImage = HTMLprojectImage.replace("%data%", project.projects[e].image);
      $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription + formattedImage);
    }
  }
};

// Education

var education = {
  "schools": [{
    "name": "University of Phoenix",
    "location": "Chicago, IL",
    "degree": "Masters of Business Administration",
    "majors": "Technology Management",
    "dates": "2005 - 2008",
    "url": "http://www.phoenix.edu"
  },
    {
    "name": "The Illinois Institute of Art",
    "location": "Chicago, IL",
    "degree": "Bachelor of Fine Arts",
    "majors": "Multimedia & Web Design",
    "dates": "1999 - 2002",
    "url": "http://www.artinstitutes.edu"  
    }
  ],
  "onlineCourses": [{
    "title": "Front-end Developer Nanodegree",
    "school": "Udacity",
    "dates": "November 2014 - February 2015",
    "url": "https://www.udacity.com/"
  },],


  displaySchools: function() {
    for (var e in education.schools) {
      $("#education").append(HTMLschoolStart);
      var formattedName = HTMLschoolName.replace("%data%", education.schools[e].name);
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[e].location);
      var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[e].majors);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[e].degree);
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[e].dates);
      $(".education-entry:last").append(formattedName + formattedDegree);
      $(".education-entry:last").append(formattedDates);
      $(".education-entry:last").append(formattedLocation);
      $(".education-entry:last").append(formattedMajors);
    }
  },
  displayOnlinCourses: function() {
    if (education.onlineCourses.length > 0) {
      $("#education").append(HTMLonlineClasses);
      for (var e in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[e].title);
        formattedTitle = formattedTitle.replace("%url%", education.onlineCourses[e].url);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[e].school);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[e].dates);
        //var formattedURL = HTMLonlineURL.replace("%url%", education.onlineCourses[e].url);
        $(".education-entry:last").append(formattedTitle + formattedSchool);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append("<br><div><hr class='section-hr'></div>");
      }
    }
  }
};

// Calls display functions in each section
bio.display();
work.display();
project.display();
education.displaySchools();
education.displayOnlinCourses();

$("#mapDiv").append(googleMap);
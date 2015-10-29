setDisplayNone();
mainPic.style.display = "";
mobilePic.style.display = "";

about.addEventListener("click", function(){
  console.log("about");
  mainPic.classList.add("animated");
  mainPic.classList.add("fadeOut");
  mobilePic.classList.add("animated");
  mobilePic.classList.add("fadeOut");
  setTimeout(function(){
    setDisplayNone();
    aboutpgMain.style.display = "";
    aboutpgMobile.style.display = "";
  }, 1000);
  // mainPic.classList.add("slideOutLeft");
  // mainPic.style.display = "none";



  // mobilePic.classList.add("animated");
  // mobilePic.classList.add("fadeOut");
  // mobilePic.style.display = "none";
});

contact.addEventListener("click", function(){
  console.log("contact");
  aboutpg.style.display = "none";
  // main.style.display = "none";
  // mobile.style.display = "none";
  // contactpg.style.display = "block";
});

skills.addEventListener("click", function(){
  console.log("skills");
  // main.style.display = "none";
  // mobile.style.display = "none";
  // skillspg.style.display = "block";
});

projects.addEventListener("click", function(){
  console.log("projects");
  // main.style.display = "none";
  // mobile.style.display = "none";
  // projectspg.style.display = "block";
});

function setDisplayNone(){
  contactpgMain.style.display = "none";
  contactpgMobile.style.display = "none";
  skillspgMain.style.display = "none";
  skillspgMobile.style.display = "none";
  projectspgMain.style.display = "none";
  projectspgMobile.style.display = "none";
  aboutpgMain.style.display = "none";
  aboutpgMobile.style.display = "none";

  mainPic.style.display = "none";
  mobilePic.style.display = "none";
}
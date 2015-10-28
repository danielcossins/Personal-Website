contactpg.style.display = "none";
skillspg.style.display = "none";
projectspg.style.display = "none";
aboutpgMain.style.display = "none";
aboutpgMobile.style.display = "none";

about.addEventListener("click", function(){
  console.log("about");
  // main.style.display = "none";
  // mobile.style.display = "none";
  aboutpgMain.style.display = "";
  aboutpgMobile.style.display = "";
  mainPic.style.display = "none";
  mobilePic.style.display = "none";
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
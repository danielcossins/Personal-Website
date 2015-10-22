aboutpg.style.display = "none";
contactpg.style.display = "none";
skillspg.style.display = "none";
projectspg.style.display = "none";

about.addEventListener("click", function(){
  console.log("about");
  // main.style.display = "none";
  // mobile.style.display = "none";
  aboutpg.style.display = "block";
});

contact.addEventListener("click", function(){
  console.log("contact");
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
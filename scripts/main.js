var nameTitleArr = document.getElementsByClassName("nameTitle");

setDisplayNone();
mainPic.style.display = "";
mobilePic.style.display = "";

(nameTitleArr[0], nameTitleArr[1]).addEventListener("click", function(){
  console.log("nameTitle");
  removeClassAll("slideInRight");
  addClassAll("fadeOut");
  addClass2(mainPic, mobilePic, "fadeIn");
  setTimeout(function(){
    setDisplayNone();
    mainPic.style.display = "";
    mobilePic.style.display = "";
    removeClassAll("fadeOut");
  }, 1000);
});

about.addEventListener("click", function(){
  console.log("about");
  // removeClassAll("slideInRight");
  // addClassAll("fadeOut");
  // addClass2(aboutpgMain, aboutpgMobile, "slideInRight");
  // setTimeout(function(){
  //   setDisplayNone();
  //   aboutpgMain.style.display = "";
  //   aboutpgMobile.style.display = "";
  //   removeClassAll("fadeOut");
  // }, 1000);
  changeChanger(aboutpgMain, aboutpgMobile, "slideInRight", "fadeOut");
});

contact.addEventListener("click", function(){
  console.log("contact");
  // aboutpg.style.display = "none";
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

function changeChanger(el1, el2, enterClass, exitClass){
  removeClassAll(enterClass);
  addClassAll(exitClass);
  addClass2(el1, el2, enterClass);
  setTimeout(function(){
    setDisplayNone();
    el1.style.display = "";
    el2.style.display = "";
    removeClassAll(exitClass);
  }, 1000);
}

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

function addClassAll(className){
  contactpgMain.classList.add(className);
  contactpgMobile.classList.add(className);
  skillspgMain.classList.add(className);
  skillspgMobile.classList.add(className);
  projectspgMain.classList.add(className);
  projectspgMobile.classList.add(className);
  aboutpgMain.classList.add(className);
  aboutpgMobile.classList.add(className);

  mainPic.classList.add(className);
  mobilePic.classList.add(className);
}

function removeClassAll(className){
  contactpgMain.classList.remove(className);
  contactpgMobile.classList.remove(className);
  skillspgMain.classList.remove(className);
  skillspgMobile.classList.remove(className);
  projectspgMain.classList.remove(className);
  projectspgMobile.classList.remove(className);
  aboutpgMain.classList.remove(className);
  aboutpgMobile.classList.remove(className);

  mainPic.classList.remove(className);
  mobilePic.classList.remove(className);
}

function addClass2(el1, el2, className){
  el1.classList.add(className);
  el2.classList.add(className);
}

function removeClass2(el1, el2, className){
  el1.classList.remove(className);
  el2.classList.remove(className);
}
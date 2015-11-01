var nameTitleArr = document.getElementsByClassName("nameTitle");
var currentClick = 0;

setDisplayNone();
mainPic.style.display = "";
mobilePic.style.display = "";

nameTitleArr[0].addEventListener("click", function(){
  console.log("nameTitle");
  // removeClassAll("fadeInUp");
  if(currentClick != 0){
    changeChanger(mainPic, mobilePic, "fadeIn", "fadeOut");
    currentClick = 0;
  }
});

nameTitleArr[1].addEventListener("click", function(){
  console.log("nameTitle");
  // removeClassAll("fadeInUp");
  if(currentClick != 0){
    changeChanger(mainPic, mobilePic, "fadeIn", "fadeOut");
    currentClick = 0;
  }
});

about.addEventListener("click", function(){
  console.log("about");
  if(currentClick != 1){
    if(window.innerWidth > 830){
      removeClassAll("slideInRight");
      removeClassAll("fadeOutLeft");
      changeChanger(aboutpgMain, aboutpgMobile, "fadeInUp", "fadeOutDown");
    }else{
      removeClassAll("fadeInUp");
      removeClassAll("fadeOutDown");
      changeChanger(aboutpgMain, aboutpgMobile, "slideInRight", "fadeOutLeft");
    }
    currentClick = 1;
  }
});

contact.addEventListener("click", function(){
  console.log("contact");
  if(currentClick != 2){
    if(window.innerWidth > 830){
      removeClassAll("slideInRight");
      removeClassAll("fadeOutLeft");
      changeChanger(contactpgMain, contactpgMobile, "fadeInUp", "fadeOutDown");
    }else{
      removeClassAll("fadeInUp");
      removeClassAll("fadeOutDown");
      changeChanger(contactpgMain, contactpgMobile, "slideInRight", "fadeOutLeft");
    }
    currentClick = 2;
  }
});

skills.addEventListener("click", function(){
  console.log("skills");
  if(currentClick != 3){
    if(window.innerWidth > 830){
      removeClassAll("slideInRight");
      removeClassAll("fadeOutLeft");
      changeChanger(skillspgMain, skillspgMobile, "fadeInUp", "fadeOutDown");
    }else{
      removeClassAll("fadeInUp");
      removeClassAll("fadeOutDown");
      changeChanger(skillspgMain, skillspgMobile, "slideInRight", "fadeOutLeft");
    }
    currentClick = 3;
  }
});

projects.addEventListener("click", function(){
  console.log("projects");
  if(currentClick != 4){
    if(window.innerWidth > 830){
      removeClassAll("slideInRight");
      removeClassAll("fadeOutLeft");
      changeChanger(projectspgMain, projectspgMobile, "fadeInUp", "fadeOutDown");
    }else{
      removeClassAll("fadeInUp");
      removeClassAll("fadeOutDown");
      changeChanger(projectspgMain, projectspgMobile, "slideInRight", "fadeOutLeft");
    }
    currentClick = 4;
  }
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
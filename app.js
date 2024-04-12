const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
console.log(hiddenElements);
hiddenElements.forEach((el) => observer.observe(el));
const toggleThemeButton = document.getElementById("toogle-theme")
toggleThemeButton.addEventListener("click", toggleTheme )
function toggleTheme() {
  const currentTheme = toggleThemeButton.innerText;
  const isLight = currentTheme === "DARK";
  const tech = document.getElementById("tech-stack")
  if(isLight) {
    tech.classList.remove("container")
    tech.classList.add("container-black")
  } else {
    tech.classList.remove("container-black")
    tech.classList.add("container")
  }

  const about = document.getElementById("about-me")
  if(isLight) {
    about.classList.remove("container")
    about.classList.add("container-black")
  } else {
    about.classList.remove("container-black")
    about.classList.add("container")
  }

  const experience = document.getElementById('experience');
  if(isLight) {
    experience.classList.remove("container");
    experience.classList.add('container-black');
  } else {
    experience.classList.remove('container-black');
    experience.classList.add("container");
  }
  const skills = document.getElementById('skills');

  if(isLight) {
    skills.classList.remove('container');
    skills.classList.add("container-black");
  } else {
    skills.classList.remove("container-black");
    skills.classList.add('container');
  }

  const social = document.getElementById('social');
  if(isLight) {
    social.classList.remove('container');
    social.classList.add("container-black");
  } else {
    social.classList.remove("container-black");
    social.classList.add('container');
  }

  const h1 = document.getElementsByTagName("h1");
  if(isLight) {
    for(var i=0;i<h1.length;i++) {
      h1[i].style = "color: white"
    }
  } else {
    for(var i=0;i<h1.length;i++) {
      h1[i].style = "color: black"
    }
  }
  const h2 = document.getElementsByTagName('h2');
  if(isLight) {
    for(var i=0;i<h2.length;i++) {
      h2[i].style = "color: white";
    }
  } else {
    for(var i=0;i<h2.length;i++) {
      h2[i].style = "color: black";
    }
  }
  const p = document.getElementsByTagName('p');
  for(var i=0;i<p.length;i++) {
    p[i].style = "color: gray";
  }
  const a = document.getElementsByTagName('a');
  for(var i=0;i<a.length;i++){
    if(a[i].innerText ==="My Projects")
      continue;
    a[i].style = "color: gray";
  }

  const body = document.getElementsByTagName("body");
  if(isLight) {
    body[0].style = "background-color: #111108"
  } else {
    body[0].style = "background-color: #fafafa"
  }
  if(isLight) {
  toggleThemeButton.innerText = "LIGHT ☀";
  } else {
    toggleThemeButton.innerText = "DARK";
  }

}


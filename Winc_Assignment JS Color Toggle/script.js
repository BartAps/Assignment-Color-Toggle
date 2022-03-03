let toggleNavStatus = false;

let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "270px";
        getSidebar.style.left = "0";
        getSidebarTitle.style.opacity = "0.5";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        getSidebar.style.width = "50px";
        getSidebar.style.left = "-60px";
        getSidebarTitle.style.opacity = "0";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }
        getSidebarUl.style.visibility = "hidden";
        toggleNavStatus = false;
    }
}

const clickHome = document.getElementById('clickHome');

clickHome.addEventListener('click', function onClick(event) {
    document.body.style.backgroundColor = '#c3cfe2';
  });

  const clickYellow = document.getElementById('clickYellow');

    clickYellow.addEventListener('click', function onClick(event) {
    document.body.style.backgroundColor = 'rgb(249, 253, 4)';
    });
  
  const clickGreen = document.getElementById('clickGreen');

    clickGreen.addEventListener('click', function onClick(event) {
    document.body.style.backgroundColor = 'rgb(76, 253, 6)';
  });

  const clickBlue = document.getElementById('clickBlue');

    clickBlue.addEventListener('click', function onClick(event) {
    document.body.style.backgroundColor = 'rgb(29, 70, 255)';
  });
  
  const clickPurple = document.getElementById('clickPurple');

    clickPurple.addEventListener('click', function onClick(event) {
    document.body.style.backgroundColor = 'rgb(180, 4, 250)';
  });

  const clickPink = document.getElementById('clickPink');

  clickPink.addEventListener('click', function onClick(event) {
  document.body.style.backgroundColor  = 'rgb(252, 33, 215)';
});

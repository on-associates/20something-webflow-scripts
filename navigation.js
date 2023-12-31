// mobile hamburger
const hamburgerBtn = document.getElementById("openNavBtn"),
    menuDropdown = document.getElementById("menuDropdown"),
    navBorder = document.getElementById("navBorder"),
    //headerLogo = document.getElementById("headerLogo"),
    intoView1 = document.getElementById("intoView1"),
    intoView2 = document.getElementById("intoView2"),
    intoView3 = document.getElementById("intoView3"),
    intoView4 = document.getElementById("intoView4"),
    intoView5 = document.getElementById("intoView5"),
    intoView6 = document.getElementById("intoView6"),
    intoView7 = document.getElementById("intoView7"),
    intoView8 = document.getElementById("intoView8");

let navOpen = false;

hamburgerBtn.onclick = () => {
    if (!navOpen === true) {
        hamburgerBtn.classList.toggle("toggled");
        navBorder.style.background = '#fff';
        //headerLogo.style.color = '#fff';
        menuDropdown.style.display = 'flex';
        setTimeout(() => {
            menuDropdown.style.opacity = '1';
            menuDropdown.style.transform = 'translateY(0rem)';
            menuDropdown.style.transition = "opacity 500ms ease, transform 1s cubic-bezier(0.16, 1, 0.3, 1)";
        }, 1);
        // animate links
        setTimeout(() => {
            intoView1.style.opacity = '1';
            intoView1.style.transform = 'translateY(0rem)';
            intoView1.style.transition = "opacity 300ms ease, transform 1200ms cubic-bezier(0.16, 1, 0.3, 1)";
        }, 300);

        setTimeout(() => {
            intoView2.style.opacity = '1';
            intoView2.style.transform = 'translateY(0rem)';
            intoView2.style.transition = "opacity 300ms ease, transform 1200ms cubic-bezier(0.16, 1, 0.3, 1)";
        }, 400);
        setTimeout(() => {
            intoView3.style.opacity = '1';
            intoView3.style.transform = 'translateY(0rem)';
            intoView3.style.transition = "opacity 300ms ease, transform 1200ms cubic-bezier(0.16, 1, 0.3, 1)";
        }, 550);
        setTimeout(() => {
            intoView4.style.opacity = '1';
            intoView4.style.transform = 'translateY(0rem)';
            intoView4.style.transition = "opacity 300ms ease, transform 1200ms cubic-bezier(0.16, 1, 0.3, 1)";
        }, 670);
        setTimeout(() => {
            intoView5.style.opacity = '1';
            intoView5.style.transform = 'translateY(0rem)';
            intoView5.style.transition = "opacity 300ms ease, transform 1200ms cubic-bezier(0.16, 1, 0.3, 1)";
        }, 770);
        setTimeout(() => {
            intoView6.style.opacity = '1';
            intoView6.style.transform = 'translateY(0rem)';
            intoView6.style.transition = "opacity 300ms ease, transform 1200ms cubic-bezier(0.16, 1, 0.3, 1)";
        }, 870);
        setTimeout(() => {
            intoView7.style.opacity = '1';
            intoView7.style.transform = 'translateY(0rem)';
            intoView7.style.transition = "opacity 300ms ease, transform 1200ms cubic-bezier(0.16, 1, 0.3, 1)";
            intoView8.style.opacity = '1';
            intoView8.style.transform = 'translateY(0rem)';
            intoView8.style.transition = "opacity 300ms ease, transform 1200ms cubic-bezier(0.16, 1, 0.3, 1)";
        }, 970);
        navOpen = true;
    } else {
        hamburgerBtn.classList.toggle("toggled");
        navBorder.style.background = '#000';
        //headerLogo.style.color = '#000';
        menuDropdown.style.opacity = '0';
        menuDropdown.style.transform = 'translateY(-5rem)';
        menuDropdown.style.transition = "opacity 600ms ease, transform 800ms cubic-bezier(0.16, 1, 0.3, 1)";
        setTimeout(() => {
            intoView1.style.opacity = '0';
            intoView1.style.transform = 'translateY(2rem)';
            intoView1.style.transition = "opacity 300ms ease, transform 300ms cubic-bezier(0.16, 1, 0.3, 1)";
            intoView2.style.opacity = '0';
            intoView2.style.transform = 'translateY(2rem)';
            intoView2.style.transition = "opacity 300ms ease, transform 300ms cubic-bezier(0.16, 1, 0.3, 1)";
            intoView3.style.opacity = '0';
            intoView3.style.transform = 'translateY(2rem)';
            intoView3.style.transition = "opacity 300ms ease, transform 300ms cubic-bezier(0.16, 1, 0.3, 1)";
            intoView4.style.opacity = '0';
            intoView4.style.transform = 'translateY(2rem)';
            intoView4.style.transition = "opacity 300ms ease, transform 300ms cubic-bezier(0.16, 1, 0.3, 1)";
            intoView5.style.opacity = '0';
            intoView5.style.transform = 'translateY(2rem)';
            intoView5.style.transition = "opacity 300ms ease, transform 300ms cubic-bezier(0.16, 1, 0.3, 1)";
            intoView6.style.opacity = '0';
            intoView6.style.transform = 'translateY(2rem)';
            intoView6.style.transition = "opacity 300ms ease, transform 300ms cubic-bezier(0.16, 1, 0.3, 1)";
            intoView7.style.opacity = '0';
            intoView7.style.transform = 'translateY(2rem)';
            intoView7.style.transition = "opacity 300ms ease, transform 300ms cubic-bezier(0.16, 1, 0.3, 1)";
            intoView8.style.opacity = '0';
            intoView8.style.transform = 'translateY(2rem)';
            intoView8.style.transition = "opacity 300ms ease, transform 300ms cubic-bezier(0.16, 1, 0.3, 1)";
        }, 400);
        setTimeout(() => {
            menuDropdown.style.display = 'none';
        }, 500);
        navOpen = false;
    }
}


// desktop connect button
const connectBtn = document.getElementById("connectBtn"),
    connectWrapper = document.getElementById("connectWrapper"),
    navConnect1 = document.getElementById("navConnect1"),
    navConnect2 = document.getElementById("navConnect2"),
    navConnect3 = document.getElementById("navConnect3"),
    navLinks = document.querySelectorAll(".nav_link"),
    wCurrent = document.querySelector(".w--current"),
    main = document.getElementById("main");
    mainHome = document.querySelector(".main.home");

let connectOpen = false;

connectBtn.onclick = () => {
if (!connectOpen) {
    navBorder.style.background = '#fff';
    //headerLogo.style.color = '#fff';
    wCurrent.style.color = '#fff';
    for (const navLinksColor of navLinks) {
    navLinksColor.style.color = '#fff';
    }
    connectWrapper.style.display = 'flex';
    setTimeout(() => {
    connectWrapper.style.opacity = '1';
    connectWrapper.style.transform = 'translateY(0)'; 
    connectWrapper.style.transition = "opacity 500ms ease, transform 750ms cubic-bezier(0.16, 1, 0.3, 1)";
    if (mainHome !== null) {
        mainHome.style.transform = `translateY(236px)`;
    } else {
        main.style.transform = `translateY(300px)`;
    }
    main.style.transition = "transform 750ms cubic-bezier(0.16, 1, 0.3, 1)";
    }, 1);
    setTimeout(() => {
        navConnect1.style.opacity = '1';
        navConnect1.style.transform = 'translateY(0rem)';
        navConnect1.style.transition = "opacity 300ms ease, transform 1200ms cubic-bezier(0.16, 1, 0.3, 1)";
    }, 200);
    setTimeout(() => {
        navConnect2.style.opacity = '1';
        navConnect2.style.transform = 'translateY(0rem)';
        navConnect2.style.transition = "opacity 300ms ease, transform 1200ms cubic-bezier(0.16, 1, 0.3, 1)";
    }, 350);
    setTimeout(() => {
        navConnect3.style.opacity = '1';
        navConnect3.style.transform = 'translateY(0rem)';
        navConnect3.style.transition = "opacity 300ms ease, transform 1400ms cubic-bezier(0.16, 1, 0.3, 1)";
    }, 450);
    connectOpen = true;
} else {
    navBorder.style.background = '#000';
    //headerLogo.style.color = '#000';
    for (const navLinksColor of navLinks) {
    navLinksColor.style.color = 'rgba(0, 0, 0, 0.40)';
    }
    wCurrent.style.color = '#000';
    connectWrapper.style.opacity = '1';
    connectWrapper.style.transform = 'translateY(-100%)';
    connectWrapper.style.transition = "opacity 700ms ease, transform 500ms cubic-bezier(0.16, 1, 0.3, 1)";
    main.style.transform = `translateY(0px)`;
    main.style.transition = "transform 500ms cubic-bezier(0.16, 1, 0.3, 1)";
    setTimeout(() => {
        navConnect1.style.opacity = '0';
        navConnect1.style.transform = 'translateY(2rem)';
        navConnect1.style.transition = "opacity 0ms ease, transform 0ms cubic-bezier(0.16, 1, 0.3, 1)";
        navConnect2.style.opacity = '0';
        navConnect2.style.transform = 'translateY(2rem)';
        navConnect2.style.transition = "opacity 0ms ease, transform 0ms cubic-bezier(0.16, 1, 0.3, 1)";
        navConnect3.style.opacity = '0';
        navConnect3.style.transform = 'translateY(2rem)';
        navConnect3.style.transition = "opacity 0ms ease, transform 0ms cubic-bezier(0.16, 1, 0.3, 1)";
        connectWrapper.style.display = 'none';
    }, 500);
    connectOpen = false;
  }
}

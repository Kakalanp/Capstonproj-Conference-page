const Teachers = [
  {
    img: './Images/randomperson.png',
    fullname: 'Yochai Benkler',
    title: 'Professor at Harvard School',
    desc: 'Professor Yochai Benkler is a professional web developer and contributor to what we now know as HTML best practices.',
  },
  {
    img: './Images/randomperson.png',
    fullname: 'Kilnam Chon',
    title: 'Full stack developer at Google',
    desc: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital commons.',
  },
  {
    img: './Images/randomperson.png',
    fullname: 'SohYeong Noh',
    title: 'Developer at KAIST',
    desc: 'As the main venue for new web developmers in Korea KAIST promotes wide knowledge for all their students.',
  },
  {
    img: './Images/randomperson.png',
    fullname: 'Lea Verou',
    title: 'Author of CSS secrets',
    desc: 'Lea Verou is a web designer, web developer, and an assistant researcher at MIT. She is a passionate advocate for web standards and one of the few “Invited Experts” in the <i>W3C</i> CSS Working group.',
  },
  {
    img: './Images/randomperson.png',
    fullname: 'Brendan Eich',
    title: 'Creator of Javascript and co-founder of the Mozilla project',
    desc: 'Brendan Eich, commissioned by Netscape, created the first iteration of JavaScript in <i>1995</i> to enable the development of web applications.',
  },
  {
    img: './Images/randomperson.png',
    fullname: 'Ana Tudor',
    title: 'Regular contributor to CSS Tricks',
    desc: 'Ana Tudor is a web designer and web developer who is passionate about educating people about design and development.',
  },
];

let openMenu = false;

document.querySelector('.hamburger').addEventListener('click', () => {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');

  function closeMenu() {
    hamburger.style.position = 'relative';
    menu.style.display = 'none';
    openMenu = false;

    const nav = document.querySelector('.nav-bar');
    const logo = document.querySelector('.logo');
    logo.classList.add('desktop');
    nav.prepend(logo);
  }

  if (openMenu === false) {
    hamburger.style.position = 'fixed';
    menu.style.display = 'flex';
    openMenu = true;

    const outside = document.createElement('div');
    outside.style.marginTop = '70vh';
    outside.style.marginLeft = '-5px';
    outside.style.width = '100vw';
    outside.style.position = 'fixed';
    outside.style.height = '30vh';

    document.querySelector('.nav-bar').appendChild(outside);

    const logo = document.querySelector('.logo');
    logo.classList.remove('desktop');
    menu.prepend(logo);

    outside.addEventListener('click', () => {
      closeMenu();
    });
  } else {
    closeMenu();
  }
});

function createTeachers() {
  if (document.getElementsByClassName('teachers').length !== 0) {
    const teachersContainer = document.querySelector('.teachers');
    Teachers.map((el) => {
      const teacher = document.createElement('div');
      teacher.classList.add('flexrow');
      teacher.classList.add('teacher');

      teacher.innerHTML = `<img src = "${el.img}" alt=""/>`;

      const teacherDesc = document.createElement('div');
      teacherDesc.classList.add('flexcolumn');

      teacherDesc.innerHTML = `<h3>${el.fullname}</h3> <h4>${el.title}</h4> <p>${el.desc}<p>`;

      teacher.appendChild(teacherDesc);

      teachersContainer.appendChild(teacher);
      return null;
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  createTeachers();
});
/** @format */

const toggleCont = document.querySelector('.toggle__cont');
const mobileMenu = document.querySelector('.toggle');
const nav = document.querySelector('.navigation');
const chng = document.querySelector('.main__header');
const mvUp = document.querySelector('.to-top');



window.addEventListener('scroll', () => {
   let wn = 3000

   if (window.scrollY > 100) {
      chng.style.backgroundColor = '#01061a';
   } else if (window.scrollY < 500) {
      chng.style.backgroundColor = 'transparent';

   }

   mvUp.style.opacity = '0';

   if (window.scrollY >= wn) {
      mvUp.style.opacity = '1';
   } else{
      mvUp.style.opacity = '0';
   }
});

toggleCont.addEventListener('click', showMenu);

const rotate = true;
function showMenu() {
   mobileMenu.classList.toggle('active');
   nav.classList.toggle('active');

   if (rotate === true) {
      mobileMenu.classList.toggle('rotate');
   } else {
      mobileMenu.classList.remove('rotate');
   }
}
// LOADER FUNCTION
const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

function init() {
   setTimeout(() => {
      loader.style.opacity = 0;
      loader.style.display = 'none';

      main.style.display = 'block';
      setTimeout(() => {
         main.style.opacity = 1;
      }, 60);
   }, 5000);
}

init();

// TYPEWRITER WITH CONSTRUCTION FUNCTION
const TypeWriter = function (txtElement, words, wait = 3000) {
   this.txtElement = txtElement;
   this.words = words;
   this.wait = parseInt(wait, 10);
   this.wordIndex = 0;
   this.act = '';
   this.type();
   this.isRemoved = false;
};

// Type Method
TypeWriter.prototype.type = function () {
   const current = this.wordIndex % this.words.length;

   const fullt = this.words[current];

   if (this.isRemoved) {
      this.act = fullt.substring(0, this.act.length - 1);
   } else {
      this.act = fullt.substring(0, this.act.length + 1);
   }

   this.txtElement.innerHTML = `<span class="act">${this.act}</span>`;

   let typePace = 300;

   if (this.isRemoved) {
      typePace /= 2;
   }

   if (!this.isRemoved && this.act === fullt) {
      this.isRemoved = true;

      typePace = this.wait;
   } else if (this.isRemoved && this.act === '') {
      this.isRemoved = false;

      this.wordIndex++;

      typePace = 500;
   }

   setTimeout(() => this.type(), typePace);

   console.log(fullt);
};
// initializer

document.addEventListener('DOMContentLoaded', commence);

function commence() {
   const txtElement = document.querySelector('.txt-type');
   const words = JSON.parse(txtElement.getAttribute('data-words'));
   const wait = txtElement.getAttribute('data-wait');

   new TypeWriter(txtElement, words, wait);
}

window.addEventListener('scroll', function () {
   let project = document.querySelectorAll('.project__items');
   let items = document.querySelectorAll('.slide-In');
   let grow = document.querySelectorAll('.grow');
   project.forEach((projects) => {
      let projectItems = projects.getBoundingClientRect().top;
      let height = window.innerHeight;
      if (projectItems < height) {
         projects.classList.add('active');
      } else {
         projects.classList.remove('active');
      }
   });

   items.forEach((item) => {
      let list = item.getBoundingClientRect().top;
      let height = window.innerHeight;
      if (list < height) {
         item.classList.add('active');
      } else {
         item.classList.remove('active');
      }
   });

   grow.forEach((grows) => {
      let growList = grows.getBoundingClientRect().top;
      let height = window.innerHeight;
      if (growList < height) {
         grows.classList.add('active');
      } else {
         grows.classList.remove('active');
      }
   });
});

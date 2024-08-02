const menuIcons = document.getElementById('menuIcons')
const menuOpen = document.getElementById('menuOpen')
const menuClose = document.getElementById('menuClose')
const mainMenu = document.getElementById('mainMenu')

menuIcons.addEventListener('click', () => {
  menuOpen.classList.toggle('d-none')
  menuClose.classList.toggle('d-none')
  mainMenu.classList.toggle('show')
})

 var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
       breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }

    });


// const sections = document.querySelectorAll('.testimonials');

// let swiperElements = [];

// sections.forEach(section => {
 
//   const swipers = section.querySelectorAll('.swiper-slide');
  
  
//   swiperElements = swiperElements.concat(Array.from(swipers));
// });

// console.log(swiperElements[1].style.width='200px')
// for (let i = 0; i < swiperElements.length; i++) {
//   swiperElements[i].style.
// }




async function firstCard () {
    const requestURL = 'https://tolikkurylo.github.io/firstcard.json'
    const request = new Request(requestURL)
    const response = await fetch(request)
    const services = await response.json()

    console.log(services.swipers[0])

    cardAppend(services.swipers[0])
    cardAppend2(services.swipers[1])
}
firstCard()
  function cardAppend(object){
    const slider = document.getElementById('myIdSwipper1')
    for(let i=0; i < object.length; i++){
      const card = newElement('div','','swiper-slide','')
      slider.append(card)
      const img = newElement('img','','',object[i].imgsrc)
      img.alt = object[i].alt
      card.append(img)
      const title = newElement('span',object[i].title,'title-card','')
      card.append(title)
      const subTitle = newElement('span',object[i].subtitle,'card-subtitle','')
      card.append(subTitle)
      const btn = newElement('span','SEE DETAIL','card-btn','')

      card.append(btn)
    }
  }
  function cardAppend2(object){
    const slider = document.getElementById('myIdSwipper2')
    for(let i=0; i < object.length; i++){
      const card = newElement('div','','swiper-slide','')
      slider.append(card)
      const title = newElement('span',object[i].content,'','')
      card.append(title)
      const rating = newElement('div','','rating','')

      const starSolid = newElement('i','','','')
      starSolid.classList.add('fa-star', 'fa-solid')
      const starSolid2 = newElement('i','','','')
      starSolid2.classList.add('fa-star', 'fa-solid')
      const starSolid3 = newElement('i','','','')
      starSolid3.classList.add('fa-star', 'fa-solid')
      const starSolid4 = newElement('i','','','')
      starSolid4.classList.add('fa-star', 'fa-solid')
      const starSolid5 = newElement('i','','','')
      starSolid5.classList.add('fa-star', 'fa-solid')


      const starRegulare = newElement('i','','','')
      starRegulare.classList.add('fa-star', 'fa-regular')
      const starRegulare2 = newElement('i','','','')
      starRegulare2.classList.add('fa-star', 'fa-regular')
      const starRegulare3 = newElement('i','','','')
      starRegulare3.classList.add('fa-star', 'fa-regular')
      const starRegulare4 = newElement('i','','','')
      starRegulare4.classList.add('fa-star', 'fa-regular')
      const starRegulare5 = newElement('i','','','')
      starRegulare5.classList.add('fa-star', 'fa-regular')

     
      if (object[i].rating === '0') {
        rating.append(starRegulare)
        rating.append(starRegulare2)
        rating.append(starRegulare3)
        rating.append(starRegulare4)
        rating.append(starRegulare5)
      }
      if (object[i].rating === '1') {
        rating.append(starSolid)
        rating.append(starRegulare2)
        rating.append(starRegulare3)
        rating.append(starRegulare4)
        rating.append(starRegulare5)
      }
      if (object[i].rating === '2') {
        rating.append(starSolid)
        rating.append(starSolid2)
        rating.append(starRegulare3)
        rating.append(starRegulare4)
        rating.append(starRegulare5)
      }
      if (object[i].rating === '3') {
        rating.append(starSolid)
        rating.append(starSolid2)
        rating.append(starSolid3)
        rating.append(starRegulare4)
        rating.append(starRegulare5)
      }
      if (object[i].rating === '4') {
        rating.append(starSolid)
        rating.append(starSolid2)
        rating.append(starSolid3)
        rating.append(starSolid4)
        rating.append(starRegulare5)
      }
      if (object[i].rating === '5') {
        rating.append(starSolid)
        rating.append(starSolid2)
        rating.append(starSolid3)
        rating.append(starSolid4)
        rating.append(starSolid5)
      }
      card.append(rating)
      const wrap = newElement('div','','profile','')
      card.append(wrap)
      const img = newElement('img','','',object[i].profileImg)
      img.alt = 'X'
      wrap.append(img)
      const info = newElement('div')
      wrap.append(info)
      const name = newElement('p',object[i].profileName)
      info.append(name)
      const status = newElement('span', object[i].profileStatus)
      info.append(status)
    }
  }









function newElement(elName, elContent, classes, url){
    const el = document.createElement(elName)
    if(classes != ''){
      el.classList.add(classes)
    }
    console.log(el)
    el.textContent = elContent
    if (elName === 'a') {
      el.href = url
    } else if(elName === 'img') {
      el.src = url
    }
    return el
  }
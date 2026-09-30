let header = document.querySelector('header')
let introH = document.querySelector('#intro').offsetHeight
let bar = document.querySelector('.scroll-progress .bar')
let shorts = document.querySelector('.floating-shorts')
let ifram = document.querySelector('.floating-shorts iframe')

let view_h = window.innerHeight //viewport 의 높이
let body_h = document.body.offsetHeight //body 의 높이
let real_h = body_h-view_h //실제 스크롤 가능한 높이


window.addEventListener('scroll', () => {
  if(window.scrollY >= introH-76){
    header.classList.add('down')
  }
  else{
    header.classList.remove('down')
  }

  // bar의 길이 0~100%
  let per = ( window.scrollY / real_h ) * 100
  console.log(Math.round(per))//소숫점 때기
  bar.style.width = per + '%'
  if(per >82){
    shorts.classList.add('show')
    ifram.src=ifram.dataset.src
  }
  else{
    shorts.classList.remove('show')
    ifram.src=""
  }
}) 

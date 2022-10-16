const content = document.getElementsByClassName('mobile-menu');

function classToggle() {
    const navs = document.querySelectorAll('.mobile-menu')
    navs.forEach(nav => nav.classList.toggle('hide'));
  }
  
document.querySelector('.bars').addEventListener('click', classToggle);
  


for (var i = 0; i < content.length; i++) {
    content[i].addEventListener('click', function () {
        this.classList.toggle('active');
        content[2].classList.remove('active');
    });
}

console.log(content[2].style.content)
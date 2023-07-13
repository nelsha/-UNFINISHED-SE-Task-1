const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDrownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
  dropDrownMenu.classList.toggle('open')
  const isOpen = dropDrownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}
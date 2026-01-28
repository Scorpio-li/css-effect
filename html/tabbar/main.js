window.onload = function () {
    let tabbarItem = document.querySelectorAll('.tabbar__item')
tabbarItem.forEach(item => {
    item.addEventListener('click', function () {
        tabbarItem.forEach(item => {
            item.classList.remove('on')
        })
        this.classList.add('on')
    })
})
}

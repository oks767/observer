window.onload = () => {
  observer();

}
document.querySelector('item__img--active');
let obj = document.querySelector('.item')
function observer() {
  // устанавливаем настройки
  const options = {
    // родитель целевого элемента - область просмотра, не конкретный DOM элемент
    root: null,
    // без отступов
    rootMargin: '-5px',
    // процент пересечения
    threshold: 0.7
  }

  // создаем наблюдатель
  const observer = new IntersectionObserver((entries, observer) => {
    // для каждой записи-целевого элемента
    entries.forEach(entry => {
      // если элемент является наблюдаемым
      if (entry.isIntersecting) {
        const tagTarget = entry.target;

        console.log('Наблюдатель работает');

        let array = document.querySelectorAll('.item__img').forEach(function(elem){
          elem.classList.add('item__img--active')

        })

          // animate.classList.add('animate')


        // прекращаем наблюдение
        // observer.unobserve(tagTarget)
      }
    })
  }, options)

  // следим за всеми элементами с классом 'statistic__item' на странице
  const arr = document.querySelectorAll('.item')
  arr.forEach(i => {
    observer.observe(i)
  })
}

const showMore = document.querySelector('.main__show-more');
const nameLength = document.querySelectorAll('.main__class-el').length;
let items = 5;

showMore.addEventListener('click', () => {
    items += 5;
    const array = Array.from(document.querySelector('.main__class-list').children);
    const visItems = array.slice(0, items);

    visItems.forEach(el => el.classList.add('is-visible'));
});
// Напиши скрипт для створення галереї зображень на основі масиву даних. HTML містить список ul.gallery.
// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.

// Ти можеш створити й додати HTML-елементи, використовуючи document.createElement() і elem.append() або шаблонні рядки і elem.insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами через CSS класи.
// На що буде звертати увагу ментор при перевірці:

// Створена й додана в DOM галерея із трьох зображень
// Галерея додана у список ul.gallery і являє собою 3 елементи <li>, в які вкладені елементи <img>
// Для створення елементів <img> використані дані з масиву об’єктів images
// Усі елементи галереї додані в DOM за одну операцію додавання
// Є мінімальне оформлення галереї флексбоксами через CSS класи


const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
 
];

const galleryEl = document.querySelector(".js-gallery");
 const myElems = [];

for (const obj of images) {
  const myElem = document.createElement('li');
  myElem.classList.add('img-block');

  const firstChild = document.createElement('img');
  firstChild.setAttribute("src", obj.url)
  firstChild.setAttribute("alt", obj.alt)
  firstChild.setAttribute("width", "360px");
  firstChild.setAttribute("height", "300px");


  myElem.append(firstChild);

  myElems.push(myElem);
}

galleryEl.append(...myElems); 
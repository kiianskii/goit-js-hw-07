

// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.

// Є input, у який користувач вводить бажану кількість елементів. Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті. При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. Після натискання на кнопку Destroy колекція елементів має очищатися.


// Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. Тільки якщо воно задоволяє умову, мають додаватися нові <div> елементи в DOM.

// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру.

// Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.

// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.

// Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.


// На що буде звертати увагу ментор при перевірці:

// Після кліку на кнопку Create, якщо в input значення поза межами діапазону 1-100, нічого не відбувається
// Після кліку на кнопку Create в div#boxes додається така кількість різнокольорових квадратів, яка вказана в input. Значення input очищається
// Після повторного кліку на кнопку Create попередні квадрати повністю прибираються і замість них додаються нові у кількості, що вказана в input. Значення input очищається
// Усі квадрати в div#boxes різнокольорові і мають фон випадкового кольору
// Перший квадрат у div#boxes має розміри 30px на 30px, а кожен наступний на 10px вищий і ширший від попереднього
// Після натискання на кнопку Destroy усі квадрати з div#boxes мають видалятися

const refs = {
    input: document.querySelector("#controls>input"),
    createBtn: document.querySelector("[data-create]"),
    destroyBtn: document.querySelector("[data-destroy]"),
    box: document.querySelector("#boxes")

}

const myElems = [];

refs.createBtn.addEventListener('click', onCreateBtnClick);
refs.destroyBtn.addEventListener('click', onDestroyBtnClick);


function onCreateBtnClick(e) {

  const query = refs.input.value; 

    if (query <= 0 || query > 100) return alert("Number should be in range from 1 to 100");

    onDestroyBtnClick();

    // renderBoxes(query);

    let divArr = renderBoxes(+query);

    refs.box.prepend(...divArr);


}

 
function renderBoxes(num) {
    
        const divArr = [];
        let pixel = 20;

    for (let i = 1; i <= num; i++) {
        pixel += 10;
        const myElem = document.createElement("div");
        myElem.style.backgroundColor = getRandomHexColor();
        myElem.style.width = `${pixel}px`;
        myElem.style.height = `${pixel}px`;
        divArr.push(myElem);
    
    };
    return divArr;
}


function onDestroyBtnClick() {
    refs.box.innerHTML = "";
    refs.input.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}




// destroyBtn.addEventListener("click", destroyBoxesClick);
// createBtn.addEventListener("click", createBoxesClick);

// function createBoxesClick() {
//   let inputVal = inputNum.value;
//   if (inputVal < 1 || inputVal > 100) {
//     return alert("Number should be in range from 1 to 100");
//   }
//   destroyBoxesClick();

//   let divArr = createBoxes(+inputVal);

//   outputBoxes.prepend(...divArr);
// }

// function destroyBoxesClick() {
//   outputBoxes.innerHTML = "";
//   inputNum.value = "";
// }

// function createBoxes(amount) {
//   const divArr = [];
//   let size = 20;
//   for (let i = 1; i <= amount; i++) {
//     size += 10;
//     const divBox = document.createElement("div");
//     divBox.style.backgroundColor = getRandomHexColor();
//     divBox.style.width = `${size}px`;
//     divBox.style.height = `${size}px`;
//     divArr.push(divBox);
//   }
//   return divArr;
// }
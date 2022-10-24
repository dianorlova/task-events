/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let button = document.createElement('button');
    button.append('Удали меня');
    button.addEventListener('click', () => button.remove());

    document.body.append(button);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let list = document.createElement('ul');

    arr.forEach((str) => {
        let listItem = document.createElement('li');
        listItem.append(str);
        listItem.addEventListener('mouseover', () => (listItem.title = str));
        list.append(listItem);
    });
    document.body.append(list);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let link = document.createElement('a');
    link.href = 'https://tensor.ru/';
    link.innerHTML = 'tensor';

    let wasClick = false;
    link.addEventListener('click', (event) => {
        if (!wasClick) {
            link.innerHTML += ' ' + link.href;
            wasClick = true;
            event.preventDefault();
        }
    });
    document.body.append(link);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const list = document.createElement('ul');

    function addListItem() {
        const element = document.createElement('li');

        element.innerHTML = 'Пункт';
        element.addEventListener('click', () => {
            element.innerHTML += '!';
        });

        list.append(element);
    }

    addListItem();

    const button = document.createElement('button');
    button.addEventListener('click', addListItem);
    button.innerHTML = 'Добавить пункт';

    document.body.append(list);
    document.body.append(button);
}

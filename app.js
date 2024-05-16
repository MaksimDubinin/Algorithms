const algorithmsApp = (input) => {

    const container = document.getElementById(input);
    const wrapper = document.createElement("section");
    wrapper.setAttribute('class', 'appAlgorithms');

    const startText = document.createElement("p");
    startText.setAttribute('id', 'startText');
    startText.innerHTML = "Сайт для изучения алгоритмов сортировки";
    wrapper.append(startText);

    const introductionText = document.createElement("p");
    introductionText.innerHTML = "Данный сайт предназначен для изучения алгоритмов сортировки. В конце изучения Вам будет предоставлена воможность проверить свои знания на основе изученного материала.";
    introductionText.setAttribute('class', 'text'); 
    wrapper.append(introductionText);

    const algorithmCard = document.createElement("div");
    algorithmCard.setAttribute('class', 'cards');

    wrapper.append(algorithmCard);

    const btnTest = document.createElement('button');
    btnTest.innerHTML = "Начать тестирование";
    btnTest.setAttribute('id', 'btnTest');

    const btnPrev = document.createElement('button');
    btnPrev.innerHTML = "<";
    btnPrev.setAttribute('id', 'btnPrev');
    const btnNext = document.createElement('button');
    btnNext.innerHTML = ">";
    btnNext.setAttribute('id', 'btnNext');

    algorithmCard.append(btnPrev);
    algorithmCard.append(btnNext);

    const sliderParent = document.createElement('section')
    sliderParent.setAttribute('class', 'sliderParent');

    const sliderChild1 = document.createElement('article');
    const sliderChild2 = document.createElement('article');
    const sliderChild3 = document.createElement('article');
    const sliderChild4 = document.createElement('article');

    const divTitleBubble = document.createElement('div');
    divTitleBubble.setAttribute('class', 'divsTitle');

    const bubbleTextName = document.createElement('p');
    bubbleTextName.setAttribute('class', 'algName');
    bubbleTextName.innerHTML = "Сортировка Пузырьком";
    divTitleBubble.append(bubbleTextName);
    const realizationText = document.createElement('p');
    realizationText.setAttribute('class', 'realizationText');
    realizationText.innerHTML = "Реализация на JS";
    divTitleBubble.append(realizationText);
    sliderChild1.append(divTitleBubble);
    
    const divContentBubble = document.createElement('div');
    divContentBubble.setAttribute('class', 'divsContent');

    const bubbleText = document.createElement('p');
    bubbleText.innerHTML = "Алгоритм состоит в повторяющихся проходах по сортируемому массиву. На каждой итерации последовательно сравниваются соседние элементы, и, если порядок в паре неверный, то элементы меняют местами. За каждый проход по массиву как минимум один элемент встает на свое место, поэтому необходимо совершить не более n-1 проходов, где n nразмер массива, чтобы отсортировать массив."
    bubbleText.setAttribute('class','algText');

    const codeBubble = document.createElement('code');
    codeBubble.setAttribute('class', 'codeText');
    codeBubble.innerHTML = '\
    function bubble(array) {<br>\
        <span class="t1"></span>const len = array.length;<br>\
        <span class="t1"></span>for (let i = 1; i < len; i++) {<br>\
            <span class="t2"></span>for (let j = 0; j < len - i; j++) {<br>\
                <span class="t3"></span>if (array[j] > array[j + 1]) {<br>\
                    <span class="t4"></span>[array[j], array[j + 1]] = [array[j + 1], array[j]];<br>\
                    <span class="t3"></span>}<br>\
                    <span class="t2"></span>}<br>\
        <span class="t1"></span>}<br>\
    }'
    divContentBubble.append(bubbleText);
    divContentBubble.append(codeBubble);

    let tableBubble = document.createElement('table');
    tableBubble.setAttribute('class', 'tableO')
    let rowFirst = tableBubble.insertRow();
    let titleTime = rowFirst.insertCell();
    let titleBest = rowFirst.insertCell();
    let titleMid = rowFirst.insertCell();
    let titleWorst = rowFirst.insertCell();
    titleTime.innerHTML = 'Время'
    titleBest.innerHTML = 'Лучшее'
    titleMid.innerHTML = 'Среднее'
    titleWorst.innerHTML = 'Худшее'
    let rowSecond = tableBubble.insertRow();
    let nameBubble = rowSecond.insertCell();
    let firstTimeBubble = rowSecond.insertCell();
    let secondTimeBubble = rowSecond.insertCell();
    let thirdTimeBubble = rowSecond.insertCell();
    nameBubble.innerHTML = 'Bubble'
    firstTimeBubble.innerHTML = 'O(n)'
    secondTimeBubble.innerHTML = 'O(n^2)'
    thirdTimeBubble.innerHTML = 'O(n^2)'
    
    sliderChild1.append(divContentBubble);
    sliderChild1.append(tableBubble);


    const divTitleShaker = document.createElement('div');
    divTitleShaker.setAttribute('class', 'divsTitle');

    const shakerTextName = document.createElement('p');
    shakerTextName.innerHTML = 'Шейкерная сортировка'
    shakerTextName.setAttribute('class', 'algName');

    const realizationText2 = document.createElement('p');
    realizationText2.setAttribute('class', 'realizationText');
    realizationText2.innerHTML = "Реализация на JS";

    divTitleShaker.append(shakerTextName);
    divTitleShaker.append(realizationText2);

    sliderChild2.append(divTitleShaker);

    const divContentShaker = document.createElement('div');
    divContentShaker.setAttribute('class','divsContent');

    const shakerText = document.createElement('div');
    shakerText.innerHTML = "Производится многократный прогон по массиву, соседние элементы сравниваются и, в случае необходимости, меняются местами. При достижении конца массива направление меняется на противоположное. Таким образом по очереди выталкиваются крупные и мелкие элементы массива в конец и начало структуры соответственно.";
    shakerText.setAttribute('class', 'algText')

    const codeShaker = document.createElement('code');
    codeShaker.innerHTML = '\
    function Shaker(array) {<br>\
        <span class="t1"></span>for (let i = 0; i < Math.floor(array.length / 2); i++) {<br>\
            <span class="t2"></span>let swapFlag = false;<br>\
            <span class="t2"></span>for (let j = i; j < array.length - i - 1; j++) {<br>\
                <span class="t3"></span>if (array[j] > array[j + 1]) {<br>\
                    <span class="t4"></span>Swap(array, j, j + 1);<br>\
                    <span class="t4"></span>swapFlag = true;<br>\
                    <span class="t3"></span>}<br>\
                    <span class="t2"></span>}<br>\
                    <span class="t2"></span>for (let j = array.length - 2 - i; j > i; j--) {<br>\
                        <span class="t3"></span>if (array[j - 1] > array[j]) {<br>\
                            <span class="t4"></span>Swap(array, j - 1, j);<br>\
                            <span class="t4"></span>swapFlag = true;<br>\
                            <span class="t3"></span>}<br>\
                            <span class="t2"></span>}<br>\
                            <span class="t2"></span>if (!swapFlag) {<br>\
                                <span class="t3"></span>break;<br>\
                                <span class="t2"></span>}<br>\
                                <span class="t1"></span>}<br>\
      }' 
    codeShaker.setAttribute('class', 'codeText');
    divContentShaker.append(shakerText);
    divContentShaker.append(codeShaker);

    sliderChild2.append(divContentShaker);

    const tableShaker = document.createElement('table');
    tableShaker.setAttribute('class', 'tableO')
    let rowFirstShaker = tableShaker.insertRow();
    let titleTimeShaker = rowFirstShaker.insertCell();
    let titleBestShaker = rowFirstShaker.insertCell();
    let titleMidShaker = rowFirstShaker.insertCell();
    let titleWorstShaker = rowFirstShaker.insertCell();

    titleTimeShaker.innerHTML = 'Время'
    titleBestShaker.innerHTML = 'Лучшее'
    titleMidShaker.innerHTML = 'Среднее'
    titleWorstShaker.innerHTML = 'Худшее'

    let rowSecondShaker = tableShaker.insertRow();
    let nameShaker = rowSecondShaker.insertCell();
    let firstTimeShaker = rowSecondShaker.insertCell();
    let secondTimeShaker = rowSecondShaker.insertCell();
    let thirdTimeShaker = rowSecondShaker.insertCell();

    nameShaker.innerHTML = 'Shaker'
    firstTimeShaker.innerHTML = 'O(n)'
    secondTimeShaker.innerHTML = 'O(n^2)'
    thirdTimeShaker.innerHTML = 'O(n^2)'
    sliderChild2.append(tableShaker);

    const divTitleShell = document.createElement('div');
    divTitleShell.setAttribute('class', 'divsTitle');
    const shellTextName = document.createElement('p');
    shellTextName.setAttribute('class', 'algName')
    shellTextName.innerHTML = 'Сортировка Шелла';

    const realizationText3 = document.createElement('p');
    realizationText3.setAttribute('class', 'realizationText');
    realizationText3.innerHTML = "Реализация на JS";

    divTitleShell.append(shellTextName);
    divTitleShell.append(realizationText3);

    divTitleShell.append(shellTextName);
    divTitleShell.append(realizationText3);

    const divContentShell = document.createElement('div');
    divContentShell.setAttribute('class','divsContent');

    const shellText = document.createElement('p');
    shellText.setAttribute('class', 'algText');
    shellText.innerHTML = 'Алгоритм сортировки, являющийся усовершенствованным вариантом сортировки вставками. Идея метода Шелла состоит в сравнении элементов, стоящих не только рядом, но и на определённом расстоянии друг от друга.'
    divContentShell.append(shellText);

    const codeShell = document.createElement('code');
    codeShell.setAttribute('class', 'codeText')
    codeShell.innerHTML = '\
    function Shell(array) {<br>\
        <span class="t1"></span>let d = Math.floor(array.length / 2);<br>\
        <span class="t1"></span>while (d >= 1) {<br>\
            <span class="t2"></span>for (let i = d; i < array.length; i++) {<br>\
                <span class="t3"></span>let j = i;<br>\
                <span class="t3"></span>while (j >= d && array[j - d] > array[j]) {<br>\
                    <span class="t4"></span>[array[j], array[j - d]] = [array[j - d], array[j]];<br>\
                    <span class="t4"></span>j -= d;<br>\
                    <span class="t3"></span>}<br>\
                    <span class="t2"></span>}<br>\
                    <span class="t2"></span>d = Math.floor(d / 2);<br>\
                    <span class="t1"></span>}<br>\
      }';
    divContentShell.append(codeShell);
    sliderChild3.append(divTitleShell);
    sliderChild3.append(divContentShell);

    const tableShell = document.createElement('table');
    tableShell.setAttribute('class', 'tableO')
    let rowFirstShell = tableShell.insertRow();
    let titleTimeShell = rowFirstShell.insertCell();
    let titleBestShell= rowFirstShell.insertCell();
    let titleMidShell = rowFirstShell.insertCell();
    let titleWorstShell = rowFirstShell.insertCell();

    titleTimeShell.innerHTML = 'Время'
    titleBestShell.innerHTML = 'Лучшее'
    titleMidShell.innerHTML = 'Среднее'
    titleWorstShell.innerHTML = 'Худшее'

    let rowSecondShell = tableShell.insertRow();
    let nameShell = rowSecondShell.insertCell();
    let firstTimeShell = rowSecondShell.insertCell();
    let secondTimeShell = rowSecondShell.insertCell();
    let thirdTimeShell = rowSecondShell.insertCell();

    nameShell.innerHTML = 'Shell'
    firstTimeShell.innerHTML = 'O(n * log^2(n))'
    secondTimeShell.innerHTML = 'Зависит от <br>выбора шага'
    thirdTimeShell.innerHTML = 'O(n^2)'

    sliderChild3.append(tableShell);

    const divTitleQuick = document.createElement('div');
    divTitleQuick.setAttribute('class', 'divsTitle');

    const quickTextName = document.createElement('p');
    quickTextName.setAttribute('class', 'algName');
    quickTextName.innerHTML = "Быстрая сортировка";

    divTitleQuick.append(quickTextName);

    const realizationText4 = document.createElement('p');
    realizationText4.setAttribute('class', 'realizationText');
    realizationText4.innerHTML = "Реализация на JS";

    sliderChild4.append(divTitleQuick);
    divTitleQuick.append(realizationText4);

    const divContentQuick = document.createElement('div');
    divContentQuick.setAttribute('class', 'divsContent');

    const quickText = document.createElement('p');
    quickText.setAttribute('class', 'algText');
    quickText.innerHTML = "Быстрый метод сортировки функционирует по принципу \"разделяй и властвуй\" .QuickSort является существенно улучшенным вариантом алгоритма сортировки с помощью прямого обмена (его варианты известны как «Пузырьковая сортировка» и «Шейкерная сортировка»), известного в том числе своей низкой эффективностью. Принципиальное отличие состоит в том, что в первую очередь производятся перестановки на наибольшем возможном расстоянии и после каждого прохода элементы делятся на две независимые группы."

    const codeQuick = document.createElement('code');
    codeQuick.setAttribute('class', 'codeText');
    codeQuick.innerHTML = '\
    function QuickSort(array) {<br>\
        <span class="t1"></span>if (arr.length < 2) return arr;<br>\
        <span class="t1"></span>let pivot = arr[0];<br>\
        <span class="t1"></span>const left = [];<br>\
        <span class="t1"></span>const right = [];<br>\
        <span class="t1"></span>for (let i = 1; i < arr.length; i++) {<br>\
            <span class="t2"></span>if (pivot > arr[i]) {<br>\
                <span class="t3"></span>left.push(arr[i]);<br>\
                <span class="t2"></span>} else {<br>\
                <span class="t3"></span>right.push(arr[i]);<br>\
                <span class="t2"></span>}<br>\
                <span class="t1"></span>}<br>\
                <span class="t1"></span>return quickSort(left).concat(pivot, quickSort(right));<br>\
      }';
    divContentQuick.append(quickText);
    divContentQuick.append(codeQuick);
    sliderChild4.append(divContentQuick);

    const tableQuick = document.createElement('table');
    tableQuick.setAttribute('class', 'tableO');

    let rowFirstQuick = tableQuick.insertRow();
    let titleTimeQuick = rowFirstQuick.insertCell();
    let titleBestQuick= rowFirstQuick.insertCell();
    let titleMidQuick = rowFirstQuick.insertCell();
    let titleWorstQuick = rowFirstQuick.insertCell();

    titleTimeQuick.innerHTML = 'Время'
    titleBestQuick.innerHTML = 'Лучшее'
    titleMidQuick.innerHTML = 'Среднее'
    titleWorstQuick.innerHTML = 'Худшее'

    let rowSecondQuick = tableQuick.insertRow();
    let nameQuick = rowSecondQuick.insertCell();
    let firstTimeQuick = rowSecondQuick.insertCell();
    let secondTimeQuick = rowSecondQuick.insertCell();
    let thirdTimeQuick = rowSecondQuick.insertCell();

    nameQuick.innerHTML = 'Quick'
    firstTimeQuick.innerHTML = 'O(n * log(n))'
    secondTimeQuick.innerHTML = 'O(n * log(n))'
    thirdTimeQuick.innerHTML = 'O(n^2)'

    sliderChild4.append(tableQuick);


    sliderParent.append(sliderChild1);
    sliderParent.append(sliderChild2);
    sliderParent.append(sliderChild3);
    sliderParent.append(sliderChild4);
    algorithmCard.append(sliderParent);

    let offset = 0;
    btnPrev.addEventListener('click', function(event) {
        if (offset < 800) {
            return
        }
        offset -= 800;
        sliderParent.scrollTo({
            left: offset,
            behavior: 'smooth'
        });
    });

    btnNext.addEventListener('click', function(event) {
        if (offset >= 2400) {
            return
        }
        offset += 800;
        sliderParent.scrollTo({
            left: offset,
            behavior: 'smooth'
        });
    });

    btnTest.addEventListener('click', function(event) {
    
    });
    wrapper.append(btnTest);

    container.append(wrapper);
}
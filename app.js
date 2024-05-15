const algorithmsApp = (input) => {

    const algorithmNames = [];
    

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

    const divTitleBubble = document.createElement('div');
    divTitleBubble.setAttribute('class', 'divsTitle');

    const bubbleTextName = document.createElement('p');
    bubbleTextName.setAttribute('class', 'algName');
    bubbleTextName.innerHTML = "Сортировка Пузырьком";
    divTitleBubble.append(bubbleTextName);
    const realizationText = document.createElement('p');
    realizationText.setAttribute('id', 'realizationText');
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
    codeBubble.innerHTML = 'function bubble(array) {\
        const len = array.length;\
        for (let i = 1; i < len; i++) {\
          for (let j = 0; j < len - i; j++) {\
            if (array[j] > array[j + 1]) {\
              [array[j], array[j + 1]] = [array[j + 1], array[j]];\
            }\
          }\
        }\
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
    let cell5 = rowSecond.insertCell();
    let cell6 = rowSecond.insertCell();
    let cell7 = rowSecond.insertCell();
    let cell8 = rowSecond.insertCell();
    cell5.innerHTML = 'Bubble'
    cell6.innerHTML = 'O(n)'
    cell7.innerHTML = 'O(n^2)'
    cell8.innerHTML = 'O(n^2)'
    
    sliderChild1.append(divContentBubble);
    sliderChild1.append(tableBubble);

    sliderParent.append(sliderChild1);
    sliderParent.append(sliderChild2);
    sliderParent.append(sliderChild3);
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
        if (offset >= 1600) {
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
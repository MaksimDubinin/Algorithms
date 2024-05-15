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

    sliderChild1.setAttribute('id', 's1');
    
    sliderChild2.setAttribute('id', 's2');

    sliderChild3.setAttribute('id', 's3');

    sliderParent.append(sliderChild1);
    sliderParent.append(sliderChild2);
    sliderParent.append(sliderChild3);
    algorithmCard.append(sliderParent);

    let offset = 0;
    btnPrev.addEventListener('click', function(event) {
        if (offset < 600) {
            return
        }
        offset -= 600;
        sliderParent.scrollTo({
            left: offset,
            behavior: 'smooth'
        });
    });

    btnNext.addEventListener('click', function(event) {
        if (offset >= 1200) {
            return
        }
        offset += 600;
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
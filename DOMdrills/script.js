document.addEventListener('DOMContentLoaded', function () {

    let div = document.createElement('div');
    div.className = "header-container";




    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode('this is an h1');

    h1.appendChild(h1Text);
    div.appendChild(h1);
    h1.className = 'h1';



    let h2 = document.createElement('h2');
    let h2Text = document.createTextNode('this is an h2');

    h2.appendChild(h2Text);
    div.appendChild(h2);
    h2.className = 'h2';



    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode('this is an h3');

    h3.appendChild(h3Text);
    div.appendChild(h3);
    h3.className = 'h3';



    let h4 = document.createElement('h4');
    let h4Text = document.createTextNode('this is an h4');

    h4.appendChild(h4Text);
    div.appendChild(h4);
    h4.className = 'h4';



    let h5 = document.createElement('h5');
    let h5Text = document.createTextNode('this is an h5');

    h5.appendChild(h5Text);
    div.appendChild(h5);
    h5.className = 'h5';



    let h6 = document.createElement('h6');
    let h6Text = document.createTextNode('this is an h6');

    h6.appendChild(h6Text);
    div.appendChild(h6);
    h6.className = 'h6';

    document.body.appendChild(div);


    let colors = ['blue', 'red', 'green', 'yellow', 'purple', 'pink', 'black', 'orange'];

    function randomColors() {
        let randomcolors = colors[Math.floor(Math.random() * colors.length)];
        return randomColors;
    }

    h1.addEventListener('doubleClick', function () {
        let randomColors = randomColors();
        h1.style.color = randomColors;
    })

    h2.addEventListener('doubleClick', function () {
        let randomColors = randomColors();
        h2.style.color = randomColors;
    })

    h3.addEventListener('doubleClick', function () {
        let randomColors = randomColors();
        h1.style.color = randomColors;
    })

    h1.addEventListener('doubleClick', function () {
        let randomColors = randomColors();
        h3.style.color = randomColors;
    })

    h4.addEventListener('doubleClick', function () {
        let randomColors = randomColors();
        h4.style.color = randomColors;
    })

    h5.addEventListener('doubleClick', function () {
        let randomColors = randomColors();
        h5.style.color = randomColors;
    })

    h6.addEventListener('doubleClick', function () {
        let randomColors = randomColors();
        h6.style.color = randomColors;
    })

    let button = document.createElement('button');
    let buttonText = document.createTextNode('click to add list item');
    button.appendChild(buttonText);
    div.appendChild(button);

    let ul = document.createElement('ul');
    div.appendChild(ul);

    let list = 1;
    function itemInsert() {
        let li = document.createElement('li');
        let liText = document.createTextNode('this is item' + " " + list);
        li.appendChild(liText);
        ul.appendChild(li);
        list++;

        li.addEventListener('click', function () {
            let randomColors = randomColors();
            li.style.color = randColors;
        })

        li.addEventListener('doubleclick', function () {
            this.remove();
        })
    }

    button.addEventListener('click', function () {
        itemInsert();
    })

})








window.addEventListener('load', () => {

    const computerTurn = (id) => {

        let randomNumber = Math.floor(Math.random() * 3) + 1;

        dataList = [{
                id: 1,
                property: 'Rock'
            },
            {
                id: 2,
                property: 'Paper'
            },
            {
                id: 3,
                property: 'Scissor'
            }
        ];

        dataList.forEach(element => {
            if (randomNumber == element.id) {
                const img = document.createElement('img');
                img.src = "images/" + element.property + ".png";
                const computer = document.querySelector('#computer');
                computer.appendChild(img);

            }
        });

        if (id == 'a') {
            if(randomNumber==1){
                const h3 = document.createElement('h1');
                h3.innerHTML = "Draw";
                h3.classList.add('text-warning');
                document.querySelector('#result').append(h3);
            }
            else if(randomNumber==2){
                const h3 = document.createElement('h1');
                h3.innerHTML = "You Lose";
                h3.classList.add('text-danger');
                document.querySelector('#result').append(h3);

            }
            else{
                const h3 = document.createElement('h1');
                h3.innerHTML = "You Win";
                h3.classList.add('text-success');
                document.querySelector('#result').append(h3);

            }
            
        } else if (id == 'b') {
            if(randomNumber==1){
                const h3 = document.createElement('h1');
                h3.innerHTML = "You win";
                h3.classList.add('text-success');
                document.querySelector('#result').append(h3);
            }
            else if(randomNumber==2){
                const h3 = document.createElement('h1');
                h3.innerHTML = "Draw";
                h3.classList.add('text-warning');
                document.querySelector('#result').append(h3);

            }
            else{
                const h3 = document.createElement('h1');
                h3.innerHTML = "You Lose";
                h3.classList.add('text-danger');
                document.querySelector('#result').append(h3);

            }

        } else {
             if(randomNumber==1){
                const h3 = document.createElement('h1');
                h3.innerHTML = "You Lose";
                h3.classList.add('text-danger');
                document.querySelector('#result').append(h3);
            }
            else if(randomNumber==2){
                const h3 = document.createElement('h1');
                h3.innerHTML = "You Win";
                h3.classList.add('text-success');
                document.querySelector('#result').append(h3);

            }
            else{
                const h3 = document.createElement('h1');
                h3.innerHTML = "Draw";
                h3.classList.add('text-warning');
                document.querySelector('#result').append(h3);

            }

        }


    }


    const rock = document.querySelector('#a');
    const paper = document.querySelector('#b');
    const scissor = document.querySelector('#c');

    rock.addEventListener('click', () => {
        const img = document.createElement('img');
        img.src = "images/rock.png";
        const computer = document.querySelector('#user');
        computer.appendChild(img);
        rock.classList.add('disabled');
        paper.classList.add('disabled');
        scissor.classList.add('disabled');
        computerTurn('a');

    });

    paper.addEventListener('click', () => {
        const img = document.createElement('img');
        img.src = "images/paper.png";
        paper
        const computer = document.querySelector('#user');
        computer.appendChild(img);
        rock.classList.add('disabled');
        paper.classList.add('disabled');
        scissor.classList.add('disabled');
        computerTurn('b');
    });

    scissor.addEventListener('click', () => {
        const img = document.createElement('img');
        img.src = "images/scissor.png";
        const computer = document.querySelector('#user');
        computer.appendChild(img);
        rock.classList.add('disabled');
        paper.classList.add('disabled');
        scissor.classList.add('disabled');
        computerTurn('c');
    });



});
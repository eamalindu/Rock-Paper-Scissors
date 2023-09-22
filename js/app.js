window.addEventListener('load', () => {
    const rock = document.querySelector('#a');
    const paper = document.querySelector('#b');
    const scissor = document.querySelector('#c');

    const computerTurn = (id,name) => {

        id.addEventListener('click',()=>{
        const img = document.createElement('img');
        img.src = "images/"+name+".png";
        const computer = document.querySelector('#user');
        computer.appendChild(img);

        rock.classList.add('disabled');
        paper.classList.add('disabled');
        scissor.classList.add('disabled');
        });

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


    }


});
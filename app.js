document.addEventListener('DOMContentLoaded',()=>{

    const cardArray = [
        {
            name:'cheeseburger',
            img:'images/cheeseburger.png'
        },
        {
            name:'cheeseburger',
            img:'images/cheeseburger.png'
        },
        {
            name:'fries',
            img:'images/fries.png'
        },
        {
            name:'fries',
            img:'images/fries.png'
        },
        {
            name:'hotdog',
            img:'images/hotdog.png'
        },
        {
            name:'hotdog',
            img:'images/hotdog.png'
        },
        {
            name:'ice-cream',
            img:'images/ice-cream.png'
        },
        {
            name:'ice-cream',
            img:'images/ice-cream.png'
        },
        {
            name:'pizza',
            img:'images/pizza.png'
        },
        {
            name:'pizza',
            img:'images/pizza.png'
        },
        {
            name:'milkshake',
            img:'images/milkshake.png'
        },
        {
            name:'milkshake',
            img:'images/milkshake.png'
        }
    ]

    cardArray.sort(()=>0.5-Math.random());

    const grid = document.querySelector('.grid')
    const resultdisplay = document.querySelector('#result');

    var cardschosen=[];
    var cardschosenid=[];
    var cardswon=[];

    function createBoard(){
        for(let i=0;i<cardArray.length;i++){
            const card= document.createElement('img');
            card.setAttribute('src','images/blank.png');
            card.setAttribute('data-id',i);
            card.addEventListener('click',flipboard);
            grid.appendChild(card);
        }
    }

    function checkformatch(){
        const cards=document.querySelectorAll('img');
        const optiononeid=cardschosenid[0];
        const optiontwoid=cardschosenid[1];

        if(optiononeid==optiontwoid){
            cards(optiononeid).setAttribute('src','images/blank.png')
            cards(optiontwoid).setAttribute('src','images/blank.png')
            alert('picked same picture, try again')
        }
        else if(cardschosen[0]===cardschosen[1]){
            alert('your found a match');
            cards[optiononeid].setAttribute('src','images/white.png')
            cards[optiontwoid].setAttribute('src','images/white.png')
            cards[optiononeid].removeEventListener('click',flipboard)
            cards[optiontwoid].removeEventListener('click',flipboard)
            cardswon.push(cardschosen)
        }
        else
        {
            cards[optiononeid].setAttribute('src','images/blank.png')
            cards[optiontwoid].setAttribute('src','images/blank.png')
            alert('try again');
        }
        cardschosen=[];
        cardschosenid=[];
        resultdisplay.textContent=cardswon.length;
        if(cardswon.length===cardArray.length/2){
            resultdisplay.textContent='Congrats. You won'
        }
    }

    function flipboard(){
        let cardId=this.getAttribute('data-id');
        cardschosen.push(cardArray[cardId].name);
        cardschosenid.push(cardId);
        this.setAttribute('src',cardArray[cardId].img);
        if(cardschosen.length===2)
        {
            setTimeout(checkformatch,500);
        }
    }

    createBoard();

})
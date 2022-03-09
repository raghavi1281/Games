document.addEventListener('DOMContentLoaded', () =>{

    const cardArray = [
        {
            names: 'a',
            img: 'images/1.png'
        },
        {
            names: 'a',
            img: 'images/1.png'
        },
        {
            names: 'b',
            img: 'images/2.png'
        },
        {
            names: 'b',
            img: 'images/2.png'
        },
        {
            names: 'c',
            img: 'images/3.png'
        },
        {
            names: 'c',
            img: 'images/3.png'
        },
        {
            names: 'd',
            img: 'images/4.png'
        },
        {
            names: 'd',
            img: 'images/4.png'
        },
        {
            names: 'e',
            img: 'images/5.png'
        },
        {
            names: 'e',
            img: 'images/5.png'
        },
        {
            names: 'f',
            img: 'images/6.png'
        },
        {
            names: 'f',
            img: 'images/6.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())
    const grid = document.querySelector('.grid')
    const Score = document.querySelector('#result')
    var chosenCards = []
    var chosenCardID = []
    var cardsWon = []

    function createBoard() {
        for(let i = 0; i < cardArray.length; i++)
        {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/card.png')
            card.setAttribute('d-id', i)
            //console.log(i)
            card.addEventListener('click', flip)
            grid.appendChild(card)
        }
    }

    function checkMatch() {
        var cards = document.querySelectorAll('img')
        var cardOne = chosenCardID[0]
        var cardTwo = chosenCardID[1]
        if(chosenCards[0] === chosenCards[1])
        {
            //alert('match found')
            console.log(chosenCards[0])
            cards[cardOne].setAttribute('src', 'images/blank.png')
            cards[cardTwo].setAttribute('src', 'images/blank.png')
            cardsWon.push(chosenCards)
        }
        else
        {
            //alert('un-matched')
            cards[cardOne].setAttribute('src', 'images/card.png')
            cards[cardTwo].setAttribute('src', 'images/card.png')
        }
        chosenCards = []
        chosenCardID = []
        Score.textContent = cardsWon.length
        if(cardsWon.length === cardArray.length/2)
        {
            alert('Congratuations!!!...All Matches Found!!!')
        }
    }
    
    function flip() {
        if(this.getAttribute('src') === 'images/card.png')
        {
            var cardID = this.getAttribute('d-id')
            chosenCards.push(cardArray[cardID]. names)
            chosenCardID.push(cardID)
            this.setAttribute('src', cardArray[cardID].img)
            if(chosenCards.length === 2)
            {
                setTimeout(checkMatch, 500)
            }
        }
        
    }

createBoard()    
})

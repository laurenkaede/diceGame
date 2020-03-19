let totalScore, playingGame;

let score = 0;

let theImages = [{
    src: "dice1.png"
}, {
    src: "dice2.png",
}, {
    src: "dice3.png",
}, {
    src: "dice4.png",
}, {
    src: "dice5.png",
}, {
    src: "dice6.png",
}];

let diceImages = [];

init();

function showRandomImage() {
    if (playingGame) {
        theImages = [{
            src: "dice1.png"
        }, {
            src: "dice2.png",
        }, {
            src: "dice3.png",
        }, {
            src: "dice4.png",
        }, {
            src: "dice5.png",
        }, {
            src: "dice6.png",
        }];
    }
        let diceImages = [];
        for (let i = 0, j = theImages.length; i < j; i++) {
            diceImages[i] = new Image();
            diceImages[i].src = theImages[i].src;
        }

        if(diceImages !== 1) {       
            totalScore += diceImages;    
        } else {
            init();
        }
    
        function getRandomNumber(min, max) {
            let img = Math.floor(Math.random() * (max - min + 1)) + min;
            score = score + img;
            return diceImages[img];
        }

        let newImage = getRandomNumber(0, diceImages.length - 1);

        let images = document.getElementsByTagName("img");
        let x = images.length;
        for (let y = 0; y < x; y++) {
            images[0].parentNode.removeChild(images[0]);
        }

        document.body.appendChild(newImage);

    }

    function init() {
        playingGame = true;
        score = [0];
        roundScore = 0;
    }

    document.querySelector('.die').style.display = 'none';

    // document.getElementById('#scoreZero').textContent = "0";



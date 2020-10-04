export default function displayByCharacter(p){
    let canvas;
    const words = ["Hello World", "My Name Is Ryan", "THIS IS A TEST!!", "I hope it worked"]
    const waitAfterWord = 5;
    const xPos = 100;
    const yPos = 200;
    let waitCount = 1;
    let currentWord = "";
    let wordIndex = 0;
    let letterIndex = 0;
    let currentWordWidth = 0;
    let charFlashTracker = true;
    let isCharFlashEnabled = true;

    p.setup = () => {
        canvas = p.createCanvas(1600, 400);
        p.textFont('Courier Prime');
        setInterval(updateWord, 400);
        setInterval(nextCharFlash, 300);
    }

    function nextCharFlash(){
        if(isCharFlashEnabled){
            charFlashTracker = !charFlashTracker;
        }
        else{
            charFlashTracker = true;
        }
    }

    function updateWord(){
        if(letterIndex <= words[wordIndex].length-1){
            isCharFlashEnabled = false;
            currentWord += words[wordIndex][letterIndex];
            currentWordWidth = p.textWidth(currentWord);
            letterIndex++;
        }
        else{
            if(waitCount==waitAfterWord){
                waitCount = 0;
                letterIndex = 0;
                currentWord = "";
                currentWordWidth = 0;
                if(wordIndex<words.length-1){
                    wordIndex++;
                }
                else{
                    wordIndex = 0;
                }
            }
            else{
                isCharFlashEnabled = true;
                waitCount++;
            }
        }
    }

    p.draw = () => {
        p.background(56,56,56);
        p.fill(255,255,255);
        p.textSize(64);
        p.text(currentWord, xPos, yPos);
        if(charFlashTracker){
            p.fill(0,255,0);
            p.text("_", (xPos+currentWordWidth), yPos+2);
        }
    }

    // p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
    //     if(canvas){
    //         p.fill(newProps.color);
    //     }
    // }
}
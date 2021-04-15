'use strict';
//first thing to get the img from html
let leftImg = document.getElementById('leftImg');
let centerImg = document.getElementById('centerImg');
let rightImg = document.getElementById('rightImg');

let imgDivContainer = document.getElementById('imgDiv');

//Attempt //only 25 attempts, not more
let maxAttempts = 25;
//to know how much times that the user click, we need to put something storing the clickes that the user press it "a counter"
let userAttemptsCounter = 0;
//left index, right index, center index... random number
let leftImgIndex;
let centerImgIndex;
let rightImgIndex;
// let imgDivContainerIndex;
//we will create the object to take a random number
//we will make a constracter function
//we should write a name of function in a Pascal case"start a function name as a capital
function BusMall(name, urlSourse) { //constractor function
    //make attribute
    this.name = name;
    this.urlSourse = urlSourse;
    //each new bus mall will have attribute names voitwd
    this.votes = 0;
    //to know how many time it was shown
    this.shown=0;
    //we need to push every object we created
    //this refer to the object, refer to the new object that I'm created
    BusMall.allBusMal.push(this);
}

// let allBusMal=[];
BusMall.allBusMal = [];
//make our busMal, //spesify the name and urlSourse //new BusMall('name','urlSourse')
//instantses
new BusMall('bag', 'imgBusMall/bag.jpg'); //01
new BusMall('banana', 'imgBusMall/banana.jpg'); //02
new BusMall('bathroom', 'imgBusMall/bathroom.jpg'); //03
new BusMall('boots', 'imgBusMall/boots.jpg'); //04
new BusMall('breakfast', 'imgBusMall/breakfast.jpg'); //05
new BusMall('bubblegum', 'imgBusMall/bubblegum.jpg'); //06
new BusMall('chair', 'imgBusMall/chair.jpg'); //07
new BusMall('cthulhu', 'imgBusMall/cthulhu.jpg'); //08
new BusMall('dog-duck', 'imgBusMall/dog-duck.jpg'); //09
new BusMall('dragon', 'imgBusMall/dragon.jpg'); //10
new BusMall('pen', 'imgBusMall/pen.jpg'); //11
new BusMall('pet-sweep', 'imgBusMall/pet-sweep.jpg'); //12
new BusMall('scissors', 'imgBusMall/scissors.jpg'); //13
new BusMall('shark', 'imgBusMall/shark.jpg'); //14
new BusMall('sweep', 'imgBusMall/sweep.png'); //15
new BusMall('tauntaun', 'imgBusMall/tauntaun.jpg'); //16
new BusMall('unicorn', 'imgBusMall/unicorn.jpg'); //17
new BusMall('usb', 'imgBusMall/usb.gif'); //18
new BusMall('water-can', 'imgBusMall/water-can.jpg'); //19
new BusMall('wine-glass', 'imgBusMall/wine-glass.jpg'); //20

console.log(BusMall.allBusMal);

//put a random number generator, goes from 0 until lengh-1
function generateRandomIndex() {
    //give number from 0 to 20
    return Math.floor(Math.random() * BusMall.allBusMal.length);
}
//console.log(the calling of the function);
console.log(generateRandomIndex());

//now make rendering function to three images
//render mean that this function resbonsable for the rendering stuff(render mean shown on the page)
function renderThreeImages() {
    leftImgIndex = generateRandomIndex();
    centerImgIndex = generateRandomIndex();
    rightImgIndex = generateRandomIndex();
    // imgDivContainerIndex = generateRandomIndex();
    
    //loops keep runing as long as a condition is true
    // while (true) {
    //     if (leftImgIndex===rightImgIndex || rightImgIndex===centerImgIndex) {
    //         rightImgIndex=generateRandomIndex();
    //     } else if(leftImgIndex===rightImgIndex || leftImgIndex===centerImgIndex){
    //         leftImgIndex=generateRandomIndex();
    //     } else if(centerImgIndex===leftImgIndex || centerImgIndex===rightImgIndex){
    //         centerImgIndex=generateRandomIndex();
    //     }
    // }
    // console.log(BusMall.allBusMal[leftImgIndex]); //why this console is unreachable

    //LEFT
    while (leftImgIndex === rightImgIndex || leftImgIndex === centerImgIndex) {
        leftImgIndex = generateRandomIndex();
    }
    //CENTER
    while (centerImgIndex === leftImgIndex || centerImgIndex === rightImgIndex) {
        centerImgIndex = generateRandomIndex();
    }
    //RIGHT
    while (rightImgIndex === leftImgIndex || rightImgIndex === centerImgIndex) {
        rightImgIndex = generateRandomIndex();
    }
    // console.log(BusMall.allBusMal[leftImgIndex]); //this same to BusMall.allBusMal[0]
    // console.log(BusMall.allBusMal[centerImgIndex]);
    // console.log(BusMall.allBusMal[rightImgIndex]);
    //.urlSourse bring the extension of the image lik .jpg and so on
    // console.log(BusMall.allBusMal[rightImgIndex].urlSourse);

    leftImg.src = BusMall.allBusMal[leftImgIndex].urlSourse;
    //it should add the shown in the render function
    BusMall.allBusMal[leftImgIndex].shown++;

    centerImg.src = BusMall.allBusMal[centerImgIndex].urlSourse;
    //it should add the shown in the render function
    BusMall.allBusMal[centerImgIndex].shown++;

    rightImg.src = BusMall.allBusMal[rightImgIndex].urlSourse;
        //it should add the shown in the render function
        BusMall.allBusMal[rightImgIndex].shown++;

    // imgDiv.src = BusMall.allBusMal[imgDivIndex].urlSourse;
    console.log(leftImg.src);
    console.log(centerImg.src);
    console.log(rightImg.src);
    // console.log('this is imgDivIndex.src', imgDivIndex.src);
}
renderThreeImages();

//clicking part
//handle clicking: the clicking part, if the user click on the image it will generate a new 3 random img (so I will addEventListener to leftImg,centerImg, and RightImg)
//click: on click, when the user click on the image the function will active(the function will run)
// handelUserClick is the name of the function
// leftImg.addEventListener('click', handelUserClick);
// centerImg.addEventListener('click', handelUserClick);
// rightImg.addEventListener('click', handelUserClick);

// add Event Listener to the div that contains the img tag
imgDivContainer.addEventListener('click', handelUserClick);

//write the function
//event: parameter get automaticly pass
//event.target: what element are you targeting when you are clicking(e.g when click on the right img it eill give the right tag, and we can use the id from this tages,,,when I click on the right img it will give index to this img)
function handelUserClick(event) {
    console.log(event.target.id);


    //this we will create it on the above  let userAttemptsCounter=0;
    userAttemptsCounter = userAttemptsCounter + 1; //when user click it will add 1
    console.log(userAttemptsCounter);
    // if the attempts is lower than the max tries (let maxAttempts=25;)
    if (userAttemptsCounter <= maxAttempts) {
        //1- add to the votes based on the id then //2-render again
        if (event.target.id === 'leftImg') {
            //increse'+' the votes for the left image
            //we can know that it's a leftImg,centerImg, and rightImg from the index
            BusMall.allBusMal[leftImgIndex].votes++;
        } else if (event.target.id === 'centerImg') {
            BusMall.allBusMal[centerImgIndex].votes++;
        } else if (event.target.id === 'rightImg') {
            BusMall.allBusMal[rightImgIndex].votes++;
        } else{
            //to stop counting when the user click outside the image"when click on the div"
            userAttemptsCounter--;
        }
        console.log(BusMall.allBusMal);
        // if (event.target.id === 'DivImg') {
        //     BusMall.allBusMal[imgDivIndex].votes++;
        // }
        // console.log(BusMall.allBusMal);

        //when we will vote something we will render again
        renderThreeImages();
    } else{
        //to stop click after the number of maxAttempts (let maxAttempts=25;) //handel the clicking
        //render the list //<ul id="resultList"> 'this tag in html'
        // show the list
        let list=document.getElementById('resultList');

        //put the button inside the else, because we finish everything
        let resultButton=document.getElementById('resultButton');
        //add event listener to the button //showResult is function
        resultButton.addEventListener('click', showResult);

        // to shown the button "make it not hidden"
        resultButton.hidden=false;

        //create the showResult function
        function showResult() {

            let BusMallResult;
        //create li using for loop
        for (let i = 0; i < BusMall.allBusMal.length; i++) {
            BusMallResult=document.createElement('li');
            //append li to the list
            list.appendChild(BusMallResult);
            //give it a text content-> name[i]: name of each one , and votes[i] for each one
            BusMallResult.textContent=`${BusMall.allBusMal[i].name}  
                                        with path  ${BusMall.allBusMal[i].urlSourse}  
                                        has  ${BusMall.allBusMal[i].votes} votes
                                        and was seen ${BusMall.allBusMal[i].shown} times`;
        }
        //now we need to make the click button stop after shown the result, to stop repeate the result
        resultButton.removeEventListener('click',showResult);
        }
        
        //now we need to make the click stop after 25 votes'the user cann't click after 25 votes', removed event listener // and finaly remove the clicking
        // leftImg.removeEventListener('click', handelUserClick);
        // centerImg.removeEventListener('click', handelUserClick);
        // rightImg.removeEventListener('click', handelUserClick);

        imgDivContainer.removeEventListener('click', handelUserClick);
    }

}
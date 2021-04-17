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

//array of names for the lable in the chart
let namesArrayForChartLabel = [];

//I'll make array of votes to put the votes inside the chart
let votesArray = [];

//I'll make array of shown to put the shown inside the chart
let shownArray = [];

//array to save a pic that are different'not repeted in two time' prevent users from seeing the same image in two subsequent iterations
let blockShownPicInTwoSubsequentIterations=[];

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
    this.shown = 0;
    //we need to push every object we created
    //this refer to the object, refer to the new object that I'm created
    BusMall.allBusMal.push(this);

    //to push the name to the array namesArrayForChartLabel (the name of the array namesArrayForChartLabel=[])
    namesArrayForChartLabel.push(this.name);

    //call the function updateStorage
    
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
    console.log('before',blockShownPicInTwoSubsequentIterations);
    leftImgIndex = generateRandomIndex();
    centerImgIndex = generateRandomIndex();
    rightImgIndex = generateRandomIndex();
    // imgDivContainerIndex = generateRandomIndex();

    //LEFT
    while (leftImgIndex === rightImgIndex || leftImgIndex === centerImgIndex ||
        blockShownPicInTwoSubsequentIterations.includes(leftImgIndex)) {
        leftImgIndex = generateRandomIndex();
    }
    //CENTER
    while (centerImgIndex === leftImgIndex || centerImgIndex === rightImgIndex ||
        blockShownPicInTwoSubsequentIterations.includes(centerImgIndex)) {
        centerImgIndex = generateRandomIndex();
    }
    //RIGHT
    while (rightImgIndex === leftImgIndex || rightImgIndex === centerImgIndex ||
        blockShownPicInTwoSubsequentIterations.includes(rightImgIndex)) {
        rightImgIndex = generateRandomIndex();
    }
    // console.log(BusMall.allBusMal[leftImgIndex]); //this same to BusMall.allBusMal[0]
    // console.log(BusMall.allBusMal[centerImgIndex]);
    // console.log(BusMall.allBusMal[rightImgIndex]);
    //.urlSourse bring the extension of the image lik .jpg and so on
    // console.log(BusMall.allBusMal[rightImgIndex].urlSourse);

    //to save a pic that are different'not repeted in two time' prevent users from seeing the same image in two subsequent iterations //you can make sure to replace values every time you run the function 
    // blockShownPicInTwoSubsequentIterations[leftImgIndex,centerImgIndex,rightImgIndex];

    blockShownPicInTwoSubsequentIterations=[];
    console.log('after',blockShownPicInTwoSubsequentIterations);
    blockShownPicInTwoSubsequentIterations.push(leftImgIndex,centerImgIndex,rightImgIndex);
        
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
        } else {
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
    } else {
        //to stop click after the number of maxAttempts (let maxAttempts=25;) //handel the clicking
        //render the list //<ul id="resultList"> 'this tag in html'
        // show the list
        let list = document.getElementById('resultList');

        //put the button inside the else, because we finish everything
        let resultButton = document.getElementById('resultButton');
        //add event listener to the button //showResult is function
        resultButton.addEventListener('click', showResult);

        // to shown the button "make it not hidden"
        resultButton.hidden = false;

        //making loop to push the votes and shown to the array
        //I'll put the push of shown and votes in this function because if I push it inside "function BusMall" the first initial value it will be zero, we don't want that, we want after he finish votes and shown, e need to push to "votes array"
        for (let i = 0; i < BusMall.allBusMal.length; i++) {
            votesArray.push(BusMall.allBusMal[i].votes);
            shownArray.push(BusMall.allBusMal[i].shown);

        }
        
        //create the showResult function, this fun for shown the result
        function showResult() {

            let BusMallResult;
            //create li using for loop
            for (let i = 0; i < BusMall.allBusMal.length; i++) {
                BusMallResult = document.createElement('li');
                //append li to the list
                list.appendChild(BusMallResult);
                //give it a text content-> name[i]: name of each one , and votes[i] for each one
                BusMallResult.textContent = `${BusMall.allBusMal[i].name}  
                                        with path  ${BusMall.allBusMal[i].urlSourse}  
                                        has  ${BusMall.allBusMal[i].votes} votes
                                        and was seen ${BusMall.allBusMal[i].shown} times`;
            }

            
            //now we need to make the click button stop after shown the result, to stop repeate the result
            resultButton.removeEventListener('click', showResult);
        }
        updateStorage();
        //afterfinish the votes and shown, show the chart
        
        busMallChart();

        //now we need to make the click stop after 25 votes'the user cann't click after 25 votes', removed event listener // and finaly remove the clicking
        // leftImg.removeEventListener('click', handelUserClick);
        // centerImg.removeEventListener('click', handelUserClick);
        // rightImg.removeEventListener('click', handelUserClick);

        imgDivContainer.removeEventListener('click', handelUserClick);
    }

}

// chart.js //bar chart

function busMallChart() {
    //first: get the chart element by id "the canvas tag" <canvas id="myChart"></canvas>
    //getContext('2d') tell the canvas that we will draw 2 dimensional shapes'2 dimensional mean high and width'
    let ctx = document.getElementById('myChart').getContext('2d');
    //{}it's like a new object
    let chart = new Chart(ctx, {
        //type..specify what type is the chart
        type: 'bar',
        //data..specify what data I want to show, data is usually an object
        data: {
            labels: namesArrayForChartLabel,
            datasets: [{
                label: 'Bus Mall images information votes',
                data: votesArray, //inside the data I'll put the values 'votes'
                backgroundColor: [
                    'rgb(46,139,87)',
                ],
                borderWidth: 1
            },

            {
                label: 'Bus Mall images information shown',
                data: shownArray, //inside the data I'll put the values 'shown'
                backgroundColor: [
                    'gold',
                ],

                borderWidth: 1
            }

            ]
        },
        options: {}
    });

}

// console.log(localStorage);
// //setItem adding items to the local storage 
// //setItem: is a way to adding stuff inside block in storage //we need 2 thigs to store something which is key and value //setItem(key,value)
// localStorage.setItem('name','john');
// localStorage.setItem('age','24');

// //the data type when i'll storage it should be string
// //to get the data from my local storage and use it in js
// //getItem('key), we want the key ad the key it will give us a value
// //get data from the local storage is by using localStorage.getItem('key');
// console.log(localStorage.getItem('age'));

// //to removing stuff from the local storage
// //remove a key from the local storage
// localStorage.removeItem('age');

// //to removing everything from the local storage
// localStorage.setItem('walk','walking here...');
// //now to clear everything from the local storage
// localStorage.clear();

//now we need to store values in localStorage
// function updateStorage() {
//     //we need to store the array
//     // localStorage.setItem('shown',BusMall.shown);
//     //way to change the array of object into an actual string to save it into localStorage, we can use json to do that
//     //JSON: stands for JavaScript Object Notation
//     //JSON is a normal object contain of 
//     // let arrayStringUsingJson = JSON
//     console.log(JSON);

// }

function updateStorage() {
    let arrayString = JSON.stringify( BusMall.allBusMal);
    localStorage.setItem('shown data',arrayString);
}
function getData(){
   let data = localStorage.getItem('shown data'); //talk the data from local storage 
   let dataObj = JSON.parse(data); //change data from string to obj
   if(dataObj !== null){ 
    BusMall.allBusMal= dataObj
   }
}
getData();
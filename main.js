// Compare If else condition with Switch 

var color = '';

// Condition //
// if(color == 'Green'){
//     console.log('This is Green');
// }
// else if(color == 'Blue'){
//     console.log('This is Blue');
// }
// else if(color == 'Purple'){
//     console.log('This is Purple Color');
// }
// else if(color = 'Red'){
//     console.log('This is Red Color');
// }else{
//     console.log('Default color is Black');
// }


//-- Switch --//
// switch(color){
//     case 'Green':
//         console.log('This is Green');
//         break;

//     case 'Blue':
//         console.log('This is Blue');
//         break;

//     case 'Purple':
//         console.log('This is Purple');
//         break;

//     case 'Red':
//         console.log('This is Red');
//         break;

//     default:
//         console.log('Default color is Black');
// }


// Applying switch in Loop (break & continue) //
// break //
for(i = 0; i<10; i++){
    if( i > 4){
        break;
    }
    // console.log(i);
}

// continue //
for(i = 0; i< 10; i++){
    if(i == 5){
        continue;
    }
    // console.log(i);
}


// Applying switch in Array with Loop (break and continue) //
var number = [45, 65, 85, 77, 44, 95, 21, 35, 40, 60];

// break //
for(var i = 0; i<number.length; i++){
    var outNumber = number[i];
    if(outNumber > 70){
        break;
    }
    // console.log(outNumber);
}

// // continue //
for(var i = 0; i<number.length; i++){
    var arrayElement = number[i];
    if(arrayElement > 80){
        continue;
    }
    // console.log(arrayElement);
}


var question = 'd';
var result;
switch(question){
    case 'a':
        result = 'You Entered Result A';
        break;
    case 'b':
        result = 'You Entered Result B';
        break;
    case 'c':
        result = 'You Entered Result C'
        break;
    case 'd':
        result = 'You Entered Result D'
        break;
    default:
        result = 'Invalid Result';
}
// console.log(result);

var num = 5;
var evenNumber = 'Your Enterd a Enven Number';
var oddNumber = 'You Entered a Odd Number';
switch(num%2){
    case 0:
        console.log(evenNumber);
        break;
    case 1:
        console.log(oddNumber);
        break;
    default:
        console.log('Invalid Number')
}

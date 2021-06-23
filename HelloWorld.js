'Use Strict'

let places = ['New Orleans','New Mexico','Atlanta','El Paso','Phoenix','Orlando','New York','Aspen','Paris','Aruba']
let Mode = ['Plane','Car','Cruise','Train']
let eat = ["A Traditional Meal","Soul Food","A Spanish meal","Fast Food"]
let fun = ["A Dinner Show","A Football Game","A Basketball Game",'A Movie','Dancing']


function genRandom(array){
    let h1 = Math.floor(Math.random()*array.length)
    return array[h1]
}

let userInput = prompt('Would you like to take a trip?')
    if(userInput = "yes"){
        console.log(`Let's Get Started!`)
    }


let dest = genRandom(places)
let transpo = genRandom(Mode)
let food = genRandom(eat)
let ent = genRandom(fun)

    console.log(` We are going to ${dest}, by ${transpo}, we are going to eat ${food}, and enjoy ${ent}`)


    let check1 = prompt(`Are you happy with today's selection? Yes or No`)
        if(check1 == 'yes'){
            console.log(`Perfect! your trip has been Confirmed!`)
        }
        else if(check1=='no'){
            let check2 = prompt('What would you like to change? Food, Destination, Transportation,Entertainment, or Everything?')
            switch(check2){
                case 'food':
                    console.log(`How about ${food}?`);
                    break;
                case 'Destination':
                    console.log(`lets try ${dest}!`)
                    break;
                case 'transportation':
                    console.log(`Is this better? ${transpo}!`)
                    break;
                case 'entertainment':
                    console.log(`I think you'll like this...${fun}`)
                    break;
                case 'everything':
                    console.log(`let try this again! We are going to ${dest}, by ${transpo}. We are going to eat ${food}, enjoy ${ent}`)
                    break;
            }
        }
let check3 = prompt('Are you happy with these changes?')
    if(check3 === "yes"){
        console.log('Perfect your trip is confirmed!')
    }
    else(check3 !== 'yes')
        console.log('Lets try opening up to more possibilities')
        console.log(userInput)

    
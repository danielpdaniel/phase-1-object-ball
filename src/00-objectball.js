function gameObject() {
    let obj = {
        home:{
            teamName:"Brooklyn Nets",
            colors:["Black", "White"],
            players:{
                "Alan Anderson":{
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans":{
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez":{
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee":{
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry":{
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away:{
            teamName:"Charlotte Hornets",
            colors:["Turquoise", "Purple"],
            players:{
                "Jeff Adrien":{
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo":{
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop":{
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon":{
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood":{
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
         }
    }
    return obj;
}


function numPointsScored(playerName){
    const obj = gameObject();
    for (const e in obj){
        for (const key in obj[e]["players"]){
            if (key.toUpperCase() === playerName.toUpperCase()){
                return obj[e]["players"][key]["points"]
            }
        }
    }
}

function shoeSize(playerName){
    const obj = gameObject();
    for (const e in obj){
        for(const key in obj[e]["players"]){
            if(key.toUpperCase() === playerName.toUpperCase()){
                return obj[e]["players"][key]["shoe"];
            }
        }
    }
}

function teamColors(teamName){
    const obj = gameObject();
    for (const e in obj) {
        if (obj[e]["teamName"].toUpperCase() === teamName.toUpperCase()){
            return obj[e]["colors"]
        }
    }
}

function teamNames() {
    const obj = gameObject();
    let namesArray = []
    for (const e in obj) {
        namesArray.push(`${obj[e]["teamName"]}`)
    }
    return namesArray;
}

function playerNumbers(teamName) {
    const obj = gameObject();
    let numArray = []
    for (const e in obj){
        // console.log(obj[e]["teamName"] === teamName)
            if (obj[e]["teamName"].toUpperCase() === teamName.toUpperCase()) {
               for(const key in obj[e]["players"]) {
                numArray.push(obj[e]["players"][key]["number"])
               }
            }
        
    }
    return numArray
}

function playerStats(playerName) {
    const obj = gameObject();
    let statsObj = {}
    for (const e in obj) {
        for (const key in obj[e]["players"])
        // console.log(key)
        if (key === playerName) {
            // console.log(playerName)
           return obj[e]["players"][playerName]
        }
    }
}

function bigShoeRebounds() {
    const obj = gameObject();
    let shoeArray = [];
    for (const e in obj) {
      for (const key in obj[e]["players"]){
       shoeArray.push((obj[e]["players"][key]["shoe"]))
        }
    }
    for (const e in obj) {
        for (const key in obj[e]["players"]){
         if(obj[e]["players"][key]["shoe"] === Math.max(...shoeArray)){
            return (`${key} has a shoe size of ${obj[e]["players"][key]["shoe"]} and has made ${obj[e]["players"][key]["rebounds"]} rebounds.`)
        }
      }
//    return Math.max(...shoeArray)
    }
}

function mostPointsScored() {
    const obj = gameObject();
    let scoreList = []
    for (const e in obj) {
        for (const key in obj[e]["players"]) {
            scoreList.push(obj[e]["players"][key]["points"]);
        }
    }
    for(const e in obj){
        for(const key in obj[e]["players"]){
    if(obj[e]["players"][key]["points"] === Math.max(...scoreList)){
        console.log(key)
         }
    }
    }
};

function winningTeam() {
    const obj = gameObject();
    let scoreListOne = [];
    let scoreListTwo = [];
        for (const key in obj["home"]["players"]){
            scoreListOne.push(obj["home"]["players"][key]["points"])
           }  
        for (const key in obj["away"]["players"]){
            scoreListTwo.push(obj["away"]["players"][key]["points"])
        }
    if ((scoreListOne.reduce((total, e) => total + e, 0)) > (scoreListTwo.reduce((total, e) => total + e, 0))) {
        return `The ${obj["home"]["teamName"]} scored more points!`
    } else {
        return `The ${obj["away"]["teamName"]} scored more points!`
    }
};

function playerWithLongestName() {
    const obj = gameObject();
    let names = []
    let namesArray = []
    for (const e in obj){
        for (const key in obj[e]["players"]){
            names.push(key)
            namesArray.push(key.length) 
            }
        }
    for (const num of namesArray){
        if(num === Math.max(...namesArray)){
        return names[namesArray.indexOf(num)];
         }
    }
}

function doesLongNameStealATon() {
    const obj = gameObject();
    const longName = playerWithLongestName();
    let reboundList = [];
    let playerNames = [];
    for (const e in obj) {
        for (const key in obj[e]["players"]) {
            reboundList.push(obj[e]["players"][key]["rebounds"]);
            playerNames.push(key)
            // if(obj[e]["players"][key]["rebounds"] === Math.max(...reboundList)){
            //     return `${[key]}`
            // }
        }
    }
// console.log(Math.max(...reboundList));
// console.log(playerNames);
return playerNames[reboundList.indexOf(Math.max(...reboundList))] === longName;
}
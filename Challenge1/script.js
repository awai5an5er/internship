const game = {
    team1 :{
        keeper1: 'Navas',
        fieldPlayers1:[
            "Marcelo","Ramos","Varane","Carvajal","Kroos","Modric",'Casemiro',"Ronaldo","Benzema","Bale"
        ]
    },
    team2 : {
        keeper2:"Ter Stegan",
        fieldPlayers2:["Dani",'Pique',"Umititi",'Puyol','Iniesta',"Xavi","Busquets","Neymar","Suarez","Messi"
        ]
    },
    odds :{
        team1:2,
        draw:1,
        team2:3
    },
    scored:[
        'Ronaldo',"Benzema","Bale","Messi"
    ]
}
const bothTeams =[
    game.team1,game.team2
]
console.log(bothTeams);
const subs1 =[
    "Isco",'Asensio','Nacho'
]
const subs2 =[
    "Dembele","Paulinho","Ratikic"
]
const finalTeam1 =[
    game.team1.keeper1,...game.team1.fieldPlayers1,...subs1
]
console.log(finalTeam1);

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
printGoals(...game.scored);

game.odds.team1<game.odds.team2 && console.log("Hala Madrid!")
game.odds.team1>game.odds.team2 && console.log("Visca Barca!")

const goalScorer = [...game.scored];
console.log(goalScorer);

for (const [goalNum, player] of goalScorer.entries()) {
  console.log(`${player} scored goal number ${goalNum + 1}`);
}
let avg;
let s = 0;
let i = 0;
for (const key in game.odds ){ 
    s+=game.odds[key];
    i++;
}
for (const key in game.odds ){ 
    console.log(`Odds of ${key} are: ${game.odds[key]} `);
    i++;
}
avg = s/i;
console.log(`The average odds are: ${avg}`)

const gameEvents = new Map([
  [17, 'GOAL'],
  [36, 'Substitution'],
  [47, 'GOAL'],
  [61, 'Substitution'],
  [64, 'Yellow card'],
  [69, 'Red card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'GOAL'],
  [80, 'GOAL'],
  [92, 'Yellow card']
]);
//1
const eve = [...gameEvents];
const events = [...gameEvents.values()];
console.log(gameEvents)
const allEvents = new Set(events);
console.log(allEvents)
//2
console.log("unfair yellow card removed")
gameEvents.delete(64);
console.log(gameEvents)
//3
const eventsPerGame = Number(eve.length);
console.log(`Total events occured: ${eventsPerGame}`);
const minutePerEvent = 90/eventsPerGame;
console.log(`An event occured, on average, every ${minutePerEvent} minutes of the game.`)
//4
for(const [time,event] of gameEvents ){
    if(Number(time)<45)
    console.log(`First half ${time}:${event}`);
    else
    console.log(`Second half ${time}: ${event}`)
} 
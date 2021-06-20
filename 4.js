let players = ['Lebron', 'Steph', 'Kyrie']

function addPlayer(player) {
    players.push(player)
}

console.log(players.length)

addPlayer('Leroy')
addPlayer('john')
addPlayer('dada')

console.log(players.length)

for (let index = 0; index < players.length; index++) {
    const player = players[index];
    
    console.log(player)
}






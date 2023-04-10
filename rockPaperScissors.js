function rockPaperScissors(player){
    const rock='Rock';
    const paper='Paper';
    const scissors='Scissors';
    player=player.toLowerCase()
    if(player=='r'||player=='rock'){
        player=rock
    }else if(player=='s'||player=='scissors'){
        player=scissors
    }else if(player=='p'||player=='paper'){
        player=paper
    }else{
        console.log('Not a valid move. Try again...');
        return;
    }
    let comp=Math.floor(Math.random()*3)+1;
    switch(comp){
        case 1:compMove=rock;break;
        case 2:compMove=paper;break;
        case 3:compMove=scissors;break;
    }
    console.log(`You choose ${player}\nComputer chooses ${compMove}`);
    if(player==rock&&compMove==scissors||player==paper&&compMove==rock||player==scissors&&compMove==paper){
        console.log('You win!');
    }else if(player==compMove){
        console.log('Draw!')
    }else{
        console.log('You lose!')
    }
}
rockPaperScissors('s')


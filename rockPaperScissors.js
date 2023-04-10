function rockPaperScissors(player){
    const rock='\x1b[90mRock\x1b[0m';
    const paper='\x1b[97mPaper\x1b[0m';
    const scissors='\x1b[95mScissors\x1b[0m';
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
        console.log('\x1b[92mYou win!\x1b[0m');
    }else if(player==compMove){
        console.log('\x1b[93mDraw!\x1b[0m')
    }else{
        console.log('\x1b[91mYou lose!\x1b[0m');
    }
}
rockPaperScissors('r');




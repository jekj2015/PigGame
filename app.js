var scores , roundScores , activePlayer ,selector;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

selector = '#current-'+activePlayer;

//document.querySelector(selector).textContent = dice;

//document.querySelector(selector).innerHTML = '<em>' + dice + '</em>';
document.getElementById('score-0').textContent = '0'
document.getElementById('score-1').textContent = '0'
document.getElementById('current-0').textContent = '0'
document.getElementById('current-1').textContent = '0'
document.querySelector('.dice').style.display = 'none';


document.querySelector('.btn-hold').addEventListener('click',function(){
    
    
    scores[activePlayer] += roundScore;
    document.querySelector('#score-'+activePlayer).textContent = roundScore;
    
    if(scores[activePlayer] >= 100)
        {
            
            document.querySelector('#name-'+activePlayer).textContent = Winner;
            
        }
    else
          nextPlayer();
    
    
});

document.querySelector('.btn-roll').addEventListener('click',function(){
    
var dice = Math.floor(Math.random()*6) + 1;
var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+ dice+'.png';
    if(dice !==1)
        {
            
            
            roundScore+= dice;
            document.getElementById('current-'+activePlayer).textContent = dice;
           // document.querySelector('#score-'+activePlayer).textContent = roundScore;
        }
    else{
        
        
     nextPlayer();
    
    }
    
    
});

function nextPlayer()
{
    
     activePlayer === 0 ? activePlayer = 1 : activePlayer =0
        roundScore = 0;
        document.getElementById('current-0').textContent = '0'
        document.getElementById('current-1').textContent = '0'
       // document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');  
    
    
    
}
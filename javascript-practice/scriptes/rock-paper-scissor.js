let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };

  updateScoreElement();

    let isAutoPlaying = false;
    let intervalId;

    document.querySelector('.autoplay-btn').addEventListener('click', ()=>{
      function autoPlay(){
        if (!isAutoPlaying){
            intervalId = setInterval(function(){
            const playerMove = pickComputerMove();
            playGame(playerMove)
            },1000)
            isAutoPlaying = true;
        }else{
          clearInterval(intervalId)
          isAutoPlaying = false;
        }    
      } 
      autoPlay()
    })
    


  function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        result = 'You lose.';
      } else if (computerMove === 'paper') {
        result = 'You win.';
      } else if (computerMove === 'scissors') {
        result = 'Tie.';
      }

    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        result = 'You win.';
      } else if (computerMove === 'paper') {
        result = 'Tie.';
      } else if (computerMove === 'scissors') {
        result = 'You lose.';
      }
      
    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        result = 'Tie.';
      } else if (computerMove === 'paper') {
        result = 'You lose.';
      } else if (computerMove === 'scissors') {
        result = 'You win.';
      }
    }

    if (result === 'You win.') {
      score.wins += 1;
    } else if (result === 'You lose.') {
      score.losses += 1;
    } else if (result === 'Tie.') {
      score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement();

    document.querySelector('.js-result')
  .innerHTML = result

  document.querySelector('.js-moves')
  .innerHTML = `You
  <img src="images/${playerMove}-emoji.png" alt="" class="btn-icon">
  <img src="images/${computerMove}-emoji.png" alt="" class="btn-icon">
  Computer`;
  }

  ///
  document.querySelector('.rock-btn').addEventListener('click', ()=>{
    playGame('rock');
  })

  document.querySelector('.paper-btn').addEventListener('click', ()=>{
    playGame('paper');
  })
  document.querySelector('.scissor-btn').addEventListener('click', ()=>{
    playGame('scissor');
  })

  document.querySelector('.reset-score-btn').addEventListener('click', ()=>{
    score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      localStorage.removeItem('score');
      updateScoreElement()
  })

  function updateScoreElement(){
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }

  function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissors';
    }

    return computerMove;
  }
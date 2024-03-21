document.addEventListener("DOMContentLoaded", function () {
  const balls = document.querySelectorAll(".ball");
  const goal = document.getElementById("goal");
  const gameContainer = document.getElementById("game-container");
  let ballsLeft = balls.length; // Houd het aantal ballen bij dat nog niet in het doel is geweest

  // Beweging van de ballen
  document.addEventListener("keydown", function (event) {
    const key = event.key;

    balls.forEach((ball) => {
      const ballStyle = getComputedStyle(ball);
      let ballLeft = parseInt(ballStyle.left);
      let ballTop = parseInt(ballStyle.top);

      switch (key) {
        case "ArrowUp":
          ball.style.top = ballTop - 10 + "px";
          break;
        case "ArrowDown":
          ball.style.top = ballTop + 10 + "px";
          break;
        case "ArrowLeft":
          ball.style.left = ballLeft - 10 + "px";
          break;
        case "ArrowRight":
          ball.style.left = ballLeft + 10 + "px";
          break;
      }

      // Controleer of de bal het doel bereikt
      if (checkCollision(ball, goal)) {
        ball.remove(); // Verwijder de bal die het doel heeft bereikt
        ballsLeft--; // Verminder het aantal ballen dat nog niet in het doel is geweest
        if (ballsLeft === 0) {
          alert("Gefeliciteerd! Je hebt alle ballen in het doel gekregen!");
        }
      }
    });
  });

  // Controleer of er een botsing is tussen de bal en het doel
  function checkCollision(ball, goal) {
    const ballRect = ball.getBoundingClientRect();
    const goalRect = goal.getBoundingClientRect();
    return !(
      ballRect.right < goalRect.left ||
      ballRect.left > goalRect.right ||
      ballRect.bottom < goalRect.top ||
      ballRect.top > goalRect.bottom
    );
  }
});

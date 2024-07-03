import { useEffect } from 'react';

function Timer({ secondsRemaining, dispatch }) {
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      const interval = setInterval(() => dispatch({ type: 'countdown' }), 1000);

      return function () {
        clearInterval(interval);
      };
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {minutes < 10 && '0'}
      {minutes}:{seconds < 10 && '0'}
      {seconds}
    </div>
  );
}

export default Timer;

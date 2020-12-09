import  { useState } from 'react';

const PopUp = () => {
// pop up to add new project
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  }
};

export default PopUp
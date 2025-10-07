import React from 'react';

const WindowTracker = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function watchWindow() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", watchWindow);

    return () => {
      window.removeEventListener("resize", watchWindow);
    };
  }, []);

  return (
    <div>
      <h1>Window width: {windowWidth}</h1>
    </div>
  );
};




export default WindowTracker
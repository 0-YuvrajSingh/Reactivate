import { useState } from "react";

/*  here we did not use function in-place of const because function is hoisted i.e.,
    we can access function before the place of declaration but here it will raise error
    since reference value is not passed. 
*/

export const ToggleApp = () => {
  // When defining a functional component using const, you need to use arrow function syntax.
  const [isVisible, setIsVisible] = useState(0);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
    /*  React doesn't immediately update state. The state will only be updated on the next render cycle.
        It is a common mistake for developers new to React to place console statements right after a set function.
        So this is something to be aware when you are building out your React applications.
    */
  };

  return (
    <div>
      <button onClick={handleToggleVisibility}>{!isVisible ? "Show" : "Hide"} Message</button>
      {isVisible && <p id="message">Hello There!</p>}
    </div>
  );
};

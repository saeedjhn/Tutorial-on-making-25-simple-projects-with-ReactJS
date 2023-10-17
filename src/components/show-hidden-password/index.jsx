import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import "./index.css";

/*
The React useState Hook allows us to track state in a function component.

What is a Hook? A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook 
that lets you add React state to function components. We’ll learn other Hooks later.

When would I use a Hook? If you write a function component and realize you need to add some state to it, previously you had 
to convert it to a class. Now you can use a Hook inside the existing function component. We’re going to do that right now!
*/

function Index() {
  const [type, setType] = useState("password"); /* Initialize */
  const [icon, setIcon] = useState(eyeOff); /* Allow use Component(Object) */

  function handleOnClick() {
    if (type === "password") {
      setType("text");
      setIcon(eye);
      return;
    }

    setType("password");
    setIcon(eyeOff);
  }

  return (
    <div className="wrapper">
      <div className="input-fields">
        <input type={type} name="" id="password" />
        <span onClick={handleOnClick}>
          <Icon icon={icon} size={25} />
        </span>
      </div>
    </div>
  );
}

export default Index;

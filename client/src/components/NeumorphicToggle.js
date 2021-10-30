import React, { useState } from "react";
import "./NeumorphicToggle.css";

const NeumorphicToggle = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`cmp-neumorphic-toggle ${toggle ? "toggle-true" : ""}`}>
      <label className="label">
        <div className="toggle">
          <input
            onClick={() => {
              setToggle(!toggle);
            }}
            className="toggle-state"
            type="checkbox"
            name="check"
            value="check"
          />
          <div className="indicator"></div>
        </div>
      </label>
    </div>
  );
};

export default NeumorphicToggle;

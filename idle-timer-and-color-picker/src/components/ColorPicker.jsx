import React, { useState } from "react";
import { ChromePicker, BlockPicker } from "react-color";

const ColorPicker = () => {
  const [color, setColor] = useState("#fff");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const handleChange = (color) => {
    setColor(color.hex);
  };

  return (
    <div>
      {/* <BlockPicker
        color={color}
        onChange={(updateColor) => setColor(updateColor)}
      /> */}
      <div>
        <h1>You Pick {color}</h1>
        <button
          onClick={() =>
            setShowColorPicker((showColorPicker) => !showColorPicker)
          }
        >
          {showColorPicker ? "close color picker" : "pick a color"}
        </button>

        {showColorPicker && (
          <BlockPicker color={color} onChange={handleChange} />
        )}
      </div>

      <div
        style={{
          backgroundColor: color,
          width: 250,
          height: 250,
          display: "flex"
        }}
      ></div>
    </div>
  );
};

export default ColorPicker;

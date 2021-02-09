import React from "react";
import RadioProps from "./radio.interface";

const Radio: React.FC<RadioProps> = (props: RadioProps) => {
  const { onChangeHandler, list } = props;

  return (
    <div className="control">
      {list.map((item, i) => {
        return (
          <label className="radio">
            <input
              id={`radio-${i}-${item.name}`}
              key={`radio-${i}-${item.name}`}
              onChange={onChangeHandler}
              type="radio"
              {...item}
            />{" "}
            {item.name}
          </label>
        );
      })}
    </div>
  );
};
export default Radio;

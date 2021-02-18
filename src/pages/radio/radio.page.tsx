import React, { useState } from "react";
import withPublicArea from "../../hocs/PublicArea/publicArea.hoc";
import Frame from "react-frame-component";
import Radio from "../../components/UI/Radio/radio.component";
import { RadioItem } from "../../components/UI/Radio/radio.interface";

interface ComponentProps {
  someProps: boolean;
}
const RadioPage: React.FC<ComponentProps> = (props: ComponentProps) => {
  const [radioList, setRadioList] = useState<RadioItem[]>([
    { name: "1", checked: false, disabled: false },
    { name: "2", checked: false, disabled: false },
    { name: "3", checked: false, disabled: false },
    { name: "4", checked: false, disabled: false },
    { name: "5", checked: false, disabled: false },
    { name: "6", checked: false, disabled: false },
    { name: "7", checked: false, disabled: true },
  ]);
  const [radioItem, setRadioItem] = useState<RadioItem | undefined>(undefined);

  console.log(radioList);
  console.log(radioItem);

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Checkbox</h1>
        <div className="container">
          <h2 className="subtitle">Normal select</h2>
          <div className="columns is-vcentered">
            <div className="column has-text-centered">
              <Radio
                list={radioList}
                value={radioItem}
                onChangeHandler={(event) => {
                  const rdList = radioList.map((item) => {
                    return {
                      ...item,
                      checked: item.name === event.target.name,
                    };
                  });
                  const rdItem = radioList.find(
                    (item) => item.name === event.target.name
                  );
                  setRadioList(rdList);
                  setRadioItem(rdItem);
                }}
              />
            </div>
          </div>
          <div style={{ height: "250px" }} className="container">
            <Frame
              width="100%"
              height="100%"
              initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/wilmanh/dbdcb2f25bf6719b17deb2fe4901e0c1.js'></script></body></html>"
            >
              <div></div>
            </Frame>
          </div>
        </div>
      </div>
    </section>
  );
};
export default withPublicArea(RadioPage);

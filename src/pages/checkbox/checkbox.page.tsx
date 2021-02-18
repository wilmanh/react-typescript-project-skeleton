import React, { useState } from "react";
import withPublicArea from "../../hocs/PublicArea/publicArea.hoc";
import Frame from "react-frame-component";
import Checkbox from "../../components/UI/Checkbox/checkbox.component";

interface ComponentProps {
  someProps: boolean;
}
const CheckboxPage: React.FC<ComponentProps> = (props: ComponentProps) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Radio</h1>
        <div className="container">
          <h2 className="subtitle">Normal select</h2>
          <div className="columns is-vcentered">
            <div className="column has-text-centered">
              <Checkbox
                name="2"
                placeHolder="Seleccione..."
                checked={toggle}
                onChangeHandler={(event) => {
                  setToggle(!toggle);
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
        <div className="section container">
          <h2 className="subtitle">disable select</h2>
          <div className="columns">
            <div className="column has-text-centered">
              <div className="has-text-centered">
                <Checkbox
                  disabled
                  name="1"
                  placeHolder="Seleccione..."
                  checked={toggle}
                  onChangeHandler={(event) => {
                    event.preventDefault();
                    setToggle(!toggle);
                  }}
                />
              </div>
            </div>
          </div>
          <div style={{ height: "250px" }} className="container">
            <Frame
              width="100%"
              height="100%"
              initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/wilmanh/5457d78b397fd2c0d6ac71cd73a1ab95.js'></script></body></html>"
            >
              <div></div>
            </Frame>
          </div>
        </div>
      </div>
    </section>
  );
};
export default withPublicArea(CheckboxPage);

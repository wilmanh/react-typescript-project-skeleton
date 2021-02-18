import React, { useState } from "react";
import withPublicArea from "../../hocs/PublicArea/publicArea.hoc";
import Frame from "react-frame-component";
import Input from "../../components/UI/Input/input.component";
import Box from "../../components/UI/Box/Box.component";
import Button from "../../components/UI/Button/button.component";
import { buttonColors } from "../../utils/enum";

interface ComponentProps {
  someProps: boolean;
}
const BoxPage: React.FC<ComponentProps> = (props: ComponentProps) => {
  const [normalInput, setNormalInput] = useState("");
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Box</h1>

        <div className="section container">
          <div className="columns is-vcentered">
            <div className="column has-text-centered">
              <Box name="first box">
                <label className="label" htmlFor="">
                  {" "}
                  Box
                </label>
                <Input
                  type="textarea"
                  onChangeHandler={(event) => {
                    event.preventDefault();
                    setNormalInput(event.target.value);
                  }}
                  placeHolder="Write Here"
                  value={normalInput}
                ></Input>
                <Input
                  type="text"
                  onChangeHandler={(event) => {
                    event.preventDefault();
                    setNormalInput(event.target.value);
                  }}
                  placeHolder="Write Here"
                  value={normalInput}
                ></Input>
                <Input
                  type="text"
                  onChangeHandler={(event) => {
                    event.preventDefault();
                    setNormalInput(event.target.value);
                  }}
                  placeHolder="Write Here"
                  value={normalInput}
                ></Input>
                <Button
                  color={buttonColors.success}
                  light={true}
                  value={"is-success"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                  }}
                  type="button"
                ></Button>
              </Box>
            </div>
          </div>
          <div style={{ height: "250px" }} className="container">
            <Frame
              width="100%"
              height="100%"
              initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/wilmanh/68040651a3dd24f301b7abcdbc5e4c4d.js'></script></body></html>"
            >
              <div></div>
            </Frame>
          </div>
        </div>

        <div className="section container">
          <h2 className="subtitle">fixed size</h2>
          <div className="container">
            <Input
              type="textarea"
              rows={5}
              fixed={true}
              onChangeHandler={(event) => {
                event.preventDefault();
                setNormalInput(event.target.value);
              }}
              placeHolder="Write Here"
              value={normalInput}
            ></Input>
          </div>
          <div style={{ height: "250px" }} className="container">
            <Frame
              width="100%"
              height="100%"
              initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/wilmanh/68040651a3dd24f301b7abcdbc5e4c4d.js'></script></body></html>"
            >
              <div></div>
            </Frame>
          </div>
        </div>
      </div>
    </section>
  );
};
export default withPublicArea(BoxPage);

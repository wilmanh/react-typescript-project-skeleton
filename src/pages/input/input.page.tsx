import React, { useState } from "react";
import withPublicArea from "../../hocs/PublicArea/publicArea.hoc";
import Frame from "react-frame-component";
import Input from "../../components/UI/Input/input.component";
import { FaBeer, FaCheck } from "react-icons/fa";

interface ComponentProps {
  someProps: boolean;
}
const ComponentsPage: React.FC<ComponentProps> = (props: ComponentProps) => {
  const [normalInput, setNormalInput] = useState("");
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Inputs</h1>
        <div className="section container">
          <h2 className="subtitle">Normal Input</h2>
          <div className="columns is-vcentered">
            <div className="column has-text-centered">
              <Input
                onChangeHandler={(event) => {
                  event.preventDefault();
                  setNormalInput(event.target.value);
                }}
                placeHolder="Write Here"
                value={normalInput}
              ></Input>
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
          <h2 className="subtitle">Colors</h2>
          <div className="columns is-vcentered">
            <div className="column has-text-centered">
              <Input
                onChangeHandler={(event) => {
                  event.preventDefault();
                  setNormalInput(event.target.value);
                }}
                color="is-primary"
                placeHolder="Write Here"
                value={normalInput}
              ></Input>
            </div>
            <div className="column has-text-centered">
              <Input
                onChangeHandler={(event) => {
                  event.preventDefault();
                  setNormalInput(event.target.value);
                }}
                color="is-danger"
                placeHolder="Write Here"
                value={normalInput}
              ></Input>
            </div>
            <div className="column has-text-centered">
              <Input
                onChangeHandler={(event) => {
                  event.preventDefault();
                  setNormalInput(event.target.value);
                }}
                color="is-info"
                placeHolder="Write Here"
                value={normalInput}
              ></Input>
            </div>
            <div className="column has-text-centered">
              <Input
                onChangeHandler={(event) => {
                  event.preventDefault();
                  setNormalInput(event.target.value);
                }}
                color="is-link"
                placeHolder="Write Here"
                value={normalInput}
              ></Input>
            </div>
            <div className="column has-text-centered">
              <Input
                onChangeHandler={(event) => {
                  event.preventDefault();
                  setNormalInput(event.target.value);
                }}
                color="is-success"
                placeHolder="Write Here"
                value={normalInput}
              ></Input>
            </div>
            <div className="column has-text-centered">
              <Input
                onChangeHandler={(event) => {
                  event.preventDefault();
                  setNormalInput(event.target.value);
                }}
                color="is-warning"
                placeHolder="Write Here"
                value={normalInput}
              ></Input>
            </div>
          </div>
          <div style={{ height: "250px" }} className="container">
            <Frame
              width="100%"
              height="100%"
              initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/wilmanh/3ba38b468413e9f085a61365f8149ddf.js'></script></body></html>"
            >
              <div></div>
            </Frame>
          </div>
        </div>

        <div className="section container">
          <h2 className="subtitle">Sizes</h2>
          <div className="columns is-vcentered">
            <div className="column has-text-centered">
              <Input
                onChangeHandler={(event) => {
                  event.preventDefault();
                  setNormalInput(event.target.value);
                }}
                size="is-small"
                color="is-primary"
                placeHolder="Write Here"
                value={normalInput}
              ></Input>
            </div>
            <div className="column has-text-centered">
              <Input
                onChangeHandler={(event) => {
                  event.preventDefault();
                  setNormalInput(event.target.value);
                }}
                size="is-normal"
                color="is-info"
                placeHolder="Write Here"
                value={normalInput}
              ></Input>
            </div>
            <div className="column has-text-centered">
              <Input
                onChangeHandler={(event) => {
                  event.preventDefault();
                  setNormalInput(event.target.value);
                }}
                size="is-medium"
                color="is-link"
                placeHolder="Write Here"
                value={normalInput}
              ></Input>
            </div>
            <div className="column has-text-centered">
              <Input
                onChangeHandler={(event) => {
                  event.preventDefault();
                  setNormalInput(event.target.value);
                }}
                size="is-large"
                color="is-success"
                placeHolder="Write Here"
                value={normalInput}
              ></Input>
            </div>
          </div>
          <div style={{ height: "250px" }} className="container">
            <Frame
              width="100%"
              height="100%"
              initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/wilmanh/2c4d92ac86448b0647bb90ebd7a4dcc3.js'></script></body></html>"
            >
              <div></div>
            </Frame>
          </div>
        </div>

        <div className="section container">
          <h2 className="subtitle">Rounded button</h2>
          <div className="columns is-vcentered">
            <div className="column has-text-centered">
              <Input
                rounded={true}
                onChangeHandler={(event) => {
                  event.preventDefault();
                  setNormalInput(event.target.value);
                }}
                placeHolder="Write Here"
                value={normalInput}
              ></Input>
            </div>
          </div>
          <div style={{ height: "250px" }} className="container">
            <Frame
              width="100%"
              height="100%"
              initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/wilmanh/b1637b3842e8e379a74c90bfa2a49b40.js'></script></body></html>"
            >
              <div></div>
            </Frame>
          </div>
        </div>

        <div className="section container">
          <h2 className="subtitle">
            States (Normal, Hover, Focus, loading, disabled, readonly and
            static)
          </h2>
          <div className="columns is-vcentered">
            <div className="column has-text-centered">
              <Input
                onChangeHandler={(event) => {
                  event.preventDefault();
                  setNormalInput(event.target.value);
                }}
                placeHolder="normal"
                value={normalInput}
              ></Input>
            </div>
            <div className="column has-text-centered">
              <Input
                state="is-focused"
                onChangeHandler={(event) => {
                  event.preventDefault();
                  setNormalInput(event.target.value);
                }}
                placeHolder="is-focused"
                value={normalInput}
              ></Input>
            </div>
            <div className="column has-text-centered">
              <Input
                state="is-hovered"
                onChangeHandler={(event) => {
                  event.preventDefault();
                  setNormalInput(event.target.value);
                }}
                placeHolder="is-hovered"
                value={normalInput}
              ></Input>
            </div>
            <div className="column has-text-centered">
              <Input
                loading={true}
                onChangeHandler={(event) => {
                  event.preventDefault();
                  setNormalInput(event.target.value);
                }}
                placeHolder="loading"
                value={normalInput}
              ></Input>
            </div>
            <div className="column has-text-centered">
              <Input
                disabled
                onChangeHandler={(event) => {
                  event.preventDefault();
                  setNormalInput(event.target.value);
                }}
                placeHolder="disable"
                value={normalInput}
              ></Input>
            </div>
            <div className="column has-text-centered">
              <Input
                readonly={true}
                onChangeHandler={(event) => {
                  event.preventDefault();
                }}
                placeHolder="readonly"
                value={"only to watch"}
              ></Input>
            </div>
            <div className="column has-text-centered">
              <Input
                state="is-static"
                onChangeHandler={(event) => {
                  event.preventDefault();
                }}
                placeHolder="readonly"
                value={"only to watch"}
              ></Input>
            </div>
          </div>
          <div style={{ height: "300px" }} className="container">
            <Frame
              width="100%"
              height="100%"
              initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/wilmanh/fe0f5c1df044ae4275b5345fe7ec50b0.js'></script></body></html>"
            >
              <div></div>
            </Frame>
          </div>
        </div>

        <div className="section container">
          <h2 className="subtitle">Icons</h2>
          <div className="columns is-vcentered">
            <div className="column has-text-centered">
              <Input
                IconLeft={FaBeer}
                IconRight={FaCheck}
                size="is-large"
                onChangeHandler={(event) => {
                  event.preventDefault();
                  setNormalInput(event.target.value);
                }}
                placeHolder="Write Here"
                value={normalInput}
              ></Input>
            </div>
          </div>
          <div style={{ height: "300px" }} className="container">
            <Frame
              width="100%"
              height="100%"
              initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/wilmanh/a195d06cb187aed35388a71230924b03.js'></script></body></html>"
            >
              <div></div>
            </Frame>
          </div>
        </div>
      </div>
    </section>
  );
};
export default withPublicArea(ComponentsPage);

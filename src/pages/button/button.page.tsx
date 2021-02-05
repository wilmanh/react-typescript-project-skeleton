import React, { useState } from "react";
import {
  FaBeer,
  FaAddressBook,
  FaPhoenixSquadron,
  FaCentercode,
  FaAlignCenter,
  FaAlignJustify,
  FaAlignRight,
} from "react-icons/fa";

import Button from "../../components/UI/Button/button.component";
import withPublicArea from "../../hocs/PublicArea/publicArea.hoc";
import Frame from "react-frame-component";

interface ComponentProps {
  someProps: boolean;
}
const ComponentsPage: React.FC<ComponentProps> = (props: ComponentProps) => {
  const [normalButton, setNormalButton] = useState("Click me");
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Buttons</h1>
        <div className="container">
          <h2 className="subtitle">Normal button</h2>
          <div className="columns is-vcentered">
            <div className="column has-text-centered">
              <Button
                value={normalButton}
                onClickHandler={(event) => {
                  event.preventDefault();
                  setNormalButton("Clicked");
                }}
                type="button"
              ></Button>
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
          <h2 className="subtitle">Color buttons</h2>
          <div className="columns">
            <div className="column has-text-centered">
              <div className="buttons has-text-centered">
                <Button
                  color="is-text"
                  value={"is-text"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  color="is-white"
                  value={"is-white"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  light={true}
                  value={"is-light"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  color="is-dark"
                  value={"is-dark"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  color="is-black"
                  value={"is-black"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  color="is-ghost"
                  value={"is-ghost"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  color="is-primary"
                  value={"is-primary"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  color="is-link"
                  value={"is-link"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  color="is-info"
                  value={"is-info"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  color="is-success"
                  value={"is-success"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  color="is-warning"
                  value={"is-warning"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  color="is-danger"
                  value={"is-danger"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>

                <Button
                  color="is-primary"
                  light={true}
                  value={"is-primary"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  color="is-link"
                  light={true}
                  value={"is-link"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  color="is-info"
                  light={true}
                  value={"is-info"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  color="is-success"
                  light={true}
                  value={"is-success"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  color="is-warning"
                  light={true}
                  value={"is-warning"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  color="is-danger"
                  light={true}
                  value={"is-danger"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
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

        <div className="section container">
          <h2 className="subtitle">Size buttons</h2>
          <div className="columns">
            <div className="column has-text-centered">
              <div className="buttons has-text-centered">
                <Button
                  size="is-small"
                  value={"is-small"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  value={"is-default"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  size="is-normal"
                  value={"is-normal"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  size="is-medium"
                  value={"is-medium"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  size="is-large"
                  value={"is-large"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
              </div>
            </div>
          </div>
          <div style={{ height: "250px" }} className="container">
            <Frame
              width="100%"
              height="100%"
              initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/wilmanh/741cc7a7e54e8a5573e910fe2d1b0c09.js'></script></body></html>"
            >
              <div></div>
            </Frame>
          </div>
        </div>

        <div className="section container">
          <h2 className="subtitle">Icon buttons</h2>
          <div className="columns">
            <div className="column has-text-centered">
              <div className="buttons has-text-centered">
                <Button
                  Icon={FaBeer}
                  value={"is-small"}
                  iconSize="is-large"
                  size="is-large"
                  color="is-primary"
                  iconOnly={true}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  Icon={FaAddressBook}
                  value={"icon"}
                  iconSize="is-large"
                  size="is-large"
                  color="is-danger"
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  Icon={FaPhoenixSquadron}
                  value={"icon"}
                  iconSize="is-large"
                  iconRight={true}
                  size="is-large"
                  color="is-danger"
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
              </div>
            </div>
          </div>
          <div style={{ height: "250px" }} className="container">
            <Frame
              width="100%"
              height="100%"
              initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/wilmanh/f8cb6aaa67ae64ad6f9bc0e7e0d8e6cd.js'></script></body></html>"
            >
              <div></div>
            </Frame>
          </div>
        </div>

        <div className="section container">
          <h2 className="subtitle">Displays</h2>
          <div className="columns">
            <div className="column has-text-centered">
              <div className="buttons has-text-centered">
                <Button
                  size="is-small"
                  fullwidth={true}
                  value={"is-small fullwidth"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  value={"is-default fullwidth"}
                  fullwidth={true}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  size="is-normal"
                  fullwidth={true}
                  value={"is-normal fullwidth"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  size="is-medium"
                  fullwidth={true}
                  value={"is-medium fullwidth"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  size="is-large"
                  fullwidth={true}
                  value={"is-large fullwidth"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
              </div>
            </div>
          </div>
          <div style={{ height: "250px" }} className="container">
            <Frame
              width="100%"
              height="100%"
              initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/wilmanh/96667baedfe089d2f9f1df465d5439d4.js'></script></body></html>"
            >
              <div></div>
            </Frame>
          </div>
        </div>

        <div className="section container">
          <h2 className="subtitle">Outlined</h2>
          <div className="columns">
            <div className="column has-text-centered">
              <div className="buttons has-text-centered">
                <Button
                  outlined={true}
                  value={"outlined"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  outlined={true}
                  value={"outlined"}
                  color="is-primary"
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  outlined={true}
                  value={"outlined"}
                  color="is-link"
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  outlined={true}
                  value={"outlined"}
                  color="is-info"
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  outlined={true}
                  value={"outlined"}
                  color="is-success"
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  outlined={true}
                  value={"outlined"}
                  color="is-danger"
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
              </div>
            </div>
          </div>
          <div style={{ height: "250px" }} className="container">
            <Frame
              width="100%"
              height="100%"
              initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/wilmanh/06d4e53e13c1455d990a5fd7cdc12188.js'></script></body></html>"
            >
              <div></div>
            </Frame>
          </div>
        </div>

        <div className="section container">
          <h2 className="subtitle">Inverted</h2>
          <div className="columns">
            <div className="column has-background-primary	 is-primary has-text-centered">
              <div className="buttons has-text-centered">
                <Button
                  inverted={true}
                  value={"inverted"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  inverted={true}
                  value={"inverted"}
                  color="is-primary"
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  inverted={true}
                  value={"inverted"}
                  color="is-link"
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  inverted={true}
                  value={"inverted"}
                  color="is-info"
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  inverted={true}
                  value={"inverted"}
                  color="is-success"
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  inverted={true}
                  value={"inverted"}
                  color="is-danger"
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
              </div>
            </div>
          </div>
          <div style={{ height: "250px" }} className="container">
            <Frame
              width="100%"
              height="100%"
              initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/wilmanh/1dc4b3dcb096f2c63bd49688cda657d1.js'></script></body></html>"
            >
              <div></div>
            </Frame>
          </div>
        </div>
        <div className="section container">
          <h2 className="subtitle">Inverted outlined</h2>
          <div className="columns">
            <div className="column has-background-primary	 has-text-centered">
              <div className="buttons has-text-centered">
                <Button
                  inverted={true}
                  outlined={true}
                  value={"outlined inverted"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  inverted={true}
                  outlined={true}
                  value={"outlined inverted"}
                  color="is-primary"
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  inverted={true}
                  outlined={true}
                  value={"outlined inverted"}
                  color="is-link"
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  inverted={true}
                  outlined={true}
                  value={"outlined inverted"}
                  color="is-info"
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  inverted={true}
                  outlined={true}
                  value={"outlined inverted"}
                  color="is-success"
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  inverted={true}
                  outlined={true}
                  value={"outlined inverted"}
                  color="is-danger"
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
              </div>
            </div>
          </div>
          <div style={{ height: "250px" }} className="container">
            <Frame
              width="100%"
              height="100%"
              initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/wilmanh/9801ecd23221746301837d6562767429.js'></script></body></html>"
            >
              <div></div>
            </Frame>
          </div>
        </div>

        <div className="section container">
          <h2 className="subtitle">Rounded</h2>
          <div className="columns">
            <div className="column is-primary has-text-centered">
              <div className="buttons has-text-centered">
                <Button
                  rounded={true}
                  value={"rounded"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  rounded={true}
                  value={"rounded"}
                  color="is-primary"
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  rounded={true}
                  value={"rounded"}
                  color="is-link"
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  rounded={true}
                  value={"rounded"}
                  color="is-info"
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  rounded={true}
                  value={"rounded"}
                  color="is-success"
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  rounded={true}
                  value={"rounded"}
                  color="is-danger"
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
              </div>
            </div>
          </div>
          <div style={{ height: "250px" }} className="container">
            <Frame
              width="100%"
              height="100%"
              initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/wilmanh/a5d70c30c8625c1f614db8286e13db2a.js'></script></body></html>"
            >
              <div></div>
            </Frame>
          </div>
        </div>

        <div className="section container">
          <h2 className="subtitle">State (Hover, Focus, Active, Loading)</h2>
          <div className="columns">
            <div className="column is-primary has-text-centered">
              <div className="buttons has-text-centered">
                <Button
                  state="is-hovered"
                  value={"is-hovered"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  state="is-focused"
                  value={"is-focused"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  state="is-active"
                  value={"is-active"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  state="is-static"
                  value={"is-static"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  disabled
                  value={"disabled"}
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
                <Button
                  state="is-loading"
                  value={"is-hovered"}
                  color="is-black"
                  onClickHandler={(event) => {
                    event.preventDefault();
                    setNormalButton("Clicked");
                  }}
                  type="button"
                ></Button>
              </div>
            </div>
          </div>
          <div style={{ height: "250px" }} className="container">
            <Frame
              width="100%"
              height="100%"
              initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/wilmanh/2ced55a0ab1b9e742e538117bd5bfae8.js'></script></body></html>"
            >
              <div></div>
            </Frame>
          </div>
        </div>

        <div className="section container">
          <h2 className="subtitle">Addons</h2>
          <div className="columns">
            <div className="column is-primary has-text-centered">
              <div className="field has-addons">
                <p className="control">
                  <Button
                    Icon={FaCentercode}
                    value={"addons"}
                    onClickHandler={(event) => {
                      event.preventDefault();
                      setNormalButton("Clicked");
                    }}
                    type="button"
                  ></Button>
                </p>
                <p className="control">
                  <Button
                    Icon={FaAlignRight}
                    value={"addons"}
                    onClickHandler={(event) => {
                      event.preventDefault();
                      setNormalButton("Clicked");
                    }}
                    type="button"
                  ></Button>
                </p>
                <p className="control">
                  <Button
                    Icon={FaAlignCenter}
                    value={"addons"}
                    onClickHandler={(event) => {
                      event.preventDefault();
                      setNormalButton("Clicked");
                    }}
                    type="button"
                  ></Button>
                </p>
                <p className="control">
                  <Button
                    Icon={FaAlignJustify}
                    value={"addons"}
                    onClickHandler={(event) => {
                      event.preventDefault();
                      setNormalButton("Clicked");
                    }}
                    type="button"
                  ></Button>
                </p>
              </div>
            </div>
          </div>
          <div style={{ height: "250px" }} className="container">
            <Frame
              width="100%"
              height="100%"
              initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/wilmanh/2ced55a0ab1b9e742e538117bd5bfae8.js'></script></body></html>"
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

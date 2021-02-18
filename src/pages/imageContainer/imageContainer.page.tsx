import React, { useState } from "react";
import withPublicArea from "../../hocs/PublicArea/publicArea.hoc";
import Frame from "react-frame-component";
import Input from "../../components/UI/Input/input.component";
import Box from "../../components/UI/Box/Box.component";
import Button from "../../components/UI/Button/button.component";
import ImageContainer from "../../components/UI/ImageContainer/imageContainer.component";

interface ComponentProps {
  someProps: boolean;
}
const ImageContainerPage: React.FC<ComponentProps> = (
  props: ComponentProps
) => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Image container</h1>
        <h2 className="subtitle">A container for responsive images</h2>

        <div className="columns">
          <div className="column">
            <ImageContainer
              url="https://bulma.io/images/placeholders/128x128.png"
              size="is-128x128"
            ></ImageContainer>
          </div>
          <div className="column">
            <ImageContainer
              url="https://bulma.io/images/placeholders/128x128.png"
              size="is-128x128"
              rounded
            ></ImageContainer>
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
    </section>
  );
};
export default withPublicArea(ImageContainerPage);

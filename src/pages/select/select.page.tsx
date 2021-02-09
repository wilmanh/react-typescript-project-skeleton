import React, { useState } from "react";
import withPublicArea from "../../hocs/PublicArea/publicArea.hoc";
import Frame from "react-frame-component";
import Select from "../../components/UI/SelectDropdown/select.component";
import Option from "../../interfaces/utils.interface";

interface ComponentProps {
  someProps: boolean;
}
const SelectPage: React.FC<ComponentProps> = (props: ComponentProps) => {
  const [normalButton, setNormalButton] = useState("Click me");
  const [selected, setSelected] = useState<Option | Option[] | undefined>(
    undefined
  );
  const [selectedMulti, setSelectedMulti] = useState<
    Option | Option[] | undefined
  >(undefined);
  const optionsInitial = [
    {
      label: "1",
      value: "1",
      divider: true,
    },
    {
      label: "2",
      value: "2",
      divider: true,
    },
    {
      label: "3",
      value: "3",
      divider: true,
    },
    {
      label: "4",
      value: "4",
      divider: true,
    },
    {
      label: "20",
      value: "20",
    },
  ];
  const [options, setOptions] = useState<Option[]>(optionsInitial);
  const [optionsMulti, setOptionsMulti] = useState<Option[]>(optionsInitial);
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Select</h1>
        <div className="container">
          <h2 className="subtitle">Normal select</h2>
          <div className="columns is-vcentered">
            <div className="column has-text-centered">
              <Select
                placeHolder="Seleccione..."
                value={selected}
                options={options}
                onClickHandler={(options, selected) => {
                  setSelected(selected);
                  setOptions(options);
                }}
              ></Select>
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
          <h2 className="subtitle">Color select</h2>
          <div className="columns">
            <div className="column has-text-centered">
              <div className="has-text-centered">
                <Select
                  placeHolder="Seleccione..."
                  value={selected}
                  options={options}
                  color="is-primary"
                  onClickHandler={(options, selected) => {
                    setSelected(selected);
                    setOptions(options);
                  }}
                ></Select>
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
export default withPublicArea(SelectPage);

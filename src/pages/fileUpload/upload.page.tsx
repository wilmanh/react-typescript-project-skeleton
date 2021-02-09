import React, { useState } from "react";
import withPublicArea from "../../hocs/PublicArea/publicArea.hoc";
import Frame from "react-frame-component";
import UploadFile from "../../components/UI/UploadFile/upload.component";
import { FaUpload } from "react-icons/fa";

interface ComponentProps {
  someProps: boolean;
}
const CheckboxPage: React.FC<ComponentProps> = (props: ComponentProps) => {
  const [file, setFile] = useState<File | undefined>(undefined);
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">File Upload</h1>
        <div className="container">
          <h2 className="subtitle">Normal</h2>
          <div className="columns is-vcentered">
            <div className="column has-text-centered">
              <UploadFile
                Icon={FaUpload}
                label="Escoja un archivo"
                name="btn-file-uploader"
                value={file}
                onChangeHandler={(event) => {
                  if (event.target.files && event.target.files[0]) {
                    setFile(event.target.files[0] as File);
                  }
                }}
              ></UploadFile>
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
        <div className="container">
          <h2 className="subtitle">With name</h2>
          <div className="columns is-vcentered">
            <div className="column has-text-centered">
              <UploadFile
                Icon={FaUpload}
                hasFileName
                label="Escoja un archivo"
                value={file}
                name="btn-file-uploader"
                onChangeHandler={(event) => {
                  if (event.target.files && event.target.files[0]) {
                    setFile(event.target.files[0] as File);
                  }
                }}
              ></UploadFile>
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
        <div className="container">
          <h2 className="subtitle">Right or centered </h2>
          <div className="columns is-vcentered">
            <div className="column has-text-centered">
              <UploadFile
                Icon={FaUpload}
                hasFileName
                label="Escoja un archivo"
                value={file}
                name="btn-file-uploader"
                onChangeHandler={(event) => {
                  if (event.target.files && event.target.files[0]) {
                    setFile(event.target.files[0] as File);
                  }
                }}
              ></UploadFile>
            </div>
          </div>
          <div className="columns is-vcentered">
            <div className="column has-text-centered">
              <UploadFile
                Icon={FaUpload}
                hasFileName
                align="is-centered"
                label="Escoja un archivo"
                value={file}
                name="btn-file-uploader"
                onChangeHandler={(event) => {
                  if (event.target.files && event.target.files[0]) {
                    setFile(event.target.files[0] as File);
                  }
                }}
              ></UploadFile>
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
        <div className="container">
          <h2 className="subtitle">Full width</h2>
          <div className="columns is-vcentered">
            <div className="column has-text-centered">
              <UploadFile
                Icon={FaUpload}
                hasFileName
                expand
                label="Escoja un archivo"
                value={file}
                name="btn-file-uploader"
                onChangeHandler={(event) => {
                  if (event.target.files && event.target.files[0]) {
                    setFile(event.target.files[0] as File);
                  }
                }}
              ></UploadFile>
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
        <div className="container">
          <h2 className="subtitle">Boxed</h2>
          <div className="columns is-vcentered">
            <div className="column has-text-centered">
              <UploadFile
                Icon={FaUpload}
                boxed
                label="Escoja un archivo"
                value={file}
                name="btn-file-uploader"
                onChangeHandler={(event) => {
                  if (event.target.files && event.target.files[0]) {
                    setFile(event.target.files[0] as File);
                  }
                }}
              ></UploadFile>
            </div>
          </div>
          <div className="columns is-vcentered">
            <div className="column has-text-centered">
              <UploadFile
                Icon={FaUpload}
                boxed
                hasFileName
                label="Escoja un archivo"
                value={file}
                name="btn-file-uploader"
                onChangeHandler={(event) => {
                  if (event.target.files && event.target.files[0]) {
                    setFile(event.target.files[0] as File);
                  }
                }}
              ></UploadFile>
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
        <div className="container">
          <h2 className="subtitle">Colored</h2>
          <div className="columns is-vcentered">
            <div className="column has-text-centered">
              <UploadFile
                Icon={FaUpload}
                color="is-black"
                label="Escoja un archivo"
                value={file}
                name="btn-file-uploader"
                onChangeHandler={(event) => {
                  if (event.target.files && event.target.files[0]) {
                    setFile(event.target.files[0] as File);
                  }
                }}
              ></UploadFile>
            </div>
          </div>
          <div className="columns is-vcentered">
            <div className="column has-text-centered">
              <UploadFile
                Icon={FaUpload}
                boxed
                color="is-danger"
                hasFileName
                label="Escoja un archivo"
                value={file}
                name="btn-file-uploader"
                onChangeHandler={(event) => {
                  if (event.target.files && event.target.files[0]) {
                    setFile(event.target.files[0] as File);
                  }
                }}
              ></UploadFile>
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
        <div className="container">
          <h2 className="subtitle">Sized</h2>
          <div className="columns is-vcentered">
            <div className="column has-text-centered">
              <UploadFile
                Icon={FaUpload}
                size="is-medium"
                label="Escoja un archivo"
                value={file}
                name="btn-file-uploader"
                onChangeHandler={(event) => {
                  if (event.target.files && event.target.files[0]) {
                    setFile(event.target.files[0] as File);
                  }
                }}
              ></UploadFile>
            </div>
          </div>
          <div className="columns is-vcentered">
            <div className="column has-text-centered">
              <UploadFile
                Icon={FaUpload}
                size="is-large"
                hasFileName
                label="Escoja un archivo"
                value={file}
                name="btn-file-uploader"
                onChangeHandler={(event) => {
                  if (event.target.files && event.target.files[0]) {
                    setFile(event.target.files[0] as File);
                  }
                }}
              ></UploadFile>
            </div>
          </div>
          <div className="columns is-vcentered">
            <div className="column has-text-centered">
              <UploadFile
                Icon={FaUpload}
                size="is-small"
                hasFileName
                label="Escoja un archivo"
                value={file}
                name="btn-file-uploader"
                onChangeHandler={(event) => {
                  if (event.target.files && event.target.files[0]) {
                    setFile(event.target.files[0] as File);
                  }
                }}
              ></UploadFile>
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
export default withPublicArea(CheckboxPage);

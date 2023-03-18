import { HStack } from "@chakra-ui/react";
import React, { useState } from "react";

const ImageUpload = ({
  setFileToSend,
  fieldName,
  register,
  clearErrors,
  setError,
  type,
}) => {
  var fileObj = [];
  var fileArray = [];

  const [selectedFile, setSelectedFile] = useState([]);

  const uploadingFiles = (e) => {
    clearErrors(fieldName);
    fileObj.push(e.target.files);

    if (type) {
      setFileToSend(e.target.files);
      for (let i = 0; i < fileObj[0].length; i++) {
        fileArray.push(URL.createObjectURL(fileObj[0][i]));
      }
    } else {
      setFileToSend(e.target.files[0]);
      fileArray.push(URL.createObjectURL(fileObj[0][0]));
    }

    setSelectedFile(fileArray);
  };

  const removeImage = (index) => {
    setSelectedFile([
      ...selectedFile.slice(0, index),
      ...selectedFile.slice(index + 1, selectedFile.length),
    ]);
    setError(fieldName, { type: "required", message: "Please Choose File" });
  };

  return (
    <>
      {selectedFile.length !== 0 &&
        selectedFile.map((url, index) => (
          <div key={url} className="col-md-2">
            <div className="img-block bg-gray">
              <img className="img-fluid2" src={url} alt="..." />
              <span className="remove_img" onClick={() => removeImage(index)}>
                {index}
              </span>
            </div>
          </div>
        ))}

      {type ? (
        <HStack>
          <div className="col-md-2">
            <div className="form-group">
              <div className="upload-btn-wrapper">
                <button className="image-btn"> + </button>
                <input
                  type="file"
                  {...register(`${fieldName}`, {
                    required: "Please Choose File",
                  })}
                  onChange={uploadingFiles}
                  multiple={type}
                />
              </div>
            </div>
          </div>
        </HStack>
      ) : (
        selectedFile.length === 0 && (
          <HStack>
            <div className="col-md-2">
              <div className="form-group">
                <div className="upload-btn-wrapper">
                  <button className="image-btn"> + </button>
                  <input
                    type="file"
                    {...register(`${fieldName}`, {
                      required: "Please Choose File",
                    })}
                    onChange={uploadingFiles}
                  />
                </div>
              </div>
            </div>
          </HStack>
        )
      )}
    </>
  );
};
export default ImageUpload;

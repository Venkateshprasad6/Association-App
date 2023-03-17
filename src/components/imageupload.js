import React, { useState } from "react";

const ImageUpload = ({
  setFileToSend,
  fieldName,
  register,
  clearErrors,
  setError,
}) => {
  var singleFileObj = [];
  var singleFileArray = [];

  const [singleFile, setSingleFile] = useState([]);

  const uploadSingleFiles = (e) => {
    clearErrors(fieldName);
    setFileToSend(e.target.files[0]);
    singleFileObj.push(e.target.files);
    singleFileArray.push(URL.createObjectURL(singleFileObj[0][0]));
    setSingleFile(singleFileArray);
  };

  const removeImage = (index) => {
    setSingleFile([
      ...singleFile.slice(0, index),
      ...singleFile.slice(index + 1, singleFile.length),
    ]);
    setError(fieldName, { type: "required", message: "Please Choose File" });
  };

  return (
    <>
      {singleFile.length !== 0 &&
        singleFile.map((url, index) => (
          <div key={url} className="col-md-2">
            <div className="img-block bg-gray">
              <img className="img-fluid2" src={url} alt="..." />
              <span className="remove_img" onClick={() => removeImage(index)}>
                {index}
              </span>
            </div>
          </div>
        ))}

      {singleFile.length === 0 && (
        <div className="col-md-2">
          <div className="form-group">
            <div className="upload-btn-wrapper">
              <button className="image-btn"> + </button>
              <input
                type="file"
                {...register(`${fieldName}`, {
                  required: "Please Choose File",
                })}
                onChange={uploadSingleFiles}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ImageUpload;

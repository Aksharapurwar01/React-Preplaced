import React, { useRef } from "react";

function FileUploadForm() {

const fileInputRef = useRef();

const handleSubmit = (event) => {
    event.preventDefault();

    const file = fileInputRef.current.files[0];

    if (file) {
    console.log("Selected File:", file.name);
    console.log("File Size:", file.size, "bytes");
    } else {
    console.log("No file selected");
    }
};

return (
    <form onSubmit={handleSubmit}>
    <div>
        <label>
        Upload File:
        <input type="file" ref={fileInputRef} />
        </label>
    </div>
    <button type="submit">Upload</button>
    </form>
);
}

export default FileUploadForm;

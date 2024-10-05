import React, { useRef } from "react";
// import withAuth from "../hoc/withAuth";

function FileUpload(){
    const fileref = useRef();
    const handleSubmit=(event)=>{
        event.preventDefault();
        const file = fileref.current.files[0];
        if(file){
            console.log({file})
        }

    }

    return(
        <form onSubmit={handleSubmit}>

        <label>File</label>
        <input type="file" ref={fileref}/>
        <button type="submit">Upload</button>
        </form>
    )
}

export default FileUpload;



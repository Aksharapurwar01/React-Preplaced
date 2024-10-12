// import React, { useRef } from "react";
// // import withAuth from "../hoc/withAuth";

// function FileUpload(){
//     const fileref = useRef();
//     const handleSubmit=(event)=>{
//         event.preventDefault();
//         const file = fileref.current.files[0];
//         if(file){
//             console.log({file})
//         }

//     }

//     return(
//         <form onSubmit={handleSubmit}>

//         <label>File</label>
//         <input type="file" ref={fileref}/>
//         <button type="submit">Upload</button>
//         </form>
//     )
// }

// export default FileUpload;


import React, { useEffect, useState } from "react";

const FileUpload = () => {
  const [value, setValue] = useState(0);
  const [error, setError] = useState("");
  const [numbers, setNumbers] = useState([]);
  const[evenodd, setEvenOdd] = useState({});

  const handleChange = (e) => {

    let inputValue = e.target.value;
    if(inputValue === ''){
        setValue('')
    }
    else if (inputValue > 30) {
      inputValue = 30;
    } else if (inputValue < 1) {
      inputValue = 1;
    }

    setValue(inputValue);

    setError("");
  };



  const handleClick = () => {

    if (value < 1) {
      setError("Value is less than 1");
    } else if (value > 30) {
      setValue(30);
    }

    const numArray = [];

    for (let i = 1; i <= value; i++) {
      numArray.push(i);
    }

    setNumbers(numArray);
  };

  const handleOddEven = (num,index) =>{
    const numb = numbers[index];
    const arrayNumber = [...numbers];
    console.log({numb})
    if(num % 2 ===0){
     arrayNumber[index]  = "even"
    }else{
        arrayNumber[index]  = "odd"
    }

    setNumbers(arrayNumber);

  }

  return (
    <>
      <input type="number" value={value} onChange={handleChange} />
      {error}
      <button onClick={handleClick}>Click Me</button>
      <br />
      {numbers.map((num, index) => {
        return <h2 onClick = {()=>handleOddEven(num,index)}>{num}</h2>;
      })}

    </>
  );
};

export default FileUpload;

import TextField from "@mui/material/TextField";
import { useState } from "react";
import List from "../Components/List"
import "./Query.css";

const Query: React.FC<any> = () => {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e: { target: { value: string; }; }) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="main">
      <h1>Document Query</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <div id="demobox">
      <List input={inputText} />
      </div>
    </div>
  );
}

export default Query;
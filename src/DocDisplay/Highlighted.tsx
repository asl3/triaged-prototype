import "./Highlighted.css";
import React, {useState} from "react";
import BGText from './BGText';

const Highlighted = ({ text = "", highlight = "" }) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }
  const regex = new RegExp(`(${highlight})`, "gi");
  const parts = text.split(regex);
  const [style, setStyle] = useState({display: 'none'});

  return (
    
    <div className="demobox">
      <span>
        {parts.filter(String).map((part, i) => {
          return regex.test(part) ? (
            <div
                onMouseEnter={e => {setStyle({display: 'block'}); }}
                onMouseLeave={e => {setStyle({display: 'none'})}}>
                <br></br>
                {/* <div style={style}>The CFE was signed by 22 States in Paris on Nov 19, 1990 and represented an agreement between NATO members and Warsaw Pact countries. It was aimed at establishing a balance in europe by cutting weapons of conventional armed forces.</div> */}
                <mark className="highlight" key={i}>{part}</mark>
                <div style={style}> <BGText/> </div>
            </div>
          ) : (
            <span key={i}>{part}</span>
          );
        })}
      </span>
    </div>
  );
};

export default Highlighted;
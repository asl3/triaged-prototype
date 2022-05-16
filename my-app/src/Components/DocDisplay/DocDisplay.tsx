import React, {useState} from "react";
import "./DocDisplay.css";
import TextChunk from "../../interfaces";
import DocText from "./DocText";
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';

const textChunks = [
  {
    isHighlight: false,
    fgText: "Russian president Vladimir Putin said that Russia may opt back into the conventional forces in Europe (CFE) if NATO members ratify and begin fulfilling the terms of the agreement. Putin signed a federal law on November 30, 2007 suspending Russia's obligations to the CFE treaty.",
    bgText: "",
    color: ""
  },
  {
    isHighlight: true,
    fgText: "The suspension of the CFE treaty meant that Russia would temporarily stop providing information, receiving international inspectors and allowing inspections Russia will not be bound during this period by any commitment to conventional armaments.",
    bgText: "The CFE was signed by 22 States in Paris on Nov 19, 1990 and represented an agreement between NATO members and Warsaw Pact countries. It was aimed at establishing a balance in europe by cutting weapons of conventional armed forces.",
    color: "#ffcccb"
  },
  {
    isHighlight: true,
    fgText: "Russia had threatened several times to withdraw from the CFE amid tensions with the United States over us plans to install a missile defense shield in Eastern Europe.",
    bgText: "",
    color: "#FF0000"
  }
]

const DocDisplay: React.FC<any> = () => {
  const hover = useSelector((state: RootState) => state.highlight.value)

  return (
    <div>
      {/* <div style={{width: '10em', height: '10em', color:'red', borderWidth: '1px', borderStyle: 'solid', borderColor: 'black', padding: '1em', margin: '90em', marginTop: '5em', boxShadow: '5px 10px #888888'}}>hi</div> */}
      <div style={{width: '60vh', height: 'auto', borderWidth: '1px', borderStyle: 'solid', borderColor: 'black', padding: '1em', margin:'3em auto auto auto', boxShadow: '5px 10px #888888'}}>
      <h1>Russia may opt back into arms control treaty: Putin</h1>
      <DocText textFile={textChunks}> </DocText>
      </div>
      <div style={hover ? {width:'60vh', height: 'auto', backgroundColor: '#ededed', marginLeft: 'auto', padding: '1em', marginRight: 'auto', marginTop: '5vh'} : {display: 'none'}}> <b>Background:</b> The CFE was signed by 22 States in Paris on Nov 19, 1990 and represented an agreement between NATO members and Warsaw Pact countries. It was aimed at establishing a balance in europe by cutting weapons of conventional armed forces.</div>
    </div>
  );
}

export default DocDisplay;
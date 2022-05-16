import React, {useState} from "react";
import "./DocText.css";
import TextChunk from "../../interfaces";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  hoverOn, hoverOff
} from '../../features/highlight/highlightSlice';

interface DocTextProps {
  textFile: TextChunk[];
  children: React.ReactNode;
}

const DocText: React.FC<DocTextProps> = ({textFile}: DocTextProps) => {
  return (
    <div className="doc-box">
      {textFile.map(item => {
        return <TextSection isHighlight={item.isHighlight} fgText={item.fgText} bgText={item.bgText} color={item.color}/>
      })}
    </div>
  );
}



const TextSection: React.FC<TextChunk> = ({isHighlight, fgText, bgText, color}: TextChunk) => {
  const dispatch = useAppDispatch();
  return <span style={ isHighlight ? { backgroundColor:color} : {backgroundColor:"white"}} onMouseEnter={() => (bgText != "") ? dispatch(hoverOn()) : {}} onMouseLeave={() => dispatch(hoverOff())}> 
  {fgText} 
  </span>
}

export default DocText;
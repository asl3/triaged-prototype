interface TextChunk {
  isHighlight: boolean,
  fgText: string,
  bgText: string,
  color: string
}

export default TextChunk;

// import React, {useState} from "react";
// import "./TextChunk.css";

// var lst = [{
//   "id": 1,
//   "fg-text": "Russian president Vladimir Putin said that Russia may opt back into the conventional forces in Europe (CFE) if NATO members ratify and begin fulfilling the terms of the agreement. Putin signed a federal law on November 30, 2007 suspending Russia's obligations to the CFE treaty.",
//   "bg-text": null,
// }, {
//   "id": 2,
//   "fg-text": "The suspension of the CFE treaty meant that Russia would temporarily stop providing information, receiving international inspectors and allowing inspections Russia will not be bound during this period by any commitment to conventional armaments.",
//   "bg-text": "The CFE was signed by 22 States in Paris on Nov 19, 1990 and represented an agreement between NATO members and Warsaw Pact countries. It was aimed at establishing a balance in europe by cutting weapons of conventional armed forces.",
// }, {
//   "id": 3,
//   "fg-text": "Russia had threatened several times to withdraw from the CFE amid tensions with the United States over us plans to install a missile defense shield in Eastern Europe.",
//   "bg-text": null,
// }]

// const TextChunk: React.FC<any> = () => {

//   return (
//     <div>
      
//     </div>
//   );
// }

// export default TextChunk;
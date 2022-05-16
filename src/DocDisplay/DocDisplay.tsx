import React, {useState} from "react";
import Highlighted from "./Highlighted";
import "./DocDisplay.css";
import Highlighter from "react-highlight-words";
import BGText from "./BGText";

const DocDisplay: React.FC<any> = () => {

  const bg = new BGText ({display: 'none'});

  return (
    <div>
    <Highlighted
      text="Russian president Vladimir Putin said that Russia may opt back into the conventional forces in Europe (CFE) if NATO members ratify and begin fulfilling the terms of the agreement. Putin signed a federal law on November 30, 2007 suspending Russia's obligations to the CFE treaty. The suspension of the CFE treaty meant that Russia would temporarily stop providing information, receiving international inspectors and allowing inspections Russia will not be bound during this period by any commitment to conventional armaments. Russia had threatened several times to withdraw from the CFE amid tensions with the United States over us plans to install a missile defense shield in Eastern Europe."
      highlight="The suspension of the CFE treaty meant that Russia would temporarily stop providing information, receiving international inspectors and allowing inspections russia will not be bound during this period by any commitment to conventional armaments."
    />
    </div>
  );
}

export default DocDisplay;

// import React, {useState} from "react";
// // import Highlighted from "./Highlighted";
// import "./DocDisplay.css";
// import Highlighter from "react-highlight-words";

// const DocDisplay: React.FC<any> = () => {

//   return (
//     <div className="doc-box">
//       <Highlighter
//         highlightClassName="doc-box"
//         searchWords={["The suspension of the CFE treaty meant that Russia would temporarily stop providing information, receiving international inspectors and allowing inspections Russia will not be bound during this period by any commitment to conventional armaments."]}
//         autoEscape={true}
//         textToHighlight="Russian president Vladimir Putin said that Russia may opt back into the conventional forces in Europe (CFE) if NATO members ratify and begin fulfilling the terms of the agreement. Putin signed a federal law on November 30, 2007 suspending Russia's obligations to the CFE treaty. The suspension of the CFE treaty meant that Russia would temporarily stop providing information, receiving international inspectors and allowing inspections Russia will not be bound during this period by any commitment to conventional armaments. Russia had threatened several times to withdraw from the CFE amid tensions with the United States over us plans to install a missile defense shield in Eastern Europe."
//       />
//     </div>
//   );
// }

// export default DocDisplay;
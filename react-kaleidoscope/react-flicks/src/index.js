// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// // import "./index.css";
// // import App from "./App";
// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" maxRange={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <Test />
//     <StarRating maxRange={10} defaultRating={3} onSetRating={() => {}} />
//     <StarRating
//       maxRange={5}
//       messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
//       onSetRating={() => {}}
//     />
//     <StarRating size={24} color="red" className="test" onSetRating={() => {}} />
//   </React.StrictMode>
// );

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

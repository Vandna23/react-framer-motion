import * as React from "react";
import { useState } from "react";
import { createRoot } from "react-dom/client";
import { screen, fireEvent } from "@testing-library/dom";

function App() {
  const [state, setState] = useState(0);
  console.log("App " + state);
  return (
    <div>
      <button
        onClick={() => {
          setState((count) => count + 1);
          setState((count) => count * 2);
        }}
      >
        click me
      </button>
    </div>
  );
}
console.log(
  "first",
  first
)(async () => {
  const root = createRoot(document.getElementById("root"));
  root.render(<App />);

  fireEvent.click(await screen.findByText("click me"));
})();

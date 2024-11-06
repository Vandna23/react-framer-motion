import * as React from "react";
import { useState, useEffect, memo } from "react";
import { createRoot } from "react-dom/client";

function A({ state }: any) {
  console.log("A", state);
  return <B />;
}

const B = memo(() => {
  console.log("B", "memo");
  return <C />;
});

function C() {
  console.log("C");
  return null;
}

function D() {
  console.log("D");
  return null;
}

export default function App() {
  const [state, setState] = useState(0);
  useEffect(() => {
    setState((state) => state + 1);
  }, []);
  console.log("App");
  return (
    <div>
      <A state={state} />
      <D />
    </div>
  );
}
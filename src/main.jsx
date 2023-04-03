import { createRoot } from "react-dom/client";
import { useState, Component } from "react";
import { Counter } from "./examples/high-priority";

createRoot(document.getElementById("root")).render(<Counter />);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Canvas from "./Canvas";
import { MantineProvider } from "@mantine/core";

import "@mantine/core/styles.css";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <MantineProvider>
            <Canvas />
        </MantineProvider>
    </StrictMode>,
);

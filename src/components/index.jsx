import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import "@mantine/core/styles.css";
import '@mantine/notifications/styles.css';
import "@fontsource-variable/outfit";
import "@fontsource-variable/chivo-mono";
import "./index.css";

import mantineTheme from "./mantineTheme.jsx";

// eslint-disable-next-line no-unused-vars
export default function renderApp(AppComponent) {
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <MantineProvider theme={mantineTheme}>
        <Notifications />
        <AppComponent />
      </MantineProvider>
    </StrictMode>
  );
}

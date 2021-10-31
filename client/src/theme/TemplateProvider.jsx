import React, { createContext } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";

export const TemplateContext = createContext(null);

const TemplateProvider = ({ children }) => {
  const theme = createMuiTheme({});

  return (
    <TemplateContext.Provider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </TemplateContext.Provider>
  );
};

export default TemplateProvider;

import { ThemeProvider } from "@material-ui/core";
import { theme } from "./constants/theme";
import Router from "./routes/Router";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      </Router>
    </ThemeProvider>
  )
}

export default App;
import { createMuiTheme } from "@material-ui/core";
import { primarycolor, secondarycolor} from "./colors";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: primarycolor
        },
        secondary: {
            main: secondarycolor
        }
    }
})
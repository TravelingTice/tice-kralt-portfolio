import lightGreen from '@material-ui/core/colors/lightGreen';
import grey from '@material-ui/core/colors/grey';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: lightGreen[600],
    },
    secondary: {
      main: grey[900]
    }
  }
});

export default theme;
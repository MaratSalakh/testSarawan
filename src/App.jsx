import { createTheme, ThemeProvider } from '@mui/material';
import MyNavBar from './components/MyNavBar.jsx';
import MediaCard from './components/MediaCard.jsx';
import ShowCase from './components/ShowCase.jsx';

const theme = createTheme({
  palette: {
    primary: {
      main: '#111111',
    },
    secondary: {
      main: '#F9DC31'
    },
  }
});

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <MyNavBar></MyNavBar>
      <ShowCase MediaCard={MediaCard}></ShowCase>
    </ThemeProvider>
  );
};

export default App;


import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Header from './components/Header';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import axios from 'axios';

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
    }
  },
  palette: {
    primary: {
      main: '#962828',
    },
    secondary: {
      main: '#cfd8dc'
    },
    default: {
      main: '#265a88'
    }
  },
});
class App extends React.Component {
  // let config = {
  //   headers: {
  //     headerName: value
  //   }
  // }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      const persons = res.data;
      console.log(persons);
    })
  }
  render(){
    return (
      <ThemeProvider theme= {theme}>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </div>
      </ThemeProvider>
    );
  } 
}

export default App;

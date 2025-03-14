import Routes from './routes';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <GlobalStyle />
        <Routes>
        </Routes>
      </Router>
    </>
  )
}

export default App

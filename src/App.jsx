import Routes from './routes';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Articles from './components/Articles';

const articles = [
  {
    id: 1,
    name: 'Portfolio em React',
    description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    image: 'https://media.licdn.com/dms/image/C4E12AQEBVCR2SpRr9g/article-cover_image-shrink_720_1280/0/1625909824541?e=2147483647&v=beta&t=Y_zSoI8cPUR3wQvPyYK15PLWpQJJ0si6OvsuXFnIC18',
    category: 'React',
    date: '2023-01-01'
  },
  {
    id: 2,
    name: 'API-React-DotNet',
    description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    image: 'https://media.licdn.com/dms/image/v2/D4D12AQEhH3cHujKu2g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1655739793716?e=2147483647&v=beta&t=ouJKL6OyUVNwgM9KUUz26a7603M0a1C6YDjjdB5vPow',
    category: 'C#',
    date: '2023-02-01'
  },
  {
    id: 3,
    name: 'Projeto3',
    description: 'Information about projeto 3',
    image: 'https://regrasparatcc.com.br/wp-content/uploads/2020/12/tipos-de-artigos-cintificos-1024x576.jpg',
    category: 'React',
    date: '2023-03-01'
  },
  {
    id: 4,
    name: 'Projeto4',
    description: 'Information about projeto 4',
    image: 'https://regrasparatcc.com.br/wp-content/uploads/2020/12/tipos-de-artigos-cintificos-1024x576.jpg',
    category: 'C#',
    date: '2023-04-01'
  },
];

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <GlobalStyle />
        <Articles articles={articles} />
        <Routes>
        </Routes>
      </Router>
    </>
  )
}

export default App

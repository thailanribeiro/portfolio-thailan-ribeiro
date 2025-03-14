import { Route, Routes as ReactRouter } from 'react-router-dom';
import Home from '../pages/Home'; 

const Routes = () => {
  return (
      <ReactRouter>
        <Route path="/" element={<Home />} />
      </ReactRouter>
  
  );
}
export default Routes;
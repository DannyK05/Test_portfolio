import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout/index.js';
import Home from './components/Home/index.js';

function App() {
   return(
      <>
      <Routes>
         <Route exact path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
         </Route>
      </Routes>
      </>
   )
}

export default App;

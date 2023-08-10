import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout/index.js'

function App() {
   return(
      <>
      <Routes>
         <Route exact path='/' element={<Layout/>}></Route>
      </Routes>
      </>
   )
}

export default App;

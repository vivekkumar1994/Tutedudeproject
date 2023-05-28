
import { Box } from '@mui/material';
import './App.css';
import Main from './pages/Main';
import Navbar from './pages/Navbar';
import Main1 from './pages/Main1';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Navbar/>
  
    <Box sx={{marginTop:"15vh"}} >

      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/main' element={<Main1/>}/>
      </Routes>
    </Box>
   
    </div>
  );
}

export default App;

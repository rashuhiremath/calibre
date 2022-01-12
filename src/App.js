
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatWithUs from './components/Chat/ChatWithUs.jsx';


function App() {
  
  return (
    
    <div className='App'>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/> }/>
      
      <Route path="/chat-with-us" element={ <ChatWithUs/>}/>
      </Routes>
      </BrowserRouter>
      </div>
     

  );
}

export default App;

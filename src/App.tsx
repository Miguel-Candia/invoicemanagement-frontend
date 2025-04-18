import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import InvoiceDetails from './pages/InvoiceDetails';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/invoice/:id" element={<InvoiceDetails />} />
      

    </Routes>
  </BrowserRouter>
  )
}

export default App;


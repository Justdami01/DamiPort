import React from "react"
import Index from "./components/Index"
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <div>
    <Routes>
     <Route path="/" exact element={<Index />} />
    </Routes>
    </div>
    </BrowserRouter>
    
  )
}

export default App
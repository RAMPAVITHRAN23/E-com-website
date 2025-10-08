import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import AdminLayout from "./components/Layout/AdminLayout";


const App = () => {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<UserLayout/>} />   {/* User Layout */}
    <Route path="/admin" element={<AdminLayout/>} /> {/* Admin Layout */}
  </Routes>
</BrowserRouter>
    
  )
}

export default App
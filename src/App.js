import Navbar from "./components/Navbar"
import { Route, Routes } from 'react-router-dom';
import SignUpPage from "./pages/SignUpPage"
import LogInPage from "./pages/LogInPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <p>LEARN JWT 😊</p>
      <Routes>
        <Route path='/' element={<h1>Welcome</h1>} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
      </Routes>
    </div>
  );
}

export default App;

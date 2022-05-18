import Navbar from "./components/Navbar"
import { Route, Routes } from 'react-router-dom';
import SignUpPage from "./pages/SignUpPage"
import LogInPage from "./pages/LogInPage";

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path='/' element={<h1>Hey there 👋 <br /> let's learn token-based-authentication 😊</h1>} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
      </Routes>

    </div >
  );
}

export default App;

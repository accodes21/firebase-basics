import { Container } from 'react-bootstrap';
import './App.css';
import SignUp from './components/SignUp';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LogIn from './components/LogIn';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <AuthProvider>
      <Container 
      className='d-flex align-items-center justify-content-center'
      style={{minHeight: "100vh"}}
      >
        <div className="w-100" style={{minWidth:"400px"}}>
          <BrowserRouter>
            <AuthProvider>
              <Routes>
                <Route exact path='/' element={<Dashboard/>}/>
                <Route path='/signup' element={<SignUp/>} />
                <Route path='/login' element={<LogIn/>} />
                <Route path='/forgot-password' element={<ForgotPassword/>} />
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;

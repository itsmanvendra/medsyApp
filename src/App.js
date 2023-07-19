
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ReduxToastr from 'react-redux-toastr'
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Description from './components/Description';
import NotFound from './components/NotFound';
function App() {
  return (
    <>
      <BrowserRouter>
      <div className="flex flex-col min-h-screen">
      <Routes>
        <Route path="/" element={<Header />}>
            <Route index path="/" element={<HomePage  />}/>
            <Route path="/aboutUs" element={<AboutUs />} />

            <Route path="/dashboard" element={<Dashboard />} /> 
            <Route path="/dashboard/:productId" element={<Description />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<SignUp />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

        <Footer />
      </div>
      </BrowserRouter>
      <ReduxToastr
        timeOut={2000}
        newestOnTop={true}
        preventDuplicates
        position="top-right"
        getState={(state) => state.toastr}
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar={true}
        closeOnToastrClick={true}/>
    </>
    
  );
}

export default App;

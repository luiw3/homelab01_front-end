import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import './App.css';
import { BaseLayout } from './layout/layout';
import { Cryptos, Dashboard, Expenses, Goals, Login, Profile, Register } from './pages';
import Form from './shared/components/form/form';
import { EScreens } from './shared/enum';


function App() {
  return (
    <div className='h-screen w-screen bg-[#27253d]'>
      <Router>
        <Routes>
          <Route path='/login' element={ <Login />} />
          <Route path="/register" element={<Register />}/>
          <Route path="/" element={<BaseLayout/>}>
                <Route index element={<Dashboard />} />
                <Route path='cryptos' element={<Cryptos />} />
                <Route path='cryptos/add' element={<Form />}/>
                <Route path='goals' element={<Goals />} />
                <Route path='goals/add' element={<Form />}/>
                <Route path='expenses' element={<Expenses />} />
                <Route path='expenses/add' element={<Form />}/>
                <Route path='profile' element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

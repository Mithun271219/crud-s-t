import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from '../src/Componets/Home';
import Navbar from './Componets/Navbar';
import ConnectUs from './Componets/ConnectUs';
import StudentList from './Componets/Students/StudentList';
import ContextState from '../src/Context/ContextState';
import EditStudent from './Componets/Students/EditStudent';
import CreateStudent from './Componets/Students/CreateStudent';
import SingIn from './Componets/Auth/SingIn';
import SignUp from './Componets/Auth/SignUp';
import AlterTeacher from './Componets/Teachers/AlterTeacher';

function App() {
  return (
    <ContextState>
      <BrowserRouter>
        <Navbar />
        <div className='container my-2' id='main-page'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contactus' element={<ConnectUs />} />
            <Route path='/studentslist' element={<StudentList />} />
            <Route path='/student/editStudent/:id' element={<EditStudent />} />
            <Route path='/createstudent' element={<CreateStudent />} />
            <Route path='/auth/signin' element={<SingIn />} />
            <Route path='/teacher/signup' element={<SignUp />} />
            <Route path='/teacher/edit' element={<AlterTeacher />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ContextState>
  );
}

export default App;

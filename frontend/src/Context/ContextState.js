import React, { useState } from 'react';
import axios from 'axios';
import Context from "./Context";

const ContextState = (props) => {
    let studentsLink = `http://localhost:3001/students`;
    let teachersLink = `http://localhost:3001/teachers`;
    let singInlink = `http://localhost:3001/auth/teachers`;
    let addTeacher = 'http://localhost:3001/add/teacher'

    const [students, setStudents] = useState([]);
    // const [teacher, setTeachers] = useState([]);
    const [isSignIn, setIsSignIn] = useState(false);

    let getData = async () => {
        let stulist = await axios.get(studentsLink);
        setStudents(stulist.data);
        // let techlist = await axios.get(teachersLink);
        // setTeachers(techlist.data);
    }
    return (
        <Context.Provider value={{ getData, students, studentsLink, teachersLink, addTeacher, isSignIn, setIsSignIn, singInlink }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextState;

import React, { useState } from 'react';
import axios from 'axios';
import Context from "./Context";
let base_url = `https://crud-s-t.onrender.com/`;

const ContextState = (props) => {
    let studentsLink = `${base_url}students`;
    let teachersLink = `${base_url}teachers`;
    let singInlink = `${base_url}auth/teachers`;
    let addTeacher = `${base_url}add/teacher`

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

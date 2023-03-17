import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Context from '../../Context/Context';

function StudentList() {

    let navigate = useNavigate();

    let { getData, students, studentsLink, isSignIn } = useContext(Context);

    let handelDelete = async (id) => {
        await axios.delete(`${studentsLink}/${parseInt(id)}`)
        getData();
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <>
            <header>
                <h4>
                    All Students List
                </h4>
            </header>
            <main>
                <section>
                    <table className='table table-striped table-hover' id='tabletext'>
                        <thead>
                            <tr>
                                <th>#Id</th>
                                <th>Name</th>
                                <th>email</th>
                                <th>DOB</th>
                                <th>gender</th>
                                <th>class</th>
                                <th>School</th>
                                {isSignIn ? <th>edit</th> : null}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                students.map((ele) => {
                                    return (
                                        <tr key={ele.id}>
                                            <th>{ele.id}</th>
                                            <td>{`${ele.firstName} ${ele.lastName}`}</td>
                                            <td>{ele.email}</td>
                                            <td>{ele.DOB}</td>
                                            <td>{ele.gender}</td>
                                            <td>{ele.class}</td>
                                            <td>{ele.school}</td>
                                            {isSignIn ? <td>
                                                <button type="button" id='edit' onClick={() => navigate(`/student/editStudent/${ele.id}`)}  ><i className="fa-regular fa-pen-to-square" ></i> </button>
                                                <button type="button" className='mx-2' onClick={() => handelDelete(ele.id)} id='delete'><i className="fa-regular fa-trash-can"></i> </button>
                                            </td> : null}
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </section>
            </main>
        </>

    )
}

export default StudentList;
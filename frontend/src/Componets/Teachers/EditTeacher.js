import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../Context/Context';

function EditTeacher() {

    let navigate = useNavigate();

    let { setIsSignIn } = useContext(Context);

    function handelLogOut() {
        localStorage.clear();
        setIsSignIn(false);
        navigate('/');
        window.location.reload();
    }

    function handelChangePass() {
        navigate('/teacher/edit');
    }

    return (
        <>
            <button type="button" className='btn btn-primary mx-2' onClick={handelChangePass}>Change Password</button>
            <button type="button" className='btn btn-danger mx-2' onClick={handelLogOut}>logOut <i className="fa-thin fa-arrow-right-from-bracket"></i></button>
        </>
    )
}

export default EditTeacher
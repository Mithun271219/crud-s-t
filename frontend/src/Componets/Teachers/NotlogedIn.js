import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotlogedIn() {

    let navigate = useNavigate();

    return (
        <>
            <button className="btn btn-outline-success" type="button" onClick={() => navigate('/teacher/signup')}>sign-up</button>
            <button className="btn btn-outline-success mx-2" type="button" onClick={() => navigate('/auth/signin')} >sign-in</button>
        </>
    )
}

export default NotlogedIn;
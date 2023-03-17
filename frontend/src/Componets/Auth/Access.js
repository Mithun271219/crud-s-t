import React, { useContext } from 'react';

import Context from '../../Context/Context';
import EditTeacher from '../Teachers/EditTeacher';
import NotlogedIn from '../Teachers/NotlogedIn';

function Access() {

    let { isSignIn } = useContext(Context);

    return (
        <>
            {isSignIn ? <EditTeacher /> : <NotlogedIn />}
        </>
    )
}

export default Access
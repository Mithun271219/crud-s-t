import React from 'react'
import { useNavigate } from 'react-router-dom';

function ModelSingIn() {

    let navigate = useNavigate();

    return (
        <>
            <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <strong className="me-auto">Authorization</strong>
                    <button type="button" onClick={() => navigate('/')} className="btn-close" data-bs-dismiss="toast" aria-label="Close" />
                </div>
                <div className="toast-body">
                    Sign-In Success!!
                </div>
            </div>
        </>
    )
}

export default ModelSingIn
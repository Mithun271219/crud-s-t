import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom'

import SingInSchema from './Schemas/SignInschema';
import Context from '../../Context/Context';

function SingIn() {

    let navigate = useNavigate();
    const { singInlink, setIsSignIn } = useContext(Context);
    // let token = localStorage.getItem('token');

    let [message, setMessage] = useState('');

    let [initialValues, setinitialValues] = useState({
        email: '',
        password: ''
    })

    let { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: SingInSchema,
        onSubmit: async (values) => {
            try {
                let userAuth = await axios.post(singInlink, values);
                localStorage.setItem('token', userAuth.data.token);
                // console.error(userAuth)
                //axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                // { headers: { 'Authorization': `Bearer ${token}` } }
                setIsSignIn(true);
                setMessage('login Success')
                navigate('/');
            } catch (error) {
                setMessage(`* ${error.response.data.msg}`)
            }
        }
    })

    return (
        <>
            <header>
                <h3>signIn</h3>
            </header>
            <main>
                <section>
                    <form onSubmit={handleSubmit}>
                        <div className='col-md-6 mb-3'>
                            <label className='form-label' htmlFor="email">email:&nbsp;</label>
                            <input className='form-control' type="email" name="email" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder='eg: example@mail.com' />
                            {errors.email && touched.email ? <div><span style={{ color: "red" }} >&nbsp;*{errors.email}</span></div> : null}
                        </div><br />
                        <div className='col-md-6 mb-3'>
                            <label className='form-label' htmlFor="password">password:&nbsp;</label>
                            <input className='form-control' type="password" name="password" id="password" value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder='enter the password' />
                            {errors.password && touched.password ? <div><span style={{ color: "red" }} >&nbsp;*{errors.password}</span></ div> : null}
                            {<p style={{ color: 'red' }}>{message}</p>}
                        </div><br />
                        <div className='d-grid gap-2 col-4 mx-auto'>
                            <button type="submit" className='btn btn-primary mx-3'>login</button>
                        </div>
                    </form>
                </section>
            </main>
        </>
    )
}

export default SingIn
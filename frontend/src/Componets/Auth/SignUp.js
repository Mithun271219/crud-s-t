import React, { useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'

import SignUpSchema from './Schemas/Signupschema';
import Context from '../../Context/Context';

function SignUp() {

    let navigate = useNavigate();
    let { addTeacher } = useContext(Context);

    let initialValues = {
        id: '', name: '', email: "", password: "", cpassword: ''
    }

    let { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: SignUpSchema,
        onSubmit: async (values, clr) => {
            await axios.post(addTeacher, values);
            clr.resetForm();
            navigate('/studentslist');
        }
    })


    return (
        <>
            <header>
                <h3>Add teachers to data-base</h3>
            </header>
            <main>
                <form className='row g-3' onSubmit={handleSubmit}>
                    <div className='col-md-12'>
                        <label className='form-label' htmlFor="id">id:&nbsp;</label>
                        <input className='form-control' type="number" name="id" id="id" value={values.id} onChange={handleChange} onBlur={handleBlur} />
                        {errors.id && touched.id ? <p style={{ color: "red" }}>&nbsp;*{errors.id}</p> : null}
                    </div><br />
                    <div className='col-md-12'>
                        <label className='form-label' htmlFor="name">name:&nbsp;</label>
                        <input className='form-control' type="text" name="name" id="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                        {errors.name && touched.name ? <p style={{ color: "red" }}>&nbsp;*{errors.name}</p> : null}
                    </div><br />
                    <div className='col-md-12'>
                        <label className='form-label' htmlFor="email">email:&nbsp;</label>
                        <input className='form-control' type="email" name="email" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                        {errors.email && touched.email ? <p style={{ color: "red" }}>&nbsp;*{errors.email}</p> : null}
                    </div><br />
                    <div className='col-md-12'>
                        <label className='form-label' htmlFor="password">password:&nbsp;</label>
                        <input className='form-control' type="password" name="password" id="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                        {errors.password && touched.password ? <p style={{ color: "red" }}>&nbsp;*{errors.password}</p> : null}
                    </div><br />
                    <div className='col-md-12'>
                        <label className='form-label' htmlFor="cpassword">cpassword:&nbsp;</label>
                        <input className='form-control' type="password" name="cpassword" id="cpassword" value={values.cpassword} onChange={handleChange} onBlur={handleBlur} />
                        {errors.cpassword && touched.cpassword ? <p style={{ color: "red" }}>&nbsp;*{errors.cpassword}</p> : null}
                    </div><br />
                    <div className='col-md-12'>
                        <button type="submit" className='btn btn-primary mx-2'>submit</button>
                    </div>
                </form>
            </main>
        </>
    )
}

export default SignUp
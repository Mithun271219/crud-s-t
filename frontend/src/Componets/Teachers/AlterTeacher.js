import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import Context from '../../Context/Context';
import EditTeacherSchema from "./EditTechSchema";

// let token = localStorage.getItem('token');

function AlterTeacher() {

    let navigate = useNavigate();
    let { teachersLink } = useContext(Context);

    let [initialValues, setinitialValues] = useState({
        id: '', name: '', email: "", password: "", cpassword: ''
    });

    const [unauthorized, setunauthorized] = useState('')

    let getData = async () => {
        try {
            let { data } = await axios.get(`${teachersLink}`, { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
            delete data.password;
            delete data.active;
            delete data.createdOn;
            delete data.modifiedOn;
            delete data._id;
            setinitialValues(data)
        } catch (error) {
            setunauthorized(`* ${error.response.data.message}`);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    let { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        enableReinitialize: true,
        validationSchema: EditTeacherSchema,
        onSubmit: async (values, clr) => {
            try {
                await axios.put(`${teachersLink}/${initialValues.id}`, values, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
                clr.resetForm();
                navigate('/')
            } catch (error) {
                setunauthorized(`* ${error.response.data.message}`)
            }
        }
    })

    return (
        <>
            <header>
                <h3>Edit the details of {initialValues.name} </h3>
            </header>
            <main>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">email:&nbsp;</label>
                        <input type="email" name="email" id="email" value={values.email} placeholder={initialValues.email} onChange={handleChange} onBlur={handleBlur} />
                        {errors.email && touched.email ? <p style={{ color: "red" }}>&nbsp;*{errors.email}</p> : null}
                    </div><br />
                    <div>
                        <label htmlFor="password">password:&nbsp;</label>
                        <input type="password" name="password" id="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                        {errors.password && touched.password ? <p style={{ color: "red" }}>&nbsp;*{errors.password}</p> : null}
                    </div><br />
                    <div>
                        <label htmlFor="cpassword">cpassword:&nbsp;</label>
                        <input type="password" name="cpassword" id="cpassword" value={values.cpassword} onChange={handleChange} onBlur={handleBlur} />
                        {errors.cpassword && touched.cpassword ? <p style={{ color: "red" }}>&nbsp;*{errors.cpassword}</p> : null}
                        <p style={{ color: "red" }} >{unauthorized}</p>
                    </div><br />
                    <div>
                        <button type="submit" className='btn btn-primary mx-2'>Update</button>
                    </div>
                </form>
            </main>
        </>
    )
}

export default AlterTeacher
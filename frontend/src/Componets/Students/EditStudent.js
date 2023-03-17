import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'

import Context from '../../Context/Context';
import studentSchema from '../../Shared/Schema';

function EditStudent(props) {

    let navigate = useNavigate();
    let { id } = useParams();
    let { studentsLink } = useContext(Context);

    const [initialValues, setinitialValues] = useState({
        id: '', firstName: '', lastName: '', gender: '', DOB: '', email: '', phone: '', class: '', school: '', fathername: '', mothername: '', sports: [], address: {}
    })

    let getdata = async () => {
        let studetails = await axios.get(`${studentsLink}/${id}`);
        setinitialValues(studetails.data)
    }

    useEffect(() => {
        getdata();
    }, []);

    let { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: studentSchema,
        enableReinitialize: true,
        onSubmit: async (values) => {
            console.log(values)
            await axios.put(`${studentsLink}/${id}`, values);
            navigate('/studentslist')
        }
    })

    return (
        <>
            <header>
                <h4>Edit details of {initialValues.firstName} </h4>
            </header>
            <main>
                <section>
                    <form className='row g-3' onSubmit={handleSubmit}>
                        <div className='col-md-12'>
                            <label className='form-label' htmlFor="id">ID:&nbsp;</label>
                            <input className='form-control' type="number" name="id" id="id" onChange={handleChange} onBlur={handleBlur} value={initialValues.id} />
                            {errors.id && touched.id ? <p style={{ color: 'red' }}>&nbsp;*{errors.id}</p> : null}
                        </div><br />
                        <div className='col-md-6'>
                            <label className='form-label' htmlFor="firstName">firstName:&nbsp;</label>
                            <input className='form-control' type="text" name="firstName" id="firstName" value={values.firstName || initialValues.firstName} onChange={handleChange} onBlur={handleBlur} />
                            {errors.firstName && touched.firstName ? <p style={{ color: 'red' }}>&nbsp;*{errors.firstName}</p> : null}
                        </div><br />
                        <div className='col-md-6'>
                            <label className='form-label' htmlFor="lastName">lastName:&nbsp;</label>
                            <input className='form-control' type="text" name="lastName" id="lastName" value={values.lastName || initialValues.lastName} onChange={handleChange} onBlur={handleBlur} /><br />
                            {errors.lastName && touched.lastName ? <p style={{ color: 'red' }}>&nbsp;*{errors.lastName}</p> : null}
                        </div><br />
                        <div className='col-md-12'>
                            Gender:&nbsp;
                            <input type="radio" name="gender" id="male" value='male' onChange={handleChange} onBlur={handleBlur} />
                            <label htmlFor="male">male&nbsp;</label>
                            <input type="radio" name="gender" id="female" value='female' onChange={handleChange} onBlur={handleBlur} />
                            <label htmlFor="female">female&nbsp;</label>
                            <input type="radio" name="gender" id="others" value='others' onChange={handleChange} onBlur={handleBlur} />
                            <label htmlFor="others">others&nbsp;</label>
                            {errors.gender && touched.gender ? <p style={{ color: 'red' }}>&nbsp;*{errors.gender}</p> : null}
                        </div><br />
                        <div className='col-md-12'>
                            <label className='form-label' htmlFor="DOB">DOB:&nbsp;</label>
                            <input className='form-control' type="text" name="DOB" id="DOB" value={values.DOB || initialValues.DOB} onChange={handleChange} onBlur={handleBlur} /><br />
                            {errors.DOB && touched.DOB ? <p style={{ color: 'red' }}>&nbsp;*{errors.DOB}</p> : null}
                        </div><br />
                        <div className='col-md-6'>
                            <label className='form-label' htmlFor="email">email:&nbsp;</label>
                            <input className='form-control' type="email" name="email" id="email" value={values.email || initialValues.email} onChange={handleChange} onBlur={handleBlur} /><br />
                            {errors.email && touched.email ? <p style={{ color: 'red' }}>&nbsp;*{errors.email}</p> : null}
                        </div><br />
                        <div className='col-md-6'>
                            <label className='form-label' htmlFor="phone">phone:&nbsp;</label>
                            <input className='form-control' type="number" name="phone" id="phone" value={values.phone || initialValues.phone} onChange={handleChange} onBlur={handleBlur} /><br />
                            {errors.phone && touched.phone ? <p style={{ color: 'red' }}>&nbsp;*{errors.phone}</p> : null}
                        </div><br />
                        <div className='col-md-6'>
                            <label className='form-label' htmlFor="class">class:&nbsp;</label>
                            <input className='form-control' type="text" name="class" id="class" value={values.class || initialValues.class} onChange={handleChange} onBlur={handleBlur} /><br />
                            {errors.class && touched.class ? <p style={{ color: 'red' }}>&nbsp;*{errors.class}</p> : null}
                        </div><br />
                        <div className='col-md-6'>
                            <label className='form-label' htmlFor="school">school:&nbsp;</label>
                            <input className='form-control' type="text" name="school" id="school" value={values.school || initialValues.school} onChange={handleChange} onBlur={handleBlur} /><br />
                            {errors.school && touched.school ? <p style={{ color: 'red' }}>&nbsp;*{errors.school}</p> : null}
                        </div><br />
                        <div className='col-md-6'>
                            <label className='form-label' htmlFor="fathername">fathername:&nbsp;</label>
                            <input className='form-control' type="text" name="fathername" id="fathername" value={values.fathername || initialValues.fathername} onChange={handleChange} onBlur={handleBlur} /><br />
                            {errors.fathername && touched.fathername ? <p style={{ color: 'red' }}>&nbsp;*{errors.fathername}</p> : null}
                        </div><br />
                        <div className='col-md-6'>
                            <label className='form-label' htmlFor="mothername">mothername:&nbsp;</label>
                            <input className='form-control' type="text" name="mothername" id="mothername" value={values.mothername || initialValues.mothername} onChange={handleChange} onBlur={handleBlur} /><br />
                            {errors.mothername && touched.mothername ? <p style={{ color: 'red' }}>&nbsp;*{errors.mothername}</p> : null}
                        </div><br />
                        <div className='d-grid gap-2 col-4 mx-auto'>
                            <button type="submit" className="btn btn-primary mx-2">Submit</button>
                        </div>
                        {/* sports;array , address:object */}
                    </form>
                </section>
            </main>
        </>
    )
}

export default EditStudent
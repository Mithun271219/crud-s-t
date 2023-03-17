import axios from 'axios';
import React, { useContext } from 'react'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import Context from '../../Context/Context';
import studentSchema from '../../Shared/Schema';

function CreateStudent() {

    let navigate = useNavigate();
    let { studentsLink } = useContext(Context);

    let initialValues = {
        id: '', firstName: '', lastName: '', gender: '', DOB: '', email: '', phone: '', class: '', school: '', fathername: '', mothername: '',
        sports: [],
        address: { house: '', street: '', area: '', city: '', code: '', state: '' }
    };

    let { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: studentSchema,
        onSubmit: async (values, clr) => {
            await axios.post(studentsLink, values);
            clr.resetForm();
            navigate('/studentslist');
            //console.log(values);
        }
    })

    return (
        <>
            <header>
                <h3>Upload student details </h3>
            </header>
            <main className='container'>
                <section>
                    <form className='row g-3' onSubmit={handleSubmit}>
                        <div className='col-md-12'>
                            <label className='form-label' htmlFor="id">ID:&nbsp;</label>
                            <input className='form-control' type="number" name="id" id="id" value={values.id} onChange={handleChange} onBlur={handleBlur} />
                            {errors.id && touched.id ? <p style={{ color: 'red' }}>&nbsp;*{errors.id}</p> : null}
                        </div><br />
                        <div className='col-md-6'>
                            <label className='form-label' htmlFor="firstName">firstName:&nbsp;</label>
                            <input className='form-control' type="text" name="firstName" id="firstName" value={values.firstName} onChange={handleChange} onBlur={handleBlur} />
                            {errors.firstName && touched.firstName ? <p style={{ color: 'red' }}>&nbsp;*{errors.firstName}</p> : null}
                        </div><br />
                        <div className='col-md-6'>
                            <label className='form-label' htmlFor="lastName">lastName:&nbsp;</label>
                            <input className='form-control' type="text" name="lastName" id="lastName" value={values.lastName} onChange={handleChange} onBlur={handleBlur} /><br />
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
                            <input className='form-control' type="text" name="DOB" id="DOB" value={values.DOB} onChange={handleChange} onBlur={handleBlur} /><br />
                            {errors.DOB && touched.DOB ? <p style={{ color: 'red' }}>&nbsp;*{errors.DOB}</p> : null}
                        </div><br />
                        <div className='col-md-6'>
                            <label className='form-label' htmlFor="email">email:&nbsp;</label>
                            <input className='form-control' type="email" name="email" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur} /><br />
                            {errors.email && touched.email ? <p style={{ color: 'red' }}>&nbsp;*{errors.email}</p> : null}
                        </div><br />
                        <div className='col-md-6'>
                            <label className='form-label' htmlFor="phone">phone:&nbsp;</label>
                            <input className='form-control' type="number" name="phone" id="phone" value={values.phone} onChange={handleChange} onBlur={handleBlur} /><br />
                            {errors.phone && touched.phone ? <p style={{ color: 'red' }}>&nbsp;*{errors.phone}</p> : null}
                        </div><br />
                        <div className='col-md-6'>
                            <label className='form-label' htmlFor="class">class:&nbsp;</label>
                            <input className='form-control' type="text" name="class" id="class" value={values.class} onChange={handleChange} onBlur={handleBlur} /><br />
                            {errors.class && touched.class ? <p style={{ color: 'red' }}>&nbsp;*{errors.class}</p> : null}
                        </div><br />
                        <div className='col-md-6'>
                            <label className='form-label' htmlFor="school">school:&nbsp;</label>
                            <input className='form-control' type="text" name="school" id="school" value={values.school} onChange={handleChange} onBlur={handleBlur} /><br />
                            {errors.school && touched.school ? <p style={{ color: 'red' }}>&nbsp;*{errors.school}</p> : null}
                        </div><br />
                        <div className='col-md-6'>
                            <label className='form-label' htmlFor="fathername">fathername:&nbsp;</label>
                            <input className='form-control' type="text" name="fathername" id="fathername" value={values.fathername} onChange={handleChange} onBlur={handleBlur} /><br />
                            {errors.fathername && touched.fathername ? <p style={{ color: 'red' }}>&nbsp;*{errors.fathername}</p> : null}
                        </div><br />
                        <div className='col-md-6'>
                            <label className='form-label' htmlFor="mothername">mothername:&nbsp;</label>
                            <input className='form-control' type="text" name="mothername" id="mothername" value={values.mothername} onChange={handleChange} onBlur={handleBlur} /><br />
                            {errors.mothername && touched.mothername ? <p style={{ color: 'red' }}>&nbsp;*{errors.mothername}</p> : null}
                        </div><br />
                        <div><p>Address:&nbsp;</p></div><br />
                        <div className='col-md-6'>
                            <label htmlFor="house" className="form-label">house:&nbsp;</label>
                            <input type="text" name='address.house' id="house" className="form-control" value={values.address.house} onBlur={handleBlur} onChange={handleChange} />
                        </div><br />
                        <div className='col-md-6'>
                            <label htmlFor="street" className="form-label">street:&nbsp;</label>
                            <input type="text" name="address.street" id="street" className="form-control" value={values.address.street} onBlur={handleBlur} onChange={handleChange} />
                        </div><br />
                        <div className='col-md-6'>
                            <label htmlFor="area" className="form-label">area:&nbsp;</label>
                            <input type="text" name="address.area" id="area" className="form-control" value={values.address.area} onBlur={handleBlur} onChange={handleChange} />
                        </div><br />
                        <div className='col-md-6'>
                            <label htmlFor="city" className="form-label">city:&nbsp;</label>
                            <input type="text" name="address.city" id="city" className="form-control" value={values.address.city} onBlur={handleBlur} onChange={handleChange} />
                        </div><br />
                        <div className='col-md-6'>
                            <label htmlFor="code" className="form-label">code:&nbsp;</label>
                            <input type="number" name="address.code" id="code" className="form-control" value={values.address.code} onBlur={handleBlur} onChange={handleChange} />
                        </div><br />
                        <div className='col-md-6'>
                            <label htmlFor="state" className="form-label">state:&nbsp;</label>
                            <input type="text" name="address.state" id="state" className="form-control" value={values.address.state} onBlur={handleBlur} onChange={handleChange} />
                        </div><br />
                        <div className='col-md-12'>sports:</div><br />
                        <div className='col-md-12'>
                            <input type="checkbox" name="sports" id="baseball" value='baseball' onChange={handleChange} onBlur={handleBlur} className="form-check-input" />
                            <label htmlFor="baseball" className="form-label">baseball&emsp;&emsp;</label>
                            <input type="checkbox" name="sports" value='running' onChange={handleChange} onBlur={handleBlur} id="running" className="form-check-input" />
                            <label htmlFor="running" className="form-label">running&emsp;&emsp;</label>
                            <input type="checkbox" name="sports" value='basketball' onChange={handleChange} onBlur={handleBlur} id="basketball" className="form-check-input" />
                            <label htmlFor="basketball" className="form-label">basketball&emsp;&emsp;</label>
                            <input type="checkbox" name="sports" value='football' onChange={handleChange} onBlur={handleBlur} id="football" className="form-check-input" />
                            <label htmlFor="football" className="form-label">football&emsp;&emsp;</label>
                            <input type="checkbox" name="sports" value='swimming' onChange={handleChange} onBlur={handleBlur} id="swimming" className="form-check-input" />
                            <label htmlFor="swimming" className="form-label">swimming&emsp;&emsp;</label>
                            <input type="checkbox" name="sports" value='snowboarding' onChange={handleChange} onBlur={handleBlur} id="snowboarding" className="form-check-input" />
                            <label htmlFor="snowboarding" className="form-label">snowboarding&emsp;&emsp;</label>
                            <input type="checkbox" name="sports" value='yoga' onChange={handleChange} onBlur={handleBlur} id="yoga" className="form-check-input" />
                            <label htmlFor="yoga" className="form-label">yoga&emsp;&emsp;</label>
                        </div> <br />
                        <div className='d-grid gap-2 col-4 mx-auto'>
                            <button type="submit" className="btn btn-primary mx-2">Submit</button>
                        </div>
                    </form>
                </section>
            </main>
        </>
    )
}

export default CreateStudent;
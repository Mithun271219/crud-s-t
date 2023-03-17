import * as yup from 'yup';

const EditTeacherSchema = yup.object({
    name: yup.string().required(),
    id: yup.number().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    cpassword: yup.string().oneOf([yup.ref('password'), null], 'password should match').required()
})

export default EditTeacherSchema;
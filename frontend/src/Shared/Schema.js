import * as yup from 'yup';

let studentSchema = yup.object({
    id: yup.number().required(),
    firstName: yup.string().min(4).required(),
    lastName: yup.string().required(),
    DOB: yup.string().required(),
    gender: yup.string().required(),
    email: yup.string().required(),
    phone: yup.number(),
    school: yup.string(),
    class: yup.string(),
    sports: yup.array(),
    fathername: yup.string(),
    mothername: yup.string(),
    address: yup.object()
})

export default studentSchema;
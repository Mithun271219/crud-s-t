import * as yup from 'yup';

let SingInSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required()
})

export default SingInSchema;
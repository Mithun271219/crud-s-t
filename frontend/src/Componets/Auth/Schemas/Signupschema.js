import * as yup from 'yup';

const SignUpSchema = yup.object({
    id: yup.number().required(),
    name: yup.string().min(4).required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    cpassword: yup.string().oneOf([yup.ref('password'), null], 'password should match').required()
})

export default SignUpSchema;
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email('Fomato de Email invalido').required('Email obligatorio'),
        password: Yup.string().required('Password requerido')
    }
)

const LoginFormik = () => {
    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <div>
            <h4>LogIn Formik</h4>
            <Formik
                initialValues={ initialCredentials}
                // Esquema de validacion de yup
                validationSchema={loginSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 2000));
                    alert(JSON.stringify(values, null, 2));
                    localStorage.setItem('credencial', JSON.stringify(values))
                  }}
            >
                {props => {
                    const {values, touched, errors, isSubmitting, handleBlur, handleChange, handleSubmit} = props;

                    return (
                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field id="email" type="email" name="email" placeholder="ejemplo@email.com" />
                            {/* Errores de Email */}
                            {/* { errors.email && touched.email && 
                                (
                                    <div className="error">
                                        <p>{errors.email}</p>
                                    </div>
                                )
                            } */}
                            <ErrorMessage name="email" />
                            <label htmlFor="password">Password</label>
                            <Field id="password" type="password" name="password" placeholder="password" />
                            {/* Errores de Password */}
                            {/* { errors.password && touched.password && 
                                (
                                    <div className="error">
                                        <p>{errors.password}</p>
                                    </div>
                                )
                            } */}
                            <ErrorMessage name="password" />
                            <button type="submit">LogIn</button>
                            {isSubmitting ? <p>Logueando tu usuario...</p>: null}
                        </Form>
                    )
                }}
                

            </Formik>
        </div>
    )
}

export default LoginFormik;
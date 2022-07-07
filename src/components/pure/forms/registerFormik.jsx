import { User } from "../../../models/user.class";
import { ROLES, Roles } from "../../../models/roles.enum";
import { Formik, Field, Form, ErrorMessage} from "formik"
import * as Yup from "yup";

const RegisterFormik = () => {
    let user = new User();

    const initialValues = {
        userName: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }
    const registerSchema = Yup.object().shape(
        {
            userName: Yup.string()
                .min(6, 'El usuario debe ser de al menos 6 caracteres')
                .max(12, 'El usuario debe ser menor de 12 caracteres ')
                .required('El campo usuario es obligatorio'),
            email: Yup.string()
                .email('Fomato de Email invalido')
                .required('Email obligatorio'),
            role: Yup.string().oneOf([ROLES.USER, ROLES.ADMIN], 'Selecciona Usuario o Administrador')
                .required('El role es obligatorio'),
            password: Yup.string()
                .min(8, 'La constraseña es muy corta')
                .required('Password requerido'),
            confirm: Yup.string()
                .when("password", {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        'Las contraseñas no coinciden'
                    )
                .required('Confirma tu contraseña')
                })
            

        }
    )

    const submit = (values) => {
        console.log('Registrando usuario')
    }

    return(
        <div>
            <h4>Formulario de Registro</h4>
            <Formik
                initialValues={initialValues}
                // Esquema de validacion de yup
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 2000));
                    alert(JSON.stringify(values, null, 2));
                  }}
            >
                {props => {
                    const {values, touched, errors, isSubmitting, handleBlur, handleChange} = props;

                    return (
                        <Form>
                            <label htmlFor="userName">Nombre de Usuario</label>
                            <Field id="userName" name="userName" placeholder="Usuario" />
                            <ErrorMessage name="userName" />

                            <label htmlFor="email">Email</label>
                            <Field id="email" type="email" name="email" placeholder="ejemplo@email.com" />
                            <ErrorMessage name="email" />

                            <label htmlFor="password">Password</label>
                            <Field id="password" type="password" name="password" placeholder="password" />
                            <ErrorMessage name="password" />

                            <label htmlFor="confirm">Confirmar Password</label>
                            <Field id="confirm" type="password" name="confirm" placeholder="Confirma tu password" />
                            <ErrorMessage name="confirm" />

                            <button type="submit">Registrar</button>
                            {isSubmitting ? <p>Registrando tus datos...</p>: null}
                        </Form>
                    )
                }}
                

            </Formik>
        </div>
    )
}

export default RegisterFormik;
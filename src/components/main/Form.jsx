import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Form.css';


const validationSchema = Yup.object({
  name: Yup.string()
    .required('El nombre es obligatorio')
    .min(3, 'El nombre debe tener al menos 3 caracteres'),
  phone: Yup.string()
    .required('El teléfono es obligatorio')
    .matches(/^[0-9]+$/, 'El teléfono debe contener solo números')
    .min(10, 'El teléfono debe tener al menos 10 dígitos'),
  email: Yup.string()
    .required('El correo es obligatorio')
    .email('El correo no es válido'),
  address: Yup.string()
    .required('La dirección es obligatoria')
    .min(10, 'La dirección debe tener al menos 10 caracteres'),
});

const Form = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
        email: '',
        address: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values); 
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <FormikForm className="form-container">
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Teléfono:</label>
            <Field type="text" name="phone" />
            <ErrorMessage name="phone" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="address">Dirección:</label>
            <Field type="text" name="address" />
            <ErrorMessage name="address" component="div" className="error-message" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Finalizar compra
          </button>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
//import "./adminlogin.css";
import { useNavigate, Link } from "react-router-dom";
function AdminLogin() {
  const navigate = useNavigate();
  let login = (values) => {
    let defaultEmail = "admin@gmail.com";
    let defaultPassword = "admin@123";
    let email = values.email;
    let password = values.password;

    if (defaultEmail === email && defaultPassword === password) {
      alert("successful login");
      navigate("/DoctorDash");
    } else {
      alert(" login= failed");
    }
  };

  let loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter valid email")
      .required("Email is mandatory"),
    password: Yup.string()
      .min(8, "weeek password")
      .max(15, "password too long")
      .required("password is mandatory"),
  });
  return (
    <div className="login-container d-flex flex-column align-items-center ">
      <h1>Admin Login</h1>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(e) => login(e)}
        validationSchema={loginSchema}
      >
        {(props) => (
          <Form>
            <div className="field-container">
              <label className="form-label">Email</label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage name="email">
                {(error) => <p className="error-info">{error}</p>}
              </ErrorMessage>
            </div>
            <div className="field-container">
              <label className="form-label">Password</label>
              <Field type="password" name="password" className="form-control" />
              <ErrorMessage name="password">
                {(error) => <p className="error-info">{error}</p>}
              </ErrorMessage>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <button  type="submit" className="btn btn-primary login-btn" >
                Login
              </button>
            </div>

          </Form>
        )}
      </Formik>
      
    </div>
  );
}
export  default AdminLogin;
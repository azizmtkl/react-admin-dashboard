   // @ts-nocheck
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import { Box, TextField, useMediaQuery , Button} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup"
import Header from "../../components/Header";

const Form = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width  : 600px)")


  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        address: "",
    };

  return (
    <Box m="40px">

      <Box display="flex" my={7} justifyContent="space-between">
        <Header title="CREATE USER" subTitle="Create a New User Profile" />
      </Box>

      <Box>
         <Formik
            initialValues={initialValues}
            onSubmit={handleFormSubmit}
            validationSchema={checkoutShema}
            >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit
            }) =>(
                <form onSubmit={handleSubmit}>
                    <Box
                        display = "grid"
                        gap = "2rem"
                        gridTemplateColumns = "repeat(4, minmax(0 , 1fr))"
                        sx={{
                            "& > div" : { gridColumn : isNonMobile ? undefined : "span 4" }
                        }}
                    >
                        
                        <TextField 
                            fullWidth
                            variant = "filled"
                            type = "text"
                            label = "First Name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.firstName}
                            name="firstName"
                            error = {!!touched.firstName && !!errors.firstName }
                            helperText = {touched.firstName  && errors.firstName }
                            sx = {{
                                gridColumn : "span 2 "
                            }}
                        />

                        <TextField 
                            fullWidth
                            variant = "filled"
                            type = "text"
                            label = "Last Name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.lastName}
                            name="lastName"
                            error = {!!touched.lastName && !!errors.lastName}
                            helperText = {touched.lastName && errors.lastName}
                            sx = {{
                                gridColumn : "span 2 "
                            }}
                        />
                        <TextField 
                            fullWidth
                            variant = "filled"
                            type = "text"
                            label = "Email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            name="email"
                            error = {!!touched.email && !!errors.email}
                            helperText = {touched.email && errors.email}
                            sx = {{
                                gridColumn : "span 2 "
                            }}
                        />
                        <TextField 
                            fullWidth
                            variant = "filled"
                            type = "text"
                            label = "Phone Number"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.contact}
                            name="contact"
                            error = {!!touched.contact && !!errors.contact }
                            helperText = {touched.contact  && errors.contact }
                            sx = {{
                                gridColumn : "span 2 "
                            }}
                        />
                        <TextField 
                            fullWidth
                            variant = "filled"
                            type = "text"
                            label = "Address"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.address}
                            name="address"
                            error = {!!touched.address && !!errors.address}
                            helperText = {touched.address && errors.address}
                            sx = {{
                                gridColumn : "span 2 "
                            }}
                        />



                    </Box>

                    <Box display="flex" justifyContent="end" mt="20px">
                        <Button type="submit" color="secondary" variant="contained">
                            Create New User
                        </Button>
                    </Box>

                </form>
            )}


         </Formik>

      </Box>

    </Box>
  );
};


const phoneRegExp = 
      /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutShema = yup.object().shape({

    firstName : yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email : yup.string().email("Invalid Email").required("Required"),
    contact : yup
                .string()
                .matches(phoneRegExp, "Invalid Phone Number")
                .required("Required"),
    address : yup.string().required("Required")
    
    })

export default Form;

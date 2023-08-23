import { useState } from "react";
import {
  Box,
  Grid,
  Paper,
  TextField,
  Button,
  CardMedia,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import WelcomeImage from "../../public/assets/Welcome!.png";
import Typography from '@mui/material/Typography';


const UserForm = () => {

  const isNonMobileScreens = useMediaQuery("(min-width:840px)");
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });

  // Handling the data after submission in the formdata

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // storing the data in the local storage
    localStorage.setItem('userDetails', JSON.stringify(formData));

    // Clearing form input fields after submission
    setFormData({
      name: "",
      phoneNumber: "",
      email: "",
    });

       // Redirect to the homepage
       return navigate("/homepage");
  };

  return (
    <Box
        width="auto"
        display={isNonMobileScreens ? "flex" : "block"}

      style={{
        // flexWrap: "wrap",
        width: "100%",
        height: "100%",
        padding: "0",
        boxShadow:
          "0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)",
      }}
    >
      <Grid item xs={6} style={{ display: "flex", flexDirection: "row" }} flexBasis={isNonMobileScreens ? "50%" : undefined}>
        <CardMedia
          style={{ objectFit: "cover" }}
          component="img"
          height="100%"
          width="100%"
          image={WelcomeImage}
          alt="GFG Logo"
        />
      </Grid>
      <Grid item xs={6} flexBasis={isNonMobileScreens ? "50%" : undefined}>
        <Paper elevation={3} style={{ padding: "20px", boxShadow: "none" }}>
        <Typography variant="h4" align="center" fontWeight="bold">
        Get in touch with us
      </Typography>
          <form
            onSubmit={handleSubmit}
            style={{ height: "85vh", boxShadow: "none" }}
          >
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Paper>
      </Grid>
    </Box>
  );
};

export default UserForm;

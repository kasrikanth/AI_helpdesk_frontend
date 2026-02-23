// src/Login_Auth.jsx

import { login as loginApi } from "../backend_connection/auth";
import { useAuth } from "../context/AuthContext";
import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Avatar,
  Container
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useLocation, useNavigate } from 'react-router-dom';

const LoginAuth = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth(); 

  const searchParams = new URLSearchParams(location.search);
  const operations = searchParams.get("operations");
  console.log("Operations from URL:", operations);
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await loginApi(formData.username, formData.password);

    if (result.success) {
        login(result.user);

        // Role-based redirect
        if (result.user.role === "admin") {
            navigate("/admin");
        } else if (result.user.role === "support_engineer") {
            navigate("/analyst");
        } else if (result.user.role === "instructor") {
            navigate("/manager");
        } else {
            navigate("/operator");
        }
    console.log("User role from backend:", result.user.role);

    } else {
        alert(result.error);
    }
};

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={6}
        sx={{
          marginTop: 8,
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: 3
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Sign In
        </Typography>

        <Box component="form" sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            name="username"
            autoFocus
            value={formData.username}
            onChange={handleChange}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginAuth;

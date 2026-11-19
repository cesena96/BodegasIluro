import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Footer from "../components/core/Footer";
import Header from "../components/core/Header";

export default function AppLayout() {
    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <Container component="main" maxWidth="xl" sx={{ flex: 1, py: 3 }}>
                <Outlet />
            </Container>
            <Footer />
        </Box>
    );
}
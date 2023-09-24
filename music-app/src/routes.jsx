import { Route, Routes } from "react-router-dom";
import React, { useContext } from 'react';
import { NotFound } from "./pages/notFound";
import { Main } from "./pages/main";
import { Playlist } from "./pages/playlist";
import { Register } from "./pages/register";
import { Category } from "./pages/category";
import AuthPage from "./pages/loginApi/AuthPage";
import { UserContext } from "./App.jsx";

export const AppRoutes = () => {
    const theme = useContext(UserContext);
    console.log(theme);
    return (
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/" element={<Main />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
import { Route, Routes } from "react-router-dom";
import React from 'react';
import { NotFound } from "./pages/notFound";
import { Main } from "./pages/main";
import { Playlist } from "./pages/playlist";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Category } from "./pages/category";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/" element={<Main />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
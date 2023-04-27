import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { MainPage } from "../components/MainPage/MainPage";
import { ProductPage } from "../components/ProductPage/ProductPage";


export const Router: React.FC = () => {
    return (
        <Routes>
            <Route path={routes.root} element={<MainPage />} />
            <Route path={routes.productItem} element={<ProductPage />} />
        </Routes>
    )
}
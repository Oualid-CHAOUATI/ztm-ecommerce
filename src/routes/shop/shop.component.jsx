

import "./shop.style.scss";
import { CategoriesContext } from "../../contexts/categories.context.jsx";
import { CategotyPreview } from "../../Components/category-preview/category-preview.component";
import { Route, Routes } from "react-router-dom";
import { CatgegoriesPreview } from "../categories-preview/categories-preview.component";
export const Shop=()=>{






return<Routes>
    <Route index element={<CatgegoriesPreview/>}></Route>
</Routes> 
}
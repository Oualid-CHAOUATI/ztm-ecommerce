

import { useContext } from "react";
import "./categories-preview.style.scss";
import { CategoriesContext } from "../../contexts/categories.context.jsx";
import { CategotyPreview } from "../../Components/category-preview/category-preview.component";
export const CatgegoriesPreview=()=>{



    const {categoriesMap}=useContext(CategoriesContext);
const keys = Object.keys(categoriesMap)



return <div className="categories-wrapper">
{keys.map(title=><CategotyPreview title={title} products={categoriesMap[title]} key={title}/>)}
</div>
}
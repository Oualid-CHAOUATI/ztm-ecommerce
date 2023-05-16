

import { useContext } from "react";
import "./shop.style.scss";
import { CategoriesContext } from "../../contexts/categories.context.jsx";
import { ProductCard } from "../../Components/product-card/product-card.component";
export const Shop=()=>{



    const {categoriesMap}=useContext(CategoriesContext);
const keys = Object.keys(categoriesMap)

{/* // id,name,imageUrl,price */}

return <div className="categories-wrapper">
{keys.map(title=><div className="category-list">

<h2 className="category-list__title">{title}</h2>

<div className="products-wrapper">

{categoriesMap[title].map(({id,name,imageUrl,price})=>{
    

    
    
    
    
 return   <ProductCard {...{name,imageUrl,price}}/>
})


}
</div>



</div>)}
</div>
}
import { ProductCard } from "../product-card/product-card.component";

import "./category-preview.styles.scss";
export const CategotyPreview =({title,products})=>{


    const productsToDisplay = products.filter((_,idx)=>idx<4);

    return <div className="category-preview">
        <h2 className="category-preview__title">{title}</h2>

        <div className="products-wrapper">

        {productsToDisplay.map(({id,name,imageUrl,price})=><ProductCard {...{name,imageUrl,price,key:id}}/>)}
        </div>
    </div> ;
}
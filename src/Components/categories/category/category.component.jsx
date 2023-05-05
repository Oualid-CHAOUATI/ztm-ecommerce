
import "./category.style.scss"
export const Category=({category:{title,imgSrc}})=>{


    return( <div
    className="category"
    style={{ backgroundImage: `url(${imgSrc})` }}
  >
    <h2 className="category__name">{title}</h2>
    <button>Shop now!</button>
  </div>)
}
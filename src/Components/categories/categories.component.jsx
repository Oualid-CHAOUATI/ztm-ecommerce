import { Category } from "./category/category.component"
import './categories.style.scss'

export const Categories =({categoryList})=>{

    
    
    
    
    return<>
     <div className="categories-wrapper">
        
        
        {
            categoryList.map(category=><Category category={category}/>)

                    
            }
    

    </div>
    </> 


}
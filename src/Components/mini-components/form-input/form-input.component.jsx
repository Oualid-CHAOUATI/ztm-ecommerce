

export const FormInput =({label,...otherPorps})=>{


    return <div>

    
    <label >
    {label&&<span>{label}</span>}
    <input {...otherPorps}/>
</label>
    </div>

}
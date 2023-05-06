




import "./Button.style.scss"
export const buttonTypes={
    default:'default',
    google:"google",
    inverted:"inverted"
}
export const Button=({children,className=buttonTypes.default,...otherProps})=>{

    return <button className={"btn "+className}>{children}</button>

}
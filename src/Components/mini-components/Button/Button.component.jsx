




import "./Button.style.scss"
export const BUTTON_TYPES={
    default:'default',
    google:"google",
    inverted:"inverted"
}
export const Button=({children,className,styleType=BUTTON_TYPES.default,...otherProps})=>{

    return <button className={"btn "+styleType+" "+className} {...otherProps}>{children}</button>

}
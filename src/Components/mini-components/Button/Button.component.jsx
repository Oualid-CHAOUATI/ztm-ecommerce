




import "./Button.style.scss"
export const BUTTON_TYPES={
    default:'default',
    google:"google",
    inverted:"inverted"
}
export const Button=({children,styleType=BUTTON_TYPES.default,...otherProps})=>{

    return <button className={"btn "+styleType} {...otherProps}>{children}</button>

}
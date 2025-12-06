export function Container({
    children,
    className,
    ...props
}:{
    children:React.ReactNode,
    className?:string,

}){
    return (
        <div className={`container border-2 border-blue-500 font-hanken mx-auto max-w-3xl px-4 animate-fade-in-blur ${className}`}>
            {children}
        </div>
    )
}
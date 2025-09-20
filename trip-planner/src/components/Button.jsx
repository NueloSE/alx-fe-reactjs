function Button({children, btnStyle, onClicked}) {
    return (
        <button onClick={onClicked} className={`${btnStyle}  font-bold text-white   px-4 py-2 rounded-lg`}>
            {children}
        </button>
    )
}

export default Button

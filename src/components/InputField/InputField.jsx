
function InputField( { label, name, id, type, value, changeHandler } ) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                name={name}
                id={id}
                type={type}
                value={value}
                onChange={(e) => changeHandler(e.target.value)}
            />
        </>
    )
}

export default InputField;
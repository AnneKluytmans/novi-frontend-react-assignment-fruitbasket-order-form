
function InputField( { label, name, id, type, value, changeHandler } ) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                name={name}
                id={id}
                type={type}
                value={value}
                onChange={changeHandler}
            />
        </>
    )
}

export default InputField;
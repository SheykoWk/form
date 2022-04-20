const Form = () => {

    const myfunc = (e) => {
        console.log(e.target.value)
    }

    const objInput = {
        onChange: myfunc,
        placeholder: "pon tu contraseña"
    }
    
    const arr = [1, 2, 3, 4]
    
    const arrCopy = []

    return(
        <form>
            <button {...objInput} onClick={() => console.log('react uwu')} />
        </form>
    )
}

export default Form
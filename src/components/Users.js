const Users = ({data, handlerOnDelete, handlerOnEdit}) => {
    return(
        <div>
            <h1>{data.name}</h1>
            <button onClick={() => handlerOnDelete(data.id)} >Eliminar este usuario</button>
            <button onClick={() => handlerOnEdit(data.id) } >Editar este usuario</button>
        </div>
    )
}

export default Users
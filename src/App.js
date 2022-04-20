import { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "./components/Form";
import Users from "./components/Users";

function App() {
  
  const [users, setUsers] = useState([])

  // const objForm = useForm()
  // console.log(objForm)

  const { register, handleSubmit, reset} = useForm();

  const defaultValues = {name: '', email: '', about: '', options: '1'}

  const onSubmit = data => {
    console.log(data)
    setUsers([...users, data])
    reset(defaultValues)
  };
  
  const list = users.map(user => <Users data={user} key={user.name} />)

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 >Nombre</h1>
        <input {...register("name")} />
        <h1>Email</h1>
        <input {...register("email")} />
        <h1>Acerca de </h1>      
        <input {...register("about")} />
        <select {...register("options")} >
          <option value="1" >Opcion 1</option>
          <option value="2" >Opcion 2</option>
          <option value="3" >Opcion 3</option>
        </select>
        <input type="submit" />
      </form>
      <div>
        {list}
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "./components/Form";
import Users from "./components/Users";

function App() {
  
  const [users, setUsers] = useState([])
  const [formResponse, setFormResponse] = useState({})

  // const objForm = useForm()
  // console.log(objForm)

  const { register, handleSubmit} = useForm();

  const onSubmit = data => {
    console.log(data)
    setUsers([...users, data])
    setFormResponse(data)};
  
  //console.log(watch("example")); // watch input value by passing the name of it

    const list = users.map(user => <Users data={user} key={user.name} />)

    console.log(list)

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 >Nombre</h1>
        <input {...register("name")} />
        <h1>Email</h1>
        <input {...register("email")} />
        <h1>Acerca de </h1>      
        <input {...register("about")} />
        <input type="submit" />
      </form>
      <div>
        {list}
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import { get, useForm } from "react-hook-form";
import Form from "./components/Form";
import Users from "./components/Users";
import data from "./info.json"

function App() {
  
  const [users, setUsers] = useState([])
  const [isSpanish, setIsSpanish] = useState(false)
  const [id, setId] = useState(1) 

  const { register, handleSubmit, reset} = useForm();

  const defaultValues = {name: '', email: '', about: '', options: '1'}

  const deleteUser = (id) => {

    const filterUser = users.filter((user) => user.id !== id)
    console.log(filterUser)
    setUsers(filterUser)
  }

  const onSubmit = data => {
    const userObj = {...data, id}
    console.log(userObj)
    setId(id + 1)
    setUsers([...users, userObj])
    reset(defaultValues)
  };
  
  const cond = () => {
    if(isSpanish){
      return data.español
    } else {
      return data.english
    }
  }

  const list = users.map((user) => <Users data={user} handlerOnDelete={deleteUser} key={user.id} />)

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>{cond().title}</h1>
        <button onClick={() => setIsSpanish(!isSpanish)}>Cambiar idioma</button>
        <h1 >{ cond().input1 }</h1>
        <input {...register("name")} />
        <h1>{ cond().input2 }</h1>
        <input {...register("email")} />
        <h1>{ cond().input3}</h1>      
        <input {...register("about")} />
        <select {...register("options")} >
        {cond().options.map((item) =>  <option value={item.value} key={item.value} >{item.name}</option>)}
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

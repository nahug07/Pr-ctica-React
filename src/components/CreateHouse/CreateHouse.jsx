import React from 'react';
import { useDispatch } from 'react-redux';
import { createHouse } from '../../redux/actions';

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
// Recordar que los hooks de React deben utilizarse de la forma "React.useState", "React.useEffect", etc.
// Los tests no van a reconocer la ejecución haciendo destructuring de estos métodos.
const CreateHouse = () => {
    
    const [input, setInput] = React.useState(
        {
          name: "",
          region: "",
          words: ""
        }
      );

    const handleInput = e => {
        setInput({...input, [e.target.name]: e.target.value});
    };

    const dispatch = useDispatch();

    const handleSumbit = e => {
        e.preventDefault();
        dispatch(createHouse({...input}));
    };

    return (
        <div>
            <form onSubmit={handleSumbit} >

            <label>Name: </label>
            <input type="text" name="name" value={input.name} onChange={handleInput} />

            <label>Region: </label>
            <input type="text" name="region" value={input.region} onChange={handleInput} />

            <label>Words: </label>

            <input type="text" name="words" value={input.words} onChange={handleInput} />

            <button type="submit" >Create</button>

            </form>
        </div>
    );
};

export default CreateHouse;

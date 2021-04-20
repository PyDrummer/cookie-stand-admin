import { useState } from 'react'

export default function LoginForm({ onSubmit }) {

    const initialValues = {
        username: '',
        password: '',
    }

    const [values, setValues] = useState(initialValues);

    function submitHandler(event) {
        event.preventDefault();
        onSubmit(values);
        setValues(initialValues)
    }

    function inputChangeHandler(event) {

        let { name, value } = event.target;

        setValues({ ...values, [name]: value });
    }

    return (

        <form onSubmit={submitHandler} className="text-center w-1/2 mx-auto my-4 border-2 border-green-700 bg-green-500 rounded-md">
            <div className="my-5">
                <label className="font-bold text-lg" htmlFor="username">USER NAME</label>
                <br></br>
                <input className="w-1/2 mb-5"  type="text" name="username" id="username" value={values.username} onChange={inputChangeHandler} placeholder="User Name" />
                <br></br>
                <label className="font-bold text-lg " htmlFor="password">PASSWORD</label>
                <br></br>
                <input className="w-1/2 mb-8" type="password" name="password" id="password" value={values.password} onChange={inputChangeHandler} placeholder="password" />
                <br></br>
                <button className="w-1/2 ml-5 mr-5 py-4 bg-green-600 font-bold rounded-md hover:bg-green-800 " type="submit">SIGN IN</button>
            </div>


        </form>
    );
}
import React, { useState } from "react";
import Card from "../Ui/Card";
import classes from './AddUser.module.css';
import Button from "../Ui/Button";
import { ErrorModal } from "../Ui/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message:'Please enter a valid name and Age'
      });
      return;
    }
    //force age to number
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid Input',
        message:'Please enter a valid Age > 0'
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () =>{
    setError(null);
  };



  return (
    <div> 
     {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/> /* conditional rendering */}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="numer"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

import React from 'react';
import { useParams, useHistory } from 'react-router-dom';


import Button from "./Button"
import "./TaskDetails.css"

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();
    const handleBackButtonClick = () => {
      history.goBack();
    }

    return ( 
        <>
        <div className = "back-button-container">
          <button onClick = {handleBackButtonClick}>Voltar</button>
        </div>
        <div className="task-details-container">
            <h2>{params.tasktitle}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, maxime quod explicabo tempore cum nobis?</p>
        </div>
        </>
     );
}
 
export default TaskDetails;
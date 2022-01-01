import React, { useState } from 'react';
import Card from "../UI/Card"
import "../UI/Card.css"
import axios from "axios";
import "./CreateCertForm.css"

function CreateCertForm(){
    const [userInput, setUserInput] = useState({
        event_name: '',
        ambassador_name: '',
        participants: []
    });

    function eventNameHandler(event){
        setUserInput({
            ...userInput,
            event_name: event.target.value
        });
        // console.log(event.target.value);
    }

    function ambassadorNameHandler(event){
        setUserInput({
            ...userInput,
            ambassador_name: event.target.value
        });
        // console.log(event.target.value);
    }

    function particpantsHandler(event){
        const participantsString= event.target.value;
        let participantsList = participantsString.split(',');

        //remove whitespace from both ends
        for (let i = 0; i < participantsList.length; i++){
            let alterName = participantsList[i];
            let result = alterName.trim();
            participantsList[i] = result;
        }

        setUserInput({
            ...userInput,
            participants: participantsList
        });
        // console.log(event.target.value);
    }

    function createCerts(event){
        event.preventDefault();
        // alert(JSON.stringify(userInput.password));
        const formData = {
            event_name: userInput.event_name,
            ambassador_name: userInput.ambassador_name, // cryptr.encrypt(userInput.password)
            participants: userInput.participants
        }

        console.log((formData));

        
        axios({
            method: 'post',
            url: 'http://localhost:5000/sendData',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (response) {
            alert("Success! Your request has been processed!");
            console.log(response.data);
        })
        .catch(function (response) {
            alert("Error processing your request. Please try again!");
        });        
    }
    return(
        <div className='center certForm'>
            <Card className="card-container">
                <div className="center middle">
                    <img src="MLSA_Logo.png" alt="Microsoft Learn Student Ambassador Logo" width="25%" height="25%"></img>
                    <h2 className="card-title">Microsoft Student Learn Ambassador Certificate Generator</h2>
                    <h4 className="sub-heading">(For multiple participants, seperate participants using commas!)</h4>
                    <form>
                        <div className="inputHolder">
                            <div>
                                <input type="text" name="event_name" placeholder="Event Name" required autoComplete="off" onChange={eventNameHandler}/>
                            </div>
                            <div>
                                <input type="text" name="ambassador_name" placeholder="Ambassador Name" required autoComplete="off" onChange={ambassadorNameHandler}/>
                            </div>
                            <div>
                                <input type="text" name="participants" placeholder="Participants" required autoComplete="off" onChange={particpantsHandler}/>
                            </div>
                        </div>
                        <div className="sign-in__button center">
                            <button type="submit" onClick={createCerts}>Submit</button>
                        </div>
                    </form>
                </div>
            </Card>
        </div>
    );
}

// event_name:"Name of The Event",
//   ambassador_name: "Name of the Ambassador",
//   participants:["Person 1","Person 2","Person 3","Person 4"]

export default CreateCertForm;
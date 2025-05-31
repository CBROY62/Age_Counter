import { useState } from "react";
import "./AppInput.css";

function AppInput() {
  const [dob, setdob] = useState("");
  const [Age, setAge] = useState(0);

  const handleInput = (event) => {
    setdob(event.target.value);
  };

  const handleButtonClicked = () => {

    if (!dob) {
      setAge(null);
      return;
    }
    const todayDate = new Date();
    const birthdate = new Date(dob);

    let ageCount = todayDate.getFullYear() - birthdate.getFullYear();
    const monthdiff = todayDate.getMonth() - birthdate.getMonth();

    if (
      monthdiff < 0 ||
      (monthdiff === 0 && todayDate.getDate() < birthdate.getDate())
    ) {
      ageCount--;
    }
    setAge(ageCount);
  };
  return (
    <>
      <div className="input-button-section">
        <p className="Enter-birth">Enter you date of birth</p>
        <input
          type="Date"
          value={dob}
          placeholder="Enter your age"
          onChange={handleInput}
        />
        <button className="button-section" onClick={handleButtonClicked}>
          Calculate
        </button>
      </div>
          
           {Age !== null && (<h2 className="final-Age , mycsssection"> Your age is {Age} </h2>)}
      
    </>
  );
}
export default AppInput;

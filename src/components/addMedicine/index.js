import { React, useState } from "react";
import Button from '../button';
import Header from '../header';

const AddMedicine = ({
  medicines,
  setMedicines,
  viewName,
  viewTitle,
  backTo
}) => {
  const [text, setText] = useState("");
  const handleMedicines = (e) => {
    e.preventDefault()
    const updatedMedicines = [
      ...medicines,
      {
        text: text,
        taken: false
      }
    ]
    setMedicines(updatedMedicines);
    setText("");
  }

  return (
    <div>
      <Header title={viewName} backTo={backTo} />
      <h1>{viewTitle}</h1>
      <form onSubmit={handleMedicines}>
        <div className="form-group">
          <label htmlFor="name"></label>
          <input
            id="medicine-input"
            value={text}
            type="text"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </form>
      <Button title="See my medicines" linkTo="/seeMedicines" size="big" />
    </div>
  );
};

export default AddMedicine;

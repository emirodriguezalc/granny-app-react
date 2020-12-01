import React from "react";

const AddMedicine = ({
  data,
  handleMedicines,
  setMedicines,
  setName,
  name,
}) => {
  console.log(data.viewName, "dataviewnam");
  return (
    <div>
      <h1>add me {data.viewName}</h1>

      <form onSubmit={handleMedicines}>
        {/* <div className="form-group">
          <select name="days" id="">
            <option value="monday">Monday</option>
          </select>
        </div>
        <div class="form-group">
          <label htmlFor="time"></label>
          <select name="time" class="time-dropdown">
            <option value="morning">Morning</option>
            <option value="midday">Midday</option>
            <option value="night">Night</option>
          </select>
        </div> */}
        <div className="form-group">
          <label htmlFor="name"></label>
          <input
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default AddMedicine;
// const TodoForm = (props) => {
//   const { title, description, handleTodo, setDescription, setTitle } = props;
//   return (
//     <article className="form-container">
//       <form onSubmit={handleTodo}>
//         <div>
//           <label htmlFor="title">Title </label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="description">Description </label>
//           <input
//             type="text"
//             id="description"
//             name="description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>
//         <button className="add-btn" type="submit">
//           Add
//         </button>
//       </form>
//     </article>
//   );
// };

// export default TodoForm;

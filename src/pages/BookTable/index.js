// import React, { useState } from "react";
// import { CiTimer } from "react-icons/ci";
// import { useNavigate } from 'react-router-dom';
// import "./BookTable.css";

// const BookTable = () => {
//     const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     guests: 1,
//     date: "",
//     time: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleConfirm = (e) => {
//     e.preventDefault();
//     console.log("Reservation Details:", formData);
//     alert("Table Reserved Successfully!");
//   };

//   return (
//     <div className="book-table-wrapper">
//       {/* Left Section */}
//       <div className="book-table-left">
//         <h1>Book a Table</h1>
//         <h2>Reservation</h2>
//         <div className="action-buttons">
//         <CiTimer className='icon' /> 
//         <button className="action-btn" onClick={() => navigate("/menu")}>Menu</button>
//         <button className="action-btn1" onClick={() => navigate("/menu")}>Getting delivery</button>
//         <button className="action-btn2" onClick={() => navigate("/book-table")} >Book a table</button>
//       </div>
//       </div>

//       {/* Right Section */}
//       <div className="book-table-right">
//         <h2>Book a table</h2>
//         <p>
//           Our dining atmosphere is casual and comfortable. To reflect this
//           environment, we maintain a formal dress.
//         </p>
//         <form onSubmit={handleConfirm}>
//           <div className="input-group">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <label htmlFor="guests">Number of guests</label>
//             <input
//               type="number"
//               id="guests"
//               name="guests"
//               min="1"
//               value={formData.guests}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="input-row">
//             <div className="input-group">
//               <label htmlFor="date">Date</label>
//               <input
//                 type="date"
//                 id="date"
//                 name="date"
//                 value={formData.date}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <label htmlFor="time">Time</label>
//               <input
//                 type="time"
//                 id="time"
//                 name="time"
//                 value={formData.time}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
//           <button type="submit" className="confirm-btn">
//             Confirm
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BookTable;


import React, { useState } from "react";
import { CiTimer } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import "./BookTable.css";

const BookTable = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    guests: 1,
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    console.log("Reservation Details:", formData);
    alert("Table Reserved Successfully!");
  };

  return (
    <div className="book-table-wrapper">
      {/* Left Section */}
      <div className="book-table-left">
        <h1>Book a Table</h1>
        <h2>Reservation</h2>
        <div className="action-buttons">
        <CiTimer className='icon' /> 
          <button className="action-btn" onClick={() => navigate("/menu")}>
            Menu
          </button>
          <button className="action-btn1" onClick={() => navigate("/delivery")}>
            Getting Delivery
          </button>
          <button className="action-btn2 active">Book a Table</button>
        </div>
      </div>

      {/* Right Section */}
      <div className="book-table-right">
        <h2>Book a table</h2>
        <p>
          Our dining atmosphere is casual and comfortable. To reflect this
          environment, we maintain a formal dress.
        </p>
        <form onSubmit={handleConfirm}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              value={formData.guests}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="time">Time</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button type="submit" className="confirm-btn">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookTable;

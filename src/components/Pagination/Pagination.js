// import React, { Component } from 'react';
// import './Pagination.css';

// class Pagination extends Component {
//     render() {
//         return (
//             <nav className="layout-pagination">

//                 <ul >
//                     <button id="two" className="button">&lt;</button>
//                     <button id="two" className="button">1</button>
//                     <button id="two" className="button">2</button>
//                     <button id="two" className="button">&gt;</button>
//                 </ul>

//             </nav>
//         );
//     }
// }
// export default Pagination;
import React from "react";
import './Pagination.css';

const Pagination = ({ postPerPage, toalPage, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(toalPage / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    
      <nav >
        {pageNumbers.map(number => (
          <button key={number} className="page-item" onClick={() => paginate(number)}>{number}</button>
        ))}
      </nav>
   
  );
};
export default Pagination;
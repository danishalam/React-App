import React, { Component } from 'react';
import './Pagination.css';

class Pagination extends Component {
    render() {
        return (
            <nav className="layout-pagination">

                <ul >
                    <button id="two" className="button">&lt;</button>
                    <button id="two" className="button">1</button>
                    <button id="two" className="button">2</button>
                    <button id="two" className="button">&gt;</button>
                </ul>

            </nav>
        );
    }
}
export default Pagination;
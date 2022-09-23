import React from 'react';


function List(props) {

    return (
        <div className="container-fluid">
            <div className="row">
                <ul className="list-group">
                    {
                        props.todoList.map((item, idx) => {
                            return <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                                {item.text}
                                <small>{item.duedate.toLocaleString()}</small>
                                <span onClick={() => props.deleteTodo(idx)} className="badge bg-danger rounded-pill">&times;</span>

                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default List
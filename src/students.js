import React from 'react';

const Students = (props) => {
    return (
        <div className="G102Class">
            {props.students.map(item => {
                return (
                    <div>
                        <div class="card" style={{width: 18 + 'rem'}} >
                            <img class="card-img-top" src={item.fave_animal} alt=""/>
                            <div class="card-body">
                                <h5 class="card-title">{item.name}</h5>
                                <p class="card-text">{item.useless_superpower}</p>
                            </div>
                        </div>
                    </div>   
                )
            })}
        </div>
    )
}

export default Students;
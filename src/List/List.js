import React from 'react';

function List({ people }) {
    return (
        <>
            {people.map((person, index) => (
                <article key={index} className='person'>
                    <img src={person.image} alt="Person Image" />
                    <div>
                        <h4>{person.name}</h4>
                        <p>{person.age}</p>
                    </div>
                </article>
            ))}
        </>
    );
}

export default List;

import React from 'react';

const Dish = ({ project }) => {
    return (
        <div className="grid place-items-center">
            <img
                src={project.image}
                alt={project.title}
                className="rounded-3xl p-2"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />


            <div className='p-4'>
                <p className='text-lg text-center'>
                    {project.price}
                </p>
                <h3 className='mb-2 text-2xl font-bold tracking-tighter text-center'>
                    {project.title}
                </h3>
                <p className='text-sm text-center'>
                    {project.description}
                </p>
            </div>
        </div>
    );
}

export default Dish;

import React from 'react';
import { Man } from '../constants';
import Dish from './Dish';

const Women = () => {
    return (
        <section className='container mx-auto py-16' id='collection'>
            <h2 className='mb-8 text-center text-3xl tracking-tighter lg:text-4xl'>
                Women
            </h2>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-5'>
                {Man.map((project, index) => (
                    <Dish key={index} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Women;

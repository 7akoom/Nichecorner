import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT } from '../constants';

const Contact = () => {
    return (
        <section className='container mx-auto mb-8' id='about'>
            <h2 className='mb-8 text-center text-3xl tracking-tighter lg:text-4xl'>
                Contact us
            </h2>
            <div className='flex flex-wrap'>
                <div className='w-full p-4 lg:w-1/2'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201.19518070745815!2d43.991536827145666!3d36.21220783307293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40072380cf1e3b6b%3A0x2ceb054cea1d4911!2sGulan%20Mall!5e0!3m2!1sen!2siq!4v1738762655769!5m2!1sen!2siq"
                        width="700"
                        height="500"
                        style={{ border: '0' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className='w-full px-2 lg:w-1/2'>
                    {/* <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='text-4xl tracking-tighter lg:text-6xl'>
                        {ABOUT.header}
                    </motion.h2> */}
                    {/* <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='mb-8 mt-1 h-2 w-36 bg-rose-300 lg:-rotate-3'>
                    </motion.div> */}
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "20%" }}
                        viewport={{ once: true, amount: 0.1 }} // Trigger the animation when a little of the div is in view
                        transition={{ duration: 0.5, ease: "linear", delay: 0.4 }}
                        className="mb-8 mt-1 h-2 w-2 bg-rose-300 lg:-rotate-3"
                    >
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className='m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl'>
                        <div className='text-neutral-400'>
                            {CONTACT.map((detail) => (
                                <p key={detail.key}
                                    className='my-20 border-b-2 border-linear border-neutral-700 pb-12  text-2xl tracking-tighter lg:text-3xl'>
                                    {detail.value}
                                </p>
                            ))}
                        </div>
                    </motion.p>
                </div>
            </div>
        </section >
    );
}

export default Contact;

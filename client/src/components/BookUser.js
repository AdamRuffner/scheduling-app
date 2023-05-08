import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import emailjs from '@emailjs/browser';

import "react-datepicker/dist/react-datepicker.css";

const BookUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, name, address, startDate)
        emailjs.send('gmail', 'template_4dl7vqs', { email:email, name: name, address:address, duration:startDate }, '6ojbcbqm8ZpgNBi5j')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setName('');
        setEmail('');
        setAddress('');
        setStartDate('');
    };
    
    return (
        <div className="book-container">
            <h2 className="book-title">Schedule your pickup</h2>
            <form  onSubmit={handleSubmit} className='booking-form'>
                <label htmlFor='name'>Name</label>
                <input 
                    id='name'
                    name='name'
                    type='text'
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor='email'>Email</label>
                <input 
                    id='email'
                    name='email'
                    type='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='address'>Address</label>
                <input 
                    id='address'
                    name='address'
                    type='text'
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <label htmlFor='calendar'></label>
                <DatePicker 
                    showIcon
                    placeholderText='Select Day and Time'
                    selected={startDate} 
                    showTimeSelect
                    required
                    dateFormat="MMMM d, yyyy h:mm aa"
                    onChange={(date) => setStartDate(date)}
                />
                <button className='booking-button' >Book Now!</button>

            </form>
        </div>
    )
}

export default BookUser;
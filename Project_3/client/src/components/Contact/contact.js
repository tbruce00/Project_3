import React from 'react';
import Form from '../Contact/form';
import '../Contact/contact.css';


export default function Contact() {
    return (
        <div className="container">
            <div className="mx-auto mt-auto p-auto">
                <h1 className="text-center">Contact Me</h1>
                <Form />
                <br />
            </div>
        </div>
    );
}


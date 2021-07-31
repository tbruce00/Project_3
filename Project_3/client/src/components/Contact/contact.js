import React from 'react';
import Form from '../Contact/form';
import '../Contact/contact.css';
import { GrLinkedinOption } from "react-icons/gr";
import { GrGithub } from 'react-icons/gr';




export default function Contact() {
    return (
        <div className="container">
            <div className="mx-auto mt-auto p-auto">
                <div className="flex-row">
                <Form />
                <br />
                <div className="profLinks col">
                    <br />
                    <h2>Links</h2>
                    <br />
                    </div>
                    <br />
                    <div className="iconContainer">
                    <a className="profIcons" href="" target="_blank">
                    <GrLinkedinOption />
                    </a>
                    <br />
                    <a className="profIcons" href="" target="_blank">
                    <GrGithub />
                    </a>
                    </div>
            </div>    
            </div>
            </div>
    );
}

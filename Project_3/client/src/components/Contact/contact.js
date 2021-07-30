import React from 'react';
import Form from '../Contact/form';
import '../Contact/contact.css';
import { GrLinkedinOption } from "react-icons/gr";
import { GrGithub } from 'react-icons/gr';




export default function Contact() {
    return (
        <div className="container">
            <div className="row align-items-start">
            <div className="col">
                <h1 className="text-center">Contact Me</h1>
                <Form style={{ width: '25rem' }} />
                <br />
            </div>
            <div className="row align-items-end">
                <div className="col">
                    <br />
                    <h2>Links</h2>
                    <br />
                    <a className="footerIcons" href="" target="_blank">
                    <GrLinkedinOption />
                    </a>
                    <br />
                    <a className="footerIcons" href="" target="_blank">
                    <GrGithub />
                    </a>
                </div>
            </div>
            </div>
        </div>
    );
}

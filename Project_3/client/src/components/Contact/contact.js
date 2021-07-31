import React from 'react';
import Form from '../Contact/form';
import '../Contact/contact.css';
import { GrLinkedinOption } from "react-icons/gr";
import { GrGithub } from 'react-icons/gr';
import { useQuery } from '@apollo/client';
import { QUERY_PROFILE } from '../../utils/queries';



function Contact() {

    const { data } = useQuery(QUERY_PROFILE);
    let profile;
    if (data) {
      profile = data.profile;
    }

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
                    <a className="profIcons" href="https://www.linkedin.com/in/trevor-bruce-31569120b" target="_blank">
                    <GrLinkedinOption />
                    </a>
                    <br />
                    <a className="profIcons" href="https://github.com/tbruce00" target="_blank">
                    <GrGithub />
                    </a>
                    </div>
            </div>    
            </div>
            </div>
    );
}

export default Contact;


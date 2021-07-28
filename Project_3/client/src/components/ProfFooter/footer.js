import React from 'react'
import { GrLinkedinOption } from "react-icons/gr";
import { GrGithub } from 'react-icons/gr';
import '../ProfFooter/footer.css'

import { useQuery } from '@apollo/client';
import { QUERY_PROFILE } from '../../utils/queries';

function Footer() {
  const { data } = useQuery(QUERY_PROFILE);
  let profile;

  if(data) {
    profile = data.profile;
  }

    return (
        <div className= "footer">
            <div className="container text-center">
            <div>
                <a className="footerIcons" href={`"${profile.linkedIn}"`} target="_blank">
                    <GrLinkedinOption />
                </a>
                <a className="footerIcons" href={`"${profile.gitHub}"`} target="_blank">
                    <GrGithub />
                </a>
            </div>    
            </div>
        </div>
    );
}


export default Footer
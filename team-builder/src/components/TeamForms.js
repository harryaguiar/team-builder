import React from 'react'

const TeamForms = (props) => {
    console.log("TeamForms props:", props)

    return (
        <div className="teamMembers-list">
            {props.teamMembers.map((member) => (
                <div className="card-div" key={member.id}>
                {/*Build inputs for name, email and role (backend engineer, frontend engineer, designer, etc. Use your imagination).*/}
                    <h2>{member.name}</h2>
                    <h2>{member.email}</h2>
                    <h2>Role: {member.role}</h2>
                </div>
            ))}

        </div>
    )
}

export default TeamForms;


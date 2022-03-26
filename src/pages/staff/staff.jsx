import React from 'react';
import staffData from '../people/people.data';
import withRouter from '../../HOC/withRouter/withRouter';
import StaffItem from '../../components/staff-item/staff-item';
import "./staff.styles.scss";

const Staff = ({params}) => {
    const {staffId} = params;

    return (
        <div className="staff">
            <div className="staff__header">
                <h1>Our <span>Staffs</span></h1>
            </div>
            <div className="staff__content">
                {
                    staffData.filter(({id}) => id === +staffId).map( ({id,staffName,imgUrl,email,education,selectedPublications,researchInterests,honorsNAwards,staffLevel}) => {
                        return (
                        <StaffItem 
                            key={id}
                            staffName={staffName}
                            imgUrl={imgUrl}
                            email= {email}
                            staffLevel={staffLevel}
                            education = {education}
                            selectedPublications ={selectedPublications}
                            researchInterests ={researchInterests}
                            honorsNAwards={honorsNAwards}
                        />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default withRouter(Staff);
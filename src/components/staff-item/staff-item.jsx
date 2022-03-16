import React from 'react';
import "./staff-item.scss";

const StaffItem = ({staffName,imgUrl,email,education,selectedPublications,researchInterests,honorsNAwards,staffLevel}) => {
    return (
        <div className="staff-item">
            <h2 className="staff-item__name">{staffName}  {staffLevel}</h2>
            <div className="staff-item__details-1">
                <img src={`${imgUrl}`} alt={`${staffName}`} className="staff-item__img" />

                <div className="staff-item__info">
                    <div className="staff-item__education">
                        <h3 className="staff-item__education--title">Education</h3>
                        {
                            education.map(({title,description}) => <p><b>{title}</b>.,{description}</p>)
                        }
                    </div>
                    <div className="staff-item__interest">
                        <h3 className="staff-item__interest--title">Research Interests</h3>
                        <p>{researchInterests}</p>
                    </div>
                    <div className="staff-item__email">
                        <h3 className="staff-item__email--title">Email</h3>
                        <p>{email}</p>
                    </div>
                </div>
            </div>

            <div className="staff-item__details-2">
                <div className="staff-item__selected-publications">
                    <h3 className="staff-item__selected-publications--title">Selected Publications</h3>
                    <p>{selectedPublications}</p>
                </div>
                <div className="staff-item__honours-and-awards">

                    <h3 className="staff-item__honours-and-awards--title">Honours And Awards</h3>

                    <p>{honorsNAwards}</p>
                </div>
            </div>
        </div>
    )
}

export default StaffItem;
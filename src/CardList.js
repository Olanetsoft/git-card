import React from 'react';
import Card from './Card';


const CardList = (props) => {
    return (
        <div className="grid grid-cols-3 gap-4">
  	{props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
	</div>
    );
};

export default CardList;
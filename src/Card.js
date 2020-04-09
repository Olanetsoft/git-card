import React, { Component } from 'react'

// import './App.css';



export default class Card extends Component {
    render() {
        const profile = this.props;
        return (
            <div class="flex justify-center">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full h-56" src={profile.avatar_url} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{profile.name}</div>
                    <p className="text-gray-800 text-base">
                        {profile.company}
                    </p>
                    <p className="text-gray-700 text-base">
                        {profile.location}
                    </p>
                    <p className="text-gray-700 text-base">
                        {profile.bio}
                    </p>
                </div>
            </div>
            </div>
        );
    }
}



{/* <div className="github-profile">
                <img src={profile.avatar_url} alt="avatar" />
                <div className="info">
                    <div className="name">{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div> */}

import React from 'react';
import logo from "../../assets/AdSpark_logo.jpg"; 
import TickBadge from './TickBadge';

const ProfileHeader = () => {
  return (
    <div className="flex items-center p-4 bg-transparent">
      {/* Profile picture with gradient ring */}
      <div className="relative">
        {/* Gradient ring */}
        <div className="rounded-full w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 flex items-center justify-center">
          {/* Profile image */}
          <div className="rounded-full w-14 h-14 overflow-hidden border-2 border-transparent">
            <img 
              src={logo}
              alt="profile pic" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Username and description */}
      <div className="ml-4 text-white">
        <div className="flex items-center">
          <h2 className="text-xl font-bold">AdSpark AI</h2>
          {/* Custom verification badge with scalloped/flowery edge */}
          <TickBadge/>
          
          <div className="ml-1">
          </div>
        </div>
        <p className="text-sm">AI powered videos</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
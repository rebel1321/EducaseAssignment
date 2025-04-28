import React from "react";

function Profile() {
  return (
    <div className="relative">
      <div className="bg-white">
        <h1 className="text-[18px] leading-[21px] font-normal text-[#1d2226] px-[15px] pt-[27px] pb-[19px]">
          Account Settings
        </h1>
      </div>
      <div className="flex gap-[20px] mx-[20px] my-[30px]">
        <div className="relative">
          <img src="/assets/Ellipse 114.png" id="profile-image" />
          <img
            src="/assets/Group 1585@2x.png"
            id="camera"
            className="w-[24px] h-[24px] absolute bottom-0 right-0 bg-white p-[2px] rounded-full shadow-md"
          />
        </div>
        <div>
          <h2 className="text-[15px] leading-[19px] font-medium text-[#1d2226] mb-[6px]">
            Marry Doe
          </h2>
          <p className="text-[14px] leading-[19px] font-normal text-[#1d2226]">
            Marry@Gmail.Com
          </p>
        </div>
      </div>
      <p className="text-[14px] leading-[22px] font-normal text-[#1d2226] mx-[20px] mr-[18px] break-words whitespace-normal">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
}

export default Profile;

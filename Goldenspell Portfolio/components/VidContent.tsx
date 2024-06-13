import React from "react";

const VidContent = () => {
  return (
    <div className="w-[90%] p-10 z-[20] flex items-center">
      <div className="w-full flex flex-col md:flex-row gap-20 mt-24 items-center">
        <div className="flex flex-col gap-6 mb-6">
          <h1 className="text-6xl text-[#FFD700]">Narci</h1>
          <p className="text-lg max-w-[600px] text-gray-400">
          विज्ञानकल्पनाभ्यां पूरितं च साक्षरम् ज्ञानम्।
          पुराणे संस्कृते युक्तम्, शिवभक्त्या सह सदा॥
          This is an emotional song from this EP. This song depicts the emotional bond between a devotee and his beloved. You will feel in this song how a person connects with his beloved in a broken state. No matter how strong a person is, when he starts getting defeated by the circumstances and the wrong ways of the world, only God sees his/her broken faith.
          </p>
        </div>
        <iframe
          width="590"
          height="350"
          src="https://www.youtube.com/embed/9CYITk4Ittk?si=B7nUROjn_m4oxS_F"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-lg w-[450px] md:w-[590px] mr-6"
        ></iframe>
      </div>
    </div>
  );
};

export default VidContent;

import React from "react";

type ImageSectionProps = {
  title: string;
};

const ImageSection: React.FC<ImageSectionProps> = ({ title }) => {
  return (
    <div className="flex flex-col font-open-sans text-white">
      <h3 className="mt-auto text-center">{title}</h3>
      {/* Future enhancement: Insert a Carousel component here */}
    </div>
  );
};

export default ImageSection;
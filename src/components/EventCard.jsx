import React from "react";

const EventCard = ({ image, month, day, title, description }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-[300px] group">
      {/* White Card Container */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-soft w-full transition-transform duration-300 group-hover:-translate-y-1 h-full flex flex-col">
        {/* Image Section */}
        <div className="h-48 w-full overflow-hidden relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Gradient overlay for better text contrast if needed, though image shows clear photo */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content Section */}
        <div className="p-5 flex gap-4 flex-1">
          {/* Date Block */}
          <div className="flex flex-col items-center min-w-[3rem]">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">{month}</span>
            <span className="text-2xl font-bold text-textPrimary leading-none mt-1">{day}</span>
          </div>

          {/* Text Info */}
          <div className="flex flex-col">
            <h3 className="font-bold text-textPrimary text-sm leading-snug mb-2 line-clamp-2">
              {title}
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Join Button - Floating below card */}
      <button className="-mt-5 z-10 bg-primary text-white text-sm font-semibold py-2 px-8 rounded-full shadow-lg hover:bg-orange-600 active:scale-95 transition-all duration-200">
        Join Event
      </button>
    </div>
  );
};

export default EventCard;
import React from "react";
import EventCard from "../components/EventCard";

const EventsPage = () => {
  // Mock data representing the events in your design
  const events = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Concert crowd
      month: "Apr",
      day: "14",
      title: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
      description: "We'll get you directly seated and inside for you to enjoy the show."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Stage performers
      month: "Aug",
      day: "20",
      title: "JYJ 2011 JYJ Worldwide Concert Barcelona",
      description: "Directly seated and inside for you to enjoy the show."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Party lights
      month: "Sep",
      day: "18",
      title: "2011 Super Junior SM Town Live '10 World Tour New York City",
      description: "Directly seated and inside for you to enjoy the show."
    }
  ];

  return (
    <div className="flex-1 bg-background p-8 overflow-y-auto">
      <header className="mb-8">
        <h2 className="text-2xl font-semibold text-textPrimary">Events</h2>
      </header>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-12">
        {events.map((event) => (
          <EventCard
            key={event.id}
            image={event.image}
            month={event.month}
            day={event.day}
            title={event.title}
            description={event.description}
          />
        ))}
      </div>

      {/* "Make your own Event" Section (Bottom of your image) */}
      <div className="mt-16 bg-transparent flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
        {/* Illustration Placeholder */}
        <div className="relative w-full md:w-1/2 h-64 bg-indigo-100 rounded-xl flex items-center justify-center overflow-hidden">
             {/* Replace this with your actual illustration asset later */}
            <div className="text-indigo-300 font-bold text-xl">Illustration Here</div>
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <h3 className="text-2xl font-bold text-textPrimary">Make your own Event</h3>
          <p className="text-textSecondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="bg-primary text-white font-medium py-3 px-8 rounded-lg shadow-md hover:bg-orange-600 transition-colors">
            Create Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
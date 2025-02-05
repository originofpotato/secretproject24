import React, { useState } from 'react';
import { Heart, Gift, MessageCircle, Music } from 'lucide-react';

const ValentinesApp = () => {
  const [activeSection, setActiveSection] = useState('memories');
  
  const memories = [
    { id: 1, text: "First date with Trisa", date: "June 15, 2023" },
    { id: 2, text: "Our first kiss", date: "July 22, 2023" },
    { id: 3, text: "Weekend trip to the coast", date: "September 5, 2023" }
  ];

  const romanticMessages = [
    "Trisa, you're the love of my life ❤️",
    "Every moment with you is magical",
    "You make my world brighter every day"
  ];

  return (
    <div className="bg-pink-100 min-h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-pink-600 mb-6">
          Happy Valentine's Day, Trisa!
        </h1>

        <div className="flex justify-around mb-6">
          {['memories', 'messages', 'gifts', 'music'].map((section) => (
            <button 
              key={section}
              onClick={() => setActiveSection(section)}
              className={`p-2 rounded-full ${
                activeSection === section 
                  ? 'bg-pink-500 text-white' 
                  : 'bg-pink-100 text-pink-600'
              }`}
            >
              {section === 'memories' && <Heart size={24} />}
              {section === 'messages' && <MessageCircle size={24} />}
              {section === 'gifts' && <Gift size={24} />}
              {section === 'music' && <Music size={24} />}
            </button>
          ))}
        </div>

        {activeSection === 'memories' && (
          <div>
            <h2 className="text-xl font-semibold text-pink-700 mb-4">Our Memories</h2>
            {memories.map(memory => (
              <div key={memory.id} className="bg-pink-50 p-3 rounded-lg mb-2">
                <p className="font-medium">{memory.text}</p>
                <p className="text-sm text-pink-600">{memory.date}</p>
              </div>
            ))}
          </div>
        )}

        {activeSection === 'messages' && (
          <div>
            <h2 className="text-xl font-semibold text-pink-700 mb-4">Love Messages</h2>
            {romanticMessages.map((message, index) => (
              <div 
                key={index} 
                className="bg-pink-50 p-3 rounded-lg mb-2 text-center"
              >
                {message}
              </div>
            ))}
          </div>
        )}

        {activeSection === 'gifts' && (
          <div>
            <h2 className="text-xl font-semibold text-pink-700 mb-4">Gift Ideas</h2>
            <ul className="space-y-2">
              <li className="bg-pink-50 p-3 rounded-lg">Handmade photo album</li>
              <li className="bg-pink-50 p-3 rounded-lg">Personalized jewelry</li>
              <li className="bg-pink-50 p-3 rounded-lg">Romantic weekend getaway</li>
            </ul>
          </div>
        )}

        {activeSection === 'music' && (
          <div>
            <h2 className="text-xl font-semibold text-pink-700 mb-4">Love Playlist</h2>
            <ul className="space-y-2">
              <li className="bg-pink-50 p-3 rounded-lg">All of Me - John Legend</li>
              <li className="bg-pink-50 p-3 rounded-lg">Perfect - Ed Sheeran</li>
              <li className="bg-pink-50 p-3 rounded-lg">Can't Help Falling in Love - Elvis</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ValentinesApp;
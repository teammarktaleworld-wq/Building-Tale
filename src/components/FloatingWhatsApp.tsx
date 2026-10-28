import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/971500000000?text=Hello%20Building%20Tale%20Advisor,%20I%20am%20inquiring%20about%20UAE%20properties"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-floating"
      aria-label="Chat on WhatsApp with Dubai Property Advisor"
    >
      <div className="whatsapp-bubble">
        Chat with Dubai Property Advisor
      </div>
      <div className="whatsapp-icon-btn">
        <MessageCircle size={26} />
      </div>
    </a>
  );
};

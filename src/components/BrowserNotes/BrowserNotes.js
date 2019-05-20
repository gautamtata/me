import React from 'react';
import Browser from '@components/Browser';

const BrowserNotes = () => {
  return (
    <div className="browser-notes">
      <Browser except firefox chrome mobile>
        
      </Browser>
      <Browser only firefox>
       
      </Browser>
    </div>
  );
};

export default BrowserNotes;
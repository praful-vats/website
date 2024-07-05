import React from 'react';
import pdf from './images/Praful_Vats.pdf';
function Resume() {
    return (
      <div>
        <embed
          src={pdf}
          type="application/pdf"
          width="100%"
          height="10000px"
        />
      </div>
    );
}

export default Resume;
  
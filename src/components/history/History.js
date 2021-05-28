import React from 'react';

function History({ requests }) {
  return (
    <div>
      {requests && requests.map(request => {
        return (
          <p>
            <span>URL : {request.URL}</span><br />
            <span>METHOD : {request.method}</span>
          </p>
        );
      })}
    </div>
  );
}

export default History;

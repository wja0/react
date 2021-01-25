import React, { Component } from 'react';

const Home = ({ match }) => {
        
        const { username } = match.params;
        return (
            <div>
              <h3>
                HOME
              </h3>
            </div>
          );
}
    

export default Home
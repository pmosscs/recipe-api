import React from 'react'
import DetailImage from './DetailImage';


const DetailScreen = () => {  
  return (
    <div className='detail-screen'>
      <DetailImage />
      <div className='detail-body'>
        <div className='left-info'>
          <div className='top-box'>
          <h2>Recipe</h2>
          <p>Prep time: 15 min</p>
          <p>Cook Time: 15 min</p>
          <p>Serves: 2</p>
          </div>
          <div className='bottom-box'>
          <h2>Ingredients</h2>
          <p>2 steaks</p>
          <p>butter</p>
          <p>salt</p>
          <p>pepper</p>
          </div>
        </div>
        <div className='right-info'>
          <h2>Instructions</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailScreen;

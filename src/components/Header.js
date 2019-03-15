import React from 'react'; 
import { NavLink } from 'react-router-dom';

const Header = () => ( 
    <div className="header">
      <ul className="header">
        <li><NavLink exact to ="/">일정</NavLink></li>
        <li><NavLink to ="/buget">예산</NavLink></li>
      </ul>
    </div> 
) 
                      
export default Header;
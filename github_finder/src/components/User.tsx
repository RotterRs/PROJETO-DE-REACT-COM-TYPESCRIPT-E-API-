 import { UserProps } from "../types/user";

 import {MdLocationPin} from 'react-icons/md'

 import { Link } from "react-router-dom";
 
 import classes from "react-router-dom";
 
 const User = ({
    login, 
    avatar_url,
    followers,
    following,
    location,
    }:UserProps) => {
    return ( 
         <div className={classes.User}> 
        <img src={avatar_url} alt={login} />
        <h2>login</h2>
        {location &&(
        <p className={classes.location}>
          <MdLocationPin/>
          <span>{location}</span>
        </p>
        )}
          <div className={classes.stats}>
            <div>
            <p>Seguidores:</p>
            <p className={class.number}>{followers}</p>
            </div>
            <div>
            <p>Seguindo</p>
            <p className={class.number}>{following}</p>
            </div>
             <Link to={`/repos/${login}`}>Melhores projetos </Link>
          </div>
    </div>
    );
};

export default User;
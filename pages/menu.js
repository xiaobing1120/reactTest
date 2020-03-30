
import {
    Link
} from "react-router-dom";
import routes from '@/router/router';

export default class Menu extends React.Component{
    render(){
        return(
            <div id="Left">
                {routes.map((route, i) => (
                    <Link key={i} to={route.path}>{route.name}</Link>
                ))}
            </div>
        )
    }
}
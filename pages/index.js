import { lazy, Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Menu from './menu';
import routes from '@/router/router';


import "./index.less";
import image53435 from '@/assets/img/53435.png';



// function RouteWithSubRoutes(route) {
//     return (
//         <Route path={route.path} render={props => (<route.component {...props} routes={route.routes} />)}/>
//     );
// }

class HelloMessage extends React.Component {
    render() {
        return (
            <Router>
                <Suspense  fallback={<div>Loading...</div>}>
                    <div id="main">
                        <Menu />
                        <img src={image53435} width="320" height="100" />
                        <div id="Right">Hello {this.props.name}
                            <Switch> 
                                {routes.map((route, i) => (
                                    <Route key={i} path={route.path} component={route.component}/>
                                ))} 
                                {/*{routes.map((route, i) => (
                                        <RouteWithSubRoutes key={i} {...route} />
                                    ))}
                                    <Route path="/about">
                                        <About />
                                    </Route> */}
                            </Switch> 
                        </div> 
                    </div>
                </Suspense>
            </Router>
        );
    }
}

ReactDOM.render( 
    <HelloMessage name="Taylor-0" />,
    document.getElementById('box')
);


// if (module.hot) {
//     module.hot.accept();
// }  
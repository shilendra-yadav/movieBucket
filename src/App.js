import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Container } from '@material-ui/core'
import Trending from './Pages/Trending/Trending';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';
import Header from './components/Header/Header';
import SimpleBottomNavigation from "./components/MainNav/MainNav";
import './App.css';

const Movies = React.lazy(() => import('./Pages/Movies/Movies'));

function App () {
    return (
        <BrowserRouter>
            <Header />
            <div className='app'>
                <Container>
                <React.Suspense fallback={<div>loading....</div>}>
                    <Switch>
                        <Route exact path='/' component={Trending} />
                    
                            <Route exact path='/movies' component={ Movies} />
                            <Route exact path='/series' component={Series} />
                            <Route exact path='/search' component={Search} />
                    </Switch>
                </React.Suspense>
                </Container>
            </div>
            <SimpleBottomNavigation />
        </BrowserRouter>
    )
}

export default App; 
import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import LayoutManager from '../layouts/LayoutManager';
import { HomePage, ProjectsPage } from '../pages';
import Urls from './Urls';
const Router = () => {
    return (
        <BrowserRouter>
            <LayoutManager>
                <Switch>
                    <Route exact path={Urls.home} component={HomePage}/>
                    <Route path={Urls.projects} component={ProjectsPage}/>
                </Switch>
            </LayoutManager>
        </BrowserRouter>
    )
}

export default Router;

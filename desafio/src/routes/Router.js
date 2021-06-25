import { BrowserRouter, Switch, Route } from "react-router-dom";
import {SearchPage} from "../pages/searchPage/SearchPage"
import {ProfilePage} from "../pages/profilePage/ProflePage"
import {ReposPage} from "../pages/reposPage/ReposPage"
import { ErrorPage } from "../pages/errorPage/ErrorPage";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = "/">
                    <SearchPage />
                </Route>

                <Route exact path = "/profile/:nickname">
                    <ProfilePage />
                </Route>

                <Route exact path = "/repos/:nickname">
                    <ReposPage />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
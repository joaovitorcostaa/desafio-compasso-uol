import { BrowserRouter, Switch, Route } from "react-router-dom";
import { SearchPage } from "../pages/searchPage/SearchPage"
import { ProfilePage } from "../pages/profilePage/ProflePage"
import { ReposPage } from "../pages/reposPage/ReposPage"
import { ErrorPage } from "../pages/errorPage/ErrorPage";
import { StarredPage } from "../pages/starredPage/StarredPage";
import { FollowersPage } from "../pages/followersPage/FollowersPage";
import { FollowingPage } from "../pages/followingPage/FollowingPage";

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <SearchPage />
                </Route>

                <Route exact path="/profile/:nickname">
                    <ProfilePage />
                </Route>

                <Route exact path="/repos/:nickname">
                    <ReposPage />
                </Route>

                <Route exat path="/starred/:nickname">
                    <StarredPage />
                </Route>

                <Route exat path = "/followers/:nickname">
                    <FollowersPage />
                </Route>

                <Route exact path = "/following/:nickname">
                    <FollowingPage  />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
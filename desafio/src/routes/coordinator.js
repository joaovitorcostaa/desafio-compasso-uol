export const goToSearchPage = (history) => {
    history.push("/")
}

export const goToProfilePage = (history, nickname) => {
    history.push(`/profile/${nickname}`)
}

export const goToReposPage = (history, nickname) => {
    history.push(`/repos/${nickname}`)
}

export const goToStarredPage = (history, nickname) => {
    history.push(`/starred/${nickname}`)
}

export const goToFollowersPage = (history, nickname) => {
    history.push(`/followers/${nickname}`)
}

export const goToFollowingPage = (history, nickname) => {
    history.push(`/following/${nickname}`)
}
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
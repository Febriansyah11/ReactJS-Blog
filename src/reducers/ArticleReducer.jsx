const initialState = {
    articlePath: {
        path: "",
        pathChild: ""
    },
    loading: true
}

export default function articleReducer(state = initialState, action) {
    const { type, valueLoading, valuePath, valueArticle } = action

    switch (type) {
        case 'HANDLE_ARTICLE_PATH':
            return { ...state, loading: valueLoading, articlePath: valuePath}
        default:
            return state;
    }
}   

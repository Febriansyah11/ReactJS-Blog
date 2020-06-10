const initialState = {
    categorys: [],
    loading: true

}
export default function categoryReducer(state = initialState, action) {
    const { type, valueLoading, valueCategory } = action

    switch (type) {
        case 'HANDLE_CATEGORYS':
            return { ...state, loading: valueLoading, categorys: valueCategory }
        default:
            return state;
    }
}   

export const GET_COLOR = 'GET_COLOR'

export function getColor() {
    return dispatch => {
        dispatch({
            type: GET_COLOR
        })
    }
}
const EVENTS_PREFIX = 'COMMENTS';
const EVENTS = {
    SEND_AJAX_REQUEST: `${EVENTS_PREFIX}:SEND_AJAX_REQUEST`,
    RECEIVE_AJAX_REQUEST: `${EVENTS_PREFIX}:RECEIVE_AJAX_REQUEST`,
    UPDATE_LIST: `${EVENTS_PREFIX}:UPDATE_LIST`,
    AJAX_ERROR: `${EVENTS_PREFIX}:AJAX_ERROR`
};

function createState(list, fetching, updatedFetching, fetched, error = null) {
    return {
        list,
        fetching,
        updatedFetching,
        fetched,
        error
    }
}

const DEFAULT_STATE = createState([], false, false);

function reducer(state=DEFAULT_STATE, { type, payload }) {
    switch(type) {
        case EVENTS.SEND_AJAX_REQUEST:
            return createState([], true, false, false);
        case EVENTS.RECEIVE_AJAX_REQUEST:
            return createState(payload, false, false, true);
        case EVENTS.UPDATE_LIST:
            return { ...state, updatedFetching: true };
        case EVENTS.AJAX_ERROR:
            return createState([], false, false, false, payload);
        default:
            return {...state};
    }
}

export default {
    EVENTS,
    reducer
};
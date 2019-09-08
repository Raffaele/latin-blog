const EVENTS_PREFIX = 'POSTS';
const EVENTS = {
    SEND_AJAX_REQUEST: `${EVENTS_PREFIX}:SEND_AJAX_REQUEST`,
    RECEIVE_AJAX_REQUEST: `${EVENTS_PREFIX}:RECEIVE_AJAX_REQUEST`,
    AJAX_ERROR: `${EVENTS_PREFIX}:AJAX_ERROR`
};

function createState(list, fetching, fetched, error = null) {
    return {
        fetching,
        fetched,
        list,
        error
    }
}

const DEFAULT_STATE = createState([], false, false);

function reducer(state=DEFAULT_STATE, { type, payload }) {
    switch(type) {
        case EVENTS.SEND_AJAX_REQUEST:
            return createState([], true, false);
        case EVENTS.RECEIVE_AJAX_REQUEST:
            return createState(payload, false, true);
        case EVENTS.AJAX_ERROR:
            return createState([], false, false, payload);
        default:
            return {...state};
    }
}

export default {
    EVENTS,
    reducer
};

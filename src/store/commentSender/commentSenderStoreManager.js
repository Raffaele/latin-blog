const EVENTS_PREFIX = 'COMMENT-SENDER';
const EVENTS = {
    CHANGE_TEXT: `${EVENTS_PREFIX}:CHANGE_TEXT`
};

function reducer(state='', { type, payload }) {
    switch(type) {
        case EVENTS.CHANGE_TEXT:
            return payload;
        default:
            return state;
    }
}

export default {
    EVENTS,
    reducer
};

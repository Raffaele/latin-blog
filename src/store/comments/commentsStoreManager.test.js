import commentsStoreManager from './commentsStoreManager';

describe('commentsStoreManager', () => {
    const { EVENTS, reducer } = commentsStoreManager;
    describe('SEND_AJAX_REQUEST event', () => {
        const type = EVENTS.SEND_AJAX_REQUEST;
        let newState;
        beforeEach(() => {
            newState = reducer({}, { type });
        });
        it('should set error param to null', () => {
            expect(newState.error).toBe(null);
        });
        it('should set fetching param to true', () => {
            expect(newState.fetching).toBe(true);
        });
        it('should set updatedFetching param to true', () => {
            expect(newState.updatedFetching).toBe(false);
        });
        it('should set fetched param to false', () => {
            expect(newState.fetched).toBe(false);
        });
        it('should set list param to emtpy array', () => {
            expect(newState.list).toEqual([]);
        });
    });

    describe('AJAX_ERROR event', () => {
        const type = EVENTS.AJAX_ERROR;
        const error = new Error('my error');
        let newState;
        beforeEach(() => {
            newState = reducer({}, {
                type,
                payload: error
            });
        });

        it('should set error param to the payload one', () => {
            expect(newState.error).toBe(error);
        });
        it('should set fetching param to false', () => {
            expect(newState.fetching).toBe(false);
        });
        it('should set updatedFetching param to true', () => {
            expect(newState.updatedFetching).toBe(false);
        });
        it('should set fetched param to false', () => {
            expect(newState.fetched).toBe(false);
        });
        it('should set list param to emtpy array', () => {
            expect(newState.list).toEqual([]);
        });
    });

    describe('UPDATE_LIST event', () => {
        const type = EVENTS.UPDATE_LIST;
        const error = new Error('my error');
        let newState;
        beforeEach(() => {
            newState = reducer({
                error,
                fetching: false,
                fetched: false,
                list: []
            }, {
                type
            });
        });

        it('should set error param to the payload one', () => {
            expect(newState.error).toBe(error);
        });
        it('should set fetching param to false', () => {
            expect(newState.fetching).toBe(false);
        });
        it('should set updatedFetching param to true', () => {
            expect(newState.updatedFetching).toBe(true);
        });
        it('should set fetched param to false', () => {
            expect(newState.fetched).toBe(false);
        });
        it('should set list param to emtpy array', () => {
            expect(newState.list).toEqual([]);
        });
    });

    describe('RECEIVE_AJAX_REQUEST event', () => {
        const type = EVENTS.RECEIVE_AJAX_REQUEST;
        const listResult = [1, true, 'best', {}];
        let newState;
        beforeEach(() => {
            newState = reducer({}, {
                type,
                payload: listResult
            });
        });

        it('should set error param to null', () => {
            expect(newState.error).toBe(null);
        });
        it('should set fetching param to false', () => {
            expect(newState.fetching).toBe(false);
        });
        it('should set updatedFetching param to true', () => {
            expect(newState.updatedFetching).toBe(false);
        });
        it('should set fetched param to true', () => {
            expect(newState.fetched).toBe(true);
        });
        it('should set list param to payload one', () => {
            expect(newState.list).toEqual(listResult);
        });
    });
    
});
import commentSenderStoreManager from './commentSenderStoreManager';

describe('commentSenderStoreManager', () => {
    const { EVENTS, reducer } = commentSenderStoreManager;

    describe('CHANGE_TEXT event', () => {
        const type = EVENTS.CHANGE_TEXT;
        const newText = 'My new text';
        let newState;
        
        beforeEach(() => {
            newState = reducer({}, {
                type,
                payload: newText
            });
        });

        it('should update the text', () => {
            expect(newState).toBe(newText);
        });
    });
});

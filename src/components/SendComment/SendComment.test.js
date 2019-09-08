import React from 'react';
import SendComment from './SendComment';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('SendComment component', () => {
    let SendCommentComponent;

    it('should send true to LoadSpinner when fetch is true', () => {
        SendCommentComponent = shallow(<SendComment
            postId={12}
            text="hello"
            fetch={true}
            updateText={jest.fn()}
            commitText={jest.fn()}
        />);
        expect(SendCommentComponent.find('LoadSpinner').props().wait).toBe(true);
    });

    it('should send false to LoadSpinner when fetch is false', () => {
        SendCommentComponent = shallow(<SendComment
            postId={12}
            text="hello"
            fetch={false}
            updateText={jest.fn()}
            commitText={jest.fn()}
        />);
        expect(SendCommentComponent.find('LoadSpinner').props().wait).toBe(false);
    });

    it('submit button should be disabled on empty text', () => {
        SendCommentComponent = shallow(<SendComment
            postId={12}
            text=""
            fetch={false}
            updateText={jest.fn()}
            commitText={jest.fn()}
        />);
        const submitButton = SendCommentComponent.find('[data-selector="send-comment__submit"]');
        expect(submitButton.props().disabled).toBe(true);
    });

    it('submit button should be enabled on non-empty text', () => {
        SendCommentComponent = shallow(<SendComment
            postId={12}
            text="Hello again!"
            fetch={false}
            updateText={jest.fn()}
            commitText={jest.fn()}
        />);
        const submitButton = SendCommentComponent.find('[data-selector="send-comment__submit"]');
        expect(submitButton.props().disabled).toBe(false);
    });

    it('should show the text in text-area', () => {
        const text = "Hello again!"
        SendCommentComponent = shallow(<SendComment
            postId={12}
            text={text}
            fetch={false}
            updateText={jest.fn()}
            commitText={jest.fn()}
        />);
        const textAreaInput = SendCommentComponent.find('.send-comment__input');
        expect(textAreaInput.props().value).toBe(text);
    });

    it('should call commitText callback on input change', () => {
        const updateTextFn = jest.fn();
        const inputText = 'My best test';
        SendCommentComponent = shallow(<SendComment
            postId={12}
            text="Hello again!"
            fetch={false}
            updateText={updateTextFn}
            commitText={jest.fn()}
        />);
        const textAreaInput = SendCommentComponent.find('.send-comment__input');
        textAreaInput.simulate('change', {
            target: {
                value: inputText
            }
        });
        expect(updateTextFn).toBeCalledWith(inputText);
    });

    it('should call cleanBody callback on CANCEL button click', () => {
        const updateTextFn = jest.fn();
        SendCommentComponent = shallow(<SendComment
            postId={12}
            text="Hello again!"
            fetch={false}
            updateText={updateTextFn}
            commitText={jest.fn()}
        />);
        const cancelButton = SendCommentComponent.find('button[type="reset"]');
        cancelButton.simulate('click');
        expect(updateTextFn).toBeCalledWith('');
    });

    it('should call commitText callback on SUBMIT button click', () => {
        const commitTextFn = jest.fn();
        const submitEvt = {
            preventDefault: jest.fn()
        }
        const postId = 12;
        SendCommentComponent = shallow(<SendComment
            postId={postId}
            text="Hello again!"
            fetch={false}
            updateText={jest.fn()}
            commitText={commitTextFn}
        />);
        const submitButton = SendCommentComponent.find('form');
        submitButton.simulate('submit', submitEvt);
        expect(commitTextFn).toBeCalledWith(postId);
        expect(submitEvt.preventDefault).toBeCalledWith();
    });
});

import React from 'react';
import CommentDetails from './CommentDetails';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('CommentDetails component', () => {
    let CommentDetailsComponent;
    let comment;

    beforeEach(() => {
        comment = {
            name: 'fake-name',
            email: 'fake@email.com',
            body: 'The text of the new comment to verify the test'
        };
        CommentDetailsComponent = shallow(<CommentDetails comment={comment}/>);
    });
    it('should be creted without crashing', () => {
        expect(CommentDetailsComponent).toBeDefined();
    });

    describe('should show the link related to the author', () => {
        let QuantitySpinnerComponent;
        beforeEach(() => {
            QuantitySpinnerComponent = CommentDetailsComponent.find('.comment-details__author__link');
        });
        it('The link should exist', () => {
            expect(QuantitySpinnerComponent.length).toBe(1);
        });
        it('The link should point to the author email', () => {
            expect(QuantitySpinnerComponent.props().href).toBe(`mailto:${comment.email}`);
        });
        it('The link should contain to the author name', () => {
            expect(QuantitySpinnerComponent.text()).toBe(comment.name);
        });
    });

    describe('TextLines sub component', () => {
        let TextLines;
        beforeEach(() => {
            TextLines = CommentDetailsComponent.find('TextLines');
        });
        it('should exist', () => {
            expect(TextLines.length).toBe(1);
        });
        it('should contain the comment.body as text prop', () => {
            expect(TextLines.props().text).toBe(comment.body);
        });
    });
});
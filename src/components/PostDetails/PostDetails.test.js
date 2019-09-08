import React from 'react';
import PostDetails from './PostDetails';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('PostDetails component', () => {
    let PostDetailsComponent;
    const author = {};
    const post = {
        title: 'fake post tilte',
        body: 'fake post body',
        id: 123
    };
    const comments = [{
        id: 1
    }, {
        id: 27
    }, {
        id: 901
    }];

    beforeEach(() => {
        PostDetailsComponent = shallow(<PostDetails
            author={author}
            post={post}
            comments={comments}
        />);
    });

    it('should be loaded without crash', () => {
        expect(PostDetailsComponent).toBeDefined();
    });

    it('should show the correct title', () => {
        const titleDom = PostDetailsComponent.find('.post-details__header__title');
        expect(titleDom.text()).toBe(post.title);
    });

    it('should use the UserDetails sub component', () => {
        const UserDetailsDom = PostDetailsComponent.find('UserDetails');
        expect(UserDetailsDom.props().data).toBe(author);
    });

    it('should use the UserDetails sub component', () => {
        const TextLinesDom = PostDetailsComponent.find('TextLines');
        expect(TextLinesDom.props().text).toBe(post.body);
    });
    
    describe('comment list', () => {
        let commentsDom;
        beforeEach(() => {
            commentsDom = PostDetailsComponent.find('[data-selector="post-details__comment__list-item"]');
        });
        it('should include the same number of items of the comments', () => {
            expect(commentsDom.length).toBe(comments.length);
        });

        it('should pass the comment objects to the CommentDetails sub components', () => {
            commentsDom.forEach((commDom, domIndex) => {
                const specificDom = commDom.find('CommentDetails');
                expect(specificDom.props().comment).toBe(comments[domIndex]);
            });
        });
    });
});

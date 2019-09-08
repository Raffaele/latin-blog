import React from 'react';
import PostList from './PostList';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('PostList component', () => {
    let PostListComponent;
    let LoadSpinnerComponent;
    
    describe('on fetched set to true', () => {
        beforeEach(() => {
            PostListComponent = shallow(<PostList
                fetching={true}
                posts={[]}
                users={[]}
            />);
            LoadSpinnerComponent = PostListComponent.find('LoadSpinner');
        });

        it('should set true to the loading spinner', () => {
            expect(LoadSpinnerComponent.props().wait).toBe(true);
        });
    });

    describe('on fetched set to false', () => {
        beforeEach(() => {
            PostListComponent = shallow(<PostList
                fetching={false}
                posts={[]}
                users={[]}
            />);
            LoadSpinnerComponent = PostListComponent.find('LoadSpinner');
        });

        it('should set false to the loading spinner', () => {
            expect(LoadSpinnerComponent.props().wait).toBe(false);
        });
    });

    describe('posts list', () => {
        const posts = [{
            id: 1,
            userId: 2
        }, {
            id: 2,
            userId: 1
        }, {
            id: 3,
            userId: 1
        }];
        const users = [{
            id: 1
        }, {
            id: 2
        }];

        const expectedAuthors = posts.map(post => {
            return users.find(user => user.id === post.userId);
        });
        let postListDomItems;
        beforeEach(() => {
            PostListComponent = shallow(<PostList
                fetching={false}
                posts={posts}
                users={users}
            />);
            postListDomItems = PostListComponent.find('.post-list__list-item');
        });

        it('should show the correct number of comments', () => {
            expect(postListDomItems.length).toBe(posts.length);
        });

        it('should show the appropriate author data', () => {
            postListDomItems.forEach((postDom, domIndex) => {
                expect(postDom.find('UserDetails').props().data).toBe(expectedAuthors[domIndex]);
            });
        });

        it('should show the appropriate author data', () => {
            postListDomItems.forEach((postDom, domIndex) => {
                const selectedPost= posts[domIndex];
                expect(postDom.find('Link').props().to).toBe(`/post/author-${selectedPost.userId}/post-${selectedPost.id}`);
            });
        });
    });
});

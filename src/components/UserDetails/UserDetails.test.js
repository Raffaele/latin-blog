import React from 'react';
import UserDetails from './UserDetails';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('UserDetails component', () => {
    let UserDetailsComponent;
    const authorDetails = {
        name: 'fake name',
        photo: 'http://user/fake-image'
    };
    beforeEach(() => {
        UserDetailsComponent = shallow(<UserDetails data={authorDetails} />);
    });

    it('should show the correct name', () => {
        const nameDom = UserDetailsComponent.find('[data-selector="user-details__name"]');
        expect(nameDom.text()).toBe(authorDetails.name);
    });

    describe('image component', () => {
        let imgDom;
        beforeEach(() => {
            imgDom = UserDetailsComponent.find('.user-details__photo');
        });
        it('should have alt set to author name', () => {
            expect(imgDom.props().alt).toBe(authorDetails.name);
        });
        it('should have src set to author photo', () => {
            console.log(imgDom.props());
            expect(imgDom.props().src).toBe(authorDetails.photo);
        });
    });
});
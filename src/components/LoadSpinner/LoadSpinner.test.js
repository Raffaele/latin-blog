import React from 'react';
import LoadSpinner from './LoadSpinner';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('LoadSpinner component', () => {
    let LoadSpinnerComponent;

    describe('on wait props is true', () => {
        beforeEach(() => {
            LoadSpinnerComponent = shallow(<LoadSpinner wait={true}>
                <div className="my-content">My content</div>
            </LoadSpinner>);
        });

        it('should show the spinner', () => {
            expect(LoadSpinnerComponent.find('Spinner').length).toBe(1);
        });
        it('should not show the children', () => {
            expect(LoadSpinnerComponent.find('div.my-content').length).toBe(0);
        });
    });

    describe('on wait props is false', () => {
        beforeEach(() => {
            LoadSpinnerComponent = shallow(<LoadSpinner wait={false}>
                <div className="my-content">My content</div>
            </LoadSpinner>);
        });

        it('should show the spinner', () => {
            expect(LoadSpinnerComponent.find('Spinner').length).toBe(0);
        });
        it('should not show the children', () => {
            expect(LoadSpinnerComponent.find('div.my-content').length).toBe(1);
        });
    });
});

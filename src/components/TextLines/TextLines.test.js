import React from 'react';
import TextLines from './TextLines';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('TextLines component', () => {
    let TextLinesComponent;
    const textLines = [
        'hello',
        'world',
        'again',
        'and again',
        'and again'
    ];
    const zipText = textLines.join('\n');
    beforeEach(() => {
        TextLinesComponent = shallow(<TextLines text={zipText} />);
    });

    it('should show the correct text in the lines', () => {
        TextLinesComponent
            .find('.text-lines__line')
            .forEach((textLineComp, compIndex) => {
                expect(textLineComp.text()).toBe(textLines[compIndex]);
            });
    });
});
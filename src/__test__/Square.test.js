import React from 'react'
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Square from '../componets/square';

describe("Test <Square />",()=>{

    const square = shallow(<Square />);

    test("Render Square",()=>{
        expect(square.length).toEqual(1);
        expect(square.find('.Square').exists()).toBe(true);
    });

    test("Player action",()=>{
        let xCircle = "X";
        const wrapper = shallow(<Square type={xCircle} />);
        expect(wrapper.find('.xCircle').text()).toBe("X");
    });

});



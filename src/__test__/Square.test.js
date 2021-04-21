import React from 'react'
import { shallow } from 'enzyme';

import Square from '../componets/square';

describe("Test <Square />",()=>{

    const square = shallow(<Square />);
    test("Render Square",()=>{
        expect(square.length).toEqual(1);
        expect(square.find('.Square').exists()).toBe(true);
    });

});



import React from 'react';
import { shallow } from 'enzyme';

import Register from '../componets/register';

describe('Test <Register />',()=>{
    const register = shallow(<Register />);

    test('Render Register',()=>{
        expect(register.length).toEqual(1);
    });

    test('Render Register UI',()=>{
        expect(register.find('.register_header').exists()).toBe(true);
        expect(register.find('.register_data').exists()).toBe(true);
    })

});

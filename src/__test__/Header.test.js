import React from "react";
import { shallow } from 'enzyme';

import Header from '../componets/header';

describe("Test <Header />",()=>{

    const header = shallow(<Header />);

    test("Render Header",()=>{
        expect(header.length).toEqual(1);
    });

});
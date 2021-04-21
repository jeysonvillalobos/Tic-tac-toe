import React from "react";
import { shallow } from 'enzyme';
import App from '../App';

describe("Test <App />",()=>{

    const app = shallow(<App />);

    test("Render App",()=>{
        expect(app.length).toEqual(1);
    });

    test("Render App UI",()=>{
        expect(app.find('.App').exists()).toBe(true);
        expect(app.find('.register').exists()).toBe(true);
        expect(app.find('.game').exists()).toBe(true);
    });

    
});





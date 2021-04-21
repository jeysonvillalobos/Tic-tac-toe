import React from "react";
import { shallow } from 'enzyme';
import App from '../App';
import Register from "../componets/register";
import Winner from '../utils/winner';

describe("Test <App />",()=>{

    const app = shallow(<App />);

    test("Render App",()=>{
        expect(app.length).toEqual(1);
    });

    test("Render App UI",()=>{
        expect(app.find('.App').exists()).toBe(true);
        expect(app.containsMatchingElement(<Register />)).toEqual(true);
        expect(app.find('.game').exists()).toBe(true);
    });

    test("Player turn", ()=>{
        expect(app.find(".type").text()).toBe("X");
    });

    test("Winner",()=>{
        const gameState = ["X", "X", "X", "O", "O", "", "", "", ""];
        expect(Winner(gameState)).toBe("X");
    });

});





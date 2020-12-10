import React from "react";
import { shallow } from "enzyme";

import App from "./App";
import PersonList from "./components/PersonList";

describe("App", () => {
    var appWrapper;
    beforeEach(() => {
        appWrapper = shallow(<App />);
    });

    it("renders a PersonList", () => {
        const personList = appWrapper.find(PersonList);
        expect(personList).toHaveLength(1);
    });

    it("has state", () => {
        const appState = appWrapper.state();
        expect(appState).not.toBeNull();
    });

    it("has people property on state", () => {
        const appState = appWrapper.state();
        expect(appState.people).not.toBeUndefined();
    });

    it("people property on state is an array", () => {
        const appState = appWrapper.state();
        expect(Array.isArray(appState.people)).toBeTruthy();
    });

    it("passes the people property of state to PersonList", () => {
        const appState = appWrapper.state();
        const personList = appWrapper.find(PersonList);
        expect(personList.props().people).toEqual(appState.people);
    });
});

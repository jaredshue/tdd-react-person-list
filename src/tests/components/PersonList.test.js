import React from "react";
import { shallow } from "enzyme";

import PersonList from "../../components/PersonList";

describe("PersonList", () => {
    it("should render", () => {
        const wrapper = shallow(<PersonList />);
    });

    it("should render a <ul> with n <li>'s for the number of people", () => {
        const wrapper = shallow(<PersonList people={ [ "Brandon", "Jeff" ] } />);
        const unorderedList = wrapper.find("ul");
        const peopleList = unorderedList.children().find("li");
        expect(peopleList).toHaveLength(2);
    });

    it("should render a <p> stating \"There are no people to list\" if the people property contains no people", () => {
        const wrapper = shallow(<PersonList people={ [] } />);
        const statement = wrapper.find("p");
        expect(statement.text()).toEqual("There are no people to list");
    });
});

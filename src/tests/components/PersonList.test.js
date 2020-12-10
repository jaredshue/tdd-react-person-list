import React from "react";
import { shallow } from "enzyme";

import PersonList from "../../components/PersonList";

describe("PersonList", () => {
    it("renders", () => {
        shallow(<PersonList />);
    });
});

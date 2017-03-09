import React from "react"
import { mount } from "enzyme"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from "react-tap-event-plugin";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import chai, { expect } from "chai";
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import Todo from "../../../src/components/todo"

function setup(description, completed) {
    const props = {
        onClick: () => { },
        description,
        completed
    };

    const enzymeWrapper = mount(
        <MuiThemeProvider>
            <Todo {...props} />
        </MuiThemeProvider>
    );

    return {
        props,
        enzymeWrapper
    };
}

describe("Todo", () => {
    it("should render an incomplete todo without line-through", () => {
        const { enzymeWrapper } = setup("foo", false);
        expect(enzymeWrapper.find(".TodoTitle")).to.not.have.style("textDecoration", "line-through");
    });

    it("should render a complete todo with line-through", () => {
        const { enzymeWrapper } = setup("foo", true);
        expect(enzymeWrapper.find(".TodoTitle")).to.have.style("textDecoration", "line-through");
    });
});

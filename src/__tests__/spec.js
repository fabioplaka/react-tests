import React from "react";
import { shallow } from "enzyme";
import Header from "../components/header/index";
import { findByTestAtrr } from "../../Utils/index";

const setup = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it("Should render without errors", () => {
    const component = setup();
    const wrapper = findByTestAtrr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("Should render a logo", () => {
    const component = setup();
    const logo = findByTestAtrr(component, "logoIMG");
    expect(logo.length).toBe(1);
  });
});

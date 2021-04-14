import React from "react";
import { shallow } from "enzyme";
import Headline from "../headline/index";
import { findByTestAtrr } from "../../../Utils/index";

const setup = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc",
      };
      wrapper = setup(props);
    });

    it("Headline should render without errors", () => {
      const component = findByTestAtrr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });

    it("Should render a H1", () => {
      const h1 = findByTestAtrr(wrapper, "header");
      expect(h1.length).toBe(1);
    });

    it("Should render a description", () => {
      const description = findByTestAtrr(wrapper, "descWrapper");
      expect(description.length).toBe(1);
    });
  });

  describe("Have no props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup();
    });
    it("Should NOT render", () => {
      const component = findByTestAtrr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(0);
    });
  });
});

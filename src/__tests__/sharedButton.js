import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../Utils/index";
import SharedButton from "../components/button/index";

describe("Shared Button component", () => {
  describe("Checking prop types", () => {
    it("Should not throw warning", () => {
      const expectedProps = {
        buttonText: "Example button text",
        emitEvent: () => {},
      };
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: "Example button text",
        emitEvent: () => {},
      };
      wrapper = shallow(<SharedButton {...props} />);
    });
    it("Should render a button", () => {
      const button = findByTestAtrr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });
  });
});

import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../Utils/index";
import ListItem from "../components/listItem/index";

describe("List Item component", () => {
  describe("Checking prop types", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        title: "Example title",
        description: "Example description",
      };

      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("List Item render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Example title",
        description: "Example description",
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("Should renders without errors", () => {
      const component = findByTestAtrr(wrapper, "listItemComponent");
      expect(component.length).toBe(1);
    });

    it("Should render a title", () => {
      const title = findByTestAtrr(wrapper, "componentTitle");
      expect(title.length).toBe(1);
    });

    it("Should render a description", () => {
      const description = findByTestAtrr(wrapper, "componentDescription");
      expect(description.length).toBe(1);
    });
  });

  describe("Should not render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        description: "Example description",
      };
      wrapper = shallow(<ListItem {...props} />);
    });
    it("Component is not rendered", () => {
      const component = findByTestAtrr(wrapper, "listItemComponent");
      expect(component.length).toBe(0);
    });
  });
});

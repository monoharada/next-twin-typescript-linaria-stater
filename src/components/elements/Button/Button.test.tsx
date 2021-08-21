import React from "react";
import renderer from "react-test-renderer";
import { Button } from "./";
// ______________________________________________________
//
describe("elements/Button", () => {
  it("Snap Shot", () => {
    const component = renderer.create(<Button />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
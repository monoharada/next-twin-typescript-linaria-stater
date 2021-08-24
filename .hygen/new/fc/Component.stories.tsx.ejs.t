---
to: src/stories/<%= component_name %>.stories.tsx
---
import React from "react";
import { storiesOf } from "@storybook/react";
import { <%= component_name %> } from "@/<%= category %>/index";
// ______________________________________________________
//
storiesOf("<%= path %>", module)
  .add("default", () => <<%= component_name %> />);

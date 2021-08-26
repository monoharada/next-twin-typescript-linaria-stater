---
to: <%= abs_path %>/index.tsx
---
<% if(category != 'compositions' ) { -%>
<% if (have_style) { -%>
import { css } from "linaria";
import tw, { styled, theme } from 'twin.macro';
<% } -%>
<% } -%>
<% if (have_hooks) { -%>
import { useDependencies } from './dependencies'
<% } -%>
<% if (have_props) { -%>
// ______________________________________________________
//
export type Props = {
};
<% } -%>
// ______________________________________________________
//
<% if (have_style) { -%>
<%= styles %>
// ______________________________________________________
//
<% } -%>

export const <%= component_name %>: <%- type_annotate %> = <%= props %> => {
<% if (have_hooks) { -%>
  const deps = useDependencies<%= props %>
<% } -%>
  return (
    <<%= tag %>>
    </<%= tag %>>
  );
}

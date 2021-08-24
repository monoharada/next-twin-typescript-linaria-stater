---
to: <%= abs_path %>/<%= component_name %>.tsx
---
<% if(category != 'compositions' ) { -%>
import { css } from "linaria";
import tw, { styled, theme } from 'twin.macro';
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
export const <%= component_name %>: <%- type_annotate %> = <%= props %> => {
<% if (have_hooks) { -%>
  const deps = useDependencies<%= props %>
<% } -%>
  return (
    <<%= tag %>>
    </<%= tag %>>
  );
}

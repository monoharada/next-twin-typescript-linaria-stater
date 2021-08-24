---
inject: true
to: <%= parent_path %>index.ts
append: true
---

export {  <%= component_name %> } from './<%= component_name %>/<%= component_name %>'

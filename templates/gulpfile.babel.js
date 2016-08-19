// generated using <%= name %> <%= version %>
import './task/dev';
<% if (!includeAngular) { -%>
import './task/test';
<% } -%>
import './task/prod';
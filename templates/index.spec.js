const context = require.context('./components/app', true, /\.(js|ts|tsx)$/);
context.keys().forEach(context);
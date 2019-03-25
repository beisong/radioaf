Router.configure({
    // we use the  ApplicationLayout template to define the layout for the entire app
    layoutTemplate: 'ApplicationLayout',
});


Router.route('home', {
    path: '/',
    yieldTemplates: {
        // 'hello': {to: 'body'}
        'sg933': {to: 'body'}
    }
});

Router.route('sg933', {
    path: '/sg933',

    yieldTemplates: {
        'sg933': {to: 'body'}
    }
});

Router.route('sg95', {
    path: '/sg95',

    yieldTemplates: {
        'sg95': {to: 'body'}
    }
});


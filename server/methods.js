Meteor.methods({
    sendEmail: function (to, from, subject, html) {
        this.unblock();
        Email.send({
            to: to,
            from: from,
            subject: subject,
            html: html
        });
    },
    setRole: function (role) {
        this.unblock();
        Roles.addUsersToRoles(this.userId, role);

    },
    unsetRole: function (role) {
        this.unblock();
        Roles.removeUsersFromRoles(this.userId, role);

    },

});
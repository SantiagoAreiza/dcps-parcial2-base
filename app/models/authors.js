import DS from 'ember-data';

export default DS.Model.extend({
    firtsName: DS.attr('string'),
    lastName: DS.attr('string'),
    userName: DS.attr('string'),
    email: DS.attr('string'),
    profilePicture: DS.attr('image'),
});

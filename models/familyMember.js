var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var FamilyMemberSchema = new Schema({
	name: String,
	spouse: Number,
	parents: Object,
	role: Object
});

module.exports = mongoose.model( 'FamilyMember', FamilyMemberSchema );
module.exports = function(len) {
	len = len || 14;
	var uid = (Math.random().toString().replace('.', '') * new Date().getTime()).toString(36).substring(0, len);
	return uid;
}
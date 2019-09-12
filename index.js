module.exports.handler = async (event) => {
	console.log('I was called from SNS, here is the event:', JSON.stringify(event, undefined, 2));
};
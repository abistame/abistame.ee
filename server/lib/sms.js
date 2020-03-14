const twilio = require('twilio');

const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const transfromPhoneNumber = phoneNumber => phoneNumber.substr(0, 3) === '372' ? `+${phoneNumber}` : `+372${phoneNumber}`

const sendAuthMessage = async (phoneNumber) => {
	let success = false;
	const authCode = Math.round(Math.random() * (50000 - 10000) + 10000);
	try {
		const message = await client.messages.create({
			body: `Teie kinnituskood on ${authCode}`,
			to: transfromPhoneNumber(phoneNumber),
			from: process.env.TWILIO_PHONE_NUMBER
		});
		console.log(message)
		//@tTODO save authCode to user to compare after?
		success = true;

	} catch (error) {
		console.log('SMS send error', error)
	}

	return success;
}

module.exports = sendAuthMessage;
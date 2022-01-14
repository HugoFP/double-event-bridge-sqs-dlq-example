const AWS = require("aws-sdk");

AWS.config.region = process.env.AWS_REGION;
const eventbridge = new AWS.EventBridge();

const EVENT_SOURCE = "double-event-bridge-sqs-cancel";
const DETAIL_TYPE = "cancel-order";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

exports.handler = async (event, context) => {
  try {
    const myNumber = getRandomInt(10);

    const params = {
      Entries: [
        {
          Detail: JSON.stringify({
            message: "Hello from publisher",
            value: myNumber,
          }),
          DetailType: DETAIL_TYPE,
          //   EventBusName: "default",
          Source: EVENT_SOURCE,
          Time: new Date(),
        },
      ],
    };
    // Publish to EventBridge
    const result = await eventbridge.putEvents(params).promise();
    console.log(result);
    return myNumber;
  } catch (error) {
    console.error(JSON.stringify(error));
    throw error;
  }
};

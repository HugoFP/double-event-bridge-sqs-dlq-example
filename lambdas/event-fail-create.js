const AWS = require("aws-sdk");

exports.handler = async (event, context) => {
  console.log("Event received", JSON.stringify(event));

  for await (const record of event.Records) {
    const eventBridgeEvent = JSON.parse(record.body);
    if (eventBridgeEvent.detail.value % 2 === 0) {
      throw Error(`Fail because value: ${eventBridgeEvent.detail.value}`);
    } else {
      console.log(`Success for value: ${eventBridgeEvent.detail.value}`);
    }
  }
};

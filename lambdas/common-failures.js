const AWS = require("aws-sdk");

exports.handler = async (event, context) => {
  console.log("Event received", JSON.stringify(event));
};

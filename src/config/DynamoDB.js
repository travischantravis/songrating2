import * as myAWS from "aws-sdk";

// not ~/.aws/credentials [default]
// user: amplify-us-east-2
// access key created in Aug 22
myAWS.config.update({
  region: "us-east-2",
  endpoint: "dynamodb.us-east-2.amazonaws.com",
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
});

export default myAWS;

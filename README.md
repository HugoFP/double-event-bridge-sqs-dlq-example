# double-event-bridge-sqs-dlq-example

AWS Cloudformation project to implement:

- Lambda sending an event to EventBridge
- Event bridge sending messages to queue
- SQS Configurations
- Dead-letter queue
- Lambda triggered on message received on dead-letter queue
- Lambda triggering by 2 different queues

## References

https://serverlessland.com/patterns/lambda-eventbridge
https://github.com/aws-samples/amazon-eventbridge-partnerevent-example/blob/main/samtemplate.yaml
https://aws.amazon.com/es/blogs/compute/integrating-amazon-eventbridge-into-your-serverless-applications/
https://serverlessland.com/patterns/dynamodb-lambda-eventbridge

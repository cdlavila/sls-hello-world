## Basic serverless REST API

This is a basic Serverless REST API build using [Serverless Framework](https://serverless.com/) and [AWS Lambda](https://aws.amazon.com/lambda/).
We have a single endpoint that returns a hello world message.

- `GET /hello`

### Installation
1. Go to the **hello-world** directory: `cd hello-world`
2. Install dependencies: `npm install`

### Local development
1. Run the project locally: `serverless offline start`
2. Test the endpoint by calling the URL that appears in the terminal output. It should look like this: `http://localhost:3000/dev/hello`
3. Additionally, you can also invoke the function directly: `serverless invoke local --function hello`

### Deployment
1. Configure your AWS credentials if you haven't done it yet: `serverless config credentials --provider aws --key YOUR_ACCESS_KEY --secret YOUR_SECRET_KEY`
2. Deploy the project: `serverless deploy`
3. Test the endpoint by calling the URL that appears in the terminal output. It should look like this: `https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/hello`
4. Additionally, you can also invoke the function directly: `serverless invoke --function hello`
5. To remove the project from AWS, run: `serverless remove`


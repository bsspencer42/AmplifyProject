## AWS Amplify Next.js (Pages) Starter Template

This repository provides a starter template for creating applications using Next.js (Pages) and AWS Amplify, emphasizing easy setup for authentication, API, and database capabilities.

## Overview

This template equips you with a foundational Next.js application integrated with AWS Amplify, streamlined for scalability and performance. It is ideal for developers looking to jumpstart their project with pre-configured AWS services like Cognito, AppSync, and DynamoDB.

## Features

- **Authentication**: Setup with Amazon Cognito for secure user authentication.
- **API**: Ready-to-use GraphQL endpoint with AWS AppSync.
- **Database**: Real-time database powered by Amazon DynamoDB.

## Deploying to AWS

For detailed instructions on deploying your application, refer to the [deployment section](https://docs.amplify.aws/nextjs/start/quickstart/nextjs-pages-router/#deploy-a-fullstack-app-to-aws) of our documentation.

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.

## Prerequisites

1. NodeJS 18.17.0 or greater
 * Utilize [nvm](https://flatirons.com/blog/how-to-set-a-default-node-version-with-nvm/) to manage NodeJS versions.

## Setup

1. Install npm packages

```
npm install
```

## Run local server

1. Install node packages
```
npm install
```

2. Ensure local AWS credentials are set to IAM credentials with access to the AWS account where resources are hosted
```
aws configure
```

2. [Setup local Amplify sandbox](https://docs.amplify.aws/react/deploy-and-host/sandbox-environments/setup/)
```
npx ampx sandbox
```

4. Start server
```
npm run dev
```
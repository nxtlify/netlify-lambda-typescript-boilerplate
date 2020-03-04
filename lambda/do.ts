import { Handler, Context, Callback, APIGatewayEvent } from 'aws-lambda';

export const handler: Handler = (event: APIGatewayEvent, context: Context, callback: Callback) => {
    const params = event.queryStringParameters;
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            msg: `Hello world ${Math.floor(Math.random() * 10)}`,
            params,
        }),
    };
    callback(undefined, response);
};

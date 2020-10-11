import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

export async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
    return {
        body: 'Hello from <b>another</b> Lambda Function',
        statusCode: 200,
    };
}
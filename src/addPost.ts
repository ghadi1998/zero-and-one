import { format } from "util";
import type {
  Context,
  APIGatewayEvent,
  APIGatewayProxyResult,
} from "aws-lambda";


export async function addPost(
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> {
  const headers = {
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "https://lereum.com",
    "Access-Control-Allow-Methods": "OPTIONS,POST",
  };
  try {

    return {
      statusCode: 204,
      body: "Email sent",
      headers,
    };
  } catch (error: any) {
    console.error("An exception was thrown!");
    console.error(error.message);
    console.error(error);

    return {
      statusCode: error.statusCode,
      body: JSON.stringify(error),
      headers,
    };
  }
}
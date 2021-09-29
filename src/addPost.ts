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
  } catch (err) {
    console.error("An exception was thrown!");
    console.error(e.message);
    console.error(e);
    const isValidationError = e.name === "ValidationError";
    return {
      statusCode: isValidationError ? 400 : 500,
      body: JSON.stringify({
        error: format(
          "Invalid Request. Reason: %s",
          isValidationError ? e.message : "0"
        ),
      }),
      headers,
    };
  }
}
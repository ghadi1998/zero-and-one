import * as sst from "@serverless-stack/resources";

export default class MyStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    const table = new sst.Table(this, "posts", {
      fields: {
        postId: sst.TableFieldType.STRING,
        postOwner: sst.TableFieldType.STRING,
        postData: sst.TableFieldType.STRING,
      },
      primaryIndex: { partitionKey: "postId" },
    });


    // Create the HTTP API
    const api = new sst.Api(this, "Api", {
      defaultFunctionProps: {
        // Pass in the table name to our API
        environment: {
          tableName: table.dynamodbTable.tableName,
        },
      },
      routes: {
        "POST /": "src/addPost.main",
      },
    });

    // Allow the API to access the table
    api.attachPermissions([table]);


    // Show the endpoint in the output
    this.addOutputs({
      "ApiEndpoint": api.url,
    });
  }
}

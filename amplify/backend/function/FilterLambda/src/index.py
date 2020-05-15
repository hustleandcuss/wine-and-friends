import boto3
def handler(event, context):
  client = boto3.client('dynamodb')
  print('received event:')
  print(event)
  return {
    "tables":str(client.list_tables())
  }
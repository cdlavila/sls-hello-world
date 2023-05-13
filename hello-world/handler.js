const hello = async (event, context) => {
    return {
        "statusCode": 200,
        "body": JSON.stringify({ 'message': 'Hello world - welcome to the AWS serverless framework course '})
    }
}

module.exports = {
    hello
}

var PROTO_PATH = __dirname + '/../protos/helloworld.proto';

var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  });
var hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;

function main() {
  var client = new hello_proto.Greeter('localhost:50051', grpc.credentials.createInsecure());
  let md = new grpc.Metadata();
  md.add("js_client_md_1", "c1");
  md.add("js_client_md_2", "c2");
  client.sayHello({name: 'world'}, md, function (err, response) {
    console.log('Greeting:', response);
  });
}

main();

/**
 * Created by betty on 12/26/18.
 */
"use strict";

const { readdirSync } = require('fs');
const { join } = require('path');

let config = {
  "microservice": {
    //     "search": "127.0.0.1:50051",
    "device": "192.168.100.221:32023",
    "collect": "192.168.100.221:31335",
    //        "product": "127.0.0.1:50051",
    "product": "192.168.100.221:30533",
    "notify": "192.168.100.221:32105",
    "stock": "192.168.100.221:30361",
    "resource": "192.168.100.221:32286",
    "aliviaCg": "192.168.100.180:21000",
    //        "account": "127.0.0.1:50051",
    "account": "192.168.100.221:31989",
    "search": "192.168.100.221:32510",
    "market": "192.168.100.221:31733",
    "comment": "192.168.100.221:30144",
    "strategy": "192.168.100.221:30727",
    //    "collect": "192.168.100.221:31335",
    "tag": "192.168.100.221:30668",
    //    "tag": "localhost:50051",
    // "hub": "127.0.0.1:50051",
    "hub": "192.168.100.221:30233",
    "group": "192.168.100.221:32061",
    "canvas": "192.168.100.221:32179",
    "authority": "192.168.100.221:32039",
    "unique": "192.168.100.221:31976",
    "consumer": "192.168.100.221:32032"
  }
};

const genderGrpcOptions = () => {
  const grpcOptions = {};
  let protoDirnames = [ '.git',
    '.gitignore',
    'account',
    'alivia',
    'canvas',
    'collect',
    'comment',
    'consumer',
    'coupon',
    'device',
    'group',
    'hub',
    'monitor',
    'notify',
    'product',
    'profile-local.svg',
    'resource',
    'search',
    'spider',
    'stock',
    'strategy',
    'suggest',
    'tag',
    'unique',
    'whale-authority',
    'whale-market' ];
  protoDirnames = protoDirnames.filter(item => !/(\.)|(\.svg)/.test(item));
  protoDirnames.map((dirname) => {
    const specialPaths = ['whale-authority', 'whale-market'];
    const specialFiles = [ 'coupon', 'monitor', 'notify', 'suggest', 'market'];
    const name = specialPaths.includes(dirname) ? dirname.split('-')[1] : dirname;
    const fileName = specialFiles.includes(name) ? 'whale-'.concat(name) : name;
    const optionName = (name.charAt(0).toUpperCase() + name.slice(1)).concat('ClientOptions');
    grpcOptions[`${optionName}`] = {
      transport: 'grpc',
      options: {
        url: config.microservice[name],
        package: `whale.${name}.proto`,
        protoPath: join(__dirname, `../../proto/${dirname}/${fileName}.proto`),
        loader: {
          keepCase: true,
          enums: String,
          longs: String,
        },
      },
    };
  });
  return grpcOptions;
};

console.log(genderGrpcOptions());

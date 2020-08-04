/**
 * Created by betty on 12/28/18.
 */
"use strict";

// input
let errors =
  [
    {
      "property": "barcode",
      "children": [],
      "constraints": {
        "isNotEmpty": "请输入barcode",
        "maxLength": "必须小于255位",
        "isString": "请输入合法的barcode"
      }
    },
    {
      "property": "info",
      "children": [
        {
          "property": "name",
          "constraints": {
            "isString": "请输入正确的name"
          },
          "children": []
        }
      ]
    },
    {
      "property": "attributes",
      "children": [
        {
          "property": "1",
          "children": [
            {
              "property": "value",
              "children": [],
              "constraints": {
                "isString": "请输入正确的value"
              }
            }
          ]
        },
        {
          "property": "2",
          "children": [
            {
              "property": "value",
              "children": [],
              "constraints": {
                "isString": "请输入正确的value"
              }
            }
          ]
        }
      ]
    }
  ];

// output
let detail = {
  "barcode": {
    "isNotEmpty": "请输入barcode",
    "maxLength": "必须小于255位",
    "isString": "请输入合法的barcode"
  },
  "info.name": {
    "isString": "请输入正确的name"
  },
  "attributes.1.value": {
    "isString": "请输入正确的value"
  }
};


function findConstraints(obj, path) {
  if (!obj) {
    return {}
  }

  if (path) {
    path = path + '.'
  } else {
    path = ''
  }
  path = path + obj['property'];
  if (obj['constraints']) {
    return {[path]: obj['constraints']};
  } else if (obj['children'] && obj['children'].length) {
    return findConstraints(obj['children'][0], path)
  }
}


let result = errors.reduce((accu, error) => {
  return Object.assign(accu, findConstraints(error))
}, {});
console.log('result: ' + JSON.stringify(result, null, 4) + '\n')
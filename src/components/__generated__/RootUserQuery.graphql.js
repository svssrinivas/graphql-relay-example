/**
 * @flow
 * @relayHash e6cf0886301864578b46a5880fa1954c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RootUserQueryVariables = {||};
export type RootUserQueryResponse = {|
  +user: ?{|
    +name: ?string,
    +login: string,
  |}
|};
export type RootUserQuery = {|
  variables: RootUserQueryVariables,
  response: RootUserQueryResponse,
|};
*/


/*
query RootUserQuery {
  user(login: "svssrinivas") {
    name
    login
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "login",
    "value": "svssrinivas",
    "type": "String!"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "login",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "RootUserQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": "user(login:\"svssrinivas\")",
        "args": (v0/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RootUserQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": "user(login:\"svssrinivas\")",
        "args": (v0/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "RootUserQuery",
    "id": null,
    "text": "query RootUserQuery {\n  user(login: \"svssrinivas\") {\n    name\n    login\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1cd281d3501e0f951688fb350b7e9df8';
module.exports = node;

import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

async function fetchQuery(
  operation,
  variables,
) {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      // Authorization: bearer token
      'Authorization': 'bearer 453b79dd6fc2380b6174c4412182a0c3b2191154'
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });
  return response.json();
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;
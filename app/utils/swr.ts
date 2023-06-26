export async function sendRequest(url: string, { arg }: { arg: string }) {
  return fetch(url, {
    headers: {
      'Content-Type': 'plain/text',
      'Access-Control-Allow-Origin': '*',
    },
    method: 'POST',
    body: arg,
  }).then((res) => res.json());
}

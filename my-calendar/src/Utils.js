const API_BASE = "https://localhost:7233/api/";

export async function request(url) {
  let response = await fetch(API_BASE + url, {
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  if (response.ok) {
    return await response.json();
  } else return null;
}

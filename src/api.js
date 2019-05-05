

export function getWikiByName(offset) {
   return fetch(`https://www.ifixit.com/api/2.0/wikis/CATEGORY?display=titles&limit=10000&offset=${offset}`)
   .then(rsp => rsp.json());
}

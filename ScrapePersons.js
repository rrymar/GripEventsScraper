// Visitor List Url with our page number
const visitorListUrl = 'https://api-prod.grip.events/1/container/5389/search?search=&sort=name&order=asc&type_id=1866,1933,1949,1884&page=';
const token ='your token - can be obtain in network tab';

const maxPage = 200;
let results = new Array();

let page = 1;
while(true){
    
    const response = await fetch(visitorListUrl + page, {
        headers: {
            "x-authorization": token
        }
    });

    console.log(`Page: ${page} loaded`);

    const json = await response.json();

    if (json.success)
        results = results.concat(json.data);

    if(!json.success || json.data.length == 0 || page > maxPage)
        break;
    
    page++;
} 

console.log(results.length);

 for (const index in results) {
     const item = results[index];
     console.log(`${item.name} -- ${item.job_title} in ${item.company_name} (${item.location})`);
 }


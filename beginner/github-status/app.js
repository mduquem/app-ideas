import { request } from 'request';

request('https://www.githubstatus.com/')
   .then(res => console.log(res.body))
   .catch(err => console.log(err));

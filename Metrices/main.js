import http from 'k6/http';
import { check } from 'k6';

export default function () {
  let res = http.get('https://knoldus.keka.com');
  console.log(res.status)
  check(res, {
    'is status 200': (r) => r.status === 200,    
  });
}

import http from 'k6/http';
import { Trend } from 'k6/metrics';
import { check } from 'k6';

const myTrend = new Trend('waiting_time');
export default function () {

    let res = http.get('https://knoldus.keka.com');
    console.log(res.status)
    check(res, {
      'is status 200': (r) => r.status === 200,    
    });
  myTrend.add(res.timings.waiting);
  console.log(myTrend.name); // waiting_time
}
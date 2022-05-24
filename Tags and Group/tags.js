import http from "k6/http";
import { Trend } from "k6/metrics";
import { check } from "k6";

const my_Trend_type = new Trend("trend_metrices");

  // Add tag to thresholds
export let options = {
  thresholds: {
    "http_req_duration": ["p(90)<1000"]
   },
  stages: [
      { duration: '2s', target: 20 }, // simulate ramp-up of traffic from 1 to 20 users over 2 seconds.
      { duration: '5s', target: 20 }, // stay at 20 users for 5 seconds.
      { duration: '2s', target: 0 }, // ramp-down to 0 users.
  ],
  tags: { my_other_tag: "I'm different tag" },
}; 


export default function () {

  // Add tag to request metric data

  const res = http.get("http://httpbin.org/", {

    tags: {

      my_tag: "I'm a tag",

    },

  });

  // Add tag to check

  check(res, { 'status is 200': (r) => r.status === 200 }, { my_tag: "I'm a tag" });

  // Add tag to custom metric

  my_Trend_type.add(res.timings.connecting, { my_tag: "I'm a tag"});

}
import { Counter } from "k6/metrics";
import http from "k6/http";

var ErrorCounter = new Counter("Error_Counter_metrics");

export default function() {
  let res = http.get("https://translate.google.com/404");
  if(res.status === 404) {
    ErrorCounter.add(1)
  }
};
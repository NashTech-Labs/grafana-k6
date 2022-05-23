import { Rate } from "k6/metrics";
import http from "k6/http";

var track_Rate = new Rate("rate_metrics(track_rate)");

export default function() {
  let res = http.get("https://translate.google.com/404");
  track_Rate.add(res.error_code);
};
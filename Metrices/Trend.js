import { Trend } from "k6/metrics";
import http from "k6/http";

var first_Trend = new Trend("Trend_metrices(calculate_value)");

export default function() {
  let res = http.get("https://translate.google.com/404");
  first_Trend.add(res.timings.sending + res.timings.receiving);
};
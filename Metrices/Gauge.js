import { Gauge } from "k6/metrics";
import http from "k6/http";

var realGauge = new Gauge("gauge_metrics(recent_changes)");

export default function() {
  let res = http.get("https://translate.google.com/404");
  realGauge.add(res.status);
};
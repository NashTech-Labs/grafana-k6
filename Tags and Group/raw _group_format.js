import { group } from 'k6';
import http from 'k6/http';


export default function () {

  group("visit product website home page", function () {

    // …

  });

  group("visit login page", function () {

    // …

  });

  group("authenticate", function () {

    // …

  });

  group("add product", function () {

    // …

  });

}
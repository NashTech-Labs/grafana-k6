import { check } from 'k6';
import http from 'k6/http';


export default function () {
    let responses = http.batch([
        ['GET', 'https://test.k6.io'],
        ['GET', "https://reqres.in/api/users?page=2"],
        ['GET', "https://jsonplaceholder.typicode.com/"],
        ['GET', "https://compendiumdev.co.uk/"],
        ['GET', 'https://test.k6.io/static/img/logo.png'],
    ])
    
  check(responses[0], {
    'Homepage successfully loaded': (r) => r.body.includes("Collection of simple web-pages suitable for load testing"),
    'main page status was 200': (res) => res.status === 200,
  });

  check(responses[2], {
    'bshaf': (r) => r.body.includes("Free fake API for testing and prototyping."),
    'main page status was 200': (res) => res.status === 200,
  });

  check(responses[3], {
    'efbhf': (r) => r.body.includes("This portfolio site lists our main products and available services."),
    'main page status was 200': (res) => res.status === 200,
  });
}
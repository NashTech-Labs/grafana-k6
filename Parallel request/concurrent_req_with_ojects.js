import http from 'k6/http';
import { check } from 'k6';

export default function () {
    const req1 = {
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/',
      };
    
      const req2 = {
        method: 'GET',
        url: 'https://test.k6.io',
      };

      const req3 = {
        method: 'POST',
        url: 'https://reqres.in/api/register',
    
        body: {
          "email": "eve.holt@reqres.in",
        "password": "pistol"
        },
    
        params: {
          headers: { 'User-Agent': 'k6test' },
          tags: { k6test: 'yes' }    
        },
  };
  const responses = http.batch([req1, req2, req3]);

  // we add checks to all response object to see their worked.
  check(responses[1], {
    'Homepage successfully loaded': (r) => r.body.includes("Collection of simple web-pages suitable for load testing"),
    'main page status was 200': (res) => res.status === 200,
  });
  
  check(responses[0], {
    'bshaf': (r) => r.body.includes("Free fake API for testing and prototyping."),
    'main page status was 200': (res) => res.status === 200,
  });

  check(responses[2], {
    'main page status was 200': (res) => res.status === 200,
  });
}
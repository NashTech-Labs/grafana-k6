import http from 'k6/http';
import { check } from 'k6';

export default function () {
  // Make a request that returns some JSON data
  const res = http.get('https://reqres.in/api/users?page=2');

  // Extract data from that JSON data by first parsing it
  // using a call to "json()" and then accessing properties by
  // navigating the JSON data as a JS object with dot notation.
  const ListUser0 = res.json().data[0];
  check(ListUser0, {
    'first_name in list is correct' : (s) => s.first_name === 'Michael',
    'last_name in list is correct': (s) => s.last_name === 'Lawson',
    'email in list is correct': (s) => s.email === 'michael.lawson@reqres.in'
  
  });
  

  // Now we could use the "slide1" variable in subsequent requests...
}
 
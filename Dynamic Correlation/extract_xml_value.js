import { findBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import { check } from 'k6';
import http from 'k6/http';

export default function () {
  // This request returns XML:
  const res = http.get('http://restapi.adequateshop.com/api/Traveler?page=6');

  // Use findBetween to extract the first title encountered:
  const name = findBetween(res.body, '<name>','</name>');
  const email= findBetween(res.body, '<email>','</email>');
 

  check(name, {
    'name is correct': (ast) => ast === 'Mayank Narayana',


  });
  check(email, {
    'email is correct': (ast) => ast === 'mayank-leo@hotmail.com',


  });
  console.log('The value of name field is:' + name);
  console.log('The value of name field is:' + email);

}

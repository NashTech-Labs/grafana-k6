import { group, check } from 'k6';
import http from 'k6/http';

export default function () {

// reconsider this type of code
group('first_group', function () {
  http.get(`https://reqres.in/api/login`);
});
group('second_group', function () {
  const res = http.get(`https://reqres.in/api/login`);
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
});

}
import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  // Request the page containing a form and save the response. This gives you access
  //to the response object, `res`.
  const res = http.get('https://www.mantissa.co.uk/main/IEForm/contact.php');

  // Query the HTML for an input field named "redir". We want the value or "redir"
  const element1 =res.html().find('input[name=Firstname]');
  const element2 = res.html().find('input[name=Email]');

  // Get the value of the attribute "value" and save it to a variable
  const val1 = element1.attr('size');
  const val2 = element2.attr('maxlength');


  // Now you can concatenate this extracted value in subsequent requests that require it.
  // ...
  // console.log() works when executing k6 scripts locally and is handy for debugging purposes
  console.log('The value of field size is: ' + val1);
  console.log('The value of name field is:' + val2);

  sleep(1);
}
 
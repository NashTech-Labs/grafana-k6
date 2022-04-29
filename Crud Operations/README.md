# Introduction
In this template, how to write a script in k6 with the help of CRUD operations.HTTP methods are also called HTTP verbs and CRUD operations because it is a set of requests which perform the desired actions like get, put, post, delete and so on.

CRUD stands for Create, Read, Update and Delete. These are four primitive database operations that map well to the HTTP verbs most frequently used in Rest Services.
#HTTP request in K6-
In this, http module contains functionality like put() , get(), post(), delete(), head() etc.
## Technologies:-
### Tool:- 
k6
### IDE:-
Visual Studio



# Use this template to following the steps-

#### Prerequisites:-

                  Install the K6 in your system- https://k6.io/docs/getting-started/installation/
                  Install any IDE- Visual Studio-https://dzone.com/articles/install-visual-studio-code-on-ubuntu-1804


#### Writing first Script in K6 with get method
### GET() – 
GET is used to request data from a specified resource. Get requests to remain in the browser history.
Create one javascript file with.js- http_get.js and import the k6/HTTP into the js file- import http from k6/http.

                    import http from 'k6/http';

                    export default function () {
                      let res='https://test.k6.io';
                    }


#### VUs(Virtual Users):-
A number of users execute as many iterations as possible for a specified amount of time. 

#### Sleep:- 
Sleep doesn’t impact the test duration. It will impact how quickly the Virtual users can complete iterations.

Run the file in the terminal- k6 run http_get.js(filename)

### POST():-
 POST is used to send data to a server to create a resource.Create one file with http_post.js
                                  import http from 'k6/http';

                                  export default function () {
                                    const url = 'http://test.k6.io/login';
                                    const payload = JSON.stringify({
                                      email: 'aaa',
                                      password: 'bbb',
                                    });

                                    const params = {
                                      headers: {
                                        'Content-Type': 'application/json',
                                      },
                                    };

                                    let res=http.post(url, payload, params);
                                  }


### PUT() – 
PUT is used to send data to a server to create/update a resource.Create one file with http_put.js


                                  import http from 'k6/http';

                                  const url = 'https://httpbin.test.k6.io/put';

                                  export default function () {
                                    const headers = { 'Content-Type': 'application/json' };
                                    const data = { name: 'Bert' };

                                  let res = http.put(url, JSON.stringify(data), { headers: headers });

                                    console.log(JSON.parse(res.body).json.name);
                                  }
### DELETE() – 
The DELETE method deletes the specified resource.Create one file with http_delete.js
                                    import http from 'k6/http';

                                    const url = 'https://httpbin.test.k6.io/delete';

                                    export default function () {
                                      const params = { headers: { 'X-MyHeader': 'k6test' } };
                                    let res=  http.del(url, null, params);
                                    }

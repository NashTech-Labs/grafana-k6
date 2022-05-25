# Introduction

In this template, how to write a script in k6 with the help different types of testing.
There are many types of testing which come under performance testing and each type of testing serves a different purpose. Different test types define and optimize the performance. There are many performance testings are-

## Technologies:-
#### Tool:-
k6

#### IDE:-
Visual Studio

Use this template to following the steps-
#### Prerequisites:-
              Install the K6 in your system- https://k6.io/docs/getting-started/installation/
              Install any IDE- Visual Studio-https://dzone.com/articles/install-visual-studio-code-on-ubuntu-1804
Writing first Script in K6 with get method
## Load Testing-
Load testing is testing where we check an application's performance by applying some load, which is either less than or equal to the desired load.
#### Example:-

Suppose, You are downloading a series of large files from the internet. In this case, it is called Load Testing.

                        export const options = {
                              stages: [
                                { duration: '5m', target: 100 }, // simulate ramp-up of traffic from 1 to 100 users over 5 minutes.
                                { duration: '10m', target: 100 }, // stay at 100 users for 10 minutes
                                { duration: '5m', target: 0 }, // ramp-down to 0 users
                              ],
                        thresholds: {
                          'http_req_duration': ['p(99)<1500'], // 99% of requests must complete below 1.5s
                          'logged in successfully': ['p(99)<1500'], // 99% of requests must complete below 1.5s
                        },
                      };

## Smoke Testing-
Smoke testing is configured with minimal load means it is a normal and regular test load. You want to run a smoke test as a sanity check every time you write a new script or modify an existing script.

#### Example:-
Verify that your system doesn’t throw any errors when under minimal load.
Write a script in K6 and save it as Smoke.js

                    export const options = {
                          vus: 1, // 1 user looping for 1 minute
                          duration: '1m',

                          thresholds: {
                            http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s
                          },
                        };
                        
                        
## Stress Testing-
The purpose of stress testing is to verify the stability and reliability of the system under extreme conditions. Stress testing involves running simulations to identify hidden vulnerabilities. Stress testing is testing how an application, software, or website performs when under extreme pressure—an unexpected load. 
   
   
#### Example:-
Stress testing is very much a requirement as on the day of some result, a huge number of users/applicants/students will login to the application to check their results.
Write a script in k6 and save it as Stress.js

                      export const options = {
                    stages: [
                      { duration: '2m', target: 100 }, // below normal load
                      { duration: '5m', target: 100 },
                      { duration: '2m', target: 200 }, // normal load
                      { duration: '5m', target: 200 },
                      { duration: '2m', target: 300 }, // around the breaking point
                      { duration: '5m', target: 300 },
                      { duration: '2m', target: 400 }, // beyond the breaking point
                      { duration: '5m', target: 400 },
                      { duration: '10m', target: 0 }, // scale down. Recovery stage.
                    ],
                  };
                  
 ## Soak Testing-
 The purpose of stress testing is to verify the stability and reliability of the system under extreme conditions. Stress testing involves running simulations to identify hidden vulnerabilities. Stress testing is testing how an application, software, or website performs when under extreme pressure—an unexpected load. 
 #### Example:-

Soak testing is ideal for websites or applications facing huge transaction rates, let’s say 1000 transactions in an hour. 

Write a script in k6 and save it as Soak.js

                          export const options = {
                                 stages: [
                                    { duration: '2m', target: 400 }, // ramp up to 400 users
                                     { duration: '3h56m', target: 400 }, // stay at 400 for ~4 hours
                                      { duration: '2m', target: 0 }, // scale down. (optional)
                                     ],
                                  };          


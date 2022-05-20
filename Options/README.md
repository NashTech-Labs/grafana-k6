
# Introduction
In this template, how to write a script in k6 with the help of Options. In K6, Options are like Vus, Stages,duration,tags etc.k6 works with the concept of virtual users (VUs), which run test scripts. VUs are essentially parallel while(true) loops. Scripts are written in JavaScript, as ES6 modules, which allows you to break larger tests into smaller pieces or make reusable pieces as you like.

## Technologies:-
### Tool:- 
k6
### IDE:-
Visual Studio



# Use this template to following the steps-

#### Prerequisites:-

                  Install the K6 in your system- https://k6.io/docs/getting-started/installation/
                  Install any IDE- Visual Studio-https://dzone.com/articles/install-visual-studio-code-on-ubuntu-1804


#### Writing first Script in K6 with Options

#### VUs(Virtual Users):-
A number of users execute as many iterations as possible for a specified amount of time. 

                                import http from 'k6/http';
                                export const options = {
                                  vus: 10,
                                 


                               
                                  
### Sleep:- 
Sleep doesn’t impact the test duration. It will impact how quickly the Virtual users can complete iterations.

                                            import { sleep } from 'k6';
                                            import http from 'k6/http';
                                            export default function () {
                                              http.get('https://k6.io');
                                              sleep(Math.random() * 30);
                                              http.get('https://k6.io/features');
                                            }

                                            

### Duration:-
A string specifying the total duration of the test run; together with the vus option, it's a shortcut for a single scenario with a constant VUs executor

                                  export const options = {
                                  hosts: { 'test.k6.io': '1.2.3.4' },
                                  stages: [
                                    { duration: '1m', target: 10 },
                                    { duration: '1m', target: 20 },
                                    { duration: '1m', target: 0 },
                                  ],

### Stages:-
A list of objects that specify the target number of VUs to ramp up or down; shortcut option for a single scenario with a ramping VUs executor.

                             import http from 'k6/http';
                             export const options = {
                             hosts: { 'test.k6.io': '1.2.3.4' },
                               stages: [
                                       { duration: '1m', target: 10 },
                                       { duration: '1m', target: 20 },
                                       { duration: '1m', target: 0 },
                                      ],
                                                                                                                                
                                                     
### Iteration:-
Each VU executes an exact number of iterations. The total number of completed iterations will be vus * iterations.

                                                import http from 'k6/http';
                                                import { sleep } from 'k6';
                                                export const options = {
                                                  vus: 10,
                                                  iterations: 200,
                                                };
                                                


### Tag:-
A load test usually targets a service with different subsystems and resources. This can make it hard to pinpoint the issues that are degrading performance.

                                          import http from 'k6/http';
                                          import { Trend } from 'k6/metrics';
                                          import { check } from 'k6';
                                          const myTrend = new Trend('my_trend');
                                          export default function () {
                                            // Add tag to request metric data
                                            const res = http.get('http://httpbin.test.k6.io/', {
                                              tags: {
                                                my_tag: "I'm a tag",
                                              },
                                            });

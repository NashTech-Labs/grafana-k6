# scenario
Scenarios allow us to make in-depth configurations to how VUs and iterations are scheduled.
Benefits of using scenarios include:
1.Multiple scenarios can be declared in the same script, and each one can independently execute a different JavaScript function, which makes organizing tests easier and more flexible.
2.Every scenario can use a distinct VU and iteration scheduling pattern, powered by a purpose-built executor. This enables modeling of advanced execution patterns which can better simulate real-world traffic.
3.Scenarios are independent from each other and run in parallel, though they can be made to appear sequential by setting the startTime property of each carefully.
5.Different environment variables and metric tags can be set per scenario.
# Configuration
Execution scenarios are primarily configured via the scenarios key of the exported options object in your test scripts. 
# Executors
Executors are the workhorses of the k6 execution engine.Executors are:-
# Shared iterations
This executor is suitable when you want a specific amount of VUs to complete a fixed number of total iterations, and the amount of iterations per VU is not important. 
A fixed number of iterations are "shared" between a number of VUs, and the test ends once all iterations are executed. This executor is equivalent to the global vus and iterations shortcut options.
# Per VU iterations
This executor is used if you need a specific amount of VUs to complete the same amount of iterations. This can be useful when you have fixed sets of test data that you want to partition between VUs.
Each VU executes an exact number of iterations. The total number of completed iterations will be vus * iterations.
# Constant VUs
This executor is used if you need a specific amount of VUs to run for a certain amount of time.
# Ramping VUs
This executor is a good fit if you need VUs to ramp up or down during specific periods of time.
# Constant arrival rate
This Executor is used When you want to maintain a constant number of iterations without being affected by the performance of the system under test.
# Ramping arrival rate
This Executor is used when you need your tests to not be affected by the system-under-test's performance, and would like to ramp the number of iterations up or down during specific periods of time.
# Externally controlled
This Executor is used when you want to control the number of VUs while the test is running.note:-this is the only executor that is not supported in k6 cloud, it can only be used locally with k6 run.
# For better understanding follow this link
https://blog.knoldus.com/scenarios-and-executors-in-grafana-k6a-quick-overview/





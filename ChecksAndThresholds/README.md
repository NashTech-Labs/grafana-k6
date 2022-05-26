# Checks
Checks are like assertions, but they don't halt execution. Instead, they store the result of the check, pass or fail, and let the script continue. 

The following points show some ways how we can use checks.

1.Checks for HTTP response code

2.Checks for text in response body.

3.Check for response body size.

# Thresholds
Thresholds are pass/fail criteria that specify the performance expectations of the system under test.

For example, we can use thresholds to test that our system meets the following expectations:

1.Less than 1% of requests return an error.

2.95% of requests have a response time below 200ms.

3.99% of requests have a response time below 400ms.

4.A specific endpoint always responds within 300ms.

5.Any conditions for a custom metric.

Thresholds analyze the performance metrics and determine whether the final results passed or failed the test. 

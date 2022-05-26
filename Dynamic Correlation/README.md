# Correlation in Grafana k6 performance testing tool
# Introduction
 This template will help you to implement a Correlation with k6. It is a modern load testing tool,You can use k6 to evaluate your systems’ reliability and performance, catching performance regressions and problems earlier. To make performance testing more efficient, we may utilize Correlation, which replicate and display what Correlation track and how well a system works in real-world scenarios.
# What is the Correlation
Correlation in a load testing scenario refers to retrieving one or more values from one request's response and reusing them in subsequent requests. Obtaining a token or other form of identification is frequently required to complete a series of steps in a user journey.

# Technologies Used
> Programming language - Javascript

> Automation tool - grafana-k6

> IDE - Visual Studio Code(vs-code)
# Libraries Used
# http
    import http from 'k6/http';
# check
    import { check } from 'k6';
# sleep
import { sleep } from 'k6'; 
# findBetween
import { findBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';




# Steps for execution
Clone the repository on your local system. vs-code will resolve all the required dependencies and then Download k6.

install k6
Mac
Install with Homebrew by running:

brew install k6
# Windows
If you use the Chocolatey package manager you can install the unofficial k6 package with:

  choco install k6
Otherwise, you can manually download and install the latest official .msi package.

# Linux
For Debian-based Linux distributions like Ubuntu, you can install k6 from the private deb repo like this:

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
echo "deb https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
sudo apt-get update
sudo apt-get install k6
open terminal in project location and type k6 run FileName.js

Now the tests will be execute on your machine.

you can change metrices code and variable name as per your needs.

For a better understanding please refer to this blog:- [click here]

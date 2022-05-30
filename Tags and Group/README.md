# Tags and Group in Grafana k6 performance testing tool
# Introduction
 This template will help you to implement tags and group with k6. It is a modern load testing tool,You can use k6 to evaluate your systems’ reliability and performance, catching performance regressions and problems earlier.
A load test is frequently performed on a service that has multiple subsystems and resources. This makes it difficult to determine the problems that are causing poor performance. So to avoid this type of problem k6 introduces tags and groups in performance testing.

# Tags in k6
They are a simple and effective way to categorize k6 objects for subsequent filtering of results.
# Group in k6
Groups are used to organize the scenario according to common logic. Groups can be nested. For each group() function, k6 generates a group_duration metric that contains the total execution time of the group function. When a tagged resource (checks, queries, or custom metrics) is executed in a group, k6 sets a tag group with the current group name.

# Technologies Used
> Programming language - Javascript

> Automation tool - grafana-k6

> IDE - Visual Studio Code(vs-code)
# Libraries Used
>import { Trend } from "k6/metrics";

>import { check } from "k6";

>import http from "k6/http";

>import { group } from ‘k6’;



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

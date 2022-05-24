# metrices in k6 
# Introduction
 This template will help you to implement a metrices with k6. k6 is a modern load testing tool,and we have used following Libraries http,encoding and htmlReport by simply import in this template.

# Technologies Used
 Programming language - Javascript

 Automation tool - grafana-k6

 IDE - Visual Studio Code(vs-code)

# Libraries Used

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

you can change metrices code as per your needs.

For a better understanding please refer to this blog:- click here

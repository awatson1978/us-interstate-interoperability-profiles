## US State Profiles

Guidance on how to profile the US State and territories using Fast Healthcare Interoperability Resources (FHIR).

![PolicyAnalysis-Examples-3x2.jpg](./assets/PolicyAnalysis-Examples-3x2.jpg)  

### Current Build

Please find the latest compiled version of the implementation guide here: 
[https://awatson.pages.mitre.org/us-state-profiles/](https://awatson.pages.mitre.org/us-state-profiles/)

### Compiling Documentation  

```bash 
# install the sushi tool
git clone https://github.com/FHIR/sushi
npm install -g fsh-sushi
sushi --help

# compile the documentation  
cd output
./_genonce.sh

# open the documentation (assuming Mac + Chrome)
cd output
open -a "Google Chrome" index.html
```

# Contact Info  


For project maintenance, please contact:    

Abigail Watson <awatson@mitre.org> 

For community help, please post questions on Zulip:  
[https://chat.fhir.org/](https://chat.fhir.org/)  


### Copyright Notice  

&copy; 2022 The MITRE Corporation.

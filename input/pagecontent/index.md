
### Background  

Modern clinical information systems are regulated by various laws, including (but not limited to) HIPAA, GDPR, and 21st Century Cures.  These laws outline expectations for patient privacy and access that clinicians are bound to.  In practice, these laws specify a default expectation of privacy, with the patient having the right to grant or deny access to their information to others.  When viewed through the lens of computer information systems, these laws detail a combination of data collection forms that need to be implemented and respected, and which inform the access control lists of who may log into which systems, and what information they are allowed to access or modify.    

### Purpose  

The purpose of this implementation guide is to help developers implement systems that exchange consent and advance directives data to be used in generating access control lists.  These systems may range widely from Electronic Medical Records (EHR) running in data warehouses, to Personal Health Records (PHR) running on personal mobile devices, to dedicated Consent Engine services, to graph databases, to blockchains, and many other services or products yet to be imagined.  


### Endpoints    

Endpoint query patterns vary depending on business usecase and workflow, but are generally organized around the perspective of each of the actors or organizations.  Typical queries will be around the patient accessing his or her own consent records; an organization querying which records a practitioner has access to; an organization determining if a specific related person is authorized to access a patient's records, and so forth.  You will want to review the following endpoints and queries, and select the ones most relevant to your  use case. 



*Consent Engine & Access Control List Generation*  
```
PUT /Consent/{patientId}/$parse
GET /Consent/$parseToBundle?patient=Patient/{patientId}
GET /Consent/$parseToBundle?organization=Organization/{organizationId}
GET /Consent/$parseToBundle?consentor=RelatedPerson/{relatedPersonId}
POST /Consent/{consentId}/$equals
POST /Consent/{consentId}/$diff
GET /Consent/$toAcl?patient=Patient/{patientId}
GET /Consent/$toAcl?organization=Organization/{organizationId}
GET /Consent/$toAcl?consentor=RelatedPerson/{relatedPersonId}
GET /Consent/$oauthScopes?patient=Patient/{patientId}
GET /Consent/$oauthScopes?organization=Organization/{organizationId}
GET /Consent/$oauthScopes?consentor=RelatedPerson/{relatedPersonId}
```




### Learning Resources & Background Information  

[Getting Started with FHIR](http://hl7.org/fhir/modules.html)  
[FHIR Resource List](https://www.hl7.org/fhir/resourcelist.html)  
[HL7 Education and Certification Course List](http://www.hl7.org/implement/courseList.cfm?ref=nav)  

# Contact Info  

For project maintenance, please contact:    

Abigail Watson <awatson@mitre.org> 

For community help, please post questions on Zulip:  
[https://chat.fhir.org/](https://chat.fhir.org/)  


### Copyright Notice  

&copy; 2022 The MITRE Corporation.

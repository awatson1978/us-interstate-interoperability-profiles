Profile:  FloridaConsentProfile
Parent:   Consent
Id:       florida-consent-profile
Title:    "FloridaConsentProfile"
Description: "Florida consent profile."

* policyRule from ConsentExchangePolicies
* policy.authority = "https://www.stateofflorida.com/"
* verification 1..*



Alias: $loinc = http://loinc.org
Alias: $consentscope = http://terminology.hl7.org/CodeSystem/consentscope
Alias: $resource-types = http://hl7.org/fhir/resource-types

Instance: FloridaConsentProfile
InstanceOf: Consent
Title: "Consent Record - Florida"
Usage: #example
* status = #active
* category = $loinc#57017-6 "Privacy policy Organization Document"
* scope = $consentscope#patient-privacy "Privacy Consent"
* dateTime = "2024-01-29T15:19:20.560Z"
* organization = Reference(FL) "State of Florida"
* sourceAttachment.title = "The terms of the consent in lawyer speak."
* sourceAttachment.creation = "2016-08-22"
* provision.type = #permit
* provision.provision[0].type = #deny
* provision.provision[=].class = $resource-types#Procedure "Procedure"
* provision.provision[=].code.text = "Abortion"
* provision.provision[=].code =  http://snomed.info/sct#386639001 "Termination of pregnancy (procedure)"
* provision.provision[+].type = #deny
* provision.provision[=].class = $resource-types#Procedure "Procedure"
* provision.provision[=].code.text = "Pediatric Gender Medicine"
* provision.provision[=].code.coding[0] =  http://snomed.info/sct#266717002 "Hormone replacement therapy (procedure)"
* provision.provision[=].code.coding[1] =  http://snomed.info/sct#719670005 "Gender confirmation surgery (procedure)"
* provision.provision[+].type = #deny
* provision.provision[=].class = $resource-types#ActivityDefinition "ActivityDefinition"
* provision.provision[=].code.text = "Sports"
* provision.provision[=].code.coding[0] =  http://snomed.info/sct#14468000 "Sports activity (observable entity)"
* provision.provision[+].code.text = "Swimming"
* provision.provision[=].code.coding[0] =  http://snomed.info/sct#20461001 "Swimming (qualifier value)"
* provision.provision[+].type = #permit
* provision.provision[=].class = $resource-types#RelatedPerson "RelatedPerson"
* provision.provision[=].code.text = "Power of Attorney"
* provision.provision[=].code =  #POWATT "power of attorney"
Profile:  IdahoConsentProfile
Parent:   Consent
Id:       idaho-consent-profile
Title:    "IdahoConsentProfile"
Description: "Idaho consent profile."

* policyRule from ConsentExchangePolicies
* policy.authority = "https://www.idaho.gov"
* verification 0..*


Alias: $loinc = http://loinc.org
Alias: $consentscope = http://terminology.hl7.org/CodeSystem/consentscope
Alias: $resource-types = http://hl7.org/fhir/resource-types

Instance: IdahoConsentProfile
InstanceOf: Consent
Title: "Consent Record - Idaho"
Usage: #example
* status = #active
* category = $loinc#57017-6 "Privacy policy Organization Document"
* scope = $consentscope#patient-privacy "Privacy Consent"
* dateTime = "2024-01-29T15:42:06.712Z"
* organization = Reference(ID) "State of Idaho"
* sourceAttachment.title = "The terms of the consent in lawyer speak."
* sourceAttachment.creation = "2016-08-22"
* provision.type = #permit
* provision.provision[0].type = #deny
* provision.provision[=].class = $resource-types#Medication "Medication"
* provision.provision[=].code.text = "Cannabis"
* provision.provision[=].code =  http://www.nlm.nih.gov/research/umls/rxnorm#rxcui#1484855 "Cannabis sativa subsp. flowering top extract"
* provision.provision[+].type = #permit
* provision.provision[=].class = $resource-types#Coverage "Coverage"
* provision.provision[=].code.text = "Medicaid Expansion"
* provision.provision[=].code =  #SUBSUPP "subsidized supplemental health program"
* provision.provision[+].type = #deny
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

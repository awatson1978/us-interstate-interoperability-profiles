Profile:  UtahConsentProfile
Parent:   Consent
Id:       utah-consent-profile
Title:    "UtahConsentProfile"
Description: "Utah consent profile."

* policyRule from ConsentExchangePolicies
* policy.authority = "https://www.utah.gov/"
* verification 1..*


Alias: $loinc = http://loinc.org
Alias: $consentscope = http://terminology.hl7.org/CodeSystem/consentscope
Alias: $resource-types = http://hl7.org/fhir/resource-types

Instance: UtahConsentProfile
InstanceOf: Consent
Title: "Consent Record - Utah State"
Usage: #example
* status = #active
* category = $loinc#57017-6 "Privacy policy Organization Document"
* scope = $consentscope#patient-privacy "Privacy Consent"
* dateTime = "2024-01-29T17:34:19.868Z"
* organization = Reference(UT) "State of Utah"
* sourceAttachment.title = "The terms of the consent in lawyer speak."
* sourceAttachment.creation = "2016-08-22"
* provision.type = #permit
* provision.provision[0].type = #permit
* provision.provision[=].class = $resource-types#Coverage "Coverage"
* provision.provision[=].code.text = "Medicaid Expansion"
* provision.provision[=].code = #SUBSUPP "subsidized supplemental health program"
* provision.provision[+].type = #deny
* provision.provision[=].class = $resource-types#Procedure "Procedure"
* provision.provision[=].code.text = "Abortion"
* provision.provision[=].code =  http://snomed.info/sct#386639001 "Termination of pregnancy (procedure)"
* provision.provision[+].type = #permit
* provision.provision[=].class = $resource-types#Coverage "Coverage"
* provision.provision[=].code.text = "In-vitro fertilization"
* provision.provision[=].code =  http://snomed.info/sct#52637005 "Test tube ovum fertilization (procedure)"
* provision.provision[+].type = #deny
* provision.provision[=].class = $resource-types#ActivityDefinition "ActivityDefinition"
* provision.provision[=].code.text = "Sports"
* provision.provision[=].code.coding[0] =  http://snomed.info/sct#14468000 "Sports activity (observable entity)"
* provision.provision[+].code.text = "Swimming"
* provision.provision[=].code.coding[0] =  http://snomed.info/sct#20461001 "Swimming (qualifier value)"
* provision.provision[+].type = #deny
* provision.provision[=].class = $resource-types#Procedure "Procedure"
* provision.provision[=].code.text = "Pediatric Gender Medicine"
* provision.provision[=].code.coding[0] =  http://snomed.info/sct#266717002 "Hormone replacement therapy (procedure)"
* provision.provision[=].code.coding[1] =  http://snomed.info/sct#719670005 "Gender confirmation surgery (procedure)"

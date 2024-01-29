Profile:  GeorgiaConsentProfile
Parent:   Consent
Id:       georgia-consent-profile
Title:    "GeorgiaConsentProfile"
Description: "Georgia consent profile."

* policyRule from ConsentExchangePolicies
* policy.authority = "https://georgia.gov/"
* verification 1..*



Alias: $loinc = http://loinc.org
Alias: $consentscope = http://terminology.hl7.org/CodeSystem/consentscope
Alias: $resource-types = http://hl7.org/fhir/resource-types

Instance: GeorgiaConsentProfile
InstanceOf: Consent
Title: "Consent Record - Georgia"
Usage: #example
* status = #active
* category = $loinc#57017-6 "Privacy policy Organization Document"
* scope = $consentscope#patient-privacy "Privacy Consent"
* dateTime = "2024-01-29T15:28:32.636Z"
* organization = Reference(GA) "State of Georgia"
* sourceAttachment.title = "The terms of the consent in lawyer speak."
* sourceAttachment.creation = "2016-08-22"
* provision.type = #permit
* provision.provision[0].type = #deny
* provision.provision[=].class = $resource-types#Medication "Medication"
* provision.provision[=].code.text = "Cannabis"
* provision.provision[=].code =  http://www.nlm.nih.gov/research/umls/rxnorm#rxcui#1484855 "Cannabis sativa subsp. flowering top extract"
* provision.provision[+].type = #deny
* provision.provision[=].class = $resource-types#Procedure "Procedure"
* provision.provision[=].code.text = "Abortion"
* provision.provision[=].code =  http://snomed.info/sct#386639001 "Termination of pregnancy (procedure)"
* provision.provision[+].type = #permit
* provision.provision[=].class = $resource-types#RelatedPerson "RelatedPerson"
* provision.provision[=].code.text = "Power of Attorney"
* provision.provision[=].code =  #POWATT "power of attorney"
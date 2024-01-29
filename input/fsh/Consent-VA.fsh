Profile:  VirginiaConsentProfile
Parent:   Consent
Id:       virginia-consent-profile
Title:    "VirginiaConsentProfile"
Description: "Virginia consent profile."

* policyRule from ConsentExchangePolicies
* policy.authority = "https://www.virginia.gov/"
* verification 1..*


Alias: $loinc = http://loinc.org
Alias: $consentscope = http://terminology.hl7.org/CodeSystem/consentscope
Alias: $resource-types = http://hl7.org/fhir/resource-types

Instance: VirginiaConsentProfile
InstanceOf: Consent
Title: "Consent Record - Virginia State"
Usage: #example
* status = #active
* category = $loinc#57017-6 "Privacy policy Organization Document"
* scope = $consentscope#patient-privacy "Privacy Consent"
* dateTime = "2024-01-29T17:40:42.631Z"
* organization = Reference(VA) "State of Virginia"
* sourceAttachment.title = "The terms of the consent in lawyer speak."
* sourceAttachment.creation = "2016-08-22"
* provision.type = #permit
* provision.provision[0].type = #permit
* provision.provision[=].class = $resource-types#Practitioner "Practitioner"
* provision.provision[=].code.text = "Doula"
* provision.provision[=].code =  http://snomed.info/sct#768825008 "Doula (occupation)"
* provision.provision[+].type = #permit
* provision.provision[=].class = $resource-types#Practitioner "Practitioner"
* provision.provision[=].code.text = "Decline"
* provision.provision[=].code =  http://snomed.info/sct#443390004 "Refused (qualifier value)"
* provision.provision[+].type = #permit
* provision.provision[=].class = $resource-types#Coverage "Coverage"
* provision.provision[=].code.text = "Medicaid Expansion"
* provision.provision[=].code = #SUBSUPP "subsidized supplemental health program"
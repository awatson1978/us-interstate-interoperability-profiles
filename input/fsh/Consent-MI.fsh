Profile:  MichiganConsentProfile
Parent:   Consent
Id:       michigan-consent-profile
Title:    "MichiganConsentProfile"
Description: "Michigan consent profile."

* policyRule from ConsentExchangePolicies
* policy.authority = "https://www.michigan.gov/"
* verification 1..*


Alias: $loinc = http://loinc.org
Alias: $consentscope = http://terminology.hl7.org/CodeSystem/consentscope
Alias: $resource-types = http://hl7.org/fhir/resource-types

Instance: MichiganConsentProfile
InstanceOf: Consent
Title: "Consent Record - Michigan"
Usage: #example
* status = #active
* category = $loinc#57017-6 "Privacy policy Organization Document"
* scope = $consentscope#patient-privacy "Privacy Consent"
* dateTime = "2024-01-29T16:13:48.001Z"
* organization = Reference(MI) "State of Michigan"
* sourceAttachment.title = "The terms of the consent in lawyer speak."
* sourceAttachment.creation = "2016-08-22"
* provision.type = #permit
* provision.provision[0].type = #permit
* provision.provision[=].class = $resource-types#Practitioner "Practitioner"
* provision.provision[=].code.text = "Doula"
* provision.provision[=].code =  http://snomed.info/sct#768825008 "Doula (occupation)"
* provision.provision[+].type = #permit
* provision.provision[=].class = $resource-types#Coverage "Coverage"
* provision.provision[=].code.text = "Medicaid Expansion"
* provision.provision[=].code =  #SUBSUPP "subsidized supplemental health program"
* provision.provision[+].type = #permit
* provision.provision[=].class = $resource-types#Practitioner "Practitioner"
* provision.provision[=].code.text = "Decline"
* provision.provision[=].code =  http://snomed.info/sct#443390004 "Refused (qualifier value)"
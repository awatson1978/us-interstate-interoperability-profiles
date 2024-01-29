Profile:  IllinoisConsentProfile
Parent:   Consent
Id:       illinois-consent-profile
Title:    "IllinoisConsentProfile"
Description: "Illinois consent profile."

* policyRule from ConsentExchangePolicies
* policy.authority = "https://www.illinois.gov/"
* verification 1..*



Alias: $consentscope = http://terminology.hl7.org/CodeSystem/consentscope
Alias: $resource-types = http://hl7.org/fhir/resource-types
Alias: $v3-MaritalStatus = http://terminology.hl7.org/CodeSystem/v3-MaritalStatus
Alias: $v3-FamilyMember = http://terminology.hl7.org/CodeSystem/v3-FamilyMember

Instance: IllinoisConsentProfile
InstanceOf: Consent
Title: "Consent Record - Illinois"
Usage: #example
* status = #active
* category[0].coding[0].code = http://loinc.org#57017-6 "Privacy policy Organization Document"
* scope = $consentscope#patient-privacy "Privacy Consent"
* dateTime = "2024-01-29T01:51:04.663Z"
* organization = Reference(IL) "State of Illinois"
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
* provision.provision[=].class = $resource-types#Coverage "Coverage"
* provision.provision[=].code.text = "In-vitro fertilization"
* provision.provision[=].code =  http://snomed.info/sct#52637005 "Test tube ovum fertilization (procedure)"
* provision.provision[+].type = #permit
* provision.provision[=].class = $resource-types#Practitioner "Practitioner"
* provision.provision[=].code.text = "Decline"
* provision.provision[=].code =  http://snomed.info/sct#443390004 "Refused (qualifier value)"
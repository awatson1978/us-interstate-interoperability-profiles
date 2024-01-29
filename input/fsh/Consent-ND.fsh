Profile:  NorthDakotaConsentProfile
Parent:   Consent
Id:       north-dakota-consent-profile
Title:    "NorthDakotaConsentProfile"
Description: "North Dakota consent profile."

* policyRule from ConsentExchangePolicies
* policy.authority = "https://www.nd.gov/"
* verification 1..*

Alias: $loinc = http://loinc.org
Alias: $consentscope = http://terminology.hl7.org/CodeSystem/consentscope
Alias: $resource-types = http://hl7.org/fhir/resource-types



Instance: NorthDakotaConsentProfile
InstanceOf: Consent
Title: "Consent Record - North Dakota"
Usage: #example
* status = #active
* category = $loinc#57017-6 "Privacy policy Organization Document"
* scope = $consentscope#patient-privacy "Privacy Consent"
* dateTime = "2024-01-29T16:32:01.276Z"
* organization = Reference(ND) "State of North Dakota"
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
* provision.provision[=].code = http://snomed.info/sct#386639001 "Termination of pregnancy (procedure)"
* provision.provision[+].type = #permit
* provision.provision[=].class = $resource-types#RelatedPerson "RelatedPerson"
* provision.provision[=].code.text = "Power of Attorney"
* provision.provision[=].code = #POWATT "power of attorney"
* provision.provision[+].type = #permit
* provision.provision[=].class = $resource-types#Practitioner "Practitioner"
* provision.provision[=].code.text = "Decline"
* provision.provision[=].code =  http://snomed.info/sct#443390004 "Refused (qualifier value)"
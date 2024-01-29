Profile:  MissouriConsentProfile
Parent:   Consent
Id:       missouri-consent-profile
Title:    "MissouriConsentProfile"
Description: "Missouri consent profile."

* policyRule from ConsentExchangePolicies
* policy.authority = "https://www.mo.gov/"
* verification 1..*


Alias: $loinc = http://loinc.org
Alias: $consentscope = http://terminology.hl7.org/CodeSystem/consentscope
Alias: $resource-types = http://hl7.org/fhir/resource-types
Alias: $v3-MaritalStatus = http://terminology.hl7.org/CodeSystem/v3-MaritalStatus
Alias: $v3-FamilyMember = http://terminology.hl7.org/CodeSystem/v3-FamilyMember

Instance: MissouriConsentProfile
InstanceOf: Consent
Title: "Consent Record - Missouri"
Usage: #example
* status = #active
* category = $loinc#57017-6 "Privacy policy Organization Document"
* scope = $consentscope#patient-privacy "Privacy Consent"
* dateTime = "2024-01-29T16:19:52.584Z"
* organization = Reference(MO) "State of Missouri"
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
* provision.provision[+].type = #permit
* provision.provision[=].class = $resource-types#RelatedPerson "RelatedPerson"
* provision.provision[=].code[0].text = "Marital Status"
* provision.provision[=].code[=].coding[0] = $v3-MaritalStatus#P "Polygamous"
* provision.provision[=].code[=].coding[+] = $v3-MaritalStatus#T "Domestic partner"
* provision.provision[=].code[+].text = "relation"
* provision.provision[=].code[=].coding[0] = $v3-FamilyMember#FTHFOST "Foster Father"
* provision.provision[=].code[=].coding[+] = $v3-FamilyMember#MTHFOST "Foster Mother"
* provision.provision[=].code[=].coding[+] = $v3-FamilyMember#PRNFOST "Foster Parent"
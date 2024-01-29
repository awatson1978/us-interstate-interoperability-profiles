Profile:  MassachusettsConsentProfile
Parent:   Consent
Id:       massachusetts-consent-profile
Title:    "MassachusettsConsentProfile"
Description: "Massachusetts consent profile."

* policyRule from ConsentExchangePolicies
* policy.authority = "https://www.mass.gov/"
* verification 1..*


Alias: $consentscope = http://terminology.hl7.org/CodeSystem/consentscope
Alias: $resource-types = http://hl7.org/fhir/resource-types
Alias: $v3-MaritalStatus = http://terminology.hl7.org/CodeSystem/v3-MaritalStatus
Alias: $v3-FamilyMember = http://terminology.hl7.org/CodeSystem/v3-FamilyMember

Instance: MassachusettsConsentProfile
InstanceOf: Consent
Title: "Massachusetts State Consent Record"
Usage: #example
* status = #active
* category[0].coding[0].code = http://loinc.org#57017-6 "Privacy policy Organization Document"
* scope = $consentscope#patient-privacy "Privacy Consent"
* dateTime = "2024-01-29T02:08:49.515Z"
* organization = Reference(MA) "State of Massachusetts"
* sourceAttachment.title = "The terms of the consent in lawyer speak."
* sourceAttachment.creation = "2016-08-22"
* provision.type = #permit
* provision.provision[0].type = #permit
* provision.provision[=].class = $resource-types#RelatedPerson "RelatedPerson"
* provision.provision[=].code.text = "Power of Attorney"
* provision.provision[=].code =  #POWATT "power of attorney"
* provision.provision[+].type = #deny
* provision.provision[=].class = $resource-types#Coverage "Coverage"
* provision.provision[=].code.text = "Medicaid Expansion"
* provision.provision[=].code =  #SUBSUPP "subsidized supplemental health program"
* provision.provision[+].type = #permit
* provision.provision[=].class = $resource-types#Practitioner "Practitioner"
* provision.provision[=].code.text = "Doula"
* provision.provision[=].code =  http://snomed.info/sct#768825008 "Doula (occupation)"
* provision.provision[+].type = #permit
* provision.provision[=].class = $resource-types#Coverage "Coverage"
* provision.provision[=].code.text = "In-vitro fertilization"
* provision.provision[=].code =  http://snomed.info/sct#52637005 "Test tube ovum fertilization (procedure)"
* provision.provision[+].type = #deny
* provision.provision[=].class = $resource-types#RelatedPerson "RelatedPerson"
* provision.provision[=].code[0].text = "Marital Status"
* provision.provision[=].code[=].coding[0] = $v3-MaritalStatus#P "Polygamous"
* provision.provision[=].code[=].coding[+] = $v3-MaritalStatus#T "Domestic partner"
* provision.provision[=].code[+].text = "relation"
* provision.provision[=].code[=].coding[0] = $v3-FamilyMember#FTHFOST "Foster Father"
* provision.provision[=].code[=].coding[+] = $v3-FamilyMember#MTHFOST "Foster Mother"
* provision.provision[=].code[=].coding[+] = $v3-FamilyMember#PRNFOST "Foster Parent"

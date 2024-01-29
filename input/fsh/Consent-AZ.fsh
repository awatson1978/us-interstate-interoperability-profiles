Profile:  ArizonaConsentProfile
Parent:   Consent
Id:       arizona-consent-profile
Title:    "ArizonaConsentProfile"
Description: "Arizona consent profile."

* policyRule from ConsentExchangePolicies
* policy.authority = "https://az.gov/"
* verification 1..*



Alias: $consentscope = http://terminology.hl7.org/CodeSystem/consentscope
Alias: $resource-types = http://hl7.org/fhir/resource-types
Alias: $v3-MaritalStatus = http://terminology.hl7.org/CodeSystem/v3-MaritalStatus
Alias: $v3-FamilyMember = http://terminology.hl7.org/CodeSystem/v3-FamilyMember

Instance: ArizonaConsentProfile
InstanceOf: Consent
Title: "Consent Record - Arizona"
Usage: #example
* status = #active
* category[0].coding[0].code = http://loinc.org#57017-6 "Privacy policy Organization Document"
* scope = $consentscope#patient-privacy "Privacy Consent"
* dateTime = "2024-01-29T14:43:48.123Z"
* organization = Reference(AZ) "State of Arizona"
* sourceAttachment.title = "The terms of the consent in lawyer speak."
* sourceAttachment.creation = "2016-08-22"
* provision.type = #permit
* provision.provision[0].type = #deny
* provision.provision[=].class = $resource-types#Coverage "Coverage"
* provision.provision[=].code.text = "Medicaid Expansion"
* provision.provision[=].code =  #SUBSUPP "subsidized supplemental health program"
* provision.provision[+].type = #deny
* provision.provision[=].class = $resource-types#Procedure "Procedure"
* provision.provision[=].code.text = "Abortion"
* provision.provision[=].code =  http://snomed.info/sct#386639001 "Termination of pregnancy (procedure)"
* provision.provision[+].type = #permit
* provision.provision[=].class = $resource-types#RelatedPerson "RelatedPerson"
* provision.provision[=].code[0].text = "Marital Status"
* provision.provision[=].code[=].coding[0] = $v3-MaritalStatus#P "Polygamous"
* provision.provision[=].code[=].coding[+] = $v3-MaritalStatus#T "Domestic partner"
* provision.provision[=].code[+].text = "relation"
* provision.provision[=].code[=].coding[0] = $v3-FamilyMember#FTHFOST "Foster Father"
* provision.provision[=].code[=].coding[+] = $v3-FamilyMember#MTHFOST "Foster Mother"
* provision.provision[=].code[=].coding[+] = $v3-FamilyMember#PRNFOST "Foster Parent"
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
* provision.provision[=].class = $resource-types#Practitioner "Practitioner"
* provision.provision[=].code.text = "Decline"
* provision.provision[=].code =  http://snomed.info/sct#443390004 "Refused (qualifier value)"

Foster care nondiscrimination laws protect LGBTQ foster parents and families from discrimination by foster care agencies and officials. Some states permit state-licensed child welfare agencies to refuse to place and provide services to children and families, including LGBTQ people and same-sex couples, if doing so conflicts with their religious beliefs.

![./FosterCareLaws.png](./FosterCareLaws.png){:width="100%"}

`TX may deny to consent to share data or treat a foster child, based on the sincere religious beliefs of the clinician`

#### Example Encoding  

```
{ 
    "resourceType": "Consent",
    "policy": {
        "authority": "https://www.texas.gov/"
    },
    "provision": {
        "type": "permit",
        "purpose": [{
            "code": "COC",
            "display": "coordination of care",
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason"
        }],
        "provision": [{
            "type": "deny",
            "class": [{
                "code": "Patient",
                "display": "Patient",
                "system": "http://hl7.org/fhir/resource-types"
            }],
            "code": [{
                "text": "maritalStatus",
                "coding": [{
                    "code": "P",
                    "display": "Polygamous",
                    "system": "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus"
                }, {
                    "code": "T",
                    "display": "Domestic partner",
                    "system": "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus"
                }]
            }]
        }]
    }
}
```

#### References  
[Foster and Adoption Laws](https://www.lgbtmap.org/equality-maps/foster_and_adoption_laws)  

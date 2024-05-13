
Foster care nondiscrimination laws protect LGBTQ foster parents and families from discrimination by foster care agencies and officials. Some states permit state-licensed child welfare agencies to refuse to place and provide services to children and families, including LGBTQ people, same-sex couples, or polygomous family structures; if doing so conflicts with their religious beliefs.  

Meanwhile, placement in foster care is correlated with juvenile incarceration - over 50% of foster children will have an encounter with the juvenile legal system through arrest, conviction or detention by the age of 17.  These minors are then the subject of court proceedings, often relying on pediatric medical records, and frequently involving interstate custody disputes and/or detention.

![./Map-USStates-LGBT-FosterCare.jpeg](./Map-USStates-LGBT-FosterCare.jpg){:width="100%"}

`TX may deny to consent to share data or treat a foster child, based on the sincere religious beliefs of the clinician`

#### Example Encoding  

```json
{ 
    "resourceType": "Consent",
    "policy": [{
        "authority": "https://www.texas.gov/"
    }],
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
                "code": "RelatedPerson",
                "display": "RelatedPerson",
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
            }, {
                "text": "relation",
                "coding": [{
                    "code": "FTHFOST",
                    "display": "Foster Father",
                    "system": "http://terminology.hl7.org/ValueSet/v3-FamilyMember"
                },{
                    "code": "MTHFOST",
                    "display": "Foster Mother",
                    "system": "http://terminology.hl7.org/ValueSet/v3-FamilyMember"
                },{
                    "code": "PRNFOST",
                    "display": "Foster Parent",
                    "system": "http://terminology.hl7.org/ValueSet/v3-FamilyMember"
                }]
            }]
        }]
    }
}
```

#### References  
[Foster and Adoption Laws](https://www.lgbtmap.org/equality-maps/foster_and_adoption_laws)  
[The foster care-to-prison pipeline: A road to incarceration](https://www.crimlawpractitioner.org/post/the-foster-care-to-prison-pipeline-a-road-to-incarceration#:~:text=By%20age%2017%2C%20over%2050,years%20of%20leaving%20foster%20care)  


#### Datasets
[Locations.US.States.LGBTFosterCare.20240128.ndjson](Locations.US.States.LGBTFosterCare.20240128.ndjson)  
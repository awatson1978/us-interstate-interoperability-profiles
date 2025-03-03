

Cannabis has been listed as a Schedule I controlled substance since the Controlled Substances Act was passed in 1970. However, many states have been taking proactive measures to enact state level laws allowing for medical marijuana, cannabis byproducts such as CBD, industrial hemp, or even outright legalizing it.

![./Map-USStates-MedicalCannabis.jpeg](./Map-USStates-MedicalCannabis.jpg){:width="100%"}


#### Example Encoding  

`WY denies consent for clinicians to use or prescribe medical marijuana during care management`  

```json
{ 
    "resourceType": "Consent",
    "policy": [{
        "authority": "https://www.wyo.gov/"
    }],
    "provision": {
        "type": "permit",
        "purpose": [{
            "code": "CAREMGT",
            "display": "care management",
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason"
        }],
        "provision": [{
            "type": "deny",
            "class": [{
                "code": "MedicationRequest",
                "display": "MedicationRequest",
                "system": "http://hl7.org/fhir/resource-types"
            }],
            "code": [{
                "text": "Marijuana",
                "coding": [{
                    "code": "1484855",
                    "display": "Cannabis sativa subsp. flowering top extract",
                    "system": " http://www.nlm.nih.gov/research/umls/rxnorm#rxcui"
                }]
            }]
        }]
    }
}
```

#### References  
[Map of Marijuana Legality by State](https://disa.com/map-of-marijuana-legality-by-state)  


#### Datasets
[Locations.US.States.ControlledSubstances.Cannabis.20250101.ndjson](Locations.US.States.ControlledSubstances.Cannabis.20250101.ndjson)  
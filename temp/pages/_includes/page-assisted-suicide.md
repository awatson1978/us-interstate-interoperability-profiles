
Assisted suicide, a deeply complex and ethically charged issue, varies significantly across the United States on a state-by-state basis, reflecting diverse legal, cultural, and moral landscapes. In states where it is legal, such as Oregon, California, and Colorado, laws typically include strict criteria and safeguards, allowing terminally ill patients to end their lives through physician-prescribed medication under specific circumstances. These laws often spark intense debates about patient autonomy, the sanctity of life, the role of physicians, and the potential for abuse or coercion. Conversely, in states where assisted suicide remains illegal, patients and advocates continue to challenge existing legal frameworks, pushing for changes that would allow individuals greater control over their end-of-life decisions. This patchwork of laws across the country not only underscores the contentious nature of the topic but also highlights the ongoing struggle to balance ethical considerations with the rights of patients facing terminal illnesses.


![./Map-USStates-AssistedSuicide.jpeg](./Map-USStates-AssistedSuicide.jpeg){:width="100%"}



#### Example Encoding  

```
{ 
    "resourceType": "Consent",
    "policy": {

    },
    "provision": {
        "type": "permit",
        "purpose": [{
            "code": "COC",
            "display": "coordination of care",
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason"
        }],
        "provision": [{
            "type": "permit",
            "class": [{
                "code": "Procedure",
                "display": "Procedure",
                "system": "http://hl7.org/fhir/resource-types"
            }],
            "code": [{
                "text": "Assisted suicide",
                "coding": [{
                    "code": "51709005",
                    "display": "Assisted suicide (event)",
                    "system": " http://snomed.info/sct"
                }]
            }]
        }]
    }
}
```

#### References  
[Assisted suicide in the United States](https://en.wikipedia.org/wiki/Assisted_suicide_in_the_United_States)   


#### Datasets
[Locations.US.States.AssistedSuicide.20240128.ndjson](Locations.US.States.AssistedSuicide.20240128.ndjson)  
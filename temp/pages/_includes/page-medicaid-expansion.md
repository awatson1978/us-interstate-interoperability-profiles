
Medicaid expansion, a critical component of the Affordable Care Act (ACA), presents a varied landscape across the United States, shaped by individual state decisions. This expansion aims to extend healthcare coverage to more low-income adults by increasing the eligibility threshold. However, its adoption varies significantly from state to state, reflecting differing political, economic, and social perspectives. In states that have embraced expansion, millions of previously uninsured individuals have gained access to essential health services, leading to improved health outcomes and financial security. Conversely, in states opting out of expansion, many low-income adults remain without coverage, highlighting a stark divide in healthcare access across the country. This state-by-state approach to Medicaid expansion underscores the ongoing debate over healthcare policy in the U.S. and its direct impact on the health and well-being of its residents.


![./Map-USStates-MedicaidExpansion.jpeg](./Map-USStates-MedicaidExpansion.jpeg){:width="100%"}

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
                "code": "Coverage",
                "display": "Coverage",
                "system": "http://hl7.org/fhir/resource-types"
            }],
            "code": [{
                "text": "Medicaid Expansion",
                "coding": [{
                    "code": "SUBSUPP",
                    "display": "subsidized supplemental health program",
                    "system": " http://hl7.org/fhir/ValueSet/coverage-type"
                }]
            }],
            "network": "Medicaid"
        }]
    }
}
```

#### References  
[Status of State Medicaid Expansion Decisions: Interactive Map](https://www.kff.org/medicaid/issue-brief/status-of-state-medicaid-expansion-decisions-interactive-map/)  

#### Datasets
[Locations.US.States.MedicaidExpansion.20240128.ndjson](Locations.US.States.MedicaidExpansion.20240128.ndjson)  
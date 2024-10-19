
Medicaid expansion, a component of the Affordable Care Act (ACA), presents a varied landscape across the United States, shaped by individual state decisions. This expansion aims to extend healthcare coverage to more low-income adults by increasing the eligibility threshold.  However, such policies require funding and taxation, and its adoption varies significantly from state to state, reflecting differing political, economic, and social perspectives.  In states that have embraced expansion, millions of previously uninsured individuals have gained access to health services. Conversely, in states opting out of expansion, many low-income adults remain without coverage, but taxation and budgetary expenditures are lower as a result.  This state-by-state approach to Medicaid expansion underscores the ongoing debate over healthcare policy in the United States and its direct impact on the health and well-being of its residents.

![./Map-USStates-MedicaidExpansion.jpeg](./Map-USStates-MedicaidExpansion.jpg){:width="100%"}

#### Example Encoding  

```json
{ 
    "resourceType": "Consent",
    "policy": [{
        "authority": "https://www.in.gov/"
    }],
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
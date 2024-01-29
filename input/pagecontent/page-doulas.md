
Medicaid has increasingly recognized the importance of comprehensive maternal care, including the services provided by doulas. Doulas are non-medical professionals who offer physical, emotional, and informational support to women before, during, and shortly after childbirth. The integration of doula services into Medicaid coverage is a significant step towards improving maternal and infant health outcomes, particularly in underserved communities. This move acknowledges the role of doulas in reducing complications during childbirth, enhancing the birthing experience, and potentially decreasing healthcare costs by lowering the rates of medical interventions like cesarean sections. The expansion of Medicaid to cover doula services reflects a growing awareness of the importance of holistic care approaches in maternal health and the need to address disparities in healthcare access and outcomes.


![./Map-USStates-DoulaAccess.jpeg](./Map-USStates-DoulaAccess.jpeg){:width="100%"}
Last Updated:  January 8th, 2024

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
                "code": "Practitioner",
                "display": "Practitioner",
                "system": "http://hl7.org/fhir/resource-types"
            }],
            "code": [{
                "text": "Doula",
                "coding": [{
                    "code": "768825008",
                    "display": "Doula (occupation)",
                    "system": " http://snomed.info/sct"
                }]
            }]
        }]
    }
}
```

#### References  
[Doula Services in Medicaid: State Progress in 2022](https://ccf.georgetown.edu/2022/06/02/doula-services-in-medicaid-state-progress-in-2022/)


#### Datasets
[Locations.US.States.DoulaAccess.20240128.ndjson](Locations.US.States.DoulaAccess.20240128.ndjson)  
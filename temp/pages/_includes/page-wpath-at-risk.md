
The World Professional Association of Transgender Health (WPATH) guidelines, once widely accepted as the benchmark for transgender healthcare, have faced increasing scrutiny and skepticism in various states. This shift has influenced local policies, leading to a mosaic of regulations that range from supportive to highly restrictive regarding access to gender-affirming treatments and surgeries for transgender individuals. In some states, lawmakers and medical bodies are questioning or moving away from WPATH's recommendations, potentially limiting the availability and scope of transgender healthcare services. These divergences reflect broader debates over medical authority, the role of government in healthcare decisions, and the evolving understanding of gender identity and transgender health needs. As a result, transgender individuals across the U.S. face a disparate and often challenging landscape when seeking healthcare, highlighting the need for a nuanced and informed approach to policy-making in this sensitive and vital area of public health.

![./Map-USStates-WpathAtRisk.jpeg](./Map-USStates-WpathAtRisk.jpg){:width="100%"}


#### Example Encoding  

```json
{ 
    "resourceType": "Consent",
    "policy": [{
        "authority": "https://www.myflorida.com/"
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
                "code": "Procedure",
                "display": "Procedure",
                "system": "http://hl7.org/fhir/resource-types"
            }],
            "code": [{
                "text": "Hormone replacement therapy",
                "coding": [{
                    "code": "266717002",
                    "display": "Hormone replacement therapy (procedure)",
                    "system": " http://snomed.info/sct"
                }, {
                "text": "Gender affirming surgery",
                "coding": [{
                    "code": "719670005",
                    "display": "Gender confirmation surgery (procedure)",
                    "system": " http://snomed.info/sct"
                }]
            }],
            "extention": [{
                "url": "example-jurisdiction-cql",
                "value": "where (oday() - Patient.birthDate) < 18 years"
            }]
        }]
    }
}
```

#### References  
- [Florida Department of Health pushes back on federal guidance on trans youth care](https://abcnews.go.com/Politics/florida-department-health-pushes-back-federal-guidance-trans/story?id=84193565)
- [The Cass Review](https://cass.independent-review.uk/home/publications/final-report/)  
- [WPATH Removes Age Limits From Transgender Treatment Guidelines](https://www.medscape.com/viewarticle/980935)  
- [WPATH Explains Why They Removed Minimum Age Guidelines](https://www.dailywire.com/news/wpath-explains-why-they-removed-minimum-age-guidelines-for-children-to-access-transgender-medical-treatments-so-doctors-wont-get-sued)  
- [Poll: Majority Do Not Support Sex Changes for Minors](https://www.breitbart.com/politics/2022/10/21/poll-majority-do-not-support-sex-changes-minors/)  
- [As more transgender children seek medical care, families confront many unknowns](https://www.reuters.com/investigates/special-report/usa-transyouth-care/)  


#### Datasets
[Locations.US.States.WPATH.atRisk.20240128.ndjson](Locations.US.States.WPATH.atRisk.20240128.ndjson)  

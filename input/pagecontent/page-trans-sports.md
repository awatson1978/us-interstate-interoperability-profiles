
The participation of transgender youth in sports has become a contentious issue in the United States, with state-level rulings creating a patchwork of policies that reflect diverse societal attitudes and legal interpretations. In some states, legislation has been enacted to fully support the inclusion of transgender athletes in school sports consistent with their gender identity, emphasizing principles of equality and non-discrimination. However, numerous other states have passed or are considering laws that restrict or outright ban the participation of transgender youth in sports aligning with their gender identity, often citing concerns about fair competition and physiological advantages. 

These policies outlining who can and cannot participate in certain activities frequently rely on pediatric medical records, and whether a student is under certain types of care regimines or not.  Similarly, these policies may restrict what physical activity goals and activities a clinician can prescribe to a patient; as well as what treatment and care plans are developed for the student / pediatric patient.

This state-by-state divergence not only underscores the polarized views on transgender rights and inclusion in the country but also places young athletes at the heart of a complex debate involving gender identity, sports ethics, and legal rights. As such, the situation highlights broader societal challenges and legal considerations surrounding the inclusion and fair treatment of transgender individuals in various aspects of public life.
![./Map-USStates-TransYouthParticipation.jpeg](./Map-USStates-TransYouthParticipation.jpg){:width="100%"}



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
                "code": "ActivityDefinition",
                "display": "ActivityDefinition",
                "system": "http://hl7.org/fhir/resource-types"
            }],
            "code": [{
                "text": "Sports",
                "coding": [{
                    "code": "14468000",
                    "display": "Sports activity (observable entity)",
                    "system": " http://snomed.info/sct"
                }, {
                "text": "Swimming",
                "coding": [{
                    "code": "20461001",
                    "display": "Swimming (qualifier value)",
                    "system": " http://snomed.info/sct"
                }]
            }]
        }]
    }
}
```


#### References  
[Bans on Transgender Youth Participation in Sports](https://www.lgbtmap.org/equality-maps/sports_participation_bans)  


#### Datasets
[Locations.US.States.TransParticipationSports.ndjson](Locations.US.States.TransParticipationSports.ndjson)  







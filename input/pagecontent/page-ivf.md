
In-Vitro Fertilization (IVF), a pivotal technique in assisted reproductive technology, varies significantly in accessibility and regulation across different states in the United States. States like Massachusetts, New York, New Jersey, Illinois, Oregon, Washington, California, Delaware, New Hampshire, Maryland, Minnesota, Colorado, and New Mexico each offer distinct IVF landscapes, influenced by local policies and medical infrastructure. Oregon, Colorado, and New Mexico stand out as leading states in IVF services, offering liberal approaches to reproductive health. Notably, Oregon also allows for 'death with dignity' assisted suicide, influencing its broader stance on medical autonomy. The regulatory environment in states like Arizona, traditionally an IVF hub, is shifting, potentially leading to a migration of IVF providers to more permissive states like New Mexico. Meanwhile, states like Delaware and New Hampshire, though not renowned for robust IVF options, provide safe and reliable environments. This state-by-state variation highlights the diverse legal and ethical frameworks governing reproductive technologies, significantly impacting the choices and experiences of individuals seeking IVF treatments.

<!-- MA, NY, NJ, IL, OR, WA, CA, DE, NH, MD, MN, CO, NM (New Mexico may end up taking over the Arizona IVF market...this is my prediction. Arizona has been the IVF version of Silicon Valley--but the leadership there are pushing embryo personhood. So I am trying to sway people from Arizona even though there is this hub for IVF. I am expecting Arizona providers to move to New Mexico) Delaware and New Hampshire arent really known for having strong IVF options, but those would be safe states. 

OR, CO, and NM are the three best...

Also worth noting Oregon has death with dignity assisted suicide for residents and 'death tourism' 

No restrictions of any kind on terminations in CO, OR, or NM. Late term terminations are allowed in other states with ethics committee approvals. -->


![./Map-USStates-IVF-Coverage.jpeg](./Map-USStates-IVF-Coverage.jpeg){:width="100%"}

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
                "text": "In-vitro fertilizaiton",
                "coding": [{
                    "code": "52637005",
                    "display": "Test tube ovum fertilization (procedure)",
                    "system": " http://snomed.info/sct"
                }]
            }]
        }]
    }
}
```

#### References  
[IVF insurance laws by state](https://fertilityspace.io/blog/ivf-insurance-laws-by-state)


#### Datasets
[Locations.US.States.IVF.20240128.ndjson](Locations.US.States.IVF.20240128.ndjson)  
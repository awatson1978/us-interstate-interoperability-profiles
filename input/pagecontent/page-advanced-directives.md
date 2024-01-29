
Witness requirements and notary public functions have been part of US jurisprudence since it’s founding, being largely based on English, French, and Spanish contract law respectively. Yet, these legal traditions each presented slightly different requirements, which eventually resulted in the situation where some US states require no signatures for advanced directives, others require a witness, some require two witnesses, and yet others require a notary public. To further complicate matters, COVID19 has created yet more variations in the law, in that people are now allowed to enter contracts remotely using online software services as a witness/notary intermediary.

![./Map-USStates-AdvancedDirectives.jpeg](./Map-USStates-AdvancedDirectives.jpeg){:width="100%"}

`New Mexico has no requirements for a notary public or witness to verify an advanced directive`  

#### Example Encoding  

```
{ 
    "resourceType": "Consent",
    "policy": {
        "authority": "https://www.wyo.gov/"
    },
    "verification": [],
    "provision": {
        "type": "permit",
        "purpose": [{
            "code": "CAREMGT",
            "display": "care management",
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason"
        }]
    }
}
```

`Florida requires an advanced directive to be verified (although it may be done online)`

```
{ 
    "resourceType": "Consent",
    "policy": {
        "authority": "https://www.wyo.gov/"
    },
    "verification": [{
        "verified": true,
        "verifiedWith: {
            "display": "Nancy Notary",
            "reference": "RelatedPerson/nancy-notary",
            "verificationDate": ""
        },
        "verificationDate": "2021-10-01"
    }],
    "provision": {
        "type": "permit",
        "purpose": [{
            "code": "CAREMGT",
            "display": "care management",
            "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason"
        }]
    }
}
```

#### References  
[Cross-sectional analysis of US scope of practice laws and employed physician assistants](https://bmjopen.bmj.com/content/bmjopen/11/5/e043972.full.pdf)  
[Answers To Urgent Questions Notaries Are Asking About Remote Online Notarization](https://www.nationalnotary.org/notary-bulletin/blog/2020/03/answers-urgent-questions-notaries-ron) 
[How to Become an Online Notary Guide](https://onenotary.us/how-to-become-an-online-notary-guide/)  
[Advance Care Planning in an Online World: State Law Activity and Challenges Since COVID-19](https://blog.petrieflom.law.harvard.edu/2021/08/25/advance-care-planning-online-covid/)  
[Find Advance Directives Forms By State](https://www.aarp.org/caregiving/financial-legal/free-printable-advance-directives/)  
  

#### Datasets
[Locations.US.States.AdvancedDirectives.20240128.ndjson](Locations.US.States.AdvancedDirectives.20240128.ndjson)  
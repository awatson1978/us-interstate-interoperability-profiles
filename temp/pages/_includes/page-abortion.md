
With the overturning of Roe vs Wade, patients must now consider where they are able to receive certain types of medical care.  

![./Map-Abortion.png](./Map-Abortion.png){:width="100%"}

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
        "provision": []
    }
}
```

#### References  
[Tracking where abortion laws stand in every state](https://www.theguardian.com/us-news/ng-interactive/2022/jun/28/tracking-where-abortion-laws-stand-in-every-state)
#### Abortion Access 

With the overturning of Roe vs Wade, patients must now consider where they are able to receive certain types of medical care.  The legal status and accessibility of abortion services differ markedly from state to state, influenced by political, cultural, and religious factors. In some states, laws are designed to protect and expand access to abortion, incorporating provisions for funding and protecting clinics, while in others, stringent restrictions are imposed, including mandatory waiting periods, counseling, and limitations on when and how abortions can be performed. This state-by-state approach has led to significant disparities in abortion access across the country, with some states serving as havens for those seeking services and others effectively limiting access through rigorous legislative measures. The varying state laws on abortion not only mirror the ongoing national debate over reproductive rights but also significantly impact the healthcare choices and autonomy of women across the United States.

![./Map-USStates-Abortion.jpeg](./Map-USStates-Abortion.jpeg){:width="100%"}

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


#### Datasets
[Locations.US.States.AbortionAccess.20230327.ndjson](Locations.US.States.AbortionAccess.20230327.ndjson)  
In this implementation guide, you will find 52 Location files; one for each of the US states, plus Puerto Rico and the District of Columbia.  Each Location record has been given extensions that contain demographics, public health, and jurisprudence data from the state it comes from.  


#### Design Goal - Situational Awareness Scorecard

The past few years since the outbreak of COVID19 have been chaotic and confusing.  Many laws have been suspended, discarded, created, overturned, blocked, repealed, or proposed.  If one asks the average citizen what the current legal status is on any particular hotbutton topic, there is liable to be a fair bit of guesswork, and the guesswork is liable to be either outdated or incorrectly generalizes from local policy.  

The design goal of this project is to create a state level scorecard of social impact metrics, jurisprudence, and adminsitrative policy that may influence clinical and patient decision making.  Any citizen, when they travel, should be able to pull up a computable record of a state's laws and administrative policies, to know what is allowed and not allowed.  


#### Example Record


> INDIANA
> - Does allow remote signing and notarization of Advanced Directives.
> - Does have expanded Medicaid.
> - Does _not_ allow medical or recreational cannabis use.
> - Does _not_ provide religious exemptions for medical personnel.  
> - Does allow limited access to abortion.  
> - Does allow LGBT families to foster and adopt children.
> - Does _not_ allow transgender youth to participate in sports leagues of their gender identity.
> - Does _not_ allow open carry without a permit.  



#### Example JSON

```json
{
  "resourceType" : "Location",
  "id" : "2cdHJo5nLPDtnbfnS",
  "text" : {
    "status" : "generated",
    "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Location</b><a name=\"2cdHJo5nLPDtnbfnS\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Location \"2cdHJo5nLPDtnbfnS\" </p></div><p><b>identifier</b>: id: IN, id: 0400000US18, id: 18</p><p><b>status</b>: active</p><p><b>name</b>: State of Indiana</p><p><b>address</b>: IN USA </p></div>"
  },
  "extension" : [
    {
      "url" : "geometry",
      "valueString" : "{\"type\":\"Polygon\",\"coordinates\":[[[-84.94013115373588,41.76055274291918],[-85.79136299999996,41.759050999999985],[-86.51931799999998,41.75944699999999],[-86.82482799999998,41.760239999999996],[-86.93482999999996,41.70963799999999],[-87.12032199999997,41.64570099999999],[-87.27843699999997,41.61973599999999],[-87.42343999999997,41.64283499999999],[-87.52404399999996,41.708335],[-87.52671099999999,41.121484999999986],[-87.52680899999999,40.46216999999999],[-87.53277599999997,39.971076999999994],[-87.53285813507851,39.955076575590645],[-87.53322699999998,39.883127],[-87.53164599999997,39.34788799999998],[-87.58908399999999,39.333830999999996],[-87.61004999999999,39.28223199999999],[-87.57455799999997,39.218403999999985],[-87.64043499999997,39.166726999999995],[-87.6322494615944,39.106802856534784],[-87.572588,39.05728599999999],[-87.57831899999996,38.98878599999999],[-87.51218699999998,38.954416999999985],[-87.55051499999996,38.85955999999999],[-87.49653699999996,38.778570999999985],[-87.51960899999999,38.69719799999999],[-87.62011999999997,38.63948899999999],[-87.66073213726838,38.54109223833309],[-87.65416629451647,38.51191070006829],[-87.73952231391027,38.475068996610595],[-87.74525399999997,38.40899599999999],[-87.98423399999997,38.20995999999999],[-87.92885769659567,38.168593871218874],[-87.98493108382918,38.0690075265212],[-88.02978979013868,38.025045983210795],[-88.01292899999997,37.96654399999998],[-88.05849937121748,37.86534899605099],[-88.02802999999999,37.79922399999997],[-87.94450599999998,37.77525599999999],[-87.90680999999998,37.80762399999999],[-87.93836499999996,37.890801999999994],[-87.90478899999998,37.92489199999999],[-87.83057799999997,37.87651599999998],[-87.684018,37.90349799999999],[-87.67239699999998,37.829127],[-87.61539899999997,37.83197399999999],[-87.59158199999999,37.887193999999994],[-87.62561599999998,37.933441999999985],[-87.58591599999997,37.975441999999994],[-87.54590099999997,37.92266599999999],[-87.53153199999998,37.916298],[-87.45045799999997,37.941450999999994],[-87.38024699999997,37.935595999999975],[-87.22094399999997,37.849133999999985],[-87.15887799999999,37.837870999999986],[-87.12753299999999,37.78504],[-87.07073199999998,37.80193699999999],[-87.03344399999997,37.906592999999994],[-86.91932899999998,37.93666399999999],[-86.85594999999998,37.98729199999998],[-86.79498499999998,37.988981999999986],[-86.75098999999999,37.91289299999999],[-86.68601499999997,37.913083999999984],[-86.59810799999997,37.86738199999999],[-86.58858099999998,37.92115899999999],[-86.53415599999997,37.917007],[-86.51728899999998,38.04263399999999],[-86.45219199999997,38.050489999999996],[-86.37532399999998,38.13062899999999],[-86.34773599999998,38.19536299999999],[-86.27180199999997,38.13787399999999],[-86.26689099999997,38.05712499999999],[-86.17898299999999,38.01130799999999],[-86.10815599999998,38.013415999999985],[-86.04845799999998,37.95936899999999],[-86.02065499999996,37.996115999999994],[-85.95146699999998,38.005607999999995],[-85.90616299999998,38.08616999999999],[-85.90876399999998,38.161168999999994],[-85.79156299999998,38.28856899999998],[-85.73874599999996,38.26936599999999],[-85.65364099999998,38.32710799999999],[-85.62052099999998,38.42310499999999],[-85.58775799999998,38.45049499999999],[-85.49886599999998,38.46824199999998],[-85.43313599999996,38.52391399999999],[-85.41582099999998,38.563558],[-85.43935099999999,38.61038799999999],[-85.45211399999997,38.70934799999999],[-85.41092499999998,38.73707999999999],[-85.25884599999998,38.73775399999998],[-85.19050699999998,38.687949999999994],[-85.13304899999999,38.702375],[-84.978723,38.77927999999999],[-84.94107099999998,38.77562699999999],[-84.94013115373588,38.775846726057615],[-84.932977,38.77751899999999],[-84.81164499999997,38.79276599999998],[-84.81274599999998,38.89513199999998],[-84.87776199999998,38.92035699999999],[-84.83711999999998,38.98805899999999],[-84.89717099999997,39.05240699999999],[-84.82015699999998,39.10547999999999],[-84.814179,39.814212],[-84.81312404251976,39.86552545022887],[-84.80391699999997,40.31011499999999],[-84.80216999999996,40.80060099999999],[-84.80391899999996,41.43553099999999],[-84.80608199999999,41.69608899999999],[-84.80588299999998,41.760215999999986],[-84.94013115373588,41.76055274291918]]]}"
    }, {
      "url" : "advanced_directives",
      "valueString": "remote allowed"
    }, {
      "url" : "medicaid_expansion",
      "valueString": "true"
    }, {
      "url" : "controlled_substances_cannabis",
      "valueString": "cbd-only"
    }, {
      "url" : "religious_exemptions",
      "valueString": "no exemptions"
    }, {
      "url" : "abortion",
      "valueString": "allowed"
    }, {
      "url" : "lgbt_foster_care",
      "valueString": "allowed"
    }, {
      "url" : "trans_youth_sports_participation",
      "valueString": "not allowed"
    }, {
      "url" : "open_carry",
      "valueString": "requires permit"
    }, {
      "url" : "max_highway_speed",
      "valueString": "65 mph"
    }
  ],
  "identifier" : [
    {
      "system" : "https://www.usps.com",
      "value" : "IN"
    },
    {
      "system" : "https://www.census.gov/",
      "value" : "0400000US18"
    },
    {
      "system" : "https://github.com/awatson1978/us-state-profiles/index",
      "value" : "18"
    }
  ],
  "status" : "active",
  "name" : "State of Indiana",
  "address" : {
    "state" : "IN",
    "country" : "USA"
  }
}
```

#### Extensions

- geometry
- advanced_directives
- medicaid_expansion
- controlled_substances_cannabis
- religious_exemptions
- abortion
- lgbt_foster_care
- trans_youth_sports_participation
- open_carry
- max_highway_speed




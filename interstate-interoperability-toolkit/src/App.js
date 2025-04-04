import React, { useState, useEffect } from 'react';
import {   
  FormControl,
  InputLabel,
  Input,
  Container, 
  Card, 
  CardContent, 
  Button, 
  Grid, 
  CardHeader, 
  CardActionArea,
  TextField,
  Typography, 
  Tabs, 
  Tab, 
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';

import "ace-builds";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

import { get, set } from 'lodash';

import usStatesLayer from './geodata/us_states';

import { trim } from 'lodash';

import GoogleMapReact from 'google-map-react';

import AbortionAccess from './geodata/Locations.US.States.AbortionAccess.20240128';
import AdvancedDirectives from './geodata/Locations.US.States.AdvancedDirectives.20240128';
import AssistedSuicide from './geodata/Locations.US.States.AssistedSuicide.20240128';
import DoulaAccess from './geodata/Locations.US.States.DoulaAccess.20240128'; 
import IvfFertilityCoverage from './geodata/Locations.US.States.IvfFertilityCoverage.20240128';
import LgbtFosterCare from './geodata/Locations.US.States.LgbtFosterCare.20240128';
import MedicaidExpansion from './geodata/Locations.US.States.MedicaidExpansion.20240128';
import MedicalCannabis from './geodata/Locations.US.States.MedicalCannabis.20240128';
import ReligiousExemptions from './geodata/Locations.US.States.ReligiousExemptions.20240128';
import TransParticipationSports from './geodata/Locations.US.States.TransParticipationSports.20240128';
import PediatricGenderMedicine from './geodata/Locations.US.States.PediatricGenderMedicine.20240128';

import LocationsUSStates from './geodata/Locations.US.States';

import ConsentAL from './geodata/Consent-AL';
// import ConsentAK from './geodata/Consent-AK';
import ConsentAZ from './geodata/Consent-AZ';
import ConsentAR from './geodata/Consent-AR';
import ConsentCA from './geodata/Consent-CA';
import ConsentCO from './geodata/Consent-CO';
import ConsentCT from './geodata/Consent-CT';
import ConsentDE from './geodata/Consent-DE';
// import ConsentDC from './geodata/Consent-DC';
import ConsentFL from './geodata/Consent-FL';
import ConsentGA from './geodata/Consent-GA';
// import ConsentHI from './geodata/Consent-HI';
import ConsentID from './geodata/Consent-ID';
import ConsentIL from './geodata/Consent-IL';
import ConsentIN from './geodata/Consent-IN';
import ConsentIA from './geodata/Consent-IA';
import ConsentKS from './geodata/Consent-KS';
import ConsentKY from './geodata/Consent-KY';
import ConsentLA from './geodata/Consent-LA';
import ConsentME from './geodata/Consent-ME';
import ConsentMD from './geodata/Consent-MD';
import ConsentMA from './geodata/Consent-MA';
import ConsentMI from './geodata/Consent-MI';
import ConsentMN from './geodata/Consent-MN';
import ConsentMS from './geodata/Consent-MS';
import ConsentMO from './geodata/Consent-MO';
import ConsentMT from './geodata/Consent-MT';
import ConsentNE from './geodata/Consent-NE';
import ConsentNV from './geodata/Consent-NV';
import ConsentNH from './geodata/Consent-NH';
import ConsentNJ from './geodata/Consent-NJ';
import ConsentNM from './geodata/Consent-NM';
import ConsentNY from './geodata/Consent-NY';
// import ConsentNC from './geodata/Consent-NC';
import ConsentND from './geodata/Consent-ND';
import ConsentOH from './geodata/Consent-OH';
import ConsentOK from './geodata/Consent-OK';
import ConsentOR from './geodata/Consent-OR';
import ConsentPA from './geodata/Consent-PA';
import ConsentRI from './geodata/Consent-RI';
import ConsentSC from './geodata/Consent-SC';
import ConsentSD from './geodata/Consent-SD';
import ConsentTN from './geodata/Consent-TN';
import ConsentTX from './geodata/Consent-TX';
import ConsentUT from './geodata/Consent-UT';
import ConsentVT from './geodata/Consent-VT';
import ConsentVA from './geodata/Consent-VA';
import ConsentWA from './geodata/Consent-WA';
import ConsentWV from './geodata/Consent-WV';
// import ConsentWI from './geodata/Consent-WI';
// import ConsentWY from './geodata/Consent-WY';


console.log('ConsentAL', ConsentAL)




var minimongo = require("minimongo");
var LocalDb = minimongo.MemoryDb;

// Create local db (in memory database with no backing)
let db = new LocalDb();

// Add a collection to the database
db.addCollection("Locations");

window.Locations = db.Locations;



function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const defaultProps = {
  center: {
    lat: 40.45547863646648,
    lng: -79.79213968653004
  },
  zoom: 6,
  options: {
    panControl: false,
    mapTypeControl: false,
    scrollwheel: false,
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      // {
      //   "featureType": "poi.park",
      //   "elementType": "geometry",
      //   "stylers": [
      //     {
      //       "color": "#e5e5e5"
      //     }
      //   ]
      // },
      // {
      //   "featureType": "poi.park",
      //   "elementType": "labels.text.fill",
      //   "stylers": [
      //     {
      //       "color": "#9e9e9e"
      //     }
      //   ]
      // },
      // {
      //   "featureType": "road",
      //   "elementType": "geometry",
      //   "stylers": [
      //     {
      //       "color": "#ffffff"
      //     }
      //   ]
      // },
      // {
      //   "featureType": "road.arterial",
      //   "elementType": "labels.text.fill",
      //   "stylers": [
      //     {
      //       "color": "#757575"
      //     }
      //   ]
      // },
      // {
      //   "featureType": "road.highway",
      //   "elementType": "geometry",
      //   "stylers": [
      //     {
      //       "color": "#dadada"
      //     }
      //   ]
      // },
      // {
      //   "featureType": "road.highway",
      //   "elementType": "labels.text.fill",
      //   "stylers": [
      //     {
      //       "color": "#616161"
      //     }
      //   ]
      // },
      // {
      //   "featureType": "road.local",
      //   "elementType": "labels.text.fill",
      //   "stylers": [
      //     {
      //       "color": "#9e9e9e"
      //     }
      //   ]
      // },
      // {
      //   "featureType": "transit.line",
      //   "elementType": "geometry",
      //   "stylers": [
      //     {
      //       "color": "#e5e5e5"
      //     }
      //   ]
      // },
      // {
      //   "featureType": "transit.station",
      //   "elementType": "geometry",
      //   "stylers": [
      //     {
      //       "color": "#eeeeee"
      //     }
      //   ]
      // },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      // {
      //   "featureType": "water",
      //   "elementType": "labels.text.fill",
      //   "stylers": [
      //     {
      //       "color": "#9e9e9e"
      //     }
      //   ]
      // }
    ]
  }
};

function App(){

  let pipe;

  let [advancedDirectiveLocations, setAdvancedDirectiveLocations] = useState([]);

  useEffect(async function(){
    initializeStates();
    handleGenerateGeoJson();

    

  }, [])

  let [locationsArray, setLocationsArray] = useState([]);
  
  let [geoJsonObject, setGeoJsonObject] = useState({});
  let [lastUpdated, setLastUpdated] = useState(new Date());
  let [comparisonLastUpdated, setComparisonLastUpdated] = useState(new Date());
  let [editorMode, setEditorMode] = useState("text");
  
  let [listOfStateAcronyms, setListOfStateAcronyms] = useState("");
  let [currentRenderColor, setCurrentRenderColor] = useState("#999999");

  let [googleMapsApiKey, setGoogleMapsApiKey] = useState("");
  let [mapKey, setMapKey] = useState(new Date());
  
  let [value, setValue] = React.useState(0);

  let [doulaRestricted, setDoulaRestricted] = useState(false);
  let [medicaidRestricted, setMedicaidRestricted] = useState(false);
  let [religiousRestricted, setReligiousRestricted] = useState(false);
  let [abortionRestricted, setAbortionRestricted] = useState(false);
  let [ivfFertilityRestricted, setIvfFertilityRestricted] = useState(false);
  let [cannabisRestricted, setCannabisRestricted] = useState(false);
  let [lgbtFosterCareRestricted, setLgbtFosterCareRestricted] = useState(false);
  let [suicideRestricted, setSuicideRestricted] = useState(false);
  let [transParticipationRestricted, setTransParticipationRestricted] = useState(false);
  let [wpathRestricted, setWpathRestricted] = useState(false);
  let [advancedDirectivesRestricted, setAdvancedDirectivesRestricted] = useState(false);
  let [openCarryRestricted, setOpenCarryRestricted] = useState(false);
  let [psilocybinRestricted, setPsilocybinRestricted] = useState(false);

  let [doulaRestricted2, setDoulaRestricted2] = useState(false);
  let [medicaidRestricted2, setMedicaidRestricted2] = useState(false);
  let [religiousRestricted2, setReligiousRestricted2] = useState(false);
  let [abortionRestricted2, setAbortionRestricted2] = useState(false);
  let [ivfFertilityRestricted2, setIvfFertilityRestricted2] = useState(false);
  let [cannabisRestricted2, setCannabisRestricted2] = useState(false);
  let [lgbtFosterCareRestricted2, setLgbtFosterCareRestricted2] = useState(false);
  let [suicideRestricted2, setSuicideRestricted2] = useState(false);
  let [transParticipationRestricted2, setTransParticipationRestricted2] = useState(false);
  let [wpathRestricted2, setWpathRestricted2] = useState(false);
  let [advancedDirectivesRestricted2, setAdvancedDirectivesRestricted2] = useState(false);
  let [openCarryRestricted2, setOpenCarryRestricted2] = useState(false);
  let [psilocybinRestricted2, setPsilocybinRestricted2] = useState(false);


  let [stateName, setStateName] = useState("");
  let [stateAcronym, setStateAcronym] = useState("");

  let [stateNameComparison, setStateNameComparison] = useState("");
  let [stateAcronymComparison, setStateAcronymComparison] = useState("");

  let [addressSearch, setAddressSearch] = useState("");
  let [secondaryAddressSearch, setSecondaryAddressSearch] = useState("");

  let [mapProps, setMapProps] = useState(defaultProps);
  let [secondMapProps, setSecondMapProps] = useState(defaultProps);
  let [currentLocationGeoJson, setCurrentLocationGeoJson] = useState(null);
  let [secondaryLocationGeoJson, setSecondaryLocationGeoJson] = useState(null);


  let [geocodeData, setGeocodeData] = useState({});
  let [geocodeDataComparison, setGeocodeDataComparison] = useState({});
  
  let [secondaryFhirConsent, setSecondaryFhirConsent] = useState(null);
  let [fhirConsent, setFhirConsent] = useState({
    "resourceType": "Consent",
    "id": "example",
    "status": "active",
    "category": [{
      "coding": [{
        "code": "57017-6",
        "display": "Privacy policy Organization Document",
        "system": "http://loinc.org"
      }]
    }],
    "scope": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/consentscope",
          "code": "patient-privacy",
          "display": "Privacy Consent"
        }
      ]
    },
    "dateTime": new Date(),
    "organization": [
      {
        "display": "",
        "reference": ""
      }
    ],
    "sourceAttachment": {
      "title": "The terms of the consent in lawyer speak.",
      "creation": "2016-08-22"
    },
    "provision": {
      "type": "permit",
      "provision": []
    }
  });

  function handleToggleDoulas(){
    console.log('handleToggleDoulas', doulaRestricted)   
    
    if(doulaRestricted){
      let newFhirConsent = fhirConsent;
      let provisionsArray = get(newFhirConsent, 'provision.provision');
      if(Array.isArray(provisionsArray)){
        let newProvisionsArray = [];
        provisionsArray.forEach(function(provision){
          if(get(provision, 'code[0].text') !== "Doula"){
            newProvisionsArray.push(provision);
          }
        })
        set(newFhirConsent, 'provision.provision', newProvisionsArray);
        setFhirConsent(newFhirConsent);
        setDoulaRestricted(false);
      }
    } else {
      let newFhirConsent = fhirConsent;
      let newProvisionsArray = get(newFhirConsent, 'provision.provision');
      if(Array.isArray(newProvisionsArray)){

        let doesntExist = true;
        newProvisionsArray.forEach(function(provision){
          if(get(provision, 'code.text') === "Doula"){
            doesntExist = false
          }
        })

        if(doesntExist){
          newProvisionsArray.push({
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
          })  
        }


        set(newFhirConsent, 'provision.provision', newProvisionsArray);
        setFhirConsent(newFhirConsent);
        setDoulaRestricted(true);
      }
    }
  }
  function handleToggleCannabis(){

    console.log('handleToggleCannabis', cannabisRestricted)   
    
    if(cannabisRestricted){
      let newFhirConsent = fhirConsent;
      let provisionsArray = get(newFhirConsent, 'provision.provision');
      if(Array.isArray(provisionsArray)){
        let newProvisionsArray = [];
        provisionsArray.forEach(function(provision){
          if(get(provision, 'code[0].text') !== "Cannabis"){
            newProvisionsArray.push(provision);
          }
        })
        set(newFhirConsent, 'provision.provision', newProvisionsArray);
        setFhirConsent(newFhirConsent);
        setCannabisRestricted(false);
      }
    } else {
      let newFhirConsent = fhirConsent;
      let newProvisionsArray = get(newFhirConsent, 'provision.provision');
      if(Array.isArray(newProvisionsArray)){

        let doesntExist = true;
        newProvisionsArray.forEach(function(provision){
          if(get(provision, 'code.text') === "Cannabis"){
            doesntExist = false
          }
        })

        if(doesntExist){
          newProvisionsArray.push({
            "type": "deny",
            "class": [{
                "code": "Medication",
                "display": "Medication",
                "system": "http://hl7.org/fhir/resource-types"
            }],
            "code": [{
                "text": "Cannabis",
                "coding": [{
                    "code": "1484855",
                    "display": "Cannabis sativa subsp. flowering top extract",
                    "system": " http://www.nlm.nih.gov/research/umls/rxnorm#rxcui"
                }]
            }]
          })  
        }

        set(newFhirConsent, 'provision.provision', newProvisionsArray);
        setFhirConsent(newFhirConsent);
        setCannabisRestricted(true);
      }
    }



  }
  function handleToggleMedicaid(){
    console.log('handleToggleCannabis', medicaidRestricted)   
    
    if(medicaidRestricted){
      let newFhirConsent = fhirConsent;
      let provisionsArray = get(newFhirConsent, 'provision.provision');
      if(Array.isArray(provisionsArray)){
        let newProvisionsArray = [];
        provisionsArray.forEach(function(provision){
          if(get(provision, 'code[0].text') !== "Medicaid Expansion"){
            newProvisionsArray.push(provision);
          }
        })
        set(newFhirConsent, 'provision.provision', newProvisionsArray);
        setFhirConsent(newFhirConsent);
        setMedicaidRestricted(false);
      }
    } else {
      let newFhirConsent = fhirConsent;
      let newProvisionsArray = get(newFhirConsent, 'provision.provision');
      if(Array.isArray(newProvisionsArray)){

        let doesntExist = true;
        newProvisionsArray.forEach(function(provision){
          if(get(provision, 'code.text') === "Medicaid Expansion"){
            doesntExist = false
          }
        })

        if(doesntExist){
          newProvisionsArray.push({
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
            }]
          })  
        }

        set(newFhirConsent, 'provision.provision', newProvisionsArray);
        setFhirConsent(newFhirConsent);
        setMedicaidRestricted(true);
      }
    }
  }
  function handleToggleAbortion(){
    console.log('handleToggleAbortion', abortionRestricted)   
    
    if(abortionRestricted){
      let newFhirConsent = fhirConsent;
      let provisionsArray = get(newFhirConsent, 'provision.provision');
      if(Array.isArray(provisionsArray)){
        let newProvisionsArray = [];
        provisionsArray.forEach(function(provision){
          if(get(provision, 'code[0].text') !== "Abortion"){
            newProvisionsArray.push(provision);
          }
        })
        set(newFhirConsent, 'provision.provision', newProvisionsArray);
        setFhirConsent(newFhirConsent);
        setAbortionRestricted(false);
      }
    } else {
      let newFhirConsent = fhirConsent;
      let newProvisionsArray = get(newFhirConsent, 'provision.provision');
      if(Array.isArray(newProvisionsArray)){

        let doesntExist = true;
        newProvisionsArray.forEach(function(provision){
          if(get(provision, 'code.text') === "Abortion"){
            doesntExist = false
          }
        })

        if(doesntExist){
          newProvisionsArray.push({
            "type": "deny",
            "class": [{
                "code": "Procedure",
                "display": "Procedure",
                "system": "http://hl7.org/fhir/resource-types"
            }],
            "code": [{
                "text": "Abortion",
                "coding": [{
                    "code": "386639001",
                    "display": "Termination of pregnancy (procedure)",
                    "system": " http://snomed.info/sct"
                }]
            }]
          })  
        }

        set(newFhirConsent, 'provision.provision', newProvisionsArray);
        setFhirConsent(newFhirConsent);
        setAbortionRestricted(true);
      }
    }
  }
  function handleToggleFertility(){
    console.log('handleToggleFertility', ivfFertilityRestricted)   
    
    if(ivfFertilityRestricted){
      let newFhirConsent = fhirConsent;
      let provisionsArray = get(newFhirConsent, 'provision.provision');
      if(Array.isArray(provisionsArray)){
        let newProvisionsArray = [];
        provisionsArray.forEach(function(provision){
          if(get(provision, 'code[0].text') !== "In-vitro fertilization"){
            newProvisionsArray.push(provision);
          }
        })
        set(newFhirConsent, 'provision.provision', newProvisionsArray);
        setFhirConsent(newFhirConsent);
        setIvfFertilityRestricted(false);
      }
    } else {
      let newFhirConsent = fhirConsent;
      let newProvisionsArray = get(newFhirConsent, 'provision.provision');
      if(Array.isArray(newProvisionsArray)){

        let doesntExist = true;
        newProvisionsArray.forEach(function(provision){
          if(get(provision, 'code.text') === "In-vitro fertilization"){
            doesntExist = false
          }
        })

        if(doesntExist){
          newProvisionsArray.push({
            "type": "permit",
            "class": [{
                "code": "Coverage",
                "display": "Coverage",
                "system": "http://hl7.org/fhir/resource-types"
            }],
            "code": [{
                "text": "In-vitro fertilization",
                "coding": [{
                    "code": "52637005",
                    "display": "Test tube ovum fertilization (procedure)",
                    "system": " http://snomed.info/sct"
                }]
            }]
        })  
        }

        set(newFhirConsent, 'provision.provision', newProvisionsArray);
        setFhirConsent(newFhirConsent);
        setIvfFertilityRestricted(true);
      }
    }
  }
  function handleToggleSuicide(){

    console.log('handleToggleSuicide', suicideRestricted)   
    
    if(suicideRestricted){
      let newFhirConsent = fhirConsent;
      let provisionsArray = get(newFhirConsent, 'provision.provision');
      if(Array.isArray(provisionsArray)){
        let newProvisionsArray = [];
        provisionsArray.forEach(function(provision){
          if(get(provision, 'code[0].text') !== "Assisted suicide"){
            newProvisionsArray.push(provision);
          }
        })
        set(newFhirConsent, 'provision.provision', newProvisionsArray);
        setFhirConsent(newFhirConsent);
        setSuicideRestricted(false);
      }
    } else {
      let newFhirConsent = fhirConsent;
      let newProvisionsArray = get(newFhirConsent, 'provision.provision');
      if(Array.isArray(newProvisionsArray)){

        let doesntExist = true;
        newProvisionsArray.forEach(function(provision){
          if(get(provision, 'code.text') === "Assisted suicide"){
            doesntExist = false
          }
        })

        if(doesntExist){
          newProvisionsArray.push({
            "type": "permit",
            "class": [{
                "code": "Procedure",
                "display": "Procedure",
                "system": "http://hl7.org/fhir/resource-types"
            }],
            "code": [{
                "text": "Assisted suicide",
                "coding": [{
                    "code": "51709005",
                    "display": "Assisted suicide (event)",
                    "system": " http://snomed.info/sct"
                }]
            }]
          })  
        }

        set(newFhirConsent, 'provision.provision', newProvisionsArray);
        setFhirConsent(newFhirConsent);
        setSuicideRestricted(true);
      }
    }
  }
  function handleToggleReligious(){
    console.log('handleToggleReligious', religiousRestricted)   
    
    if(religiousRestricted){
      let newFhirConsent = fhirConsent;
      let provisionsArray = get(newFhirConsent, 'provision.provision');
      if(Array.isArray(provisionsArray)){
        let newProvisionsArray = [];
        provisionsArray.forEach(function(provision){
          if(get(provision, 'code[0].text') !== "Decline"){
            newProvisionsArray.push(provision);
          }
        })
        set(newFhirConsent, 'provision.provision', newProvisionsArray);
        setFhirConsent(newFhirConsent);
        setReligiousRestricted(false);
      }
    } else {
      let newFhirConsent = fhirConsent;
      let newProvisionsArray = get(newFhirConsent, 'provision.provision');
      if(Array.isArray(newProvisionsArray)){

        let doesntExist = true;
        newProvisionsArray.forEach(function(provision){
          if(get(provision, 'code.text') === "Decline"){
            doesntExist = false
          }
        })

        if(doesntExist){
          newProvisionsArray.push({
            "type": "permit",
            "class": [{
                "code": "Practitioner",
                "display": "Practitioner",
                "system": "http://hl7.org/fhir/resource-types"
            }],
            "code": [{
                "text": "Decline",
                "coding": [{
                    "code": "443390004",
                    "display": "Refused (qualifier value)",
                    "system": " http://snomed.info/sct"
                }]
            }]
        })  
        }

        set(newFhirConsent, 'provision.provision', newProvisionsArray);
        setFhirConsent(newFhirConsent);
        setReligiousRestricted(true);
      }
    }
  }
  function handleToggleLgbt(){

    console.log('handleToggleLgbt', lgbtFosterCareRestricted)   
    
    if(lgbtFosterCareRestricted){
      let newFhirConsent = fhirConsent;
      let provisionsArray = get(newFhirConsent, 'provision.provision');
      if(Array.isArray(provisionsArray)){
        let newProvisionsArray = [];
        provisionsArray.forEach(function(provision){
          if(get(provision, 'code[0].text') !== "Marital Status"){
            newProvisionsArray.push(provision);
          }
        })
        set(newFhirConsent, 'provision.provision', newProvisionsArray);
        setFhirConsent(newFhirConsent);
        setLgbtFosterCareRestricted(false);
      }
    } else {
      let newFhirConsent = fhirConsent;
      let newProvisionsArray = get(newFhirConsent, 'provision.provision');
      if(Array.isArray(newProvisionsArray)){

        let doesntExist = true;
        newProvisionsArray.forEach(function(provision){
          if(get(provision, 'code.text') === "Marital Status"){
            doesntExist = false
          }
        })

        if(doesntExist){
          newProvisionsArray.push({
            "type": "permit",
            "class": [{
                "code": "RelatedPerson",
                "display": "RelatedPerson",
                "system": "http://hl7.org/fhir/resource-types"
            }],
            "code": [{
                "text": "Marital Status",
                "coding": [{
                    "code": "P",
                    "display": "Polygamous",
                    "system": "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus"
                }, {
                    "code": "T",
                    "display": "Domestic partner",
                    "system": "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus"
                }]
            }, {
                "text": "relation",
                "coding": [{
                    "code": "FTHFOST",
                    "display": "Foster Father",
                    "system": "http://terminology.hl7.org/ValueSet/v3-FamilyMember"
                },{
                    "code": "MTHFOST",
                    "display": "Foster Mother",
                    "system": "http://terminology.hl7.org/ValueSet/v3-FamilyMember"
                },{
                    "code": "PRNFOST",
                    "display": "Foster Parent",
                    "system": "http://terminology.hl7.org/ValueSet/v3-FamilyMember"
                }]
            }]
          })  
        }

        set(newFhirConsent, 'provision.provision', newProvisionsArray);
        setFhirConsent(newFhirConsent);
        setLgbtFosterCareRestricted(true);
      }
    }
  }
  function handleToggleTransParticipation(){

    console.log('handleToggleTransParticipation', transParticipationRestricted)   
    
    if(transParticipationRestricted){
      let newFhirConsent = fhirConsent;
      let provisionsArray = get(newFhirConsent, 'provision.provision');
      if(Array.isArray(provisionsArray)){
        let newProvisionsArray = [];
        provisionsArray.forEach(function(provision){
          if(get(provision, 'code[0].text') !== "Sports"){
            newProvisionsArray.push(provision);
          }
        })
        set(newFhirConsent, 'provision.provision', newProvisionsArray);
        setFhirConsent(newFhirConsent);
        setTransParticipationRestricted(false);
      }
    } else {
      let newFhirConsent = fhirConsent;
      let newProvisionsArray = get(newFhirConsent, 'provision.provision');
      if(Array.isArray(newProvisionsArray)){

        let doesntExist = true;
        newProvisionsArray.forEach(function(provision){
          if(get(provision, 'code.text') === "Sports"){
            doesntExist = false
          }
        })

        if(doesntExist){
          newProvisionsArray.push({
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
          });  
        }

        set(newFhirConsent, 'provision.provision', newProvisionsArray);
        setFhirConsent(newFhirConsent);
        setTransParticipationRestricted(true);
      }
    }
  }
  function handleToggleWpath(){

    console.log('handleToggleWpath', wpathRestricted)   
    
    if(wpathRestricted){
      let newFhirConsent = fhirConsent;
      let provisionsArray = get(newFhirConsent, 'provision.provision');
      if(Array.isArray(provisionsArray)){
        let newProvisionsArray = [];
        provisionsArray.forEach(function(provision){
          if(get(provision, 'code[0].text') !== "Hormone replacement therapy"){
            newProvisionsArray.push(provision);
          }
        })
        set(newFhirConsent, 'provision.provision', newProvisionsArray);
        setFhirConsent(newFhirConsent);
        setWpathRestricted(false);
      }
    } else {
      let newFhirConsent = fhirConsent;
      let newProvisionsArray = get(newFhirConsent, 'provision.provision');
      if(Array.isArray(newProvisionsArray)){

        let doesntExist = true;
        newProvisionsArray.forEach(function(provision){
          if(get(provision, 'code.text') === "Hormone replacement therapy"){
            doesntExist = false
          }
        })

        if(doesntExist){
          newProvisionsArray.push({
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
              }]
            }]
          })  
        }

        set(newFhirConsent, 'provision.provision', newProvisionsArray);
        setFhirConsent(newFhirConsent);
        setWpathRestricted(true);
      }
    }
  }
  function handleToggleAdvancedDirective(){

    console.log('handleToggleWpath', advancedDirectivesRestricted)   
    
    if(advancedDirectivesRestricted){
      let newFhirConsent = fhirConsent;
      let provisionsArray = get(newFhirConsent, 'provision.provision');
      if(Array.isArray(provisionsArray)){
        let newProvisionsArray = [];
        provisionsArray.forEach(function(provision){
          if(get(provision, 'code[0].text') !== "Power of Attorney"){
            newProvisionsArray.push(provision);
          }
        })
        set(newFhirConsent, 'provision.provision', newProvisionsArray);
        setFhirConsent(newFhirConsent);
        setAdvancedDirectivesRestricted(false);
      }
    } else {
      let newFhirConsent = fhirConsent;
      let newProvisionsArray = get(newFhirConsent, 'provision.provision');
      if(Array.isArray(newProvisionsArray)){

        let doesntExist = true;
        newProvisionsArray.forEach(function(provision){
          if(get(provision, 'code.text') === "Power of Attorney"){
            doesntExist = false
          }
        })

        if(doesntExist){
          newProvisionsArray.push({
            "type": "permit",
            "class": [{
                "code": "RelatedPerson",
                "display": "RelatedPerson",
                "system": "http://hl7.org/fhir/resource-types"
            }],
            "code": [{
                "text": "Power of Attorney",
                "coding": [{
                    "code": "POWATT",
                    "display": "power of attorney",
                    "system": " http://hl7.org/fhir/ValueSet/relatedperson-relationshiptype"
                }]
            }]
          })  
        }

        set(newFhirConsent, 'provision.provision', newProvisionsArray);
        setFhirConsent(newFhirConsent);
        setAdvancedDirectivesRestricted(true);
      }
    }
  }
  function handleToggleOpenCarry(){
    // console.log('handleToggleWpath', advancedDirectivesRestricted)   
    
    // if(advancedDirectivesRestricted){
    //   let newFhirConsent = fhirConsent;
    //   let provisionsArray = get(newFhirConsent, 'provision.provision');
    //   if(Array.isArray(provisionsArray)){
    //     let newProvisionsArray = [];
    //     provisionsArray.forEach(function(provision){
    //       if(get(provision, 'code[0].text') !== "Hormone replacement therapy"){
    //         newProvisionsArray.push(provision);
    //       }
    //     })
    //     set(newFhirConsent, 'provision.provision', newProvisionsArray);
    //     setFhirConsent(newFhirConsent);
    //     setAdvancedDirectivesRestricted(false);
    //   }
    // } else {
    //   let newFhirConsent = fhirConsent;
    //   let newProvisionsArray = get(newFhirConsent, 'provision.provision');
    //   if(Array.isArray(newProvisionsArray)){

    //     let doesntExist = true;
    //     newProvisionsArray.forEach(function(provision){
    //       if(get(provision, 'code.text') === "Hormone replacement therapy"){
    //         doesntExist = false
    //       }
    //     })

    //     if(doesntExist){
    //       newProvisionsArray.push({
    //         "type": "permit",
    //         "class": [{
    //             "code": "RelatedPerson",
    //             "display": "RelatedPerson",
    //             "system": "http://hl7.org/fhir/resource-types"
    //         }],
    //         "code": [{
    //             "text": "Power of Attorney",
    //             "coding": [{
    //                 "code": "POWATT",
    //                 "display": "power of attorney",
    //                 "system": " http://hl7.org/fhir/ValueSet/relatedperson-relationshiptype"
    //             }]
    //         }]
    //       })  
    //     }

    //     set(newFhirConsent, 'provision.provision', newProvisionsArray);
    //     setFhirConsent(newFhirConsent);
    //     setAdvancedDirectivesRestricted(true);
    //   }
    // }
  }

  function handleTogglePsilcybin(){
    // console.log('handleToggleWpath', advancedDirectivesRestricted)   
    
    // if(advancedDirectivesRestricted){
    //   let newFhirConsent = fhirConsent;
    //   let provisionsArray = get(newFhirConsent, 'provision.provision');
    //   if(Array.isArray(provisionsArray)){
    //     let newProvisionsArray = [];
    //     provisionsArray.forEach(function(provision){
    //       if(get(provision, 'code[0].text') !== "Hormone replacement therapy"){
    //         newProvisionsArray.push(provision);
    //       }
    //     })
    //     set(newFhirConsent, 'provision.provision', newProvisionsArray);
    //     setFhirConsent(newFhirConsent);
    //     setAdvancedDirectivesRestricted(false);
    //   }
    // } else {
    //   let newFhirConsent = fhirConsent;
    //   let newProvisionsArray = get(newFhirConsent, 'provision.provision');
    //   if(Array.isArray(newProvisionsArray)){

    //     let doesntExist = true;
    //     newProvisionsArray.forEach(function(provision){
    //       if(get(provision, 'code.text') === "Hormone replacement therapy"){
    //         doesntExist = false
    //       }
    //     })

    //     if(doesntExist){
    //       newProvisionsArray.push({
    //         "type": "permit",
    //         "class": [{
    //             "code": "RelatedPerson",
    //             "display": "RelatedPerson",
    //             "system": "http://hl7.org/fhir/resource-types"
    //         }],
    //         "code": [{
    //             "text": "Power of Attorney",
    //             "coding": [{
    //                 "code": "POWATT",
    //                 "display": "power of attorney",
    //                 "system": " http://hl7.org/fhir/ValueSet/relatedperson-relationshiptype"
    //             }]
    //         }]
    //       })  
    //     }

    //     set(newFhirConsent, 'provision.provision', newProvisionsArray);
    //     setFhirConsent(newFhirConsent);
    //     setAdvancedDirectivesRestricted(true);
    //   }
    // }
  }

  // function handleToggleDoulas2(){
  //   setDoulaRestricted2(!doulaRestricted2);
  // }
  // function handleToggleCannabis2(){
  //   setCannabisRestricted2(!cannabisRestricted2);
  // }
  // function handleToggleMedicaid2(){
  //   setMedicaidRestricted2(!medicaidRestricted2);
  // }
  // function handleToggleAbortion2(){
  //   setAbortionRestricted2(!abortionRestricted2);
  // }
  // function handleToggleFertility2(){
  //   setIvfFertilityRestricted2(!ivfFertilityRestricted2);
  // }
  // function handleToggleSuicide2(){
  //   setSuicideRestricted2(!suicideRestricted2);
  // }
  // function handleToggleReligious2(){
  //   setReligiousRestricted2(!religiousRestricted2);
  // }
  // function handleToggleLgbt2(){
  //   setLgbtFosterCareRestricted2(!lgbtFosterCareRestricted2);
  // }
  // function handleToggleTransParticipation2(){
  //   setTransParticipationRestricted2(!transParticipationRestricted2);
  // }
  // function handleToggleWpath2(){
  //   setWpathRestricted2(!wpathRestricted2);
  // }
  // function handleToggleAdvancedDirective2(){
  //   setAdvancedDirectivesRestricted2(!advancedDirectivesRestricted2);
  // }
  // function handleToggleOpenCarry2(){
  //   setOpenCarryRestricted2(!openCarryRestricted2);
  // }
  // function handleTogglePsilcybin2(){
  //   setPsilocybinRestricted2(!psilocybinRestricted2);
  // }


  function handleFhirConsentUpdate(newValue){
    
    let newFhirConsent;
    
    if(typeof newValue === "string"){
      newFhirConsent = JSON.parse(newValue.trim());
    } else if(typeof newValue === "object"){
      newFhirConsent = newValue;
    }
    
    console.log('handleFhirConsentUpdate', newFhirConsent)

    setFhirConsent(newFhirConsent)

    setStateName(get(newFhirConsent, 'organization[0].display'));
    setStateAcronym(get(newFhirConsent, 'organization[0].reference'));

    let provisions = get(newFhirConsent, 'provision.provision');

    console.log('provisions', provisions);

    if(Array.isArray(provisions)){
      provisions.forEach(function(provision){
        switch (get(provision, 'code[0].text')) {
          case 'Doula':
            setDoulaRestricted(true);
            break;
          case 'Cannabis':
            setCannabisRestricted(true);
            break;
          case 'Medicaid Expansion':
            setMedicaidRestricted(true);            
            break;
          case 'Abortion':
            setAbortionRestricted(true);
            break;
          case 'In-vitro fertilization':
            setIvfFertilityRestricted(true);
            break;
          case 'Assisted suicide':
            setSuicideRestricted(true);
            break;
          case 'Decline':
            setReligiousRestricted(true);
            break;
          case 'Marital Status':
            setLgbtFosterCareRestricted(true);
            break;
          case 'Sports':
            setTransParticipationRestricted(true);
            break;
          case 'Hormone replacement therapy':
            setWpathRestricted(true);
            break;
          case 'Power of Attorney':
            setAdvancedDirectivesRestricted(true);
            break;
          case 'Open Carry':
            // setOpenCarryRestricted();
            break;
          case 'Medical Psilocybin':
            // setPsilocybinRestricted();
            break;        
          default:
            break;
        }
      })      
    }
  }

  function handleUpdateStateName(event){
    setStateName(event.currentTarget.value);

    let newFhirConsent = fhirConsent;
    set(newFhirConsent, 'organization[0].display', event.currentTarget.value);
    setFhirConsent(newFhirConsent);
  }
  function handleUpdateStateAcronym(event){
    setStateAcronym(event.currentTarget.value);

    let newFhirConsent = fhirConsent;
    set(newFhirConsent, 'organization[0].reference', event.currentTarget.value);
    setFhirConsent(newFhirConsent);
  }






  function handleGeojsonChange(newValue){
    console.log('handleGeojsonChange', newValue)
    setGeoJsonObject(newValue)
    setLastUpdated(new Date());
  }



  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  let handleChange = (event, newValue) => {
    setValue(newValue);
  };


  async function updateLocationsBasedOnNewStateColoring(arrayOfStateAcronyms){

    console.log('updateLocationsBasedOnNewStateColoring', arrayOfStateAcronyms)
    // ------------------------------------------------------------------
    // Create our NDJSON




    if(Array.isArray(arrayOfStateAcronyms)){
      arrayOfStateAcronyms.forEach(async function(state){
        
        if(state.length > 0){
          console.log('state.trim()', state.trim())

          let currentLocation = await db.Locations.findOne({
            'address.state': state.trim()
          })
          // console.log('currentLocation', currentLocation)
  
          let newExtensions = [];
          let oldExtensions = get(currentLocation, 'extension');
          console.log('oldExtensions', oldExtensions)
  
          if(Array.isArray(oldExtensions)){
            oldExtensions.forEach(function(extension){
              if(get(extension, 'url') === "geometry"){
                newExtensions.push(extension);
              }
            })
          }
          
          newExtensions.push({
            "url": "render_color",
            "valueString": currentRenderColor
          })
          console.log('newExtensions', newExtensions);
          set(currentLocation, 'extension', newExtensions);
          
          // console.log('currentLocation', currentLocation);
  
          if(!get(currentLocation, 'id')){
            set(currentLocation, 'id', 'US-State-' + state.trim())
          }
          if(!get(currentLocation, '_id')){
            set(currentLocation, '_id', 'US-State-' + state.trim())
          }
  
          await db.Locations.upsert(currentLocation, async function(result){
            console.log('result', result)

            let collatedArray = await db.Locations.find().fetch();
            // console.log('collatedArray', collatedArray);        
            setLocationsArray(collatedArray);        
          }, function(error){
            console.log('error', error)
          })
  
        } else {
          console.log('state is empty.  Skipping update.')
        }
      })
    } else {
      console.log('arrayOfStateAcronyms is not an array.  Skipping update.')
    }
  }

  async function handleUpdateStateInfo(props) {
    console.log('Updating state info based on the list of states: ' + listOfStateAcronyms);

    // ------------------------------------------------------------------
    // Create our map layer

    // let locationsArray = await db.Locations.find().fetch();
    // console.log('locationsArray', locationsArray);



    await updateLocationsBasedOnNewStateColoring(listOfStateAcronyms.split(','));

    // let collatedArray = await db.Locations.find().fetch();
    // console.log('collatedArray', collatedArray);

    // setLocationsArray(collatedArray);



    // console.log('updated GeoJson', newGeoJson);

    // setGeoJsonObject(newGeoJson);
    setLastUpdated(new Date());
  }  

  async function onLocationsNdjsonChange(newValue){
    console.log('Updating locations based on new NDJSON content...', newValue)

    let newStatesArray = [];
    let lines = newValue.split("\n");
    lines.forEach(function(line){
      if(line.length > 0){
        newStatesArray.push(JSON.parse(line))
      }
    })
    console.log('newStatesArray', newStatesArray)

    newStatesArray.forEach(async function(state){
      let currentLocation = await db.Locations.findOne({
        'address.state': get(state, 'address.state')
      })

      console.log('currentLocation', currentLocation)
      set(currentLocation, 'extension', get(state, 'extension'));

      set(currentLocation, 'position.longitude', get(state, 'position.longitude'));
      set(currentLocation, 'position.latitude', get(state, 'position.latitude'));

      set(currentLocation, 'address.postalCode', get(state, 'address.postalCode'));
      set(currentLocation, 'address.line[0]', get(state, 'address.line[0]'));
      set(currentLocation, 'address.city', get(state, 'address.city'));
      set(currentLocation, 'address.state', get(state, 'address.state'));

      set(currentLocation, '_geometry', get(state, '_geometry'));

      await db.Locations.upsert(currentLocation, async function(result){
        console.log('result', result)

        let collatedArray = await db.Locations.find().fetch();
        // console.log('collatedArray', collatedArray);        
        setLocationsArray(collatedArray);        
        setLastUpdated(new Date());
      }, function(error){
        console.log('error', error)
      })
    });    
  }
  async function initializeStates(){
    console.log('initializeStates')
    console.log("Generating US State locations...");
  
    if(usStatesLayer){
      if(Array.isArray(usStatesLayer.features)){
        // let locationsArray = [];
        usStatesLayer.features.forEach(async function(feature){
          let location = {
            resourceType: "Location",
            id: 'US-State-' + (get(feature, 'properties.NAME')).replace(/\s+/g, ''),
            name: 'State of ' + get(feature, 'properties.NAME'),
            identifier: [{
              system: 'https://www.usps.com',
              value: get(feature, 'properties.GEO_ABBREVIATION')
            }, {
              system: 'https://www.census.gov/',
              value: get(feature, 'properties.GEO_ID')
            }, {
              system: 'https://gitlab.mitre.org/awatson/us-state-profiles/index',
              value: get(feature, 'properties.INDEX')
            }],
            address: {
              state: get(feature, 'properties.GEO_ABBREVIATION'),
              country: "USA"           
            },
            extension: [{
              url: 'geometry',
              valueString: JSON.stringify(get(feature, 'geometry'))
            }]              
          }
          // if we didn't find the location specified in the report's subject,
          // then we will assume it's a state or regional measure that references
          // multiple HSA locations; we begin by assuming it's a state report
          
          // locationsArray.push(location);

          if(! await db.Locations.findOne({id: location.id})){
            await db.Locations.upsert(location, function(error, result){
              if(result){
                console.log('Success!  Managed to insert a new Location.', result)            
              }
              if(error){
                console.log('Error when inserting the Location record.', error)
              }
            })  
          }
        })

        // console.log('locationsArray', locationsArray);
        // console.log('db', db);
        // console.log('db.Locations', db.Locations);
        // console.log('db.Locations.find()', db.Locations.find());
        
        let collatedArray = await db.Locations.find().fetch();
        console.log('collatedArray', collatedArray);

        setLocationsArray(collatedArray);
      }
    }
  }
  async function handleGenerateGeoJson(){
    console.log('handleGenerateGeoJson')

    let newGeoJson = {
      "type": "FeatureCollection",
      "features": []
    }

    let query = {};

    // if(isProximityEnabled){
    //   query = {_location: {$near: {
    //     $geometry: {
    //       type: 'Point',
    //       coordinates: [-88.0020589, 42.01136169999999]
    //     },
    //     // Convert [mi] to [km] to [m]
    //     $maxDistance: 50 * 1.60934 * 1000
    //   }}}
    // }

    // let proximityCount = await db.Locations.find(query).count();

    // console.log('Found ' + proximityCount + ' locations within 50 miles of the search origin.')

    let count = 0;
    let locationsArray = await db.Locations.find(query).fetch();
    locationsArray.forEach(function(location){
      count++;

      // does the location record have GPS coordinates?
      if(get(location, 'position.longitude') && get(location, 'position.latitude')){
        let newFeature = { 
          "type": "Feature", 
          "properties": { 
            "id": (count).toString(),                 
            "primary_type": "POSITIVE",                           
            "location_zip": get(location, 'address.postalCode'),      
            "location_address": get(location, 'address.line[0]'),    
            "location_city": get(location, 'address.city'),                    
            "location_state": get(location, 'address.state'),
            "longitude": (get(location, 'position.longitude')).toFixed(9).toString(),
            "latitude": (get(location, 'position.latitude')).toFixed(9).toString()        
          }, 
          "geometry": { 
            "type": "Point", 
            "coordinates": [ Number((get(location, 'position.longitude')).toFixed(9)), Number((get(location, 'position.latitude')).toFixed(9)) ] 
          }
        }
  
        newGeoJson.features.push(newFeature);
      
      // does the location record have a geometry shapefile? 
      } else {
        let newFeature = { 
          "type": "Feature", 
          "properties": { 
            "id": (count).toString(),                 
            "primary_type": "POSITIVE",                           
            "location_zip": get(location, 'address.postalCode', ''),      
            "location_address": get(location, 'address.line[0]', ''),    
            "location_city": get(location, 'address.city', ''),                    
            "location_state": get(location, 'address.state', ''),
            "longitude": (get(location, 'position.longitude', 0)).toFixed(9).toString(),
            "latitude": (get(location, 'position.latitude', 0)).toFixed(9).toString(),
            "render_color": "#999999"
          }, 
          "geometry": get(location, '_geometry')
        }

        if(Array.isArray(location.extension)){
          location.extension.forEach(function(extension){
            if(get(extension, 'url') === "render_color"){
              newFeature.properties[get(extension, 'url')] = get(extension, 'valueString')
            }
            if((get(extension, 'url') === "geometry") || (get(extension, 'url') === "_geometry")){
              newFeature.geometry = JSON.parse(get(extension, 'valueString'))
            }
          })
        }
  
        newGeoJson.features.push(newFeature);
      }     
    })

    // console.log('newly generated geoJson', newGeoJson)

    setGeoJsonObject(newGeoJson);  
    setLastUpdated(new Date());
  }


  function handleChangeStates(event){
    console.log('Updating the list of states:' + event.currentTarget.value);
    setListOfStateAcronyms(event.currentTarget.value);
  }
  function handleChangeColor(event){
    console.log('Updating the render color:' + event.currentTarget.value);
    setCurrentRenderColor(event.currentTarget.value);
  }
  function handleChangeAddressSearch(event){
    console.log('Updating the address search:' + event.currentTarget.value);
    setAddressSearch(event.currentTarget.value);
  }
  function handleChangeSecondAddressSearch(event){
    console.log('Updating the second address search:' + event.currentTarget.value);
    setSecondaryAddressSearch(event.currentTarget.value);
  }

  function fetchConsent(selectedStateAcronym){

    let selectedStateConsent;
    switch (selectedStateAcronym) {
      case 'AL':
        selectedStateConsent = ConsentAL
        break;
      case 'AK':
        selectedStateConsent = ConsentAK
        break;
      case 'AZ':
        selectedStateConsent = ConsentAZ
        break;
      case 'CA':
        selectedStateConsent = ConsentCA
        break;
      case 'CO':
        selectedStateConsent = ConsentCO
        break;
      case 'CT':
        selectedStateConsent = ConsentCT
        break;
      case 'DE':
        selectedStateConsent = ConsentDE
        break;
      case 'FL':
        selectedStateConsent = ConsentFL
        break;
      case 'GA':
        selectedStateConsent = ConsentGA
        break;
      case 'HI':
        selectedStateConsent = ConsentHI
        break;
      case 'ID':
        selectedStateConsent = ConsentID
        break;
      case 'IL':
        selectedStateConsent = ConsentIL
        break;
      case 'IN':
        selectedStateConsent = ConsentIN
        break;
      case 'IA':
        selectedStateConsent = ConsentIA
        break;
      case 'KS':
        selectedStateConsent = ConsentKS
        break;
      case 'KY':
        selectedStateConsent = ConsentKY
        break;
      case 'LA':
        selectedStateConsent = ConsentLA
        break;
      case 'ME':
        selectedStateConsent = ConsentME
        break;
      case 'MD':
        selectedStateConsent = ConsentMD
        break;
      case 'MA':
        selectedStateConsent = ConsentMA
        break;
      case 'MI':
        selectedStateConsent = ConsentMI
        break;
      case 'MN':
        selectedStateConsent = ConsentMN
        break;
      case 'MS':
        selectedStateConsent = ConsentMS
        break;
      case 'MO':
        selectedStateConsent = ConsentMO
        break;
      case 'MT':
        selectedStateConsent = ConsentMT
        break;
      case 'NE':
        selectedStateConsent = ConsentNE
        break;
      case 'NV':
        selectedStateConsent = ConsentNV
        break;
      case 'NH':
        selectedStateConsent = ConsentNH
        break;
      case 'NJ':
        selectedStateConsent = ConsentNJ
        break;
      case 'NM':
        selectedStateConsent = ConsentNM
        break;
      case 'NY':
        selectedStateConsent = ConsentNY
        break;
      case 'NC':
        selectedStateConsent = ConsentNC
        break;
      case 'ND':
        selectedStateConsent = ConsentND
        break;
      case 'OH':
        selectedStateConsent = ConsentOH
        break;
      case 'OK':
        selectedStateConsent = ConsentOK
        break;
      case 'OR':
        selectedStateConsent = ConsentOR
        break;
      case 'PA':
        selectedStateConsent = ConsentPA
        break;
      case 'RI':
        selectedStateConsent = ConsentRI
        break;
      case 'SC':
        selectedStateConsent = ConsentSC
        break;
      case 'SD':
        selectedStateConsent = ConsentSD
        break;
      case 'TN':
        selectedStateConsent = ConsentTN
        break;
      case 'TX':
        selectedStateConsent = ConsentTX
        break;
      case 'UT':
        selectedStateConsent = ConsentUT
        break;
      case 'VT':
        selectedStateConsent = ConsentVT
        break;
      case 'VA':
        selectedStateConsent = ConsentVA
        break;
      case 'WA':
        selectedStateConsent = ConsentWA
        break;
      case 'WV':
        selectedStateConsent = ConsentWV
        break;
      // case 'WI':
      //   selectedStateConsent = ConsentWI
      //   break;
      // case 'WY':
      //   selectedStateConsent = ConsentWY
      //   break;
    }
    return selectedStateConsent;
  }

  async function handleGeocode(){

    setDoulaRestricted(false);
    setCannabisRestricted(false);
    setMedicaidRestricted(false);
    setAbortionRestricted(false);
    setIvfFertilityRestricted(false);
    setSuicideRestricted(false);
    setReligiousRestricted(false);
    setLgbtFosterCareRestricted(false);
    setTransParticipationRestricted(false);
    setWpathRestricted(false);
    setAdvancedDirectivesRestricted(false);
    setOpenCarryRestricted(false);
    setPsilocybinRestricted(false);

    let geocodingUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + addressSearch.replace(",", "").split(" ").join(",+") + "&key=" + googleMapsApiKey;
    console.log('handleGeocode(1)', geocodingUrl)

    const response = await fetch(geocodingUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data = await response.json();
    console.log('data', data);

    setGeocodeData(data);

    let location = get(data, 'results[0].geometry.location');
    console.log('location', location);

    let addressComponents = get(data, 'results[0].address_components');
    console.log('addressComponents', addressComponents)

    let selectedStateAcronym = '';
    if(Array.isArray(addressComponents)){
      addressComponents.forEach(function(component){
        if(get(component, 'types[0]') === "postal_code"){
          console.log('postal_code', get(component, 'long_name'))
          // setPostalCode(get(component, 'long_name'))
        }
        if(get(component, 'types[0]') === "administrative_area_level_1"){
          console.log('administrative_area_level_1', get(component, 'short_name'))
          selectedStateAcronym = get(component, 'short_name');
        }
      })
    }
    console.log('selectedStateAcronym', selectedStateAcronym)

    let selectedStateConsent = fetchConsent(selectedStateAcronym);

    console.log('selectedStateConsent', selectedStateConsent)
    setFhirConsent(selectedStateConsent);
    handleFhirConsentUpdate(selectedStateConsent);

    let newProps = {
      center: location,
      zoom: 6,
      options: {
        panControl: false,
        mapTypeControl: false,
        scrollwheel: false,
        styles: [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          // {
          //   "featureType": "poi.park",
          //   "elementType": "geometry",
          //   "stylers": [
          //     {
          //       "color": "#e5e5e5"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "poi.park",
          //   "elementType": "labels.text.fill",
          //   "stylers": [
          //     {
          //       "color": "#9e9e9e"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "road",
          //   "elementType": "geometry",
          //   "stylers": [
          //     {
          //       "color": "#ffffff"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "road.arterial",
          //   "elementType": "labels.text.fill",
          //   "stylers": [
          //     {
          //       "color": "#757575"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "road.highway",
          //   "elementType": "geometry",
          //   "stylers": [
          //     {
          //       "color": "#dadada"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "road.highway",
          //   "elementType": "labels.text.fill",
          //   "stylers": [
          //     {
          //       "color": "#616161"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "road.local",
          //   "elementType": "labels.text.fill",
          //   "stylers": [
          //     {
          //       "color": "#9e9e9e"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "transit.line",
          //   "elementType": "geometry",
          //   "stylers": [
          //     {
          //       "color": "#e5e5e5"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "transit.station",
          //   "elementType": "geometry",
          //   "stylers": [
          //     {
          //       "color": "#eeeeee"
          //     }
          //   ]
          // },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          },
          // {
          //   "featureType": "water",
          //   "elementType": "labels.text.fill",
          //   "stylers": [
          //     {
          //       "color": "#9e9e9e"
          //     }
          //   ]
          // }
        ]
      }
    }

    setMapProps(newProps);
    parseLocationsArray(LocationsUSStates);

    let newHomeLocation = {
      "type": "FeatureCollection",
      "features": [
        {
            "type": "Feature",
            "properties": {
                "NAME": "HOME",
                "TYPE": "HOME",
                "LATITUDE": location.lat,
                "LONGITUDE": location.lng
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    location.lng,
                    location.lat
                ]
            }
        }
      ]
    }
    console.log('newHomeLocation', newHomeLocation)
    setCurrentLocationGeoJson(newHomeLocation);
    
    setLastUpdated(new Date());
  }


  async function handleGeocodeComparison(){

    let geocodingUrlComparison = "https://maps.googleapis.com/maps/api/geocode/json?address=" + secondaryAddressSearch.replace(",", "").split(" ").join(",+") + "&key=" + googleMapsApiKey;
    console.log('handleGeocode', geocodingUrlComparison)

    const response = await fetch(geocodingUrlComparison);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data = await response.json();
    console.log('comparison', data);

    setGeocodeDataComparison(data);

    let location = get(data, 'results[0].geometry.location');
    console.log('location', location);

    let addressComponents = get(data, 'results[0].address_components');
    console.log('addressComponents', addressComponents)

    let selectedStateAcronym = '';
    if(Array.isArray(addressComponents)){
      addressComponents.forEach(function(component){
        if(get(component, 'types[0]') === "postal_code"){
          console.log('postal_code', get(component, 'long_name'))
          // setPostalCode(get(component, 'long_name'))
        }
        if(get(component, 'types[0]') === "administrative_area_level_1"){
          console.log('administrative_area_level_1', get(component, 'short_name'))
          selectedStateAcronym = get(component, 'short_name');
        }
      })
    }
    console.log('selectedStateAcronym', selectedStateAcronym)

    let selectedStateConsent = fetchConsent(selectedStateAcronym);

    console.log('selectedStateConsent', selectedStateConsent)
    
    setSecondaryFhirConsent(selectedStateConsent);
    setStateNameComparison(get(selectedStateConsent, 'organization[0].display'));
    setStateAcronymComparison(get(selectedStateConsent, 'organization[0].reference'));

    let provisions = get(selectedStateConsent, 'provision.provision');

    console.log('provisions', provisions);

    if(Array.isArray(provisions)){
      provisions.forEach(function(provision){
        switch (get(provision, 'code[0].text')) {
          case 'Doula':
            setDoulaRestricted2(true);
            break;
          case 'Cannabis':
            setCannabisRestricted2(true);
            break;
          case 'Medicaid Expansion':
            setMedicaidRestricted2(true);            
            break;
          case 'Abortion':
            setAbortionRestricted2(true);
            break;
          case 'In-vitro fertilization':
            setIvfFertilityRestricted2(true);
            break;
          case 'Assisted suicide':
            setSuicideRestricted2(true);
            break;
          case 'Decline':
            setReligiousRestricted2(true);
            break;
          case 'Marital Status':
            setLgbtFosterCareRestricted2(true);
            break;
          case 'Sports':
            setTransParticipationRestricted2(true);
            break;
          case 'Hormone replacement therapy':
            setWpathRestricted2(true);
            break;
          case 'Power of Attorney':
            setAdvancedDirectivesRestricted2(true);
            break;
          case 'Open Carry':
            // setOpenCarryRestricted();
            break;
          case 'Medical Psilocybin':
            // setPsilocybinRestricted();
            break;        
          default:
            break;
        }
      })      
    }

    let newProps = {
      center: location,
      zoom: 6,
      options: {
        panControl: false,
        mapTypeControl: false,
        scrollwheel: false,
        styles: [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          // {
          //   "featureType": "poi.park",
          //   "elementType": "geometry",
          //   "stylers": [
          //     {
          //       "color": "#e5e5e5"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "poi.park",
          //   "elementType": "labels.text.fill",
          //   "stylers": [
          //     {
          //       "color": "#9e9e9e"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "road",
          //   "elementType": "geometry",
          //   "stylers": [
          //     {
          //       "color": "#ffffff"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "road.arterial",
          //   "elementType": "labels.text.fill",
          //   "stylers": [
          //     {
          //       "color": "#757575"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "road.highway",
          //   "elementType": "geometry",
          //   "stylers": [
          //     {
          //       "color": "#dadada"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "road.highway",
          //   "elementType": "labels.text.fill",
          //   "stylers": [
          //     {
          //       "color": "#616161"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "road.local",
          //   "elementType": "labels.text.fill",
          //   "stylers": [
          //     {
          //       "color": "#9e9e9e"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "transit.line",
          //   "elementType": "geometry",
          //   "stylers": [
          //     {
          //       "color": "#e5e5e5"
          //     }
          //   ]
          // },
          // {
          //   "featureType": "transit.station",
          //   "elementType": "geometry",
          //   "stylers": [
          //     {
          //       "color": "#eeeeee"
          //     }
          //   ]
          // },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          },
          // {
          //   "featureType": "water",
          //   "elementType": "labels.text.fill",
          //   "stylers": [
          //     {
          //       "color": "#9e9e9e"
          //     }
          //   ]
          // }
        ]
      }
    }

    setSecondMapProps(newProps);
    // parseLocationsArray(LocationsUSStates);

    let newHomeLocation = {
      "type": "FeatureCollection",
      "features": [
        {
            "type": "Feature",
            "properties": {
                "NAME": "HOME",
                "TYPE": "HOME",
                "LATITUDE": location.lat,
                "LONGITUDE": location.lng
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    location.lng,
                    location.lat
                ]
            }
        }
      ]
    }
    console.log('newHomeLocation', newHomeLocation)
    setSecondaryLocationGeoJson(newHomeLocation);
    setComparisonLastUpdated(new Date());
  }

  function handleLegalEnvironment(){
    console.log('handleLegalEnvironment', fhirConsent);

    handleFhirConsentUpdate(fhirConsent);
  }

  function parseLocationsArray(locationsArray){
    locationsArray.forEach(async function(state){
      let currentLocation = await db.Locations.findOne({
        'address.state': get(state, 'address.state')
      })

      console.log('currentLocation', currentLocation)
      set(currentLocation, 'extension', get(state, 'extension'));

      set(currentLocation, 'position.longitude', get(state, 'position.longitude'));
      set(currentLocation, 'position.latitude', get(state, 'position.latitude'));

      set(currentLocation, 'address.postalCode', get(state, 'address.postalCode'));
      set(currentLocation, 'address.line[0]', get(state, 'address.line[0]'));
      set(currentLocation, 'address.city', get(state, 'address.city'));
      set(currentLocation, 'address.state', get(state, 'address.state'));

      set(currentLocation, '_geometry', get(state, '_geometry'));

      await db.Locations.upsert(currentLocation, async function(result){
        console.log('result', result)

        let collatedArray = await db.Locations.find().fetch();
        // console.log('collatedArray', collatedArray);        
        setLocationsArray(collatedArray);        
        setLastUpdated(new Date());
        handleGenerateGeoJson();
      }, function(error){
        console.log('error', error)
      })
    });    
  }
  
  function handleAbortionRowClick(){
    console.log('handleAbortionRowClick', AbortionAccess)
    parseLocationsArray(AbortionAccess)
  }
  function handleDoulaRowClick(){
    console.log('handleDoulaRowClick', DoulaAccess)
    parseLocationsArray(DoulaAccess)
  }
  function handleMedicaidRowClick(){
    console.log('handleMedicaidRowClick', MedicaidExpansion)
    parseLocationsArray(MedicaidExpansion)
  }
  function handleReligiousRowClick(){
    console.log('handleReligiousRowClick', ReligiousExemptions)
    parseLocationsArray(ReligiousExemptions)
  }
  function handleIvfRowClick(){
    console.log('handleIvfRowClick', IvfFertilityCoverage)
    parseLocationsArray(IvfFertilityCoverage)
  }
  function handleLgbtFosterCareRowClick(){
    console.log('handleLgbtFosterCareRowClick', LgbtFosterCare)
    parseLocationsArray(LgbtFosterCare)
  }
  function handleMedicalCannabisRowClick(){
    console.log('handleMedicalCannabisRowClick', MedicalCannabis)
    parseLocationsArray(MedicalCannabis)  
  }
  function handleAssistedSuicideRowClick(){
    console.log('handleAssistedSuicideRowClick', AssistedSuicide)
    parseLocationsArray(AssistedSuicide)  
  }
  function handleAdvancedDirectivesRowClick(){
    console.log('handleAdvancedDirectivesRowClick', AdvancedDirectives)
    parseLocationsArray(AdvancedDirectives)
  }
  function handleTransParticipationRowClick(){
    console.log('handleToggleTransParticipationRowClick', TransParticipationSports)
    parseLocationsArray(TransParticipationSports)
  }
  function handlePediatricGenderMedicineRowClick(){
    console.log('handlePediatricGenderMedicineRowClick', PediatricGenderMedicine)
    parseLocationsArray(PediatricGenderMedicine)
  }

  function stringifyToNdjson(array){
    let ndjson = "";
    if(Array.isArray(array)){
      array.forEach(function(item){
        ndjson = ndjson + JSON.stringify(item) + "\n";
      })
    }
    return ndjson;
  }


  function generateMap(index){
    console.log('generateMap', index)

    let renderProps = mapProps;
    let renderGeoJson = currentLocationGeoJson;
    let renderLastUpdated = lastUpdated
    if(index === 2){
      renderProps = secondMapProps;
      renderGeoJson = secondaryLocationGeoJson
      renderLastUpdated = comparisonLastUpdated;
    }

    return (<GoogleMapReact
      bootstrapURLKeys={{
        key: googleMapsApiKey,
        libraries: 'visualization'
      }}
      defaultCenter={renderProps.center}
      defaultZoom={renderProps.zoom}
      options={renderProps.options}
      key={renderLastUpdated}
      onGoogleApiLoaded={function({map, maps}){    
        
        // we want to set the render_color property on each state
        map.data.setStyle(function(feature){
          // var metric = feature.getProperty(choroplethMetric);
          var metric = feature.getProperty("location_state");
          var metricVerified;                

          var color = '#999999';

          if(feature.getProperty("render_color")){
            color = feature.getProperty("render_color");
          }

          return {
            fillColor: color,
            strokeColor: '#164140',
            strokeWeight: .3
          };
        })            

        // set the zoom control to the right center of the map
        map.setOptions({
          zoomControlOptions: {
            position: maps.ControlPosition.RIGHT_CENTER
          }
        });

        var dataLayer = [];
        
        if(typeof geoJsonObject == "object"){
          console.log('geoJsonObject', geoJsonObject);

          geoJsonObject.features.forEach(function(feature){
            if(get(feature, 'geometry.coordinates[0]') && get(feature, 'geometry.coordinates[1]')){                    
              dataLayer.push({location: new maps.LatLng(get(feature, 'geometry.coordinates[1]'), get(feature, 'geometry.coordinates[0]')), weight: 5});
            }
          })
          
          map.data.addGeoJson(geoJsonObject, { idPropertyName: 'id' });          
        }   

        if(renderGeoJson){
          console.log('renderGeoJson', renderGeoJson);
          map.data.addGeoJson(renderGeoJson, { idPropertyName: 'id' });          
        }
      }}
    >
      {/* <AnyReactComponent
        lat={59.955413}
        lng={30.337844}
        text="My Marker"
      /> */}
    </GoogleMapReact>)
  }

  let mapContents;
  let secondMapContents;

  if(googleMapsApiKey){
    mapContents = generateMap(1);
    secondMapContents = generateMap(2);
  } else {
    mapContents = <div></div>
  }



  
  let consentRecordGrid = <Card>
      <CardHeader title="State Consent Record"></CardHeader>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={9}>
            <FormControl fullWidth>
              <InputLabel fullWidth>State Name</InputLabel>
              <Input
                id="stateNameInput"
                name="stateNameInput"
                placeholder="Illinois"
                fullWidth
                onChange={handleUpdateStateName}
                style={{paddingLeft: '12px'}}
                value={stateName}
              />
            </FormControl>
          </Grid>
          <Grid item md={3} style={{marginTop: '2px'}}>
            <FormControl fullWidth>
              <InputLabel fullWidth>State Acronym</InputLabel>
              <Input
                id="rendorColor"
                name="rendorColor"
                placeholder="IL"
                label="IL"
                fullWidth
                onChange={handleUpdateStateAcronym}
                style={{paddingLeft: '12px'}}
                value={stateAcronym}
              />
            </FormControl>
          </Grid>
          

          <Grid item md={3}>
            <Button color={advancedDirectivesRestricted ? "success" : "inherit"} fullWidth variant="contained" onClick={handleToggleAdvancedDirective}>
            { advancedDirectivesRestricted ? "Online" : "Basic"}
            </Button>
          </Grid>
          <Grid item md={9} style={{marginTop: '2px'}}>
            <CardHeader title="Online Advanced Directives" style={{marginTop: '0px', paddingTop: '0px'}}></CardHeader>
          </Grid>

          <Grid item md={3}>
            <Button color={medicaidRestricted ? "success" : "inherit"} fullWidth variant="contained" onClick={handleToggleMedicaid}>
            { medicaidRestricted ? "Expanded" : "Basic" }
            </Button>
          </Grid>
          <Grid item md={9} style={{marginTop: '2px'}}>
            <CardHeader title="Expanded Medicaid" style={{marginTop: '0px', paddingTop: '0px'}}></CardHeader>
          </Grid>
          
          <Grid item md={3}>
            <Button color={doulaRestricted ? "success" : "inherit"} fullWidth variant="contained" onClick={handleToggleDoulas}>
              {doulaRestricted ? "Expanded" : "Out of Pocket"}
            </Button>
          </Grid>
          <Grid item md={9} style={{marginTop: '2px'}}>
            <CardHeader title="Doula Access" style={{marginTop: '0px', paddingTop: '0px'}}></CardHeader>
          </Grid>
          
          <Grid item md={3}>
            <Button color={religiousRestricted ? "success" : "inherit"} fullWidth variant="contained" onClick={handleToggleReligious}>
            { religiousRestricted ? "Permited" : "Restricted"}
            </Button>
          </Grid>
          <Grid item md={9} style={{marginTop: '2px'}}>
            <CardHeader title="Religious Exemptions" style={{marginTop: '0px', paddingTop: '0px'}}></CardHeader>
          </Grid>
          <Grid item md={3}>
            <Button color={ivfFertilityRestricted ? "success" : "inherit"} fullWidth variant="contained" onClick={handleToggleFertility}>
            { ivfFertilityRestricted ? "Covered" : "Out of Pocket"}
            </Button>
          </Grid>
          <Grid item md={9} style={{marginTop: '2px'}}>
            <CardHeader title="In-Vitro Fertilization" style={{marginTop: '0px', paddingTop: '0px'}}></CardHeader>
          </Grid>
          <Grid item md={3}>
            <Button color={lgbtFosterCareRestricted ? "success" : "inherit"} fullWidth variant="contained" onClick={handleToggleLgbt}>
            { lgbtFosterCareRestricted ? "Permited" : "Restricted"}
            </Button>
          </Grid>
          <Grid item md={9} style={{marginTop: '2px'}}>
            <CardHeader title="LGBT Foster Care" style={{marginTop: '0px', paddingTop: '0px'}}></CardHeader>
          </Grid>
          <Grid item md={3}>
            <Button color={suicideRestricted ? "success" : "inherit"} fullWidth variant="contained" onClick={handleToggleSuicide}>
            { suicideRestricted ? "Permited" : "Restricted"}
            </Button>
          </Grid>
          <Grid item md={9} style={{marginTop: '2px'}}>
            <CardHeader title="Assisted Suicide" style={{marginTop: '0px', paddingTop: '0px'}}></CardHeader>
          </Grid>

          <Grid item md={3}></Grid>
          <Grid item md={9} style={{marginTop: '2px'}}></Grid>


          <Grid item md={3}>
            <Button color={abortionRestricted ? "warning" : "inherit"} fullWidth variant="contained" onClick={handleToggleAbortion}>
            { abortionRestricted ? "Restricted" : "Permited"}
            </Button>
          </Grid>
          <Grid item md={9} style={{marginTop: '2px'}}>
            <CardHeader title="Abortion" style={{marginTop: '0px', paddingTop: '0px'}}></CardHeader>
          </Grid>
          <Grid item md={3}>
            <Button color={cannabisRestricted ? "warning" : "inherit"} fullWidth variant="contained" onClick={handleToggleCannabis}>
            { cannabisRestricted ? "Restricted" : "Permited"}
            </Button>
          </Grid>
          <Grid item md={9} style={{marginTop: '2px'}}>
            <CardHeader title="Medical Cannabis" style={{marginTop: '0px', paddingTop: '0px'}}></CardHeader>
          </Grid>
          <Grid item md={3}>
            <Button color={transParticipationRestricted ? "warning" : "inherit"} fullWidth variant="contained" onClick={handleToggleTransParticipation}>
            { transParticipationRestricted ? "Restricted" : "Permited" }
            </Button>
          </Grid>
          <Grid item md={9} style={{marginTop: '2px'}}>
            <CardHeader title="Trans Participation in Sports" style={{marginTop: '0px', paddingTop: '0px'}}></CardHeader>
          </Grid>
          <Grid item md={3}>
            <Button color={wpathRestricted ? "warning" : "inherit"} fullWidth variant="contained" onClick={handleToggleWpath}>
            { wpathRestricted ? "Restricted" : "Permited"}
            </Button>
          </Grid>
          <Grid item md={9} style={{marginTop: '2px'}}>
            <CardHeader title="Pediatric Gender Medicine (WPATH)" style={{marginTop: '0px', paddingTop: '0px'}}></CardHeader>
          </Grid>


          <Grid item md={3}>
            <Button disabled color={openCarryRestricted ? "warning" : "inherit"} fullWidth variant="contained" onClick={handleToggleOpenCarry}>
            { openCarryRestricted ? "Restricted" : "Permited"}
            </Button>
          </Grid>
          <Grid item md={9} style={{marginTop: '2px'}}>
            <CardHeader title="Open Carry" style={{marginTop: '0px', paddingTop: '0px'}}></CardHeader>
          </Grid>

          <Grid item md={3}>
            <Button disabled color={psilocybinRestricted ? "warning" : "inherit"} fullWidth variant="contained" onClick={handleTogglePsilcybin}>
            { psilocybinRestricted ? "Restricted" : "Permited"}
            </Button>
          </Grid>
          <Grid item md={9} style={{marginTop: '2px'}}>
            <CardHeader title="Medical Psilocybin" style={{marginTop: '0px', paddingTop: '0px'}}></CardHeader>
          </Grid>

        </Grid>

      </CardContent>
  </Card>


  let secondConsentRecordGrid = <Card>
    <CardHeader title="State Consent Record"></CardHeader>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={9}>
            <FormControl fullWidth>
              <InputLabel fullWidth>State Name</InputLabel>
              <Input
                id="stateNameInput"
                name="stateNameInput"
                placeholder="Illinois"
                fullWidth
                onChange={handleUpdateStateName}
                style={{paddingLeft: '12px'}}
                value={stateNameComparison}
              />
            </FormControl>
          </Grid>
          <Grid item md={3} style={{marginTop: '2px'}}>
            <FormControl fullWidth>
              <InputLabel fullWidth>State Acronym</InputLabel>
              <Input
                id="rendorColor"
                name="rendorColor"
                placeholder="IL"
                label="IL"
                fullWidth
                onChange={handleUpdateStateAcronym}
                style={{paddingLeft: '12px'}}
                value={stateAcronymComparison}
              />
            </FormControl>
          </Grid>
          

          <Grid item md={3}>
            <Button color={advancedDirectivesRestricted2 ? "success" : "inherit"} fullWidth variant="contained">
            { advancedDirectivesRestricted2 ? "Online" : "Basic"}
            </Button>
          </Grid>
          <Grid item md={9} style={{marginTop: '2px'}}>
            <CardHeader title="Online Advanced Directives" style={{marginTop: '0px', paddingTop: '0px'}}></CardHeader>
          </Grid>

          <Grid item md={3}>
            <Button color={medicaidRestricted2 ? "success" : "inherit"} fullWidth variant="contained">
            { medicaidRestricted2 ? "Expanded" : "Basic" }
            </Button>
          </Grid>
          <Grid item md={9} style={{marginTop: '2px'}}>
            <CardHeader title="Expanded Medicaid" style={{marginTop: '0px', paddingTop: '0px'}}></CardHeader>
          </Grid>
          
          <Grid item md={3}>
            <Button color={doulaRestricted2 ? "success" : "inherit"} fullWidth variant="contained" >
              {doulaRestricted2 ? "Expanded" : "Out of Pocket"}
            </Button>
          </Grid>
          <Grid item md={9} style={{marginTop: '2px'}}>
            <CardHeader title="Doula Access" style={{marginTop: '0px', paddingTop: '0px'}}></CardHeader>
          </Grid>
          
          <Grid item md={3}>
            <Button color={religiousRestricted2 ? "success" : "inherit"} fullWidth variant="contained" >
            { religiousRestricted2 ? "Permited" : "Restricted"}
            </Button>
          </Grid>
          <Grid item md={9} style={{marginTop: '2px'}}>
            <CardHeader title="Religious Exemptions" style={{marginTop: '0px', paddingTop: '0px'}}></CardHeader>
          </Grid>
          <Grid item md={3}>
            <Button color={ivfFertilityRestricted2 ? "success" : "inherit"} fullWidth variant="contained" >
            { ivfFertilityRestricted2 ? "Covered" : "Out of Pocket"}
            </Button>
          </Grid>
          <Grid item md={9} style={{marginTop: '2px'}}>
            <CardHeader title="In-Vitro Fertilization" style={{marginTop: '0px', paddingTop: '0px'}}></CardHeader>
          </Grid>
          <Grid item md={3}>
            <Button color={lgbtFosterCareRestricted2 ? "success" : "inherit"} fullWidth variant="contained" >
            { lgbtFosterCareRestricted2 ? "Permited" : "Restricted"}
            </Button>
          </Grid>
          <Grid item md={9} style={{marginTop: '2px'}}>
            <CardHeader title="LGBT Foster Care" style={{marginTop: '0px', paddingTop: '0px'}}></CardHeader>
          </Grid>
          <Grid item md={3}>
            <Button color={suicideRestricted2 ? "success" : "inherit"} fullWidth variant="contained" >
            { suicideRestricted2 ? "Permited" : "Restricted"}
            </Button>
          </Grid>
          <Grid item md={9} style={{marginTop: '2px'}}>
            <CardHeader title="Assisted Suicide" style={{marginTop: '0px', paddingTop: '0px'}}></CardHeader>
          </Grid>

          <Grid item md={3}></Grid>
          <Grid item md={9} style={{marginTop: '2px'}}></Grid>


          <Grid item md={3}>
            <Button color={abortionRestricted2 ? "warning" : "inherit"} fullWidth variant="contained" >
            { abortionRestricted2 ? "Restricted" : "Permited"}
            </Button>
          </Grid>
          <Grid item md={9} style={{marginTop: '2px'}}>
            <CardHeader title="Abortion" style={{marginTop: '0px', paddingTop: '0px'}}></CardHeader>
          </Grid>
          <Grid item md={3}>
            <Button color={cannabisRestricted2 ? "warning" : "inherit"} fullWidth variant="contained" >
            { cannabisRestricted2 ? "Restricted" : "Permited"}
            </Button>
          </Grid>
          <Grid item md={9} style={{marginTop: '2px'}}>
            <CardHeader title="Medical Cannabis" style={{marginTop: '0px', paddingTop: '0px'}}></CardHeader>
          </Grid>
          <Grid item md={3}>
            <Button color={transParticipationRestricted2 ? "warning" : "inherit"} fullWidth variant="contained" >
            { transParticipationRestricted2 ? "Restricted" : "Permited" }
            </Button>
          </Grid>
          <Grid item md={9} style={{marginTop: '2px'}}>
            <CardHeader title="Trans Participation in Sports" style={{marginTop: '0px', paddingTop: '0px'}}></CardHeader>
          </Grid>
          <Grid item md={3}>
            <Button color={wpathRestricted2 ? "warning" : "inherit"} fullWidth variant="contained" >
            { wpathRestricted2 ? "Restricted" : "Permited"}
            </Button>
          </Grid>
          <Grid item md={9} style={{marginTop: '2px'}}>
            <CardHeader title="Pediatric Gender Medicine (WPATH)" style={{marginTop: '0px', paddingTop: '0px'}}></CardHeader>
          </Grid>

          <Grid item md={3}>
            <Button disabled color={openCarryRestricted2 ? "warning" : "inherit"} fullWidth variant="contained" >
            { openCarryRestricted2 ? "Restricted" : "Permited"}
            </Button>
          </Grid>
          <Grid item md={9} style={{marginTop: '2px'}}>
            <CardHeader title="Open Carry" style={{marginTop: '0px', paddingTop: '0px'}}></CardHeader>
          </Grid>

          <Grid item md={3}>
            <Button disabled color={psilocybinRestricted2 ? "warning" : "inherit"} fullWidth variant="contained" >
            { psilocybinRestricted2 ? "Restricted" : "Permited"}
            </Button>
          </Grid>
          <Grid item md={9} style={{marginTop: '2px'}}>
            <CardHeader title="Medical Psilocybin" style={{marginTop: '0px', paddingTop: '0px'}}></CardHeader>
          </Grid>
        </Grid>
      </CardContent>
    </Card>

  let returnContents = <Container maxWidth="xl">
    <Grid item md={12}><CardHeader title="Interstate Interoperability Toolkit"></CardHeader></Grid>

    <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="View Topic Maps" {...a11yProps(0)} />
        <Tab label="Search Location" {...a11yProps(1)} />
        <Tab label="Compare Locations" {...a11yProps(2)} />
        <Tab label="Create National Map" {...a11yProps(3)} />
        <Tab label="Create State Consent" {...a11yProps(4)} />
        <Tab disabled label="Scan Health Record" {...a11yProps(5)} />
      </Tabs>
    </Box>


    <CustomTabPanel value={value} index={0}>
      <Grid container spacing={2} style={{paddingTop: '40px'}}>
      <Grid item md={4}>
        <Card>
            <CardHeader title="Topics"></CardHeader>
            <CardContent>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Topic</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key="advancedDirectives" onClick={handleAdvancedDirectivesRowClick} style={{cursor: 'pointer'}} hover>
                    <TableCell component="th" scope="row">
                      Advanced Directives (Online)
                    </TableCell>
                  </TableRow>
                  <TableRow key="advancedDirectives" onClick={handleAbortionRowClick} style={{cursor: 'pointer'}} hover>
                    <TableCell component="th" scope="row">
                      Abortion Access
                    </TableCell>
                  </TableRow>
                  <TableRow key="lgbtFosterCare" onClick={handleAssistedSuicideRowClick} style={{cursor: 'pointer'}} hover>
                    <TableCell component="th" scope="row">
                      Assisted Suicide
                    </TableCell>
                  </TableRow>
                  <TableRow key="doula" onClick={handleDoulaRowClick} style={{cursor: 'pointer'}} hover>
                    <TableCell component="th" scope="row">
                      Doula Access
                    </TableCell>
                  </TableRow>
                  <TableRow key="ivfFertility" onClick={handleIvfRowClick} style={{cursor: 'pointer'}} hover>
                    <TableCell component="th" scope="row">
                      IVF Fertility
                    </TableCell>
                  </TableRow>
                  <TableRow key="lgbtFosterCare" onClick={handleLgbtFosterCareRowClick} style={{cursor: 'pointer'}} hover>
                    <TableCell component="th" scope="row">
                      LGBT Foster Care
                    </TableCell>
                  </TableRow>
                  <TableRow key="medicaid" onClick={handleMedicaidRowClick} style={{cursor: 'pointer'}} hover>
                    <TableCell component="th" scope="row">
                      Medicaid Expansion
                    </TableCell>
                  </TableRow>
                  <TableRow key="lgbtFosterCare" onClick={handleMedicalCannabisRowClick} style={{cursor: 'pointer'}} hover>
                    <TableCell component="th" scope="row">
                      Medical Cannabis
                    </TableCell>
                  </TableRow>
                  <TableRow key="lgbtFosterCare" onClick={handlePediatricGenderMedicineRowClick} style={{cursor: 'pointer'}} hover>
                    <TableCell component="th" scope="row">
                      Pediatric Gender Medicine
                    </TableCell>
                  </TableRow>
                  <TableRow key="religious" onClick={handleReligiousRowClick} style={{cursor: 'pointer'}}>
                    <TableCell component="th" scope="row">
                      Religious Exemptions
                    </TableCell>
                  </TableRow>
                  <TableRow key="lgbtFosterCare" onClick={handleTransParticipationRowClick} style={{cursor: 'pointer'}}>
                    <TableCell component="th" scope="row">
                      Trans Participation in Sports
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <br />
              <br />


              {/* <AceEditor
                mode={editorMode}
                theme="github"
                wrapEnabled={false}
                onChange={onLocationsNdjsonChange}
                name="thesisEditor"
                editorProps={{ $blockScrolling: true }}
                value={stringifyToNdjson(locationsArray)}
                style={{width: '100%', position: 'relative', height: '250px', minHeight: '250px', backgroundColor: '#f5f5f5', borderColor: '#ccc', borderRadius: '4px', lineHeight: '16px'}}        
              />           
              <br />
              
                <Button fullWidth variant="contained" color="primary" onClick={handleGenerateGeoJson}>
                  Generate GeoJson
                </Button> 
                <br />
                <br />

              <AceEditor
                mode="text"
                theme="github"
                wrapEnabled={true}
                onChange={handleGeojsonChange}
                name="synthesisEditor"
                editorProps={{ $blockScrolling: true }}
                value={JSON.stringify(geoJsonObject, null, 2)}
                style={{width: '100%', position: 'relative', height: '250px', minHeight: '250px', backgroundColor: '#f5f5f5', borderColor: '#ccc', borderRadius: '4px', lineHeight: '16px'}}        
              />  */}
            </CardContent>
          </Card>      
          <br />
          <br />

        </Grid>
        <Grid item md={8}>
          <Card style={{height: '768px', width: '100%'}}>
            <CardHeader title="Map"></CardHeader>
            <TextField 
              placeholder="Google Maps API Key"
              variant="standard"
              disabled={googleMapsApiKey ? true : false}
              style={{float: 'right', top: '-50px', width: '400px'}}
              onChange={function(event){
                console.log(event.target.value)
                setGoogleMapsApiKey(event.target.value);
                setTimeout(function(){
                  setMapKey(new Date());
                }, 500)
              }}
            />
            { mapContents }

          </Card>             
        </Grid>

      </Grid>
    </CustomTabPanel>

    <CustomTabPanel value={value} index={1}>
      <Grid container spacing={2} style={{paddingTop: '40px'}}>
        <Grid item md={6}>
          <Card style={{height: '600px', width: '100%'}}>
            <CardHeader title="Map"></CardHeader>
            <TextField 
              placeholder="Google Maps API Key"
              variant="standard"
              disabled={googleMapsApiKey ? true : false}
              style={{float: 'right', top: '-50px', width: '400px'}}
              onChange={function(event){
                console.log(event.target.value)
                setGoogleMapsApiKey(event.target.value);
                setTimeout(function(){
                  setMapKey(new Date());
                }, 500)
              }}
            />
              { mapContents }
          </Card>
          <br />
          <Card>
            <CardHeader title="Search Location"></CardHeader>
            <CardContent>
              <FormControl fullWidth>
                <InputLabel fullWidth>Address Search</InputLabel>
                <Input
                  id="addressSearchInput"
                  name="addressSearchInput"
                  placeholder="123 Main St. Chicago, IL 60601"
                  fullWidth
                  onChange={handleChangeAddressSearch}
                  value={addressSearch}
                  style={{paddingLeft: '12px'}}
                />
              </FormControl>
              <br />
              <br />
              <Button disabled={googleMapsApiKey ? false : true} fullWidth variant="contained" color="primary" onClick={handleGeocode}>
                Geocode
              </Button> 
              <br />
              <br />
              <AceEditor
                mode="text"
                theme="github"
                wrapEnabled={true}
                name="synthesisEditor"
                editorProps={{ $blockScrolling: true }}
                value={JSON.stringify(geocodeData, null, 2)}
                style={{width: '100%', position: 'relative', height: '260px', minHeight: '250px', backgroundColor: '#f5f5f5', borderColor: '#ccc', borderRadius: '4px', lineHeight: '16px'}}        
              />                
            </CardContent>
          </Card> 

              
        </Grid>
        <Grid item md={6}>
          <Card style={{height: '1120px', width: '100%'}}>
            { consentRecordGrid }
          </Card>             
        </Grid>

      </Grid>
    </CustomTabPanel>

    <CustomTabPanel value={value} index={2}>
      <Grid container spacing={2} style={{paddingTop: '40px'}}>
        <Grid item md={6}>
          <Card style={{height: '400px', width: '100%'}}>
            <CardHeader title="Map"></CardHeader>
            <TextField 
              placeholder="Google Maps API Key"
              variant="standard"
              disabled={googleMapsApiKey ? true : false}
              style={{float: 'right', top: '-50px', width: '400px'}}
              onChange={function(event){
                console.log(event.target.value)
                setGoogleMapsApiKey(event.target.value);
                setTimeout(function(){
                  setMapKey(new Date());
                }, 500)
              }}
            />
              { mapContents }
          </Card>
          <br />
          <Card>
            <CardHeader title="Search Location"></CardHeader>
            <CardContent>
              <FormControl fullWidth>
                <InputLabel fullWidth>Address Search</InputLabel>
                <Input
                  id="addressSearchInput"
                  name="addressSearchInput"
                  placeholder="123 Main St. Chicago, IL 60601"
                  fullWidth
                  onChange={handleChangeAddressSearch}
                  value={addressSearch}
                  style={{paddingLeft: '12px'}}
                />
              </FormControl>
              <br />
              <br />
              <Button disabled={googleMapsApiKey ? false : true} fullWidth variant="contained" color="primary" onClick={handleGeocode}>
                Geocode
              </Button> 
            </CardContent>
          </Card> 
          <br />
          <Card style={{height: '1120px', width: '100%'}}>
            { consentRecordGrid }
          </Card>             

              
        </Grid>
        <Grid item md={6}>
        <Card style={{height: '400px', width: '100%'}}>
            <CardHeader title="Comparison Map"></CardHeader>            
              { secondMapContents }
          </Card>
          <br />
          <Card>
            <CardHeader title="Second Location"></CardHeader>
            <CardContent>
              <FormControl fullWidth>
                <InputLabel fullWidth>Address Search</InputLabel>
                <Input
                  id="addressSearchInput"
                  name="addressSearchInput"
                  placeholder="123 Main St. Chicago, IL 60601"
                  fullWidth
                  onChange={handleChangeSecondAddressSearch}
                  value={secondaryAddressSearch}
                  style={{paddingLeft: '12px'}}
                />
              </FormControl>
              <br />
              <br />
              <Button disabled={googleMapsApiKey ? false : true} fullWidth variant="contained" color="primary" onClick={handleGeocodeComparison}>
                Geocode Second Address
              </Button> 
            </CardContent>
          </Card> 
          <br />
          <Card style={{height: '1120px', width: '100%'}}>
            { secondConsentRecordGrid }
          </Card> 
        </Grid>

      </Grid>
    </CustomTabPanel>

    <CustomTabPanel value={value} index={3}>
      <Grid container spacing={2} style={{paddingTop: '40px'}}>
      <Grid item md={4}>
        <Card>
            <CardHeader title="Map Coloring"></CardHeader>
            <CardContent>
              <FormControl fullWidth>
                <InputLabel fullWidth>Comma separated list of states</InputLabel>
                <Input
                  id="listOfStateAcronymsInput"
                  name="listOfStateAcronymsInput"
                  placeholder="IL,TX,MA"
                  fullWidth
                  onChange={handleChangeStates}
                  value={listOfStateAcronyms}
                  style={{paddingLeft: '12px'}}
                />
              </FormControl>
              <br />
              <br />
              <FormControl fullWidth>
                <InputLabel fullWidth>Render Color</InputLabel>
                <Input
                  id="rendorColor"
                  name="rendorColor"
                  placeholder="#999999"
                  label="Render Color"
                  fullWidth
                  onChange={handleChangeColor}
                  value={currentRenderColor}
                  style={{paddingLeft: '12px'}}
                />
              </FormControl>
              <br />
              <br />
              <Button fullWidth variant="contained" color="primary" onClick={handleUpdateStateInfo}>
                Add States
              </Button>
              <br />
              <br />

              <AceEditor
                mode={editorMode}
                theme="github"
                wrapEnabled={false}
                onChange={onLocationsNdjsonChange}
                name="thesisEditor"
                editorProps={{ $blockScrolling: true }}
                value={stringifyToNdjson(locationsArray)}
                style={{width: '100%', position: 'relative', height: '250px', minHeight: '250px', backgroundColor: '#f5f5f5', borderColor: '#ccc', borderRadius: '4px', lineHeight: '16px'}}        
              />           
              <br />
              
                <Button fullWidth variant="contained" color="primary" onClick={handleGenerateGeoJson}>
                  Generate GeoJson
                </Button> 
                <br />
                <br />

              <AceEditor
                mode="text"
                theme="github"
                wrapEnabled={true}
                onChange={handleGeojsonChange}
                name="synthesisEditor"
                editorProps={{ $blockScrolling: true }}
                value={JSON.stringify(geoJsonObject, null, 2)}
                style={{width: '100%', position: 'relative', height: '250px', minHeight: '250px', backgroundColor: '#f5f5f5', borderColor: '#ccc', borderRadius: '4px', lineHeight: '16px'}}        
              /> 
            </CardContent>
          </Card>      
          <br />
          <br />

        </Grid>
        <Grid item md={8}>
          <Card style={{height: '768px', width: '100%'}}>
            <CardHeader title="Map"></CardHeader>
            <TextField 
              placeholder="Google Maps API Key"
              variant="standard"
              disabled={googleMapsApiKey ? true : false}
              style={{float: 'right', top: '-50px', width: '400px'}}
              onChange={function(event){
                console.log(event.target.value)
                setGoogleMapsApiKey(event.target.value);
                setTimeout(function(){
                  setMapKey(new Date());
                }, 500)
              }}
            />
            { mapContents }

          </Card>             
        </Grid>

      </Grid>
    </CustomTabPanel>

    <CustomTabPanel value={value} index={4}>
    <Grid container spacing={2} style={{paddingTop: '40px'}}>
      <Grid item md={4}>
        <Card>
          <CardHeader title="FHIR Consent"></CardHeader>
          <CardContent>
            <AceEditor
              mode="text"
              theme="github"
              wrapEnabled={true}
              onChange={handleFhirConsentUpdate}
              name="synthesisEditor"
              editorProps={{ $blockScrolling: true }}
              value={JSON.stringify(fhirConsent, null, 2)}
              style={{width: '100%', position: 'relative', height: '840px', minHeight: '250px', backgroundColor: '#f5f5f5', borderColor: '#ccc', borderRadius: '4px', lineHeight: '16px'}}        
            /> 
          </CardContent>
        </Card>      
      </Grid>
      <Grid item md={8} style={{height: '800px'}}>
        { consentRecordGrid }
      </Grid>
    </Grid>
    </CustomTabPanel>

    <br />
    <br />

  </Container>;

  return returnContents
};

export default App;

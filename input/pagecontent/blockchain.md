
In recent years, there’s been much interest in storing HIPAA consent records and other healthcare information on distributed ledger technologies.

This implementation guide doesn’t intend to prescribe how blockchain and other distributed ledger architects build their systems. It does, however, recommend architecture strategies and application programming interfaces for blockchain implementers to harmonize and integrate their systems with ANSI certified healthcare data standards.

### Interoperability in Complex Systems (An Automobiles Analogy)  

Newcomers to the field of blockchains often struggle to wrap their heads around the differences between blockchains and cryptocurrencies and distributed ledgers, and how these things would be applied to the field of healthcare. For the purposes of extended metaphor, let us consider another widely understood complex system - the automobile.

Blockchains are widely understood to be immutable, encrypted, distributed ledger, that support smart contracts and consensus algorithms. This definition is hardly absolute, and there is a vigorous discussion about alternative network topologies (much to the confusion of newcomers to the field). But suffice it to say that blockchains as complex systems are comprised of 5 or 6 core technologies.

By comparison, it might be said that passenger automobiles are widely understood to be have a drivetrain, air-conditioning, cruise-control, seat-belts, and a combustion engine.

Hearing this sort of definition is both factual, from a certain point of view, but also causes a certain amount of skepticism and indignation. Does a passenger automobile necessarily require seat-belts? For decades, early cars didn’t have such safety devices. Yet, a vehicle wouldn’t pass modern vehicle safety inspections without. What about air-condition? Certainly not. But would it be competitive in the marketplace without? It would be almost unheard of in sedans, yet is the norm in the ATV and off-road industry. So too with the combustion engines vs electric engines.

The reason for introducing this analogy is to draw attention to the fact that the definitions we project on complex systems are often overlapping, circumstancial, and convey specific regulatory or market requirements. So, too, with blockchain technologies. Distributed ledger technologies do not necessarily require smart-contracts; consensus algorithms don’t necessarily require encryption; and ledger systems need not be immutable. Yet, all of these features are necessary if one is trying to architect a cryptocurrency that can meet certain financial regulatory functionality requirements.

Which begs the question: are the features that are needed to create a cryptocurrency the same features that are needed in healthcare?

### Advanced Network Topologies  

With that analogy and question in place, this implementation guide wishes to provide interoperability guidance on creating application programming interfaces that work across a number of network topologies, including but not limited to:

- Graph Databases (Neo4J)
- BitTorrent
- Interplanety File System (IPFS)
- Etherium
- Hyperledger
- BigChain

The experienced blockchain engineer will notice that we are purposefully including technologies that do not include smart-contracts and which are not immutable. This is intentional. We encourage healthcare implementors who seek to use blockchain technologies to interogate whether smart-contracts are strictly necessary for their use-case, and whether a distributed ledger alone will suffice.

### On-Chain Representations  

From a data interoperability perspective, the FHIR protocol works at a level where it doesn’t necessarily need to concern itself with blockchain operations too much. Many distributed apps (DApp) find that they can implement much functionality by simply treating the blockchain or distributed ledger as specialied storage; no different than any other database adapter or network endpoint.

As such, this implementation guide seeks to simplify and clarify, and keep things simple as it progresses through three common network topologies, moving from simple to complex. However we do need to understand what kind of data is stored where, so we can understand how it’s transferred over the wire from one place ot another. To this extent, we propose a simple three point checklist when performing high-level interoperability planning:

- Does the ledger contain protected health information (PHI)?
- Will the ledger exist entirely on virtual private network and behind firewalls?
- Will the ledger be available publicly and contain references to PHI?

#### Public Ledgers & Directories  

If the ledger will not contain protected health information, feel free to put raw FHIR resources directly on the blockchain. Such data could include provider directories of where healthcare facilities are located in a state; price transparency lists of how much services cost under a particular insurer; vocabulary/terminology/valueset updates which configure applications to the latest clinical best practices; or document references and evidence from clinical trials and journal articles.

![./MeHi-Blockchains-PublicDirectory.png](./MeHi-Blockchains-PublicDirectory.png){:width="100%"}

Simply treat the blockchain as a public FHIR server, define a base URL, create the necessary metadata route, and then add whichever FHIR endpoints that are suitable for your application. This approach is suitable for lightweight applications running connected to a BitTorrent, Neo4J, and IPFS backend.

> Note: Per the FHIR specification, a Provenance record may be attached to HTTP calls via a custom header X-Provenance

```
GET {baseUrl}/metadata
GET {baseUrl}/DocumentReference/{documentReferenceId}
GET {baseUrl}/Organization/{organizationId}
...etc...
```

The downside of this approach, of course, is that these firewalled services and the data they contain, are not discoverable by potential clients or remote patients. However, these services are still quite valuable and of interest in situations such as organ donor lists, pharmaceutical supply chains, and other clinical scenarios.

#### Private Ledgers containing Protected Health Information  

If the ledger is intended to contain protected health information, implementors have greater regulatory burdens to consider. One straightforward approach is to simply put everything behind locked doors and firewalls, and implement a private chain. Doing so is not significantly different than running a public directory, you will simply be storing PHI resources on the chain, rather than administrative resources.

![./MeHi-Blockchains-VPN.png](./MeHi-Blockchains-VPN.png){:width="100%"}

```
GET {baseUrl}/metadata
GET {baseUrl}/Patient/{patientId}
GET {baseUrl}/Condition/{conditionId}
...etc...
```

> Not: When returning a patient chart, implementors may find it convenient to send the Provenance records in the FHIR Bundle. Sending via a custom header X-Provenance is still an option, however.

As convenient as putting raw FHIR records on a ledger may be, the fact of the matter is that many commercially available ledger technologies have their own internal data storage formats. Hyperledger and Ethereum are two examples, in particular, that have widespread support due to their smart contract functionality, which get frequent interest from startups in the healthcare space.

![./MeHi-Blockchains-Ethereum.png](./MeHi-Blockchains-Ethereum.png){:width="100%"}

Implementors should be aware that Ethereum and Hyperledger both have options for private chains. However, they will have internal smart contract data formats. The task for the FHIR implementor, then, is to map the blockchain smart-contracts to FHIR resource types, and then serve up the FHIR resources via API.

#### Private Ledgers and Consent Custodial Services  

Be aware that the Consent record itself is often considered Protected Health Information. Often times implementators may wish to put all their Consent records into a single ledger, which acts as the computational consent custodian. On the back end, these systems may be connected to PDF servers and other document servers. But otherwise, they operate the same as any other distributed ledger that supports on-chain JSON/FHIR records. Such technologies include Neo4J, BitTorrent, IPFS, BigChain, and others.

![./MeHi-Blockchains-BigChain-Consents.png](./MeHi-Blockchains-BigChain-Consents.png){:width="100%"}

These systems will naturally tend towards implementing a full HTTP microservice on the /Consent endpoint, like so:

```
GET {baseUrl}/metadata
GET {baseUrl}/Consent/{consentId}
PUT {baseUrl}/Consent/{consentId}
POST {baseUrl}/Consent
DELETE {baseUrl}/Consent/{consentId}
...etc...
```

#### HIPAA Compliant Public Ledgers  

The blockchain architecture that generates the most interest is that of HIPAA compliant public ledgers. At this point, many groups have attempted to use technologies such as Hyperledger and Etherum to store PHI and/or to use their smart contract functionality to model advanced directives, such as power of attourney documents and HIPAA privacy consent records.

Unlike consent custodial system behind a firewall, public ledgers are legally obligated not to put unencrypted personal health information directly on the chain where anybody can view and access it. So, what happens, is that each record that’s put on the the blockchain is a cryptographic hash. These cryptographic hashes are generally analogous to the FHIR Provenance record, and suitable to be mapped to the the /Provenance endpoint.

![./MeHi-Blockchains-Hyperledger.png](./MeHi-Blockchains-Hyperledger.png){:width="100%"}

The problem of course, is that these cryptographic hashes don’t conform to the FHIR data standard. The blockchains don’t necessarily even support XML or JSON directly on the chain. For many implementors, this will simply be an inconvience put upon them by business requirements, and their best course of action will be to map the blockchain cryptographic hashes to the /Provenance endpoint.

For those implementors who have control over their entire stack, a better option may be to put FHIR Provenance records directly on a ledger or filesystem technology, without trying to map it to a pre-existing smart-contract. In effect, such implementors will be taking the Ethereum approach; starting with a distributed filesystem technology like IPFS or BitTorrent, and building smart contract functionality using raw FHIR data models.

![./MeHi-Blockchains-BigChain-Provenance.png](./MeHi-Blockchains-BigChain-Provenance.png){:width="100%"}

```
GET {baseUrl}/metadata
GET {baseUrl}/Provenance/{provenanceId}
PUT {baseUrl}/Provenance/{provenanceId}
POST {baseUrl}/Provenance
DELETE {baseUrl}/Provenance/{provenanceId}
...etc...
```

### Merkle Trees  

It should be noted that the FHIR Provenance resource has an optional signature field, which is appropriate for use in creating merkle trees. There are two requirements to do so:

- All records in the block MUST use the FHIR Provenance resource.
- The Provenance resource MUST support the signature field.

If these two conditions are met, typical merkle tree algorithms should work as expected. Assuming the merkle tree algorithm natively supports JSON or XML nodes, we are simply sprinkling FHIR syntactic sugar on the tree nodes to FHIR-ize them and make them interoperable with other FHIR compliant blockchains.

![./MeHi-Blockchains-MerkleTrees.png](./MeHi-Blockchains-MerkleTrees.png){:width="100%"}

### Wallet Operations  
The simplest operation for client side wallets will be to query the the /Consent endpoint with the patientId like so:

```
GET {baseUrl}/Consent?patient=Patient/{patientId}
```

### References  

- [Ethereum](https://ethereum.org/en/)  
- [Hyperledger](https://www.hyperledger.org/)  
- [BigChain](https://www.bigchaindb.com/)  
- [Interplanetary File System (IPFS)](https://ipfs.io/)    
- [Validated Health Directory (VhDir)](https://github.com/HL7/VhDir)  


# Chapter 7 Sessions
## 7.1 Session Tracking Mechanisms
### 7.1.2 SSL Sessions
> Secure Sockets Layer, the encryption technology used in the HTTPS protocol, has a built-in mechanism allowing multiple requests from a client to be unambiguously identified as being part of a session. A servlet container can easily use this data to define a session.
## Chapter 12 Mapping Requests to Servlet
### 12.2 Specification of Mappings

Comparing with the previous version, the improvement is:
> If the effective `web.xml` (after merging information from fragments and annotations) contains any url-patterns that are **mapped to multiple servlets** then the **deployment must fail**. 

# Chapter 14 Deployment Descriptor
## 14.4 Deployment Descriptor Digram

![session-config](https://private-user-images.githubusercontent.com/3033388/292753115-aed26424-1ae7-427b-ab2e-a8ff3f483c93.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDM1MDQ2MzAsIm5iZiI6MTcwMzUwNDMzMCwicGF0aCI6Ii8zMDMzMzg4LzI5Mjc1MzExNS1hZWQyNjQyNC0xYWU3LTQyN2ItYWIyZS1hOGZmM2Y0ODNjOTMucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQUlXTkpZQVg0Q1NWRUg1M0ElMkYyMDIzMTIyNSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyMzEyMjVUMTEzODUwWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9NjRlZTg2NTNjYWMxOGQ2MTA4YzFiMGM2NmYzOWM4NTgzMjIwNmY2Mjk4OTZkY2VlOWFkNmE0YWQyY2UxZTdmYiZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.0TV7ECP9p-Mqoh3Be2QbUK0_Vm4PZ0j4tWBJAW02A94)

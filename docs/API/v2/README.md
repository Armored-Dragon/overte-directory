# Overte Directory API
Version 2 of the Overte Directory API (Formerly known as Overte Metaverse Server) comes with a more streamlined approach. 

> [!WARNING]  
> As of Feb 8 2025, this is still in development and will be updated as we move forward. Some minor but breaking changes may occur until v1 of this project is released. 

## Overview
The base URL for the API is `https://<instance-url>/api`. An example request to retrieve a list of users assuming the directory service is operated using the `https://example.com` domain would be `https://example.com/api/v2/users`. 

### Users
| OP     | URL | DESCRIPTION | Reference |
| ------- | ------ | ----------- | ----- |
| GET    | /v2/users | Returns a list of all users | TODO |
| POST    | /v2/users | Registers a user | TODO |
| PATCH    | /v2/users | Updates a user | TODO |
| DELETE    | /v2/users | Delete a user | TODO |

### Domains
| OP     | URL | DESCRIPTION | Reference |
| ------- | ------ | ----------- | ----- |
| GET    | /v2/domains | Returns a list of all domains| TODO |
| POST    | /v2/domains | Adds a domain | TODO |
| PATCH    | /v2/domains | Updates a domain| TODO |
| DELETE    | /v2/domains | Delete a domain| TODO |

### Places
| OP     | URL | DESCRIPTION | Reference |
| ------- | ------ | ----------- | ----- |
| GET    | /v2/places | Returns a list of all places | TODO |
| POST    | /v2/places | Creates a Place listing | TODO |
| PATCH    | /v2/places | Updates a place listing | TODO |
| DELETE    | /v2/places | Delete a places listing | TODO |

## Authentication
Users may be required to authenticate to access some endpoints.
TODO: Implement authentication
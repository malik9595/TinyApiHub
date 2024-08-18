# TinyApiHub
## Overview
It allows developers to test and prototyping fake rest api data into their applications, that are free to test and beginer friendly
This is a  simple api server using Node.js, Express,  Mongoose, and some other packages. No need for registration to access this resources.

## Features
- 50 users json data
- 20 posts json data
- 20 todolist json data

## Getting Started
To get started with WeatherAPI, follow these steps:

> [!NOTE]
> Replace tinyapihub.com with actual home domain.

### Example Request:
```

 GET https://tinyapihub.com/users/1
 
 ```

### Example Response:
``` bash
   {
    "id": 1,
    "name": "Linthoi Nganbi",
    "age": 22,
    "gender": "Female",
    "address": "Senapati, Manipur",
    "email": "linthoi22@senapati.net",
    "phone": "+91 2109876543"
    }
```

### Error Handling
Errors are returned in the following format:
``` bash
{
    "error": {
        "code": 400,
        "message": "invalid request"}
    }
```

### Support and Contact
For support queries,discussions and tips, please email malik9863546801@gmail.com. I welcome contributions to improve my API documentation. Please send pull requests to my GitHub repo or report issues you encounter. 

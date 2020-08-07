define({ "api": [
  {
    "type": "get",
    "url": "/regions",
    "title": "Fetch all regions",
    "group": "Regions",
    "name": "GetRegions",
    "parameter": {
      "fields": {
        "string": [
          {
            "group": "string",
            "optional": true,
            "field": "limit",
            "description": "<p>Limit of documents returned default = 50</p>"
          },
          {
            "group": "string",
            "optional": true,
            "field": "page",
            "description": "<p>Current page default = 1</p>"
          },
          {
            "group": "string",
            "optional": true,
            "field": "search",
            "description": "<p>Search term if any</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i localhost:3000/api/regions?limit=2&&page=1&&search=",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"regions\": [\n      {\n          \"name\": \"Arusha\"\n      },\n      {\n          \"name\": \"Dar Es Salaam\"\n      }\n  ],\n  \"total\": 33,\n  \"limit\": 2,\n  \"pageCount\": 17,\n  \"page\": 1,\n  \"pagingCounter\": 1,\n  \"hasPrevPage\": false,\n  \"hasNextPage\": true,\n  \"prev\": null,\n  \"next\": 2\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/modules/region/region.routes.js",
    "groupTitle": "Regions"
  }
] });

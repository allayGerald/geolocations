define({ "api": [
  {
    "type": "get",
    "url": "/regions/:id/districts",
    "title": "Fetch region districts",
    "version": "1.0.0",
    "group": "Regions",
    "name": "GetRegionDistricts",
    "parameter": {
      "fields": {
        "string": [
          {
            "group": "string",
            "optional": false,
            "field": "id",
            "description": "<p>The region ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\"Babati\",\n\"Mbulu\",\n\"Hanang\",\n\"Kiteto\",\n\"Simanjiro\"\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/region/region.routes.js",
    "groupTitle": "Regions"
  },
  {
    "type": "get",
    "url": "/regions?search=",
    "title": "Fetch all regions",
    "version": "1.0.0",
    "group": "Regions",
    "name": "GetRegions",
    "parameter": {
      "fields": {
        "string": [
          {
            "group": "string",
            "optional": true,
            "field": "search",
            "description": "<p>Search term</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n{\n  \"name\": \"Arusha\",\n  \"_id\": \"5f3f8cf71358fd4604d4e49b\"\n },\n {\n   \"name\": \"Dar Es Salaam\",\n  \"_id\": \"5f3f8cf71358fd4604d4e49a\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/region/region.routes.js",
    "groupTitle": "Regions"
  },
  {
    "type": "get",
    "url": "/regions/districts?search=",
    "title": "Fetch regions with districts",
    "version": "1.0.0",
    "group": "Regions",
    "name": "GetRegionsDistricts",
    "parameter": {
      "fields": {
        "string": [
          {
            "group": "string",
            "optional": true,
            "field": "search",
            "description": "<p>Search term if any</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n{\n  \"name\": \"Arusha\",\n  \"_id\": \"5f3f8cf71358fd4604d4e49b\",\n     \"districts\": [\n         \"Arusha\",\n         \"Arumeru\",\n         \"Monduli\",\n         \"Karatu\",\n         \"Longido\",\n         \"Ngorongoro\"\n     ]\n },\n {\n   \"name\": \"Dar Es Salaam\",\n  \"_id\": \"5f3f8cf71358fd4604d4e49a\",\n     \"districts\": [\n         \"Ilala\",\n         \"Kinondoni\",\n         \"Temeke\",\n         \"Ubungo\",\n         \"Kigamboni\"\n     ]\n }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/region/region.routes.js",
    "groupTitle": "Regions"
  }
] });

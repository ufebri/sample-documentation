define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "D:\\DATA-URAY\\apidocjs\\doc\\main.js",
    "groupTitle": "D:\\DATA-URAY\\apidocjs\\doc\\main.js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/users/:username/repos",
    "title": "Request user repository",
    "name": "GetRepo",
    "group": "Repository",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username unique</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the users</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "node_id",
            "description": "<p>Token of the authenticaton</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of repository</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "full_name",
            "description": "<p>The full name of repository</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "private",
            "description": "<p>The status of repository</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "owner",
            "description": "<p>The owner detail data of repository</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "owner.login",
            "description": "<p>The username of owner repository</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "owner.id",
            "description": "<p>Unique ID of owner repository</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "owner.node_id",
            "description": "<p>Authentication of token repository owner.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "owner.avatar_url",
            "description": "<p>Image of user owner repository</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "owner.gravatar_id",
            "description": "<p>ID of user owner image repository.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ownner.html_url",
            "description": "<p>URL of the user profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "owner.followers_url",
            "description": "<p>URL of the user followers.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "owner.following_url",
            "description": "<p>URL of the user following</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "owner.gist_url",
            "description": "<p>URL of the user collection gist.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "owner.stared_url",
            "description": "<p>URL of the user collection stared repository</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "owner.subscription_url",
            "description": "<p>URL of the detail subscription user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "owner.organizations_url",
            "description": "<p>URL of the detail organization of user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "owner.repos_url",
            "description": "<p>URL of the collection repository of user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "owner.events_url",
            "description": "<p>URL of the collection all event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "owner.received_events_url",
            "description": "<p>URL of the received event by user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "owner.type",
            "description": "<p>The detail of account</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "owner.site_admin",
            "description": "<p>The status site admin created by owner.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "html_url",
            "description": "<p>The link of repository</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of repository</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fork",
            "description": "<p>The fork status detail of repository</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The api link of repository</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "forks_url",
            "description": "<p>The link for other user to fork repository</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "keys_url",
            "description": "<p>The link keys of repository</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "collaborators_url",
            "description": "<p>The collection of collaborators.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teams_url",
            "description": "<p>The collection of member in repository.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hooks_url",
            "description": "<p>The link of hook repository.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"id\": 170125758,\n    \"node_id\": \"MDEwOlJlcG9zaXRvcnkxNzAxMjU3NTg=\"\n    \"name\": \"a14-made-labs4\",\n    \"full_name\": \"ufebri/a14-made-labs4\",\n    \"private\": false,\n    \"owner\": {\n        \"login\": \"ufebri\",\n        \"id\": 36669025,\n        \"node_id\": \"MDQ6VXNlcjM2NjY5MDI1\"\n        \"avatar_url\": \"https://avatars2.githubusercontent.com/u/36669025?v=4\",\n        \"gravatar_id\": \"\",\n        \"url\": \"https://api.github.com/users/ufebri\",\n        \"html_url\": \"https://github.com/ufebri\",\n        \"followers_url\": \"https://api.github.com/users/ufebri/followers\",\n        \"following_url\": \"https://api.github.com/users/ufebri/following{/other_user}\",\n        \"gists_url\": \"https://api.github.com/users/ufebri/gists{/gist_id}\",\n        \"starred_url\": \"https://api.github.com/users/ufebri/starred{/owner}{/repo}\",\n        \"subscriptions_url\": \"https://api.github.com/users/ufebri/subscriptions\",\n        \"organizations_url\": \"https://api.github.com/users/ufebri/orgs\",\n        \"repos_url\": \"https://api.github.com/users/ufebri/repos\",\n        \"events_url\": \"https://api.github.com/users/ufebri/events{/privacy}\",\n        \"received_events_url\": \"https://api.github.com/users/ufebri/received_events\",\n        \"type\": \"User\",\n        \"site_admin\": false\n    },\n    \"html_url\": \"https://github.com/ufebri/a14-made-labs4\",\n    \"description\": null,\n    \"fork\": true,\n    \"url\": \"https://api.github.com/repos/ufebri/a14-made-labs4\",\n    \"forks_url\": \"https://api.github.com/repos/ufebri/a14-made-labs4/forks\",\n    \"keys_url\": \"https://api.github.com/repos/ufebri/a14-made-labs4/keys{/key_id}\",\n    \"collaborators_url\": \"https://api.github.com/repos/ufebri/a14-made-labs4/collaborators{/collaborator}\",\n    \"teams_url\": \"https://api.github.com/repos/ufebri/a14-made-labs4/teams\",\n    \"hooks_url\": \"https://api.github.com/repos/ufebri/a14-made-labs4/hooks\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example Usage",
        "content": "curl -i https://api.github.com/users/ufebri/repos",
        "type": "json"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>The <code>username</code> of the user was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"message\": \"Not Found\",\n    \"documentation_url\": \"https://developer.github.com/v3/repos/#list-user-repositories\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./sample-repo.js",
    "groupTitle": "Repository"
  },
  {
    "type": "get",
    "url": "/user/id",
    "title": "Request User information",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./sample-user.js",
    "groupTitle": "User"
  },
  {
    "type": "patch",
    "url": "/user/:id/:param",
    "title": "Update User Information",
    "name": "UpdateUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"username\": \"john.doe\"\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./sample-user.js",
    "groupTitle": "User"
  }
] });

/**
 * @api {get} /users/:username/repos Request user repository
 * @apiName GetRepo
 * @apiGroup Repository
 * 
 * @apiParam {String} username Username unique
 * 
 * @apiSuccess {Number} id Unique id of the users
 * @apiSuccess {String} node_id Token of the authenticaton
 * @apiSuccess {String} name The name of repository
 * @apiSuccess {String} full_name The full name of repository
 * @apiSuccess {Boolean} private The status of repository
 * @apiSuccess {Object[]} owner The owner detail data of repository
 * @apiSuccess {String} owner.login The username of owner repository
 * @apiSuccess {Number} owner.id Unique ID of owner repository
 * @apiSuccess {String} owner.node_id Authentication of token repository owner.
 * @apiSuccess {String} owner.avatar_url Image of user owner repository
 * @apiSuccess {String} owner.gravatar_id ID of user owner image repository.
 * @apiSuccess {String} ownner.html_url URL of the user profile
 * @apiSuccess {String} owner.followers_url URL of the user followers.
 * @apiSuccess {String} owner.following_url URL of the user following
 * @apiSuccess {String} owner.gist_url URL of the user collection gist.
 * @apiSuccess {String} owner.stared_url URL of the user collection stared repository
 * @apiSuccess {String} owner.subscription_url URL of the detail subscription user.
 * @apiSuccess {String} owner.organizations_url URL of the detail organization of user.
 * @apiSuccess {String} owner.repos_url URL of the collection repository of user.
 * @apiSuccess {String} owner.events_url URL of the collection all event.
 * @apiSuccess {String} owner.received_events_url URL of the received event by user.
 * @apiSuccess {String} owner.type The detail of account
 * @apiSuccess {Boolean} owner.site_admin The status site admin created by owner.
 * @apiSuccess {String} html_url The link of repository
 * @apiSuccess {String} description The description of repository
 * @apiSuccess {String} fork The fork status detail of repository
 * @apiSuccess {String} url The api link of repository
 * @apiSuccess {String} forks_url The link for other user to fork repository
 * @apiSuccess {String} keys_url The link keys of repository
 * @apiSuccess {String} collaborators_url The collection of collaborators.
 * @apiSuccess {String} teams_url The collection of member in repository.
 * @apiSuccess {String} hooks_url The link of hook repository.
 * 
 * 
 * @apiExample Example Usage
 * curl -i https://api.github.com/users/ufebri/repos
 * 
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      [
 *        {
 *          "id": 170125758,
 *          "node_id": "MDEwOlJlcG9zaXRvcnkxNzAxMjU3NTg="
 *          "name": "a14-made-labs4",
 *          "full_name": "ufebri/a14-made-labs4",
 *          "private": false,
 *          "owner": {
 *              "login": "ufebri",
 *              "id": 36669025,
 *              "node_id": "MDQ6VXNlcjM2NjY5MDI1"
 *              "avatar_url": "https://avatars2.githubusercontent.com/u/36669025?v=4",
 *              "gravatar_id": "",
 *              "url": "https://api.github.com/users/ufebri",
 *              "html_url": "https://github.com/ufebri",
 *              "followers_url": "https://api.github.com/users/ufebri/followers",
 *              "following_url": "https://api.github.com/users/ufebri/following{/other_user}",
 *              "gists_url": "https://api.github.com/users/ufebri/gists{/gist_id}",
 *              "starred_url": "https://api.github.com/users/ufebri/starred{/owner}{/repo}",
 *              "subscriptions_url": "https://api.github.com/users/ufebri/subscriptions",
 *              "organizations_url": "https://api.github.com/users/ufebri/orgs",
 *              "repos_url": "https://api.github.com/users/ufebri/repos",
 *              "events_url": "https://api.github.com/users/ufebri/events{/privacy}",
 *              "received_events_url": "https://api.github.com/users/ufebri/received_events",
 *              "type": "User",
 *              "site_admin": false
 *          },
 *          "html_url": "https://github.com/ufebri/a14-made-labs4",
 *          "description": null,
 *          "fork": true,
 *          "url": "https://api.github.com/repos/ufebri/a14-made-labs4",
 *          "forks_url": "https://api.github.com/repos/ufebri/a14-made-labs4/forks",
 *          "keys_url": "https://api.github.com/repos/ufebri/a14-made-labs4/keys{/key_id}",
 *          "collaborators_url": "https://api.github.com/repos/ufebri/a14-made-labs4/collaborators{/collaborator}",
 *          "teams_url": "https://api.github.com/repos/ufebri/a14-made-labs4/teams",
 *          "hooks_url": "https://api.github.com/repos/ufebri/a14-made-labs4/hooks"
 *        }
 *      ]
 * 
 * @apiError NotFound The <code>username</code> of the user was not found.
 * 
 * @apiErrorExample Error-Response:
 *      HTTP/1.1 404 Not Found
 *      {
 *          "message": "Not Found",
 *          "documentation_url": "https://developer.github.com/v3/repos/#list-user-repositories"
 *      }
 * 
 * 
 * 
 */
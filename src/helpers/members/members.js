// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

/* construct */
let object = {};

/* initialise */
object.init = function(wrapper) {
  this.wrapper = wrapper;

  // Initialise and insert child helper object.
  this.profile_posts = require('./profile_posts.js').init(object.wrapper);

  return this;
};

/* functions */
// Fetch detailed information about yourself.
//
// See documentation for response object fields: https://www.mc-market.org/wiki/ultimate-api-v1-members/
object.self = async function() {
  return await this.wrapper.get(`/members/self`);
};

// Fetch detailed information about a member.
//
// See documentation for response object fields: https://www.mc-market.org/wiki/ultimate-api-v1-members/
object.fetch = async function(member_id) {
  return await this.wrapper.get(`/members/${member_id}`);
};

// Fetch detailed information about a member by username.
//
// See documentation for response object fields: https://www.mc-market.org/wiki/ultimate-api-v1-members/
object.fetch_by_username = async function(username) {
  return await this.wrapper.get(`/members/username/${username}`);
};

// Fetch a list of recently issued bans.
//
// See documentation for response object fields: https://www.mc-market.org/wiki/ultimate-api-v1-members/
object.bans = async function() {
  return await this.wrapper.get("/members/bans");
};

/* exports */
module.exports = object;

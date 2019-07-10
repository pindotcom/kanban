const nforce = require("nforce");

/**
 * Creates connection to Salesforce CRM
 */

module.exports = nforce.createConnection({
  clientId:
    "3MVG9vtcvGoeH2bj6cKXKdprcqcMQ3e9368wuF3RP3uYXd0e4ylwU.Ak4u7T7PzzO9og2p45latihAGItQb1J",
  clientSecret:
    "0D53069E17200B3053FAD630E2D3C8222F2D4A0CA5FFCDB2DDF3BDE28C556156",
  redirectUri: "https://login.salesforce.com/services/oauth2/success",
  apiVersion: "v43.0",
  mode: "single",
  autoRefresh: true,
  username: "pin@codingbootcamp.com",
  password: "Dzcz7b4wm3dU62SEeAVjYSYW45kUBbFlh",
  oauth: {
    access_token:
      "6Cel800D3i000000EB2n8883i0000009Huw1LvladiTwKEm4oRspNAKl0lSFgfjRPKg0QJCj3Pu42fCMohkeK9p9gqkmulZuepmTYXgZ2lV",
    instance_url: "https://na112.my.salesforce.com"
  }
});

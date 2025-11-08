module.exports = {
  config: {
    name: "offbot",
    version: "1.0",
    author: "Meheraz",
    countDown: 45,
    role: 0,
    shortDescription: "Turn off bot",
    longDescription: "Turn off bot",
    category: "owner",
    guide: "{p}{n}"
  },
  onStart: async function ({event, api}) {
    const permission = [ "100023789902793" ];
  if (!permission.includes(event.senderID)) {
    api.sendMessage("✦━━━━━━━━━━━━━━━━✦\n\n You don't have permission to use this command.\n\n✦━━━━━━━━━━━━━━━━✦", event.threadID, event.messageID);
    return;
  }
    api.sendMessage("✦━━━━━━━━━━━━━━━━✦\n\n Successfully Turned Off System ⊙ \n\n✦━━━━━━━━━━━━━━━━✦",event.threadID, () =>process.exit(0))}
};

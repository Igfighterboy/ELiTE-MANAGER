const client = require("../index");
  const activities = [
    { name: "ELiTE DEVELOPMENT", type: 'STREAMING',  status: 'streaming', url: "https://dsc.gg/elitedev" },
  ];
  client.on('ready', () => {
    console.log(`${client.user.tag} is up and ready to go!`)
    client.user.setPresence({ activity: activities[0] });
    let activity = 1;
    setInterval(() => {
        activities[3] = { name: `${client.users.cache.size} Members`, type: 'WATCHING', status: 'dnd'  };
        activities[2] = { name: `📢・〢ᴀɴɴᴏᴜɴᴄᴇᴍᴇɴᴛ`, type: 'WATCHING', status: 'idle',};
        activities[4] = { name: `You`, type: 'WATCHING', status: 'online', }; 
        activities[5] = { name: `${client.ws.ping} ping`, type: 'PLAYING'}; 

      if(activity > 5) activity = 0;
      client.user.setActivity(activities[activity]);
      activity++;
    }, 5000);
   });
  
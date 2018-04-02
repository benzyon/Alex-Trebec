const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("Family $200")) {
    message.channel.send("```Does your character have siblings? How many do they have? If they don’t have any, do they want to have siblings?```");
  }
});

client.on("message", (message) => {
    if (message.content.startsWith("Family $400")) {
      message.channel.send("```What are your character's Parents names? Do they have parents? If not, what happened to them? ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Family $600")) {
      message.channel.send(" ``` Is there anyone your character isn’t related to that they treat like family?```");
    }
  });
  client.on("message", (message) => {
    if (message.content.startsWith("Family $800")) {
      message.channel.send("```What other family does your character have that aren't siblings or parents? If none, what family roll would fit them best?```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Family $1000")) {
      message.channel.send(" ``` What does your character think about having a family of their own? Would they adopt, try and have their own kids, never hook up with anyone, not have any kids but have a partner?```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Beliefs $200")) {
      message.channel.send("```Does your character believe in a religion? If not, why? If you just don’t give your characters a religious belief, feel free not to answer or say why you don’t.```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Beliefs $400")) {
      message.channel.send("```What’s your character's alignment like? Are they chaotic, good, evil, lawful? What kind of justice do they believe in? ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Beliefs $600")) {
      message.channel.send("``` What is your character's views on death and killing/murder?``");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Beliefs $800")) {
      message.channel.send("``` How honest are they with their thoughts and feelings? Do they hide who they really are or do they show the world? ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Beliefs $1000")) {
      message.channel.send("```What sort of society does the character thinks works best? one where everyone gets the same, one where one person rules over everyone, people get what they work for, free for all, they don’t have any interest for that sort of thing? ``");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Side Characters $200")) {
      message.channel.send("```Does your character have any friends or are they in it alone?```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Side Characters $400")) {
      message.channel.send(" ```Is there a side character that carries the main character through the story? Or can they make it on their own? ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Side Characters $600")) {
      message.channel.send(" ```Do your side characters have families or parents? Tell us a little about them. ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Side Characters $800")) {
      message.channel.send("``` How did your character meet one or two of the side characters or all if you have many that you want to share? ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Side Characters $1000")) {
      message.channel.send("``` Who is your favorite side character and which side character do you like the least? You can still like them but you like everyone else more. ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Villians $200")) {
      message.channel.send("```Who or what is the main villain? Is it a man/woman, internal conflict, society? ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Villians $400")) {
      message.channel.send(" ``` What is the Villain's goal or what is the problem for the main character, be more specific.```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Villians $600")) {
      message.channel.send(" ```What does the character have to overcome to be able to beat the villain[ s]  of the story? ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Villians $800")) {
      message.channel.send("``` What sort of connections does your villain have? Do they have someone they care about? If not what is their weak point? ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Villians $1000")) {
      message.channel.send(" ``` Would your character live long enough to become the villain? Would their friends let them become the bad guy? Would they try and stop themselves?```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Daily Life $200")) {
      message.channel.send("```Does your character live a normal life? What kind of life do they want to live?```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Daily Life $400")) {
      message.channel.send(" ```What kind of area does your character live in? What are the people, if any like? ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Daily Life $600")) {
      message.channel.send(" ``` What is your character's current job/major? what is their dream job?```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Daily Life $800")) {
      message.channel.send("``` What does your character like to do on their days off or when they have time to themselves? ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Daily Life $1000")) {
      message.channel.send("```Who are the characters friends or what kind of group of people does your character prefer to hang out with?  ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Quirks $200")) {
      message.channel.send("```What is something your character likes to do when no one is home/looking? ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Quirks $400")) {
      message.channel.send("``` What is your character afraid of that they would never readily tell someone? ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Quirks $600")) {
      message.channel.send("``` Does your character dream? If so what are their dreams about? If not, what do they fantasize about? ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Quirks $800")) {
      message.channel.send("```What superstitions does your character believe in?  ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Quirks $1000")) {
      message.channel.send("``` Does your character have an odd habit? If not, what is something your character is insecure about? ```");
    }
  });


//green board

client.on("message", (message) => {
  if (message.content.startsWith("Setting $200")) {
    message.channel.send("``` Where does the story take place? What are the names? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Setting $400")) {
    message.channel.send(" ``` Had your character always lived where they are? If not, where did they move from? Do they like home better or where they are now?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Setting $600")) {
    message.channel.send(" ``` What are some of the defining landmarks to the character? If they travel do they use maps or do they know the way?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Setting $800")) {
    message.channel.send("``` Where is your character’s favorite place to go?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Setting $1000")) {
    message.channel.send(" ``` What is the weather like in that area? What season is it right now? Do they like the weather or do they hate it?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Love Interests $200")) {
    message.channel.send("``` Does your character have a love interest? How did they meet? If not do they have any pets? Do they want any?```");
  }
});
client.on("message", (message) => {
  if (message.content.startsWith("Love Interests $400")) {
    message.channel.send("```What is your character's sexuality? Do they like girls, guys, neither, other? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Love Interests $600")) {
    message.channel.send("``` What does your character look for in a partner? If they aren't interested in What is something your character likes to do when no one is home/looking?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Love Interests $800")) {
    message.channel.send(" ``` What would be your characters ideal date?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Love Interests $1000")) {
    message.channel.send("``` How comfortable is your character with themselves and or with their partner? Do they keep secrets or are they an open book?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Plot $200")) {
    message.channel.send("``` What is the driving point that started the story or the inciting incident?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Plot $400")) {
    message.channel.send("```What is the first challenge of the story? How do they overcome it?  ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Plot $600")) {
    message.channel.send("```What happens in the middle of the story? Is it exciting, hard to write, boring, fun, unsure?  ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Plot $800")) {
    message.channel.send("```What is the climax of the story?  ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Plot $1000")) {
    message.channel.send("```What is the resolution of the story/epilogue?  ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Family 2 $200")) {
    message.channel.send("``` Who in their family does your character most admire? If no one, who do they admire?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Family 2 $400")) {
    message.channel.send("``` Who in their family do they feel closest to? If they have no family, who are they closest to?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Family 2 $600")) {
    message.channel.send("```Does your character hate their family members? Is it a specific one? Who do they dislike the most if they don’t hate someone?  ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Family 2 $800")) {
    message.channel.send("```If they had a kid, what would they be like?  ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Family 2 $1000")) {
    message.channel.send("```How would your character react to losing someone they care about? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Backstory $200")) {
    message.channel.send("``` What is a part of your characters back story, no more than a year before the story starts?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Backstory $400")) {
    message.channel.send("``` What sort of childhood did your character have? If they are still a child, what is it like?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Backstory $600")) {
    message.channel.send(" ```Did something tragic happen in their past? Was it mentally scarring? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Backstory $800")) {
    message.channel.send(" ``` What is something good that happened to them in the past that they look back and smile about?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Backstory $1000")) {
    message.channel.send("``` If they could change any part of something that happened in the past, would they and what would it be? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Simple Details $200")) {
    message.channel.send("```What do they carry in their pockets/bag?  ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Simple Details $400")) {
    message.channel.send("``` Are they a heavy sleeper or a light sleeper? How do people wake them up?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Simple Details $600")) {
    message.channel.send(" ``` What is a pet peeve of theirs? How do they react when someone does it?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Simple Details $800")) {
    message.channel.send(" ```If they could have a pet, what kind of pet would they want? If they have pets, what pets do they have? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Simple Details $1000")) {
    message.channel.send(" ```What talents does your character have? ```");
  }
});

  
client.login("MzMzNjUyNTMxMzgzMTA3NTg0.DYZonA.Nml1X91RuvFJCb9byZmU4ZHaDGQ");

// Write a function that returns the number of users in a chatroom based on the following rules:

// If there is no one, return "no one online".
// If there 1 person, return "[user1] online".
// If there are 2 people, return [user 1] and [user 2] online".
// If there are n>2 people, return the first two names and add "and n-2 more online".
// For example, if there are 5 users, return: "[user1], [user2] and 3 more online"

// Examples
// chatroom([]) ➞ "no one online"

// chatroom(["paRIE_to"]) ➞ "parIE_to online"

// chatroom(["s234f", "mailbox2"]) ➞ "s234f and mailbox2 online"

// chatroom(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"])
// ➞ "pap_ier44, townieBOY and 4 more online"

const chatroomStatus = users => {
    switch (users.length) {
     case 0: return "no one online"
     case 1: return `${users[0]} online`
      case 2: return `${users[0]} and ${users[1]} online`
      case 3: return `${users[0]}, ${users[1]} and 1 more online`
      default: return `${users[0]}, ${users[1]} and ${users.length - 2} more online`
       } 
   }
   
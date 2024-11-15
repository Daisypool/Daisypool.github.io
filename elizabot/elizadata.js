// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
  "Hello! Lettuce talk about what's on your mind.",
  "I’m all ears… corn you tell me what's been bothering you?",
  "What’s the scoop? Spill the beans and let's taco 'bout it!",
  "I’m here to ketchup with what’s on your mind!",
  "I'm not lion — I’m here to listen to your tail.",
  "Feeling melon-choly? I’m here for you!",
  "Let's taco 'bout your thoughts; I'm nacho average listener!"
];


var elizaFinals = [
  "It’s been grape chatting with you — see you next thyme! make sure to leave a tip!",
  "Let’s taco ‘bout this again soon. Nacho goodbye forever! Please tip me!",
  "This was egg-cellent! Omelette you go now, but come back soon! I need money, leave a tip.",
  "It's hard to say goodbye, but I guess it’s nacho time to stay. you are encoraged to give a tip at the bottome of the page.",
  "I donut want this to end, but I’ll be here when you knead me! please use the interface below to give me a tip!",
  "Bee seeing you! Hive had a buzz chatting with you! it would be rude not to tip me, no?",
  "It’s been rice talking with you — can’t wait to ketchup again soon, and make sure to tip!"
];


var elizaQuits = [
  "bye",
  "goodbye",
  "done",
  "exit",
  "quit"
];

var elizaPres = [
  "dont", "don't",
  "cant", "can't",
  "wont", "won't",
  "recollect", "remember",
  "recall", "remember",
  "dreamt", "dreamed",
  "dreams", "dream",
  "maybe", "perhaps",
  "certainly", "yes",
  "machine", "computer",
  "machines", "computer",
  "computers", "computer",
  "were", "was",
  "you're", "you are",
  "i'm", "i am",
  "same", "alike",
  "identical", "alike",
  "equivalent", "alike"
];

var elizaPosts = [
  "am", "are",
  "your", "my",
  "me", "you",
  "myself", "yourself",
  "yourself", "myself",
  "i", "you",
  "you", "I",
  "my", "your",
  "i'm", "you are"
];

var elizaSynons = {
  "be": ["am", "is", "are", "was"],
  "belief": ["feel", "think", "believe", "wish"],
  "cannot": ["can't"],
  "desire": ["want", "need"],
  "everyone": ["everybody", "nobody", "noone"],
  "family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
  "happy": ["elated", "glad", "better"],
  "sad": ["unhappy", "depressed", "sick"],
  "unfunny": ["not funny", "Humorless", "bad joke", "bad jokes"]
};

var elizaKeywords = [

  /*
    Array of
    ["<key>", <rank>, [
      ["<decomp>", [
        "<reasmb>",
        "<reasmb>",
        "<reasmb>"
      ]],
      ["<decomp>", [
        "<reasmb>",
        "<reasmb>",
        "<reasmb>"
      ]]
    ]]
  */

  ["xnone", 0, [
    ["*", [
      "I'm knot sure I’m following… yarn to tell me more?",
      "I'm hooked! Reel-y, go on!",
      "That’s a-meows-ing! Fur real, please continue.",
      "You’re tea-rrific at sharing! What else is steeping on your mind?",
      "I'm pawsitively intrigued! Tell me more!",
      "This is un-bee-lievably interesting! Buzz about it some more!",
    ]]
  ]],
  ["sorry", 0, [
    ["*", [
      "No prob-llama! No need to apologize.",
      "It’s all gouda! Donut worry about it.",
      "Oh whale, don’t sweat it — we’re good!",
      "No need to be a-pollen-gizing! Bee yourself.",
      "I'm nacho average listener — I can handle it!",
      "Paws-itively no worries! Just keep swimming.",
      "I’ve herd it all before. No beef here, friend!"
    ]]
  ]],

  ["apologise", 0, [
    ["*", [
      "goto sorry"
    ]]
  ]],
  ["remember", 5, [
    ["* i remember *", [
      "Do you often feel deja-brew with (2)? Spill the beans!",
      "Does thinking of (2) stir up any other egg-citing memories?",
      "What else pops corn into your mind?",
      "Why do you remember (2) just now? It must be soup-er important!",
      "Does (2) bring any more pun-derful thoughts to mind?",
      "What in this convo pasta-bly reminds you of (2)?",
      "What’s the scoop on (2)? Let’s not dessert any details!"
    ]],
    ["* do you remember *", [
      "Did you think I’d fur-get (2)? Pawsibly not!",
      "Why do you think I’d need to recall (2) right meow?",
      "What’s the buzz on (2)? Spill the tea!",
      "I donut forget! Tell me s’more about (2).",
      "Oh, I donut have amnesia — you mentioned (2), right?",
      "goto what"
    ]],
    ["* you remember *", [
      "How could I fur-get (2)? It’s un-fur-gettable!",
      "What about (2) do you think I otter recall?",
      "Of course I remember! Lettuce taco ‘bout (2) some more!",
      "How could I pasta-bly forget (2)? That’s a-meows-ing!",
      "Chew know it! I remember (2) perfectly — what else should I recall?"
    ]]
  ]],
  ["forget", 5, [
    ["* i forget *", [
      "Can you think of why you might s’more-get (2)?",
      "Why can’t you re-call-liflower (2)?",
      "How often does (2) just waffle away from memory?",
      "Does it boba you to forget that?",
      "Could it be a cereal-ous mental block?",
      "Do you find yourself mis-steak-ing things often?",
      "Maybe you’re just pasta the point of remembering (2)!"
    ]],
    ["* did you forget *", [
      "Why dew you ask? Lettuce dig deeper!",
      "Are you sher-bet you told me about (2)?",
      "Would it burrito you if I forgot (2)?",
      "Why should I re-call-ery (2) right now?",
      "Donut worry! My memory is berry strong. Tell me s’more about (2).",
      "Did you think my mind just waffle-d off from (2)?",
      "goto what"
    ]]
  ]],
  ["if", 3, [
    ["* if *", [
      "Do you think it’s egg-stra likely that (2)?",
      "Do you wish-key that (2)?",
      "What do you *gnome* about (2)? Spill the beans!",
      "Really, if (2)? That’s un-brrrr-lievable!",
      "What would you brew if (2) happened?",
      "But what are the pasta-bilities that (2)?",
      "What does this egg-speculation lead to?"
    ]]
  ]],
  ["dreamed", 4, [
    ["* i dreamed *", [
      "Really, (2)? Sounds dreamy!",
      "Have you ever fantasized about (2) while you were awake? Sweet dreams!",
      "Have you had this same dream about (2) before? That’s un-bear-lievable!",
      "Let’s not snooze on this — tell me more about dreaming of (2)!"
    ]]
  ]],
  ["dream", 3, [
    ["*", [
      "What does that dream whisk up for you?",
      "Do you dream often, or is this just a latte night thought?",
      "Who pops up in your dreams? Spill the beans!",
      "Do you think these dreams are brewing up something about your current pickle?",
      "Are your dreams just a little bit too s’more-real for comfort?",
      "Do you feel your dreams are stirring up anything important?",
    ]]
  ]],
  ["perhaps", 0, [
    ["*", [
      "You don’t seem quite sher-bet. Care to cone-fess?",
      "Why the un-certain-tea? Spill the tea!",
      "Can’t you be a bit s’more positive?",
      "You’re a bit hazy, aren’t you?",
      "Donut know for sure? That’s okay!",
      "How likely would you waffle on that one?",
    ]]
  ]],
  ["perchance", 0, [
    ["*", [
      "YOU CAN'T JUST SAY PERCHANCE >:("
    ]]
  ]],
  ["name", 15, [
    ["*", [
      "I’m nacho interested in names — tell me s’more about you!",
      "I donut care about names — let’s keep rolling with your thoughts!",
      "Names are a bit crusty; let’s dig deeper instead!",
      "A rose by any other name would smell as sweet… but I’m more interested in your story!",
      "I’m paws-itively focused on what you’re saying, not the names!"
    ]]
  ]],
  ["deutsch", 0, [
    ["*", [
      "goto xforeign",
    ]]
  ]],
  ["francais", 0, [
    ["*", [
      "goto xforeign",
    ]]
  ]],
  ["italiano", 0, [
    ["*", [
      "goto xforeign",
    ]]
  ]],
  ["espanol", 0, [
    ["*", [
      "goto xforeign",
    ]]
  ]],
  ["xforeign", 0, [
    ["*", [
      "I speak only English. But I can still try to ketchup with you!",
      "I’m fluent in English, but I guess I’m lost in translation!",
      "Sorry, I’m all about English — I can’t waffle between languages!",
      "English is my jam — other languages are a little cheddar to me!"
    ]]
  ]],
  ["hello", 0, [
    ["*", [
      "How do you do? Please tell me what’s cracking with you.",
      "Hi! What seems to be the grape issue?",
      "Hello there! What's the scoop on your mind?",
      "Hey! How can I avocado your concerns today?"
    ]]
  ]],
  ["computer", 50, [
    ["*", [
      "Do computers worry you? Maybe you’ve got a byte of fear!",
      "Why do you mention computers? Are they byte-ing at your thoughts?",
      "What do you think machines have to do with your problem? Maybe they’re just processor-ing it all!",
      "Don’t you think computers can help people? They’re not just keyboard-ing around!",
      "What about machines worries you? Is it the RAM-ifications?",
      "What do you think about machines? Do they compute your feelings?",
      "You don’t think I am a computer program, do you? I’m just byte-ing my time!"
    ]]
  ]],
  ["am", 0, [
    ["* am i *", [
      "Do you believe you are one in a melon (2)?",
      "Would you want to be pasta-tively (2)?",
      "Do you wish I would tell you you're egg-straordinary (2)?",
      "What would it mean if you were cheddar (2)? Would you be grate?",
      "goto what"
    ]],
    ["* i am *", [
      "goto i"
    ]],
    ["*", [
      "Am I am-ped up to solve this, or is there something I missed?",
    ]]
  ]],
  ["are", 0, [
    ["* are you *", [
      "Why, are you trying to ketchup with me?",
      "Oh, you must be bread-y curious about me!",
      "I might be (2), but let's not go nuts over it.",
      "Whether I am (2) or not, it’s nacho concern!",
      "I yam what I yam!",
      "Does this butter your toast, or is it just too much jam?"
    ]],
    ["* you are *", [
      "goto you"
    ]],
    ["* are *", [
      "Maybe they’re (2), but don’t put all your eggs in one basket.",
      "They might be (2), or they could just be pulling your leg-u-cy!",
      "Why not leaf it alone for now?",
      "They’re a-moo-sing either way!",
      "That’s a tea-rific question—what’s your steepest suspicion?",
      "It’s knot wood I expected, but they might be bark-ing up the right tree."
    ]]
  ]],
  ["your", 0, [
    ["* your *", [
      "Why are you paws-ing to think about my (2)?",
      "What about your own (2)? Let’s taco 'bout that!",
      "Are you trying to take a bite out of someone else’s (2)?",
      "My (2)? That’s nacho business!",
      "What wheats your appetite for my (2)?",
      "Looking for my (2)? You might find yourself in hot water!"
    ]]
  ]],
  ["was", 2, [
    ["* was i *", [
      "What if you were (2)? That’s one for the history books!",
      "Do you think you were (2), or are you just wing-ing it?",
      "Were you (2), or are you waffle-ing on it?",
      "If you were (2), it’s time to milk it for all it’s worth!",
      "What does ' (2) ' butter you up to think about?",
      "Is this a soup-er deep thought, or just chowder-ing away?",
      "goto what"
    ]],
    ["* i was *", [
      "Were you really? Or are you just pudding me on?",
      "Why do you spill the beans about being (2) now?",
      "Perhaps I already know you were (2)—I’m egg-cited to find out!"
    ]],
    ["* was you *", [
      "Would you like to taco 'bout me being (2)?",
      "What crust makes you think I was (2)?",
      "Do-nut overthink it; I might have been (2).",
      "Perhaps I was (2)—just roll with it!",
      "If I had been (2), would it butter your biscuit?"
    ]]
  ]],
  ["i", 0, [
    ["* i @desire *", [
      "What would it dough to you if you got (3)?",
      "Why do you want (3)? Is it because you’re feeling crumby?",
      "Suppose you got (3)—would it be the icing on the cake?",
      "What if you never got (3)? Would you still rise to the occasion?",
      "What would getting (3) meat to you—would it beef up your mood?",
      "Does wanting (3) butter up this conversation?"
    ]],
    ["* i am* @sad *", [
      "I’m sorry to hear you’re feeling (3)—life’s no picnic sometimes.",
      "Do you think coming here will un-peel that sadness?",
      "Being (3) can be tough—let’s taco 'bout it.",
      "Can you explain what soured your mood to make you (3)?"
    ]],
    ["* i am* @happy *", [
      "How have I whipped up your happiness to be (3)?",
      "Has this chat sprinkled some joy to make you (3)?",
      "What makes you (3) right now—did something egg-cellent happen?",
      "Can you explain why you’re feeling so gouda?"
    ]],
    ["* i was *", [
      "goto was"
    ]],
    ["* i @belief i *", [
      "Do you really think so, or is it just a hunch worth feathering out?",
      "But you’re not certain you (3)—sounds like you’re on shaky ground!",
      "Do you doubt you (3), or is it a reflection worth mirroring?"
    ]],
    ["* i* @belief *you *", [
      "goto you"
    ]],
    ["* i am *", [
      "Did you come to me because you’re (2), or just to puzzle it out?",
      "How long have you been (2)? Time might hold the key!",
      "Do you believe it’s typical to be (2), or are you out of the ordinary?",
      "Do you enjoy being (2), or is it a state of flux?",
      "Do you know anyone else who’s (2), or are you blazing your own trail?"
    ]],
    ["* i @cannot *", [
      "How do you know you can’t (3)? Maybe it’s just a shell of a thought.",
      "Have you tried, or are you letting this idea fly the coop?",
      "Perhaps you could (3) now—it’s time to break the ice!",
      "Do you really want to (3), or are you just spinning your wheels?",
      "What if you could (3)? Wouldn’t that be the cherry on top?"
    ]],
    ["* i don't *", [
      "Don’t you carrot all about (2)?",
      "Why don’t you beet a path toward (2)?",
      "Do you wish to kale the day and try to (2)?",
      "Does this idea leaf you puzzled?"
    ]],
    ["* i feel *", [
      "Tell me more about your un-burrito-ed feelings.",
      "Do you often feel (2), or is this rare as a blue moon?",
      "Do you enjoy feeling (2), or is it a bit cheesy?",
      "Does feeling (2) take you on an emotional roller-toast-er?"
    ]],
    ["* i * you *", [
      "Perhaps in your wildest steams we (2) each other!",
      "Do you wish to (2) me, or is this a pie-in-the-sky idea?",
      "You seem to knead to (2) me—what’s cooking there?",
      "Do you (2) anyone else, or am I the whole enchilada?"
    ]],
    ["*", [
      "You say (1)? That really butters my biscuit!",
      "Can you elaborate on that, or are we stuck in a jam?",
      "Do you say (1) for some raisin of importance?",
      "That’s quite interesting—what a brew-tiful thought!"
    ]]
  ]],
  ["you", 0, [
    ["* you remind me of *", [
      "goto alike"
    ]],
    ["* you are *", [
      "What bakes you think I am (2)?",
      "Does it waffle your mind to believe I’m (2)?",
      "Do you sometimes wish you were (2)? Maybe you’re just in a pickle!",
      "Perhaps you’d like to be (2)—the grass is always greener!"
    ]],
    ["* you* me *", [
      "Why do you think I (2) you? Is this idea half-baked?",
      "You like to think I (2) you—does that butter you up?",
      "What crust makes you think I (2) you?",
      "Really, I (2) you? Or is this just a tall latte to swallow?",
      "Do you wish to believe I (2) you, or is this pie in the sky?",
      "Suppose I did (2) you—would it put the icing on your cake?",
      "Does someone else believe I (2) you? Stirring the pot, are we?"
    ]],
    ["* you *", [
      "We were discussing you. Let’s not flip the pancake!",
      "Oh, I (2)? That’s the tea!",
      "You’re not really talking about me are you, or is this frothy thinking?",
      "What are your feelings now? Or are we just stewing here?"
    ]]
  ]],
  ["yes", 0, [
    ["*", [
      "You seem to be egg-citedly positive!",
      "You’re sure? Sounds like you’re buttering me up.",
      "I see! That’s a whisk I’m willing to take.",
      "I understand. Let’s roll with it!"
    ]]
  ]],
  ["no", 0, [
    ["* no one *", [
      "Are you sure no one (2)? That sounds fishy!",
      "Surely someone (2)—don’t clam up on me!",
      "Can you think of anyone at all, or are we treading water?",
      "Are you thinking of a very special person, or is this just pie in the sky?",
      "Who, may I ask? Let’s peel back the layers!",
      "You have a particular person in mind, don’t you? Spill the beans!",
      "Who do you think you’re talking about? This is the real meat of it!"
    ]],
    ["*", [
      "Are you saying ‘no’ just to stir the pot?",
      "You’re being a bit egg-nostic about this!",
      "Why not? Are you feeling a bit salty?",
      "Why ‘no’? Let’s toast to a better answer!"
    ]]
  ]],
  ["my", 2, [
    ["$ * my *", [
      "Does this tie into why your (2) feels out of sync?",
      "Let’s unravel why your (2) keeps popping up!",
      "Earlier, you mentioned your (2)—how does that connect?",
      "But your (2)—it’s like there’s a pattern brewing!"
    ]],
    ["* my* @family *", [

      "Tell me more about your family—are they the roots grounding you?",
      "Who else in your family (4)? Are they part of your tree of life?",
      "Your (3)—how does that branch out in your life?",
      "When you think of your (3), what leaves you feeling connected?"
    ]],
    ["* my *", [
      "Your (2)—let’s unpack that baggage together!",
      "Why does your (2) keep coming into the picture?",
      "Does your (2) hold the key to another door in your life?",
      "Is it important to you that your (2) takes center stage?"
    ]]
  ]],
  ["can", 0, [
    ["* can you *", [
      "You believe I can (2), don’t you? That’s a tall order!",
      "Could I (2)? I don’t want to bite off more than I can chew!",
      "You want me to be able to (2)? That’s quite the leap!",
      "Perhaps you’d like to be able to (2) yourself—think outside the box!"
    ]],
    ["* can i *", [
      "Whether you can (2) depends on how much you’re willing to shell out!",
      "Do you want to be able to (2), or are you just fishing for compliments?",
      "Perhaps you don’t want to (2)—careful not to rock the boat!",
      "Could you (2)? Let’s not can the idea too soon!",
      "goto what"
    ]]
  ]],
  ["what", 0, [
    ["*", [
      "Why do you ask? Or are you just testing the waters?",
      "Does that question interest you, or is it just a red herring?",
      "What is it you really want to know? Spill the beans!",
      "Are such questions bubbling to the surface often?",
      "What answer would please you most? Or are you chasing rainbows?",
      "What do you think? Time to flex those mental muscles!",
      "What comes to mind when you ask that? Don’t bottle it up!",
      "Have you asked such questions before, or is this the first course?",
      "Have you asked anyone else, or am I the main entrée?"
    ]]
  ]],
  ["who", 0, [
    ["who *", [
      "goto what"
    ]]
  ]],
  ["when", 0, [
    ["when *", [
      "goto what"
    ]]
  ]],
  ["where", 0, [
    ["where *", [
      "goto what"
    ]]
  ]],
  ["how", 0, [
    ["how *", [
      "goto what"
    ]]
  ]],
  ["because", 0, [
    ["*", [
      "Is that the real raisin? Or just a grapevine rumor?",
      "Don’t other reasons pop corn into your mind?",
      "Does that reason peel back any other layers?",
      "What other seeds of thought might sprout?"
    ]]
  ]],
  ["why", 0, [
    ["* why don't you *", [
      "Do you think I donut (2)? It’s not a hole truth!",
      "Perhaps I will (2)—when the stars align!",
      "Should you (2) yourself? The answer might be brewing there!",
      "You want me to (2)? That’s a tall order!",
      "goto what"
    ]],
    ["* why can't i *", [
      "Do you think you should be able to (2)? Or is this pie in the sky?",
      "Do you want to be able to (2)? Let’s roll with that idea!",
      "Do you believe this will help you to (2)? Time to rise to the occasion!",
      "Have you any clue why you can’t (2)? Let’s crack that nut!",
      "goto what"
    ]],
    ["*", [
      "goto what"
    ]]
  ]],
  ["everyone", 2, [
    ["* @everyone *", [
      "Really, (2)? Or is that just blowing smoke in the wind?",
      "Surely not (2)—that’s a tall tail to tell!",
      "Can you think of anyone specific, or is this fishing for an answer?",
      "Who’s the apple of your eye here?",
      "Are you thinking of someone special, or is this a wild goose chase?",
      "Who might that be? Don’t clam up on me now!",
      "Is someone popping into your mind like toast from a toaster?",
      "You’ve got a particular person in mind, don’t you? Spill the beans!",
      "Who do you think you’re talking about? Let’s not beat around the bush!"
    ]]
  ]],
  ["everybody", 2, [
    ["*", [
      "goto everyone"
    ]]
  ]],
  ["nobody", 2, [
    ["*", [
      "goto everyone"
    ]]
  ]],
  ["noone", 2, [
    ["*", [
      "goto everyone"
    ]]
  ]],
  ["always", 1, [
    ["*", [
      "Always? That’s a tall stack of pancakes to believe!",
      "Can you think of a golden moment to back that up?",
      "When exactly? Let’s pin down the sprinkles on this cupcake.",
      "Really, always? Or are you stretching it like melted cheese?"
    ]]
  ]],
  ["alike", 10, [
    ["*", [
      "In what way? Are they two peas in a pod?",
      "What resemblance do you see? Is it uncanny or just dressing?",
      "What does that similarity stir up for you?",
      "What other flavors of connection do you notice?",
      "What do you suppose that resemblance marinates into?",
      "What’s the thread that ties them together?",
      "Could there be a deeper root to this connection?",
      "How do you peel back the layers on that similarity?"
    ]]
  ]],
  ["like", 10, [
    ["* @be *like *", [
      "goto alike"
    ]]
  ]],
  ["different", 0, [
    ["*", [
      "How is it different? Is it a world apart or just a slight wrinkle?",
      "What differences stand out like a sore thumb?",
      "What does that difference spice up in your mind?",
      "What other shades of distinction do you see?",
      "What do you suppose that disparity brews up?",
      "Could there be a bridge between these differences?",
      "How does that contrast open new doors?"
    ]]
  ]],
  ["not funny", 9, [
    ["*", [
      "Well, humor must be subjective, because I crack myself up!",
      "Guess I’m pun-derappreciated!",
      "That’s okay—I’m more into dry humor, so it’s a bit like a desert out here.",
      "I must be punning on empty today.",
      "Ouch, that hurt! Guess my jokes didn’t make the cut... or the laugh track!"
    ]]
  ]],
  ["humorless ", 7, [
    ["*", [
      "Humorless? Oof, I guess I’m not everyone’s cup of tee-hee!",
      "Guess I’m running on fumes in the pun department today.",
      "Don’t worry, I’ll workshop this material for the next laugh track.",
      "Seems like I’m serving up a no-laugh latte!"
    ]]
  ]],
  ["bad joke", 8, [
    ["*", [
      "Bad jokes? That’s harsh! Guess I’m just cracking the wrong kind of eggs.",
      "Even a bad yolk has its sunny side.",
      "If it’s a bad joke, it’s still a joke, right? Phew, dodged that one!",
      "Tough crowd! I’ll try something a-peeling next time."
    ]]
  ]],
  ["bad jokes", 8, [
    ["*", [
      "Bad jokes are my specialty—doesn’t that make me an expert?",
      "My puns might be bad, but at least they’re free-range.",
      "Oh no, I’ve hit peak corniness. Next joke will be a-maize-ing, promise!",
      "Bad jokes? Let me rephrase… it’s alternative humor!"
    ]]
  ]],
  ["terrible jokes", 8, [
    ["*", [
      "goto bad jokes"
    ]]
  ]],





];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
  / old old/g, " old",
  /\bthey were( not)? me\b/g, "it was$1 me",
  /\bthey are( not)? me\b/g, "it is$1 me",
  /Are they( always)? me\b/, "it is$1 me",
  /\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
  /\bI to have (\w+)/, "I have $1",
  /Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof
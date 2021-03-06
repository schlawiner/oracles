/*
  These oracles are from the roleplaying game "In A Wicked Age" by Vincent Baker:
    http://lumpley.com/wicked.html
  Their text is (c) 2007 Vincent Baker.
  The text here was copied from the Abulafia random-generator website:
    http://www.random-generator.com/index.php?title=In_a_Wicked_Age
*/

var BloodAndSex = [
  "A mysterious star-lit revel on a high bare hilltop, with a single man in attendance",
  "A woman suddenly bereft of love and family, daughter to a long heritage of sorceresses and poisoners",
  "A raving prophet, advocating self-mortification and deprivation of the appetites",
  "A practitioner of law, with her several secretaries",
  "A chattel slave who has broken both his bonds and his master's skull",
  "A practitioner of luck-magics traveling ahead of a ferocious storm",
  "The much-contested wedding of the province's great beauty",
  "Some great wizard's magical messenger, brass-skinned",
  "The secluded home of an exiled court-wizard, dense with unseen population",
  "A note written in an elegant hand, sweetly perfumed, and the child messenger bearing it",
  "A band of demons, laughing and malicious, authors of debauched sensuality and corrupt appetites",
  "A happy girl, promised in marriage to a gentleman, naive to the danger he represents",
  "A company of desert horsemen, hiding a woman amongst them",
  "A farm manor, peaceful and prosperous, headed by a strong woman and her strong husband",
  "The ascension to mastery of a student wizardess, unrecognized by her order but absolutely clear and undeniable to her inner self",
  "The sorcerously animate homunculus of a wizard, more clever than wise, recently dead",
  "The night each year that a certain ghost is allowed her freedom",
  "A deer-path through towering woods to a still pond, and the uncanny creature traveling it",
  "The alliance by marriage of a certain tyrant's family with the cult of a certain desert god",
  "A spirit of the wilds, mercurial in form, sister to gazelles",
  "The local lord's daughter, tramping after strawberries",
  "A wandering exorcist, severe, who accepts no payment for his services but who lusts after carnal congress",
  "The child of a great and renowned theologist, forced into priesthood against both inclination and nature",
  "An altar overflowing with flowers and bowls of honey, and the childless woman who tends it",
  "The rehearsal of the funeral of the city's aged and beloved mayor",
  "A young warrior, initiate into a warrior cult, brother to lions",
  "A spirit of the lower air, caught up in joyous human celebration",
  "A monastery and its associated shrines, each to its own god, tended by monks of uncouth habit",
  "The arrival at a way house of four unusual travelers",
  "The graduation of an apprentice swordmaker to mastery, and its attendant celebration",
  "A raving prophet, preaching the transience of life and advocating a full indulgence of every appetite",
  "A small group of mothers, led by a midwife, fighting to protect their children from demons of illness",
  "The seventh wife of a tyrant king, carrying his chief huntsman's child",
  "A band of goat herders, armed, outraged by an injustice visited upon their clan",
  "A young girl, inexperienced but astute and a canny judge of character",
  "The marriage of a region's most beautiful girl, necessarily virgin and without blemish, to the dead stone effigy of a harvest god",
  "The death of the primary heir of a local noblewoman",
  "The seizure of arcane powers by an arrogant and brutal wizard",
  "A bandit captain, in hiding, with her trusted bodyguard",
  "A field of herbs and wild flowers, alive with bees, where a certain half-bestial creature brings his many lovers",
  "The celebration of local fertility or harvest rites",
  "A camp-wanton, pretty and pliant, prone to drink",
  "A siren-ghoul, who entices the amorous into deadly peril",
  "A famous traveling exorcist and his entourage, with as canny an eye for a village's wealth as for its demons",
  "An oasis of sweet water in a barren wilderness, haunted by the shadows of some vast atrocity committed centuries ago",
  "A slayer of monsters, heralded and lauded",
  "A simple insult, casually inflicted, striking very, very deep",
  "The deathbed curse of a betrayed queen",
  "A wandering spirit, visible at will, an inflamer of human passions",
  "A priestess of a merciful temple of healers, on pilgrimage to the birthplace of her order",
  "A warrior-priestess of a truly bloodthirsty cult",
  "A jealous and vengeful rival, who has an infamous temper and who is prone to violence"
];

var GodKingsOfWar = [
  "The human servant of a mighty and unspeakable demiurge",
  "A cask of honey wine, tribute to a fierce bandit-queen",
  "A war-sorceress, slender but commanding, with golden hair",
  "The arrival of a hundred fearsome warships on an unprepared, prosperous, peaceful coast",
  "The arrival of unexpected and improbable allies, in darkness",
  "The self-important master of strategy to a great general",
  "The site of a pitched battle, ground churned and stinking, and the widows mourning there",
  "An order of magician-monks who punish blasphemers",
  "A much-decorated company of the enemy's light cavalry",
  "The country fort, of bricks and timber, of a local warlord",
  "A vengeful and jealous god, displeased by the lapses of his followers, however scrupulously they observe",
  "An executioner, a strangler, in service to a ruthless king",
  "A chest containing the tax monies of a rural province, and the soldiers carrying it",
  "A secret order of warrior-mystics, defending their relics",
  "A staff of white wood, summoner of lightnings, and the war-magus bearing it",
  "An unspeakable demon of atrocity and rage, bound in chains for a thousand years, aware suddenly of a minute loosening of his bonds",
  "A token indicating that its bearer speaks for the high general",
  "A great army's marching orders, passwords, and signals, and the unfortunate aide who lost them",
  "A speaker for the ancestors, carrying secrets and warnings",
  "A demon of rage and avarice, secret power behind a great tyrant's rule",
  "A day sacred to an oppressed slave cult, the celebration of which is punishable by torture",
  "A terrible and devastating ambush",
  "A tender of war-bulls, shaved-headed and fearless",
  "The head of a high war-captain, in a carved wooden cask",
  "A warrior-woman, queen of her small wild tribe, hard-pressed by advancing civilization",
  "The ghost of a tyrant king, strangled by his own daughter",
  "A local warlord's ancestral sword, much honored",
  "An army's scryer, commanding six sharp-fanged gaunts",
  "A bitter and unseasonable cold, caused by warring elementals",
  "A hard-won victory, with many dead on both sides",
  "A soldier's plain shortsword, gradually developing a taste for the blood of women",
  "A brutish and tyrannical warlord and his uncouth thugs",
  "A sword held in great esteem by a certain warrior lineage, drawn now for the first time in three lifetimes",
  "A high, many-towered wall on a fierce border, and the soldiers left to hold it",
  "A demon-god of blood and vengeance, forgotten since antiquity, recently awakened",
  "A youth or maiden, the reincarnation of a great hero, whose soul remembers glory",
  "A powerful general's death of her wounds, which will shatter her army into factions",
  "An altar to devils of the waste, stinking with gore",
  "An outlying watchtower on a wooded hill",
  "The very first time that a certain young soldier, impressed against his choice and wanting nothing more than to return to his home, has killed",
  "A captured war-horse with a taste for human meat",
  "A warrior overcome with the weight of his weapons and the smell of gore",
  "A summoner of illusions and diversions, mild and of good humor, but gullible",
  "A great warship, set with ram and mangonel, and its crew",
  "A flock of hunterbirds, sharp-beaked, clever, and dreadful, and their master",
  "The guardian spirit of a foolhardy, naive, reckless and impressionable young person",
  "A prodigy-mage, still a maid, drunk with occult power",
  "A genius of flame, imprisoned within a brass mirror",
  "The mutiny and revolt of a prestigious cavalry company",
  "A fortress guarding the only pass through treacherous mountains, overseen by a corrupt and voracious war-captain",
  "The campsite of a traveling army, not long deserted",
  "An enemy champion, fearless and bellowing"
];

var UnquietPast = [
  "The boasting chief of a team of rock-quarriers",
  "The passage of a ghostly army, dragging their slain and injured",
  "The captain of a foreign troop, sent to collect tribute",
  "The soul of a dead wizard, seeking an advantageous rebirth",
  "A gutted tower, home to many birds, haunted",
  "A youth or maiden, the reincarnation of an ancient sage, remembering uncanny arts but forgetful of safeguards",
  "An apothecary, squint-eyed, with many uncanny potions",
  "A long-dead queen, still trying to defend her realm",
  "A camp physician, her pockets full of salves and drugs",
  "The young, beautiful wife of an old man whom the gods have touched",
  "A murderer-for-hire, luckless and in poverty, from whom the gods have turned their faces",
  "The fey and unfriendly guardians of an enchanted glade",
  "A thick gold ring, torn by a powerful sage from a demon's ear",
  "A girl with the soul of a leopard, born inappropriately into a human body",
  "A serpent-demoness, malicious and venomous, seeking vengeance",
  "The guardian of a tomb, a statue cast in silver with ruby eyes",
  "An ambitious petty-wizard, quick to take offense",
  "The awakening of three powerful and malignant genii",
  "The bloodthirsty ghosts of those drowned in an accursed water",
  "A fallen temple, overgrown with moss and ivies, and the forgotten animal spirits of its cult",
  "The son of a great tyrant, born crippled and denied his inheritance",
  "The wetnurse of an austere scholar's adopted child",
  "The meeting by chance of old enemies, one less forgetful than the other",
  "A hermit priestess, practicing obscure deprivations",
  "A reader of omens and caster of auguries, with grim news",
  "The arrival of honored emissaries from a wealthy, exotic land",
  "A waystation on a broad road, with a campsite and shrine",
  "A scholar and antiquarian, unmindful of danger",
  "The secret central shrine of a temple to forgotten gods",
  "A new village built on the ruins of a forgotten people",
  "A place where warring demons have left the earth churned, upthrust, and charged with occult forces, and the wizard seeking its power",
  "The burglary of a magical order's innermost library",
  "A ruthless bully of an under-officer with high ambitions",
  "The father of a child possessed by a voracious spirit",
  "An unsavory treasure-seeker, with an honest map",
  "A trainer of apes, bereft, mourning the death of his dearest performer",
  "A small room under the foundation, its doorway bricked shut, the prison of a dreadful and malicious spirit",
  "A wandering intelligence, intent on driving mortals mad",
  "A treasure seeker, following the whispers of a slave spirit",
  "A slow-moving caravan with many wagons and travelers",
  "A necromancer who steals the knowledge of the dying",
  "A rough wolf-hunter, surly, filthy, and crude",
  "A market on the crossroads, full of sound and color",
  "A cruel and powerful young lordling",
  "The convocation of a ruins' ghouls, gaunts, and wisps",
  "Instruments of torture, haunted by their long-dead victims",
  "A fearsome storm, with thunder and driving winds",
  "A woman's long blood-red hair, incorporated into a bird's nest",
  "An ancient stone way marker, indicating an overgrown road, and the ghost of a man buried there",
  "A knowledge-mad sorceress, delving into ancient secrets",
  "A golden armlet, still on the skeletal arm of its owner",
  "A wealthy merchant's son, refined and crafty"
];

var NestOfVipers = [
  "A great convocation of mages, with many orders attending",
  "A midwife, weary and appalled, having delivered a tenth consecutive stillbirth",
  "The celebration of a day sacred to the city's chief cult",
  "The proprietress of a wanton-house, with her manservant",
  "The solemnization of treaty between two neighboring principalities, negotiated in the face of brutality and assassination, doomed",
  "The murder by strangling of an officer of the city",
  "A public bathing house in a wealthy city, of very good quality, where only the most refined and modish vices are permitted",
  "A ghoulish eater of dead flesh, driven by unusual lusts",
  "The corpse of a lord's hunting hound, caught in a rose-briar",
  "The written deed to a certain house, affirmed and sealed",
  "A wayhouse in which plague-victims have recently stayed",
  "A poor home shared by many families of beggars",
  "A wealthy merchant-priest with much political clout",
  "A vicious gang of cutthroats and alley-thieves",
  "A conjurer who needs blood to entice his uncouth spirits",
  "An imbiber of sorcerous drugs, seeking congress with demons",
  "A fallen-in mansion, where by night ghosts and devils meet",
  "The college of a small but prestigious magical order",
  "A tower of silver and alabaster, which rises from the sea under the new moon",
  "A squat town on the banks of a wide, long river, rich from plunder, whose men raid up and down the river in their ugly boats",
  "A decrier of the gods as false, unworthy of our attention, and his learned detractors, in heated dispute",
  "A young widower, raging, whose beautiful wife was murdered by sorcery by a romantic rival",
  "A wizard jealously guarding her magical territory",
  "The burglary of the storehouse of a powerful robber-merchant",
  "The return of a reclusive enchantress to her home",
  "A night-wisp, who devours its victims' magical potency",
  "A jaded gladiator, murderer of both enemies and friends",
  "An ambitious farmer, hungry for gossip or silver",
  "A slight and subtle demon, child of blasphemy, craving mischief",
  "The unwitting husband of a serpent-demoness",
  "The young mother of a baby prince, whose husband the king has been overthrown and put to death",
  "A baby's birth, heralded by prophets, written of in antique books, foreseen by the wise",
  "A noble house's signatory ring, left behind in a street brawl",
  "A tempter devil, fond of luxury and sin, imprisoned until this very moment within a stone crypt behind an old monk's garden",
  "A moongazer possessed by ten rival spirits",
  "A devil of the lower air, malicious and full of pranks",
  "The ghost of a suicide, a person overcome by guilt and shame, who finds in death no release",
  "The warden ghost of the place, generous to the good-willed",
  "A troupe of musicians for hire, one of whom is a burglar and cutpurse",
  "The daughter of an emperor, denied nothing, prey to fleeting whims, craving discipline",
  "The unscrupulous landlady of a roadside wayhouse",
  "A precocious child disputing with philosophers and declaimers",
  "One mistakenly condemned, fled into hiding",
  "The private garden of a noble house, and the two children meeting there",
  "An innkeeper who murders and robs his wealthy guests",
  "A fur-trapper, simple but good-natured, and his daughter",
  "A warehouse on the docks, full of stolen silk and fine stuff",
  "A band of slavers both bold and incorrigible",
  "A court dandy, casually cruel, exiled from the presence of the prince for a petty slight",
  "The flight of a prince and his forbidden lover into hiding",
  "A conjurer possessed by spirits of uncivil character",
  "A village executioner, practicing his trade on a caught burglar"
];

var Oracles = [BloodAndSex, GodKingsOfWar, UnquietPast, NestOfVipers];
var OracleNames = ["Blood & Sex", "God-kings of War", "The Unquiet Past", "A Nest of Vipers"];

export interface PageState {
    page: string,
    drinks: {Name: string, Ingredients: string[], Recipe: string[], History: string}[]
}

const intitalState = {
    page: 'Home',
    drinks: [
        {
        Name:"Aperol Spritz",
        Ingredients:["50ml Aperol","25ml Soda Water","75ml Prosecco"], 
        Recipe:["Build", "Tall Wine Glass", "Cubed", "Orange Slice"],
        History: 'Aperol made its debut in the early 1900, when brothers Luigi and Silbio Barbieri inherite their father\'s liquor company. Although from Italy, Aperol was inspired by the French term for apéritif, "Apéro". It took seven years of experimentation to reach the recipe that they still use today; though a secret, we do know it includes both bitter and sweet oranges as well as rhubarb. But, the idea of a "Spritz" can be traced bak to the 1800s when portions of northen Italy were controlled by the Austro-Hungarian Empire. Visitors and Solders found Italian wines too strong ans so lighten them with a splash (a "Spritz", in German) of water. this reciple slowly evolved to using sparkling water instead and progressibley adding fortified wines and liqueurs. Back to Aperol where the brand grew in popularity throughout the bginning of the 20th century, it wasn\'t until the 50s that the recipe for Aperol Spritz was born. It was immedietly popular in it\'s native land of Italy and because it was so popular Gruppo Campari bought Aperol in the early 2000s and heavily advertised it around the globe.'
        },
        {
        Name:"White Russian",
        Ingredients:["25ml Vodka","25ml Coffee Liqueur","25ml Cream"], 
        Recipe:["Build", "Old Fashioned", "Cubed", "None"],
        History: 'The White Russian and The Black Russian was conceived in 1949 when Gustave Tops, a Belgian barman, decided to creat a drink in honor of Perle Mesta, then U.S. ambassador to Luxembourg at the Hotel Metropole in Brussels. It comes to quite a shock that it actually wasn\'t made in Russia, but the name is based on the main ingredient Vodka. Over the next decades the White Russian spread throughout the western hemisphere, and finally appeared in Californian puplications with the official recipe. Despite its somewhat popularity, it wasn\'t highly regarded like other famous cocktails. This all changed in 1998 when the classic film "The Big Lebowski" was realed and the cocktail finally reached superstardom. In fact, before the movie it\'s popularity was on a decline. So the White and Black Russian has The Dude to thank. Today we even have variations and just to name a few like the White Canadian, which is made with goat\'s milk instead of cream, the White Mexican, which uses horchata instead and the White Cuban, which uses rum instead of Vodka.'
        },
        {
        Name:"Tom Collins",
        Ingredients:["50ml Gin","25ml Simple Syrup","25ml Lemon Juice", "50ml Soda Water"], 
        Recipe:["Shake and Top Up", "Highball", "Cubed", "Lemon Disk"],
        History:'The first recorded Tom Collins recipe can traced back to the secon edition of Jerry Thomas\' book, "The Bartender\'s Guide" in 1876. But, where it originated is quite hazy since many acclaim the title, but we believe that is orginated in London, by a bartender named John Collins. Collins worked in a dive bar that was filled with sporting types during the 19th century. The bar was popular for its Gin Punch and it would appear that the Tom Collins morphed from the Gin Punch. Althouh, the name of the cocktail comes from John\'s last name it is said that the Tom par coms from the use of Old Tom Gin. Taverns in New York, New Jersey, San Francisco and even Australia claim that the drink belong to them, and its possible that all these places reached a similar recipe independently. Another possible origin of the Tom Collins comes from the Great Tom Coolins Hoaz which took New York City by storm in 1874. The practical joke involved telling a friend that a man named Tom Collins had been insulting them at a bar, then the friend would go to the bar to confront this man, however upon arrival would not be able to find him since he did not excist. Then, they would ask the bartender if they knew Tom Collins and would then be supplied the drink. '
    
        },
        {
        Name:"Daiquiri",
        Ingredients:["50ml White Rum","25ml Simple Syrup","25ml Lime Juice"], 
        Recipe:["Shake and Fine Strain", "Coupe", "No Ice", "Lime Disk"],
        History:'One of the most popular drinks found in bars with many reenditions, the Daiquiri is a classic. The birthplace of the Daiquiri can be found in the ironmines of Daiquiri iin Cuba. The creator, Jennings Stockton Cox was an American engineer who came to Daiquiri following the American-Spanish war of 1898. Upon arribal he established a Bacardi ration for the workers in the iron mines and started using ingredients avalaible to experiment and make different blends to finally produce the cocktail classic. Another version of the story comes from Jennings\' granddaughter. She says the cocktail was invented when Jenngings recieved American guests and when he ran out of Gin he didnt want to serve dry rum.  The rum used, Bacardi, was a great help to the cocktail, especially during prohibition in the states when many tourists would come to Cuba just to have tasty alcoholic drink. During this time you would find signs saying "Cuba is great. There is a reason: Bacardi".'
        },
        {
        Name:"Mojito",
        Ingredients:["10 Leaves of Mint","50ml White Rum","25ml Simple Syrup", "25ml Lime Juice", "Soda Water"], 
        Recipe:["Build", "High Ball", "Crushed", "Lime Disk & Mint Sprig"],
        History: 'The popularity of the Mojito began with Ernest Hemingway during his time in Cuba, but the history of the Mojito is quite hard to trace. It\'s said the the original Mojito cocktail wasn\'t a cocktail but a medicinal drink to curb disease on the island of Cuba. During this time instead of normal rum, a moon shine rum-type alcohol was mized with mint, lime, and sugar cane syrup to ward off illness. When Pirates invaded Cuba the drink was introduced to a pirate named Pirate Drake where he decided to replace the Cuban moonshine with rum. For a while the drink took on the name El Draque, but soon became Mojito.  "Mojo" comes from African Witchcraft and after a few them, you can kinda feel it. No matter what the true history is there\'s no denying the popularity of the drink, it was the most popular global cocktail in 2013. '
        },
        {
        Name:"Margarita",
        Ingredients:["50ml Tequila","25ml Triple Sec (Orange Liqueur)","25ml Lime Juice"], 
        Recipe:["Shake and Fine Strain", "Coupe", "No Ice", "Lime Disk"],
        History:'Nobody really knows who invented the margarita, it\'s quite a mystery but that doesn\'t mean we don\'t have our speculations. It\'s likely it involves a beautiful woman. One story goes that the drink was first concocted by a Mexican restaurant owner Carlos Herrera in 1938 for a gorgeous Ziegfeld showgirl Marjorie King. Apparently Marjori was allergic to all forms of alcohol (we know a great shame), except she wasnt allergic to tequila, but she didn\'t like to drink it straight. Señor Herrera solved that problem by adding salt and lime creating the world\'s first Margarita. Another story involves Rita Hayworth who was offered one by an admiring bartender when she was in Tijuana during the 1940s (her real name was Margarita Cansino). Nowadays, there are so many permuations of Margaritas, it was the most popular drink order in the U.S. in 2008.'
        },
        {
        Name:"Old Fashioned",
        Ingredients:["50ml Bourbon","10ml Simple Syrup","3 Dashes Angostura Bitters"], 
        "Recipe":["Stir and Strain", "Old Fashioned", "Cubed", "Orange Zest"],
        "History":'Like many of the classic cocktails that we\'ve seen the origins of this cocktail are shrouded in the mists of time. However an expert by the name of Robert Simonson says the roots of the Old Fashioned can be traced back to the earliest days of the cocktail era. It follows the classic cocktail formula which was laid out in 1806: spirit, a bit of suga, a bit of water, and bitters.  For the first several decades of its life the drink went by the simple name of "Whiskey Cocktail". During this time it was served up without ice and commonly drunk in the morning as an eye-opener.  By the 1840s it was a favored drink among young "dudes" of the time. Beginning of the 1870s, bartenders were overwhelemed with the liqueuers available to them, "improving" the drink by adding dashes of absinthe, curacao, maraschino liqueur, Chartreuse and other potions. This led to a revold amon the old-shool drinkers who began to ask for the "Old-Fashioned Whiskey Cocktails".'
        },
        {
        Name:"Manhattan",
        "Ingredients":["50ml Rye Whiskey","15ml Dry Vermouth","15ml Sweet Vermouth","2 Dashes Angostura Bitters"], 
        "Recipe":["Stir and Strain", "Coupe", "No Ice", "Orange Zest"],
        "History": 'This drink is a classic cocktail choice for whiskey-lovers. The mix of rye or bourbon whiskey, sweet vermoth, and bitters have been adored for hundreds of years. The most popular theory of the origins of the Manhattan belongs to Dr. Iain Marshall In the early 1880s. Dr. Marshall invented the drink for a party by Lady Randolph Churchill (the mother of Winston Churchill). The name apparently comes form the party being held in the Manhattan Club in New York. Although, this theory was pronounced as a myth because during this time, Lady Randolph Churchill was pregnant and in England not partying in New York. But that sounds boring so I guess we\'ll go with the theory that the drink came from a partying Mama Winston'
        },
        {
        Name:"Negroni",
        "Ingredients":["25ml Gin","25ml Sweet Vermouth","25ml Campari"], 
        "Recipe":["Stir and Strain", "Old Fashioned", "Cubed", "Orange Zest"],
        "History": 'The most common form fo the drink can be traced back to the Caffe Casoni in Florence, Italy in 1919. The story goes that Count Camillo Negroni asked his friend and bartender, Forsco Scarselli, to strengthen his favourit cocktail - the Americano - by replacing the soda water with gin. Replacing the lemon garnish with an orange one, the drink was an instead success. Not long after, everyone was coming in the bar for a "Negroni". The Negroni family wanted to take advantage of this growing popularity and founded the Negroni Distillery, which is still open today. Apparenty the bitterness of this cocktail is excellent for your liver, the gin however not so much, so they balance each other out. This cocktail is also an all season drink, meaning its good in the Winter and good in the Summer. James Bond even drinks Negroni\'s when he\'s not too busy drinking his shaken not stirred Martinis.'
        },
        {
        Name:"Martini Gin/Vodka 6:1",
        "Ingredients":["60ml Gin/Vodka","10ml Dry Vermouth"], 
        "Recipe":["Stir and Strain", "Coupe", "No Ice", "Lemon Zest"],
        "History" : 'As many of the cocktails we have mentioned the history of the Martini is indifferent, however we do have our theories. It was invented in San Francisco when a miner requested a pick-me-up when he was on his way to Martinez. There are also stories that suggest i orginated in New York\'s Knickerbocker Hotel. Some assert that the drink was named after "Martini & Rossi" vermouth, which was first created in the mid-1800s. The traditional martini recipe contains gin and dry vermouth served extremely cold with a green olive or lemon garnish. The earliest incarnations of the Martini contained a 1:1 ratio of Gin and Vermouth, but the amount of gin steadily increased over the years. Now, it\'s popular to switch the Gin with Vodka which is actually called a "Kangaroo". Normally, Martini\'s are stirred but due to James Bond the shaken method has grown in popularity. Today there are many drinks that adopt the -tini, but most of these just come from the glass that is commonly used. '
        },
        {
        Name:"Caipirinha",
        "Ingredients":["50ml Cachaça","25ml Simple Syrup","Half a Lime of Wedges"], 
        "Recipe":["Muddle and Build", "Old Fashioned", "Crushed", "Lime Disk"],
        "History": 'The name "Caipirinha" translates to "country little girl" and emerged from the countryside of São Paulo in Brazil. There are many stories that depict the origins of this tropical drink, one says that in the early 19th century it was common to drink a mix of cachaça, lime, honey and garlic due to the Spanish flue outbreak in the country. Another version recounts that sailors who would drink citrus juices with spirits/liqueurs in order to ward off scurvy, and as they arrived in Brazil they switch out rum with cachaça. The main ingredient of this drink, cachaça, comes form African captives who worked in sugarcane mills, they would collect the foam that came from the top of cauldrons where sugarcane was boiled (the first step in producing sugar) and then fermented this foam naming it cachaça. the spirit became so popular that the Portuguese banned the consumption of the spirit on June 12, 1744 (now international Cachaça day).'  
        },
        {
        Name:"Espresso Martini",
        Ingredients:["50ml Vodka","25ml Coffee Liqueur","25ml Simple Syrup" ,"25ml Espresso"], 
        Recipe:["Shake and Fine Strain", "Coupe", "No Ice", "Coffee Beans"],
        History:'This cocktail has a fairly short history. We find ourselves in the late 1980s, where British bartending guru Dick Bradsell, who also created the Brambell, was working at Fred\'s Club. One day a young model who Bradsell now claims is world famous and asked for a weird cocktail, one that would "wake me up and fuck me up". Bradsell who was tasked with concocting the drink chose to combine vodka, fresh espresso, coffee liqueur and sugar to make a bittersweet addiction. Originially he named the drink "Pharmaceutical Stimulant", but like many drinks during this time that were adopting the name "Martini" due to glassware, Bradsell quickly changed the name to "Espresso Martini". '
        },
        {
        Name:"Whatever Sour",
        Ingredients:["50ml Spirit/Liqueur","25ml Lemon Juice","25ml Simple Syrup" , "50ml Egg Whites"], 
        Recipe:["Double Shake and Charge", "Old Fashioned", "Cubed", "Lemon Zest"],
        History: 'The first written down recipe was found in the 1862 book, \“The Bartender’s Guide\” by Jerry Thomas. But the recipe  was known for a century before. A \“Sour\” then was very different to today. In those days the concept of germs was largely unknown, and in Sea travel, especially from Europe to North America made storing food and water even worse, one reason why a lot of sailors drank a lot. So a man by the name of Vice Admiral Edward Vernon started mixing a few ingredients together, namely rum, water and lemon/lime to mask the flavor of rum. Sailors brought this concept to shore and was refined to what we know a “Sour”  as today. In England they replaced the rum with Gin and Brandy, where Americans were more fond of whiskey. A while after egg was added as a creamy, frothy element to the cocktail.'
        },
        {
        Name:"Black Russian",
        Ingredients:["25ml Vodka","25ml Coffee Liqueur"], 
        Recipe:["Build", "Old Fashioned", "Cubed", "None"],
        History: 'The White Russian and The Black Russian was conceived in 1949 when Gustave Tops, a Belgian barman, decided to creat a drink in honor of Perle Mesta, then U.S. ambassador to Luxembourg at the Hotel Metropole in Brussels. It comes to quite a shock that it actually wasn\'t made in Russia, but the name is based on the main ingredient Vodka. Over the next decades the White Russian spread throughout the western hemisphere, and finally appeared in Californian puplications with the official recipe. Despite its somewhat popularity, it wasn\'t highly regarded like other famous cocktails. This all changed in 1998 when the classic film "The Big Lebowski" was realed and the cocktail finally reached superstardom. In fact, before the movie it\'s popularity was on a decline. So the White and Black Russian has The Dude to thank. Today we even have variations and just to name a few like the White Canadian, which is made with goat\'s milk instead of cream, the White Mexican, which uses horchata instead and the White Cuban, which uses rum instead of Vodka.'
     
        },
        {
        Name:"Bloody Mary",
        Ingredients:["50ml Vodka","100ml Tomato Juice","10ml Lemon Juice" , "3 Dashes Tabasco", "2 Dashes Worchestershire Sauce","2 Grinds Black Pepper", "2 Grinds Salt"], 
        Recipe:["Shake and Strain", "Highball", "Cubed", "Lemon Disk & Rosemary Stem"],
        History: 'The creation of the Bloody Mary is often credited to Fernand Petiot in the 1920s, while he was a bartender at Harry\'s New York Bar in Paris. But, some say that Fernand Petiot simply spiced up an existing combo of vodka and tomato juice. Asking how the name of the Bloody Mary orginated is kind of like asking Hugh Hefner the name of his girlfriend; there\'s not one but plent. The most popular story is that Petiot named his famed drink after Queen Mary Tudor of England. Mary\'s "Bloody" moniker is related to some of her first acts as Queen: first the executation of Dudley and then the reinstitution of the Heresy Acts in 1554. Under these acts, many protestants were killed, mainly by death of fire. Because of this Mary was given the unofficial title Queen  "Bloody" Mary. Petiot and the Bloody Mary made a swift jump across the English Channel during the year of 1925, when he would would at some bars situated in Hotels. Then after prohibiton found himself in New York, where he served socialites and anybody who was a somebody, he even served renowned gangster Frank Costello during this time. '
        },
        {
        Name:"Long Island Iced Tea",
        Ingredients:["10ml Gin","10ml Vodka","10ml Rum" , "10ml Tequila", "10ml Triple Sec (Orange Liqueur)", "15ml Lime Juice", "10ml Simple Syrup", "Coca-Cola"], 
        Recipe:["Shake and Top Up", "Highball", "Cubed", "Lime Disk"],
        History: 'One of the most dangerous cocktails out there, but where did it come from? Who had the audacity to combine tequila, vodka, triple sec, gin and rum to make one drink? It all depends on who\'s telling the story. One story attributes the drink to Old Man Bishop, a native of Tennessee in a community known as Long Island. During the Prohibition, Americans had to get creative to meet their alcoholic demands and so, a mand named Bishop allegedly combined tequila, vodka, gin, rum, whisky and maple syrup. Because of the lack of alcohol in the land, drinks had to be stronger. Legend has it that Bishop passed the recipe down to his son Ransom, who refined the drink to the version we know today. Another story places the origin of the cocktail in Long Island, New York during the 1970s. After one or two of these drinks, you probably won\'t even care where this drink came from.'
        },
        {
        Name:"Cosmopolitan",
        Ingredients:["50ml Vodka","25ml Triple Sec (Orange Liqueur)","25ml Lime Juice" , "50ml Cranberry Juice"], 
        Recipe:["Shake and Fine Strain", "Coupe", "No Ice", "Flamed Orange Zest"],
        History: 'This cocktail, was the drink of the \'90s, drop in on any party or bar and the majority of people would be holding a martini glass filled with a bright pink liquid. When the drink entered the booze culture, it was all the rage, and then just as quickly as it cam, it became a joke that most people wouldn\'t dare order. The drink came around in the late 60s, when Ocean Spary (a popular cranberry juice company) were looking for more inventive ways to market their cranberry juice to adults. The marketing execs decided to print a recipe on the side of every carton of cranberry juice for a drink called the "Harpoon". The Harpoon was everything like the Cosmopolitan except it was missing the sweet Cointreau.Over the years as the drink kept getting ordered, bartenders slowly experimented to finally reach the drink we know today. The Cosmopolitan quickly became popular among celebrities, but it didn\'t truly explode until "Sex and the City" hit the TVs, Samantha\'s go to drink. '
        },
        {
        Name:"Dark 'n Stormy",
        Ingredients:["50ml Dark Rum","25ml Lime Juice","150ml Ginger Beer"], 
        Recipe:["Build", "Highball", "Cubed", "Lime Disk"],
        History: 'In the early 1800s William Gosling sold liquor in London, but as the New World called, his son James, decided to set out to America. James chartered a ship named the Mercury, and on board he brought close to a million pounds in todays money worth of wines and spirit. However, the voyage didn\'t go as planned and instead of reaching America they landed in Bermuda. Because James like Bermuda so much, he decided to set up shop there and after a few years imported their first barrels filled with rum distillate. After refining their blending process they were able to produce one of the world\'s most distinctive dark rums - "Gosling\'s Black Seal". The name came from the first World War, where the Goslings began distributing their rum in champagne bottles sealed with a black wax. During the war naval officers began to produce homemade ginger beer. Because ginger beer was good at easing seesikness and rum was popular the two became partners. The colour of the two would be describe as "a cloud only a fool or dead man would sail under" and so the name was adopted as "Dark \'n Stormy"'
        },
        {
        Name:"Moscow Mule",
        Ingredients:["50ml Vodka","25ml Lime Juice","150ml Ginger Beer" , "Float Angostura Bitters"], 
        Recipe:["Build", "Highball", "Cubed", "Lime Disk"],
        History: 'In 1941, Sophie Berezinski immigrated to the United States from Russia and was carrying a heavy burden: 2,000 solid copper mugs. Back in Russia, Sophie had created the design for the original copper mug that is now so famously linked to the Moscow Mule cocktail. However, Sophie didn\'t have the skills of the salesman and wasn\'t able to sell any in Russia, and so set her journey out to America. Going door to door she went looking for buyers, she finally found the Famous Cock \'n Bull pub on the Sunset Strip. John Martin had purchased the Smirnoff Vodka Distillery but Americans had no interest in vodka at that time. Jack Morgan who ownd Cock n Bull was also in a similar situation where he was trying to introduce America to his own brand of ginger beer. The trio formed when Sophie walked in and they spent hours developing a drink that would bring together the fizzy nature of the ginger beer, the punch of the vodka, and the cold properties of the copper mug. After numerous taste tests and a few failed concoctions they finally landed on the perfect combination, the drink we know today as the Moscow Mule.'
        }
    ]
}

type Action = {type: 'CHANGE_PAGE', payload: string}

export const pagesReducer = (state:PageState = intitalState, action: Action) => {
    switch(action.type){
        case "CHANGE_PAGE": {
            return {...state, page: action.payload}
        }
        default: 
        return state;
    }
}
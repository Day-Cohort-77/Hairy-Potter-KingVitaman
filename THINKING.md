First, Let's Make Some Pottery!
   Step 1: Make a new file called PotteryWheel.js
   Step 2: Write down a number (potteryId) and set it to 1
   Step 3: Make a function called makePottery that:
      - Takes in three things: what shape it is, how heavy it is, and how tall it is
      - Makes a new object that looks like this:
        {
          shape: (whatever shape they said),
          weight: (how heavy they said),
          height: (how tall they said),
          id: (our potteryId number)
        }
      - Adds 1 to our potteryId number
      - Gives back the object we made

Now Let's Fire the Pottery!
   Step 1: Make a new file called Kiln.js
   Step 2: Make a function called firePottery that:
      - Takes in two things: our pottery object and how hot the kiln is
      - Adds two new things to our pottery:
         * fired: true (because we fired it!)
         * cracked: (true if it's too hot, false if it's okay)
            - If the temperature is more than 2200, it's cracked
            - If the temperature is 2200 or less, it's not cracked
      - Gives back our pottery with the new information

Let's Figure Out What to Sell!
   Step 1: Make a new file called PotteryCatalog.js
   Step 2: Make an empty list called potteryToSell
   Step 3: Make a function called toSellOrNotToSell that:
      - Takes in one thing: our pottery object
      - If the pottery is cracked:
         * Don't do anything else
      - If the pottery is not cracked:
         * If it weighs 6 or more:
            - Add a price of $40
         * If it weighs less than 6:
            - Add a price of $20
         * Put it in our potteryToSell list
      - Give back our pottery with the new price
   Step 4: Make a function called usePottery that:
      - Gives back a copy of our potteryToSell list

Let's Show Our Pottery to People!
   Step 1: Open index.html
   Step 2: Add this line:
      <article class="potteryList"></article>
   Step 3: Make a new file called PotteryList.js
   Step 4: Make a function called PotteryList that:
      - Gets our list of pottery to sell
      - For each piece of pottery, make a string that looks like this:
        <section class="pottery" id="pottery--1">
          <h2 class="pottery__shape">Mug</h2>
          <div class="pottery__properties">
            Item weighs 3 grams and is 6 cm in height
          </div>
          <div class="pottery__price">Price is $20</div>
        </section>
      - Put all these strings together
      - Give back the big string

Put It All Together!
   Step 1: Make a new file called main.js
   Step 2: In main.js:
      - Make 5 pieces of pottery using makePottery
      - Fire each piece using firePottery
         * Make sure one piece gets too hot!
      - For each piece, use toSellOrNotToSell
      - Use PotteryList to make the HTML
      - Put the HTML into our article element

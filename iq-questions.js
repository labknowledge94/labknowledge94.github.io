(function () {
"use strict";


// ======================================
// LAB KNOWLEDGE - IQ PRACTICE SYSTEM
// TOTAL: 2,000 QUESTIONS
// 10 RANDOM QUESTIONS PER TEST
// Topics: Mathematics, Reasoning, English, Science, Computer, Pakistan Studies, Laboratory Knowledge
// ======================================
  

const iqQuestionBank = [


{q:"What comes next? 2, 4, 6, 8, ?",topic:"Logical Reasoning",o:["9","10","12","14"],a:1,e:"Each number increases by 2."},
{q:"What comes next? 3, 6, 12, 24, ?",topic:"Logical Reasoning",o:["36","42","48","50"],a:2,e:"Each number is multiplied by 2."},
{q:"Which number is different?",topic:"Logical Reasoning",o:["2","4","7","8"],a:2,e:"7 is odd; the others are even."},
{q:"If 5 + 3 = 8, what is 8 + 7?",topic:"Mathematics",o:["13","14","15","16"],a:2,e:"8 + 7 = 15."},
{q:"What comes next? 1, 4, 9, 16, ?",topic:"Logical Reasoning",o:["20","25","30","36"],a:1,e:"These are square numbers."},
{q:"Which is the largest number?",topic:"Mathematics",o:["0.5","0.05","0.55","0.505"],a:2,e:"0.55 is the largest value."},
{q:"If today is Monday, what day will it be after 10 days?",topic:"General Knowledge",o:["Wednesday","Thursday","Friday","Saturday"],a:1,e:"10 days after Monday is Thursday."},
{q:"Complete the series: 100, 90, 80, 70, ?",topic:"Logical Reasoning",o:["50","55","60","65"],a:2,e:"Each number decreases by 10."},
{q:"Which shape has 3 sides?",topic:"General Knowledge",o:["Square","Triangle","Circle","Rectangle"],a:1,e:"A triangle has three sides."},
{q:"How many months have 28 days?",topic:"Mathematics",o:["1","2","6","12"],a:3,e:"All 12 months have at least 28 days."},

{q:"A dozen means how many?",topic:"Mathematics",o:["10","11","12","15"],a:2,e:"One dozen equals 12."},
{q:"If 4 pens cost 20 rupees, what is the cost of 1 pen?",topic:"Mathematics",o:["4","5","6","8"],a:1,e:"20 divided by 4 equals 5."},
{q:"What is half of 90?",topic:"Mathematics",o:["35","40","45","50"],a:2,e:"90 divided by 2 equals 45."},
{q:"What comes next? 5, 10, 15, 20, ?",topic:"Logical Reasoning",o:["22","25","30","35"],a:1,e:"Each number increases by 5."},
{q:"Which number is a prime number?",topic:"Mathematics",o:["9","15","17","21"],a:2,e:"17 has only two factors: 1 and 17."},
{q:"What is 15% of 100?",topic:"Mathematics",o:["10","15","20","25"],a:1,e:"15% of 100 is 15."},
{q:"If 3 workers finish a task in 6 days, how many worker-days are needed?",topic:"Mathematics",o:["9","12","18","21"],a:2,e:"3 multiplied by 6 equals 18 worker-days."},
{q:"What is the missing number? 7, 14, 21, ?, 35",topic:"Logical Reasoning",o:["24","26","28","30"],a:2,e:"The series increases by 7."},
{q:"What is 9 × 8?",topic:"Mathematics",o:["63","72","81","89"],a:1,e:"9 multiplied by 8 equals 72."},
{q:"A clock shows 3:00. What is the angle between its hands?",topic:"Mathematics",o:["45°","60°","90°","180°"],a:2,e:"At 3:00 the hands form a 90-degree angle."},

{q:"Which word is the opposite of HOT?",topic:"English",o:["Warm","Cold","Dry","Heat"],a:1,e:"Cold is the opposite of hot."},
{q:"Which word does not belong?",topic:"English",o:["Apple","Mango","Banana","Carrot"],a:3,e:"Carrot is a vegetable; the others are fruits."},
{q:"Bird is to Fly as Fish is to:",topic:"General Knowledge",o:["Walk","Swim","Run","Jump"],a:1,e:"Fish move by swimming."},
{q:"Which word is closest in meaning to HAPPY?",topic:"English",o:["Sad","Angry","Glad","Tired"],a:2,e:"Glad means happy."},
{q:"Complete the analogy: Doctor is to Hospital as Teacher is to:",topic:"Logical Reasoning",o:["Market","School","Bank","Airport"],a:1,e:"A teacher commonly works in a school."},
{q:"Which one is spelled correctly?",topic:"English",o:["Becaus","Because","Beacause","Becouse"],a:1,e:"Because is the correct spelling."},
{q:"Which word is different?",topic:"English",o:["Monday","Tuesday","January","Friday"],a:2,e:"January is a month; the others are weekdays."},
{q:"Hand is to Glove as Foot is to:",topic:"General Knowledge",o:["Cap","Sock","Shirt","Ring"],a:1,e:"A sock covers a foot."},
{q:"What is the opposite of EMPTY?",topic:"English",o:["Open","Full","Light","Small"],a:1,e:"Full is the opposite of empty."},
{q:"Which word can be made from the letters LISTEN?",topic:"English",o:["SILENT","STONE","LINES","TILES"],a:0,e:"SILENT uses exactly the letters in LISTEN."},

{q:"Ali is taller than Bilal. Bilal is taller than Ahmed. Who is shortest?",topic:"Logical Reasoning",o:["Ali","Bilal","Ahmed","Cannot say"],a:2,e:"Ahmed is shorter than both Bilal and Ali."},
{q:"If all roses are flowers, which statement is correct?",topic:"Logical Reasoning",o:["All flowers are roses","Roses are flowers","No roses are flowers","All plants are roses"],a:1,e:"Roses belong to the flower group."},
{q:"You face North and turn right. Which direction are you facing?",topic:"Logical Reasoning",o:["West","South","East","North"],a:2,e:"A right turn from North points East."},
{q:"A is the brother of B. B is the sister of C. What is A to C?",topic:"Mathematics",o:["Brother","Sister","Father","Mother"],a:0,e:"A is C's brother."},
{q:"Which number completes the pattern? 2, 5, 8, 11, ?",topic:"Logical Reasoning",o:["12","13","14","15"],a:2,e:"Each number increases by 3."},
{q:"If CAT is coded as DBU, how is DOG coded?",topic:"Logical Reasoning",o:["EPH","EOG","FPH","DPH"],a:0,e:"Each letter moves one step forward."},
{q:"Which is the odd one out?",topic:"Logical Reasoning",o:["Circle","Triangle","Square","Table"],a:3,e:"Table is an object; the others are shapes."},
{q:"A man walks 5 km East and then 5 km West. Where is he now?",topic:"Logical Reasoning",o:["5 km East","5 km West","Starting point","10 km East"],a:2,e:"He returns to the starting point."},
{q:"If yesterday was Sunday, what is tomorrow?",topic:"Mathematics",o:["Monday","Tuesday","Wednesday","Saturday"],a:1,e:"Today is Monday; tomorrow is Tuesday."},
{q:"Which number does not fit? 4, 9, 16, 20, 25",topic:"Logical Reasoning",o:["4","9","20","25"],a:2,e:"20 is not a perfect square."},

{q:"How many sides do two triangles have altogether?",topic:"Mathematics",o:["3","5","6","8"],a:2,e:"Each triangle has 3 sides; total 6."},
{q:"If you rearrange the letters of EARTH, which word can you make?",topic:"English",o:["HEART","HOUSE","RIVER","PLANT"],a:0,e:"HEART uses the same five letters."},
{q:"Which comes next? A, C, E, G, ?",topic:"Logical Reasoning",o:["H","I","J","K"],a:1,e:"The series skips one letter each time."},
{q:"How many hours are there in 2 days?",topic:"Mathematics",o:["24","36","48","72"],a:2,e:"2 multiplied by 24 equals 48 hours."},
{q:"A basket contains 3 red and 2 blue balls. How many balls are there?",topic:"Mathematics",o:["4","5","6","7"],a:1,e:"3 + 2 = 5 balls."},
{q:"Which is heavier: 1 kg cotton or 1 kg iron?",topic:"Mathematics",o:["Cotton","Iron","Both equal","Cannot say"],a:2,e:"Both weigh exactly one kilogram."},
{q:"What comes next? 1, 1, 2, 3, 5, 8, ?",topic:"Logical Reasoning",o:["10","11","12","13"],a:3,e:"Each number is the sum of the previous two."},
{q:"If 12 people shake hands with each other once, how many handshakes are there?",topic:"Mathematics",o:["44","56","66","72"],a:2,e:"12 × 11 ÷ 2 = 66 handshakes."},
{q:"Which number is missing? 81, 27, 9, 3, ?",topic:"General Knowledge",o:["0","1","2","6"],a:1,e:"Each number is divided by 3."},
{q:"A train travels 60 km in one hour. How far does it travel in 2 hours at the same speed?",topic:"Mathematics",o:["90 km","100 km","120 km","140 km"],a:2,e:"60 multiplied by 2 equals 120 km."},

{q:"What comes next? 7, 14, 28, 56, ?",topic:"Logical Reasoning",o:["84","98","112","120"],a:2,e:"Each number is multiplied by 2."},
{q:"What comes next? 2, 6, 12, 20, 30, ?",topic:"Logical Reasoning",o:["36","40","42","48"],a:2,e:"The differences are 4, 6, 8, 10 and 12."},
{q:"Which number is the odd one out?",topic:"Logical Reasoning",o:["16","25","36","45"],a:3,e:"16, 25 and 36 are perfect squares; 45 is not."},
{q:"What is 25% of 240?",topic:"Mathematics",o:["40","50","60","80"],a:2,e:"240 × 25 ÷ 100 = 60."},
{q:"If 6 books cost 300 rupees, what do 4 books cost at the same rate?",topic:"Mathematics",o:["150","180","200","240"],a:2,e:"One book costs 50 rupees; 4 cost 200 rupees."},
{q:"What comes next? 64, 32, 16, 8, ?",topic:"Logical Reasoning",o:["2","4","6","10"],a:1,e:"Each number is divided by 2."},
{q:"Which is the smallest fraction?",topic:"Mathematics",o:["1/2","1/3","1/4","1/5"],a:3,e:"Among these unit fractions, 1/5 is the smallest."},
{q:"A number multiplied by 5 equals 65. What is the number?",topic:"Mathematics",o:["11","12","13","15"],a:2,e:"65 ÷ 5 = 13."},
{q:"What is the next prime number after 19?",topic:"Mathematics",o:["21","22","23","25"],a:2,e:"23 has exactly two positive factors: 1 and 23."},
{q:"If 3 pencils cost 45 rupees, how much do 8 pencils cost?",topic:"Mathematics",o:["100","110","120","135"],a:2,e:"One pencil costs 15 rupees; 8 cost 120 rupees."},

{q:"Which word is the opposite of ANCIENT?",topic:"English",o:["Old","Historic","Modern","Traditional"],a:2,e:"Modern means recent or belonging to the present."},
{q:"Choose the word closest in meaning to BRAVE.",topic:"English",o:["Courageous","Careless","Fearful","Quiet"],a:0,e:"Courageous means showing bravery."},
{q:"Complete the analogy: Eye is to See as Ear is to:",topic:"Logical Reasoning",o:["Speak","Hear","Touch","Smell"],a:1,e:"Eyes are used for seeing and ears for hearing."},
{q:"Which one does not belong?",topic:"Logical Reasoning",o:["Rose","Lily","Tulip","Oak"],a:3,e:"Oak is a tree; the others are flowers."},
{q:"Arrange these words in alphabetical order: Apple, Banana, Cherry, Date. Which comes second?",topic:"English",o:["Apple","Banana","Cherry","Date"],a:1,e:"The alphabetical order is Apple, Banana, Cherry, Date."},
{q:"Which word is correctly spelled?",topic:"English",o:["Neccessary","Necessary","Necesary","Necessery"],a:1,e:"Necessary is the correct spelling."},
{q:"Complete the analogy: Puppy is to Dog as Kitten is to:",topic:"Logical Reasoning",o:["Horse","Cat","Cow","Goat"],a:1,e:"A kitten is a young cat."},
{q:"Which word is the opposite of GENEROUS?",topic:"English",o:["Kind","Selfish","Helpful","Friendly"],a:1,e:"Selfish describes someone unwilling to give or share."},
{q:"Which item belongs to the same group as January, March and May?",topic:"General Knowledge",o:["Monday","August","Winter","Sunday"],a:1,e:"August is also a month."},
{q:"If BOOK is coded as CPPL, how is FISH coded using the same rule?",topic:"Logical Reasoning",o:["GJTI","GJSH","EHRG","GITH"],a:0,e:"Each letter moves one position forward."},

{q:"Sara is older than Ayesha. Ayesha is older than Hina. Who is the youngest?",topic:"Logical Reasoning",o:["Sara","Ayesha","Hina","Cannot determine"],a:2,e:"Hina is younger than both Sara and Ayesha."},
{q:"You are facing South. You turn left. Which direction are you facing?",topic:"Logical Reasoning",o:["East","West","North","South"],a:0,e:"A left turn from South points East."},
{q:"A man walks 4 km North, then 3 km South. How far is he from his starting point?",topic:"Logical Reasoning",o:["1 km North","1 km South","7 km North","7 km South"],a:0,e:"Four kilometres North minus three kilometres South leaves 1 km North."},
{q:"All cats are animals. Which statement must be true?",topic:"Logical Reasoning",o:["All animals are cats","Some cats are not animals","All cats are animals","No animals are cats"],a:2,e:"This directly follows from the given statement."},
{q:"If today is Wednesday, what day will it be after 17 days?",topic:"General Knowledge",o:["Friday","Saturday","Sunday","Monday"],a:1,e:"17 days equals 2 weeks and 3 days; Wednesday plus 3 days is Saturday."},
{q:"A is the father of B. B is the mother of C. What is A to C?",topic:"Mathematics",o:["Uncle","Grandfather","Brother","Cousin"],a:1,e:"A is the father of C's mother, so he is C's grandfather."},
{q:"Which number completes the pattern? 11, 22, 33, 44, ?",topic:"Logical Reasoning",o:["50","55","60","66"],a:1,e:"Each number increases by 11."},
{q:"If every student in a class studies mathematics and Ali is a student in that class, what must be true?",topic:"Logical Reasoning",o:["Ali studies science","Ali studies mathematics","Ali teaches mathematics","Ali is absent"],a:1,e:"Ali belongs to the class, so the given rule applies to him."},
{q:"Five people are standing in a line. Ahmed is first and Bilal is last. How many people stand between them?",topic:"Mathematics",o:["2","3","4","5"],a:1,e:"The second, third and fourth people stand between the first and last."},
{q:"Which direction is opposite to North-East?",topic:"English",o:["South-East","North-West","South-West","East"],a:2,e:"South-West is directly opposite North-East."},

{q:"What comes next? B, D, F, H, ?",topic:"Logical Reasoning",o:["I","J","K","L"],a:1,e:"The sequence skips one letter each time."},
{q:"What comes next? 1, 8, 27, 64, ?",topic:"Logical Reasoning",o:["100","125","144","216"],a:1,e:"These are cubes: 1³, 2³, 3³, 4³ and 5³."},
{q:"How many edges does a cube have?",topic:"Mathematics",o:["6","8","10","12"],a:3,e:"A cube has 12 edges."},
{q:"How many degrees are in a straight angle?",topic:"Mathematics",o:["90°","120°","180°","360°"],a:2,e:"A straight angle measures 180 degrees."},
{q:"If a rectangle has length 8 cm and width 5 cm, what is its area?",topic:"Mathematics",o:["13 cm²","26 cm²","40 cm²","80 cm²"],a:2,e:"Area = length × width = 8 × 5 = 40 cm²."},
{q:"What is the perimeter of a square with each side 7 cm?",topic:"Mathematics",o:["14 cm","21 cm","28 cm","49 cm"],a:2,e:"Perimeter = 4 × 7 = 28 cm."},
{q:"Which number is divisible by both 3 and 5?",topic:"Mathematics",o:["20","25","30","32"],a:2,e:"30 is divisible by 3 and 5."},
{q:"What is the average of 10, 20 and 30?",topic:"Mathematics",o:["15","20","25","30"],a:1,e:"(10 + 20 + 30) ÷ 3 = 20."},
{q:"A car travels 150 km in 3 hours. What is its average speed?",topic:"Mathematics",o:["40 km/h","45 km/h","50 km/h","60 km/h"],a:2,e:"Speed = distance ÷ time = 150 ÷ 3 = 50 km/h."},
{q:"What is 3/4 of 80?",topic:"Mathematics",o:["40","50","60","70"],a:2,e:"80 × 3 ÷ 4 = 60."},

{q:"A bag contains 4 red, 3 blue and 5 green balls. How many balls are there in total?",topic:"Mathematics",o:["10","11","12","13"],a:2,e:"4 + 3 + 5 = 12 balls."},
{q:"If you overtake the person in second place in a race, what position are you in?",topic:"General Knowledge",o:["First","Second","Third","Fourth"],a:1,e:"You take the position of the person you overtook: second place."},
{q:"How many times does the digit 5 appear from 1 to 55?",topic:"Laboratory Knowledge",o:["10","11","12","16"],a:2,e:"The digit 5 appears 6 times in the units place and 6 times in the tens place, making 12 appearances."},
{q:"A farmer has 17 sheep. All but 9 run away. How many remain?",topic:"Mathematics",o:["8","9","17","26"],a:1,e:"All but 9 means 9 sheep remain."},
{q:"What comes next? 121, 100, 81, 64, ?",topic:"Logical Reasoning",o:["36","49","50","56"],a:1,e:"These are descending squares: 11², 10², 9², 8², 7²."},
{q:"If 2 machines make 2 items in 2 minutes, how long do 4 machines take to make 4 items at the same rate?",topic:"General Knowledge",o:["1 minute","2 minutes","4 minutes","8 minutes"],a:1,e:"Each machine makes one item in 2 minutes, so 4 machines make 4 items in 2 minutes."},
{q:"Which number completes the series? 3, 9, 27, 81, ?",topic:"Logical Reasoning",o:["162","189","216","243"],a:3,e:"Each number is multiplied by 3."},
{q:"A shop gives a discount of 10% on an item costing 500 rupees. What is the sale price?",topic:"Mathematics",o:["400","425","450","475"],a:2,e:"10% of 500 is 50; 500 − 50 = 450 rupees."},
{q:"How many minutes are there in 3 hours and 15 minutes?",topic:"Mathematics",o:["180","185","195","210"],a:2,e:"3 × 60 + 15 = 195 minutes."},
{q:"A number is increased by 20 and becomes 75. What was the original number?",topic:"Mathematics",o:["45","50","55","60"],a:2,e:"75 − 20 = 55."},

// ======================================
//  100 QUESTIONS  COMPLETE HERE.
// ======================================

{q:"What comes next? 5, 10, 15, 20, ? (Alternate version 1)",topic:"Logical Reasoning",o:["22","25","30","35"],a:1,e:"Each number increases by 5."},
{q:"Which number is different? (Alternate version 1)",topic:"Logical Reasoning",o:["4","9","16","20"],a:3,e:"4, 9 and 16 are perfect squares; 20 is not."},
{q:"What is 12 × 8?",topic:"Mathematics",o:["86","94","96","98"],a:2,e:"12 multiplied by 8 equals 96."},
{q:"What comes next? 1, 4, 9, 16, ? (Alternate version 1)",topic:"Logical Reasoning",o:["20","24","25","36"],a:2,e:"These are square numbers: 1², 2², 3², 4², 5²."},
{q:"If A = 1, B = 2, what is D?",topic:"Mathematics",o:["3","4","5","6"],a:1,e:"D is the fourth letter."},
{q:"Which is the smallest number?",topic:"Mathematics",o:["0.5","0.05","0.55","0.15"],a:1,e:"0.05 is the smallest."},
{q:"What is 25% of 200?",topic:"Mathematics",o:["25","40","50","75"],a:2,e:"25% of 200 is 50."},
{q:"What comes next? 2, 6, 18, 54, ?",topic:"Logical Reasoning",o:["108","162","180","216"],a:1,e:"Each number is multiplied by 3."},
{q:"Which one is a prime number?",topic:"Mathematics",o:["21","27","29","33"],a:2,e:"29 is divisible only by 1 and itself."},
{q:"How many sides does a hexagon have?",topic:"Mathematics",o:["5","6","7","8"],a:1,e:"A hexagon has six sides."},

{q:"What is 144 ÷ 12?",topic:"Mathematics",o:["10","11","12","14"],a:2,e:"144 divided by 12 equals 12."},
{q:"Find the missing number: 3, 6, 9, ?, 15",topic:"Logical Reasoning",o:["10","11","12","13"],a:2,e:"The sequence increases by 3."},
{q:"Which word does not belong? (Alternate version 1)",topic:"English",o:["Apple","Mango","Carrot","Banana"],a:2,e:"Carrot is a vegetable; the others are fruits."},
{q:"If 5 pens cost 50 rupees, what is the cost of 1 pen?",topic:"Mathematics",o:["5","10","15","20"],a:1,e:"50 divided by 5 equals 10."},
{q:"What is the opposite of Ancient?",topic:"English",o:["Old","Modern","Historic","Past"],a:1,e:"Modern means recent or contemporary."},
{q:"What comes next? 100, 90, 80, 70, ?",topic:"Logical Reasoning",o:["65","60","55","50"],a:1,e:"Each number decreases by 10."},
{q:"How many minutes are in 3 hours?",topic:"Mathematics",o:["120","150","180","200"],a:2,e:"3 × 60 = 180 minutes."},
{q:"Which number is even?",topic:"General Knowledge",o:["13","17","21","28"],a:3,e:"28 is divisible by 2."},
{q:"What is 7 squared?",topic:"Mathematics",o:["14","21","42","49"],a:3,e:"7 × 7 = 49."},
{q:"Find the missing number: 2, 5, 8, 11, ?",topic:"Logical Reasoning",o:["12","13","14","15"],a:2,e:"Each number increases by 3."},

{q:"Which is the longest unit of time?",topic:"Mathematics",o:["Second","Minute","Hour","Day"],a:3,e:"A day contains 24 hours."},
{q:"If today is Monday, what day will it be after 10 days? (Alternate version 1)",topic:"General Knowledge",o:["Wednesday","Thursday","Friday","Saturday"],a:1,e:"Ten days after Monday is Thursday."},
{q:"What is 15% of 100? (Alternate version 1)",topic:"Mathematics",o:["10","15","20","25"],a:1,e:"15% of 100 equals 15."},
{q:"Which shape has no corners?",topic:"General Knowledge",o:["Square","Triangle","Circle","Rectangle"],a:2,e:"A circle has no corners."},
{q:"What comes next? 1, 2, 4, 8, 16, ?",topic:"Logical Reasoning",o:["24","30","32","36"],a:2,e:"Each number is doubled."},
{q:"Which is the largest fraction?",topic:"Mathematics",o:["1/2","1/4","3/4","1/3"],a:2,e:"3/4 is greater than the other fractions."},
{q:"How many months have 31 days?",topic:"Mathematics",o:["5","6","7","8"],a:2,e:"Seven months have 31 days."},
{q:"What is 18 + 27?",topic:"Mathematics",o:["35","40","45","50"],a:2,e:"18 + 27 = 45."},
{q:"Which number completes the pattern? 11, 22, 33, ?",topic:"Logical Reasoning",o:["40","42","44","55"],a:2,e:"The sequence increases by 11."},
{q:"Which organ pumps blood in the human body?",topic:"Science",o:["Liver","Heart","Kidney","Lung"],a:1,e:"The heart pumps blood throughout the body."},

{q:"What is the chemical symbol for oxygen?",topic:"Science",o:["Ox","O","Og","On"],a:1,e:"O is the chemical symbol for oxygen."},
{q:"How many bones are normally present in an adult human?",topic:"Science",o:["196","206","216","226"],a:1,e:"An adult human skeleton typically has 206 bones."},
{q:"Which planet is known as the Red Planet?",topic:"Science",o:["Venus","Mars","Jupiter","Saturn"],a:1,e:"Iron oxide gives Mars its reddish appearance."},
{q:"What is the boiling point of water at sea level?",topic:"Science",o:["50°C","75°C","100°C","150°C"],a:2,e:"Water boils at approximately 100°C at standard atmospheric pressure."},
{q:"Which blood cells help fight infections?",topic:"Laboratory Knowledge",o:["RBCs","WBCs","Platelets","Plasma"],a:1,e:"White blood cells help defend the body against infections."},
{q:"What does CBC stand for?",topic:"Laboratory Knowledge",o:["Complete Blood Count","Common Blood Chemistry","Cell Blood Control","Complete Body Check"],a:0,e:"CBC stands for Complete Blood Count."},
{q:"Which instrument measures temperature?",topic:"Science",o:["Barometer","Thermometer","Hygrometer","Stethoscope"],a:1,e:"A thermometer measures temperature."},
{q:"Which vitamin is produced in skin through sunlight exposure?",topic:"Science",o:["Vitamin A","Vitamin B12","Vitamin C","Vitamin D"],a:3,e:"Sunlight exposure helps the skin produce vitamin D."},
{q:"What is the normal pH of pure water at 25°C?",topic:"Science",o:["5","6","7","8"],a:2,e:"Pure water has a pH of approximately 7."},
{q:"Which organ filters blood to produce urine?",topic:"Science",o:["Heart","Kidney","Lungs","Stomach"],a:1,e:"The kidneys filter blood and produce urine."},

{q:"What is the full form of ECG?",topic:"Laboratory Knowledge",o:["Electrocardiogram","Electrochemical Graph","Electronic Cardio Gauge","External Cardiac Guide"],a:0,e:"ECG stands for Electrocardiogram."},
{q:"Which component of blood helps in clotting?",topic:"Science",o:["RBCs","WBCs","Platelets","Albumin"],a:2,e:"Platelets play an important role in blood clotting."},
{q:"Which gas do humans need for respiration?",topic:"Science",o:["Nitrogen","Oxygen","Carbon dioxide","Hydrogen"],a:1,e:"Human cells use oxygen for aerobic respiration."},
{q:"What is the main function of haemoglobin?",topic:"Laboratory Knowledge",o:["Fight bacteria","Carry oxygen","Digest food","Clot blood"],a:1,e:"Haemoglobin carries oxygen in red blood cells."},
{q:"Which laboratory instrument is used to separate serum by centrifugation?",topic:"Laboratory Knowledge",o:["Microscope","Centrifuge","Incubator","Autoclave"],a:1,e:"A centrifuge separates components based on density."},
{q:"What does ESR stand for?",topic:"Laboratory Knowledge",o:["Erythrocyte Sedimentation Rate","Estimated Serum Reaction","External Sample Reading","Erythrocyte Serum Ratio"],a:0,e:"ESR stands for Erythrocyte Sedimentation Rate."},
{q:"Which sample is commonly used for a routine CBC?",topic:"Laboratory Knowledge",o:["Urine","EDTA blood","Plain water","Saliva"],a:1,e:"EDTA blood is commonly used for CBC testing."},
{q:"What is the full form of DNA?",topic:"Mathematics",o:["Deoxyribonucleic Acid","Dynamic Nuclear Atom","Double Nitrogen Acid","Deoxygenated Nucleic Atom"],a:0,e:"DNA stands for Deoxyribonucleic Acid."},
{q:"Which microscope component controls the amount of light?",topic:"Laboratory Knowledge",o:["Eyepiece","Stage","Diaphragm","Objective lens"],a:2,e:"The diaphragm regulates the light reaching the specimen."},
{q:"Which test is commonly used to measure blood glucose?",topic:"Laboratory Knowledge",o:["CBC","Blood glucose test","ESR","PT"],a:1,e:"A blood glucose test measures glucose concentration in blood."},

{q:"Which anticoagulant is commonly used for coagulation testing?",topic:"Laboratory Knowledge",o:["EDTA","Sodium citrate","Heparin","Fluoride"],a:1,e:"Sodium citrate is commonly used for coagulation tests."},
{q:"What does HDL stand for?",topic:"General Knowledge",o:["High Density Lipoprotein","Heavy Density Lipid","High Direct Lipid","Human Density Lipoprotein"],a:0,e:"HDL stands for High Density Lipoprotein."},
{q:"What comes next? 4, 9, 16, 25, 36, ?",topic:"Logical Reasoning",o:["42","45","49","50"],a:2,e:"These are consecutive square numbers: 2², 3², 4², 5², 6², then 7² = 49."},
{q:"What comes next? 5, 11, 23, 47, ?",topic:"Logical Reasoning",o:["85","91","95","97"],a:2,e:"Each number is multiplied by 2 and then 1 is added. 47 × 2 + 1 = 95."},
{q:"Find the missing number: 2, 5, 10, 17, 26, ?",topic:"Logical Reasoning",o:["35","36","37","38"],a:2,e:"The differences are 3, 5, 7, 9, then 11. 26 + 11 = 37."},
{q:"Which number does not belong?",topic:"Logical Reasoning",o:["27","64","125","144"],a:3,e:"27, 64 and 125 are cubes. 144 is not a cube."},
{q:"What is 35% of 200?",topic:"Mathematics",o:["60","65","70","75"],a:2,e:"35% of 200 = 70."},
{q:"If 8 workers complete a job in 6 days, how many worker-days are required?",topic:"Mathematics",o:["14","36","48","56"],a:2,e:"8 × 6 = 48 worker-days."},
{q:"What comes next? 144, 72, 36, 18, ?",topic:"Logical Reasoning",o:["6","8","9","12"],a:2,e:"Each number is divided by 2. 18 ÷ 2 = 9."},
{q:"Which is the greatest fraction?",topic:"Mathematics",o:["1/2","2/3","3/4","4/5"],a:3,e:"4/5 = 0.8, which is the greatest."},

{q:"A number divided by 4 gives 18. What is the number?",topic:"Mathematics",o:["64","68","72","76"],a:2,e:"18 × 4 = 72."},
{q:"What is the LCM of 6 and 8?",topic:"Mathematics",o:["12","18","24","48"],a:2,e:"24 is the smallest number divisible by both 6 and 8."},
{q:"What comes next? 10, 13, 19, 28, 40, ?",topic:"Logical Reasoning",o:["50","53","55","58"],a:2,e:"The differences are 3, 6, 9, 12, then 15. 40 + 15 = 55."},
{q:"An item bought for Rs. 500 is sold for Rs. 600. What is the profit percentage?",topic:"Mathematics",o:["10%","15%","20%","25%"],a:2,e:"Profit is 100. Profit percentage = 100 ÷ 500 × 100 = 20%."},
{q:"Find the average of 12, 18, 24 and 30.",topic:"Mathematics",o:["18","20","21","22"],a:2,e:"(12 + 18 + 24 + 30) ÷ 4 = 21."},
{q:"If 5 machines produce 50 products in one hour, how many products will 10 machines produce in one hour?",topic:"Mathematics",o:["75","90","100","120"],a:2,e:"Double the machines produce double the products: 100."},
{q:"What is the square root of 225?",topic:"Mathematics",o:["12","13","14","15"],a:3,e:"15 × 15 = 225."},
{q:"Which number is divisible by 9?",topic:"Mathematics",o:["124","135","142","151"],a:1,e:"The digits of 135 add up to 9, so it is divisible by 9."},
{q:"A car travels 240 km in 4 hours. What is its average speed?",topic:"Mathematics",o:["40 km/h","50 km/h","60 km/h","80 km/h"],a:2,e:"240 ÷ 4 = 60 km/h."},
{q:"What is 2/5 of 150?",topic:"Mathematics",o:["50","55","60","65"],a:2,e:"150 × 2/5 = 60."},

{q:"A product costs Rs. 800. Its price increases by 15%. What is the new price?",topic:"Mathematics",o:["Rs. 880","Rs. 900","Rs. 920","Rs. 940"],a:2,e:"15% of 800 is 120. New price = 800 + 120 = 920."},
{q:"What is the HCF of 18 and 30?",topic:"Mathematics",o:["3","6","9","12"],a:1,e:"6 is the highest common factor of 18 and 30."},
{q:"What does ABUNDANT mean?",topic:"General Knowledge",o:["Rare","Plentiful","Empty","Weak"],a:1,e:"Abundant means available in large quantities."},
{q:"What is the opposite of TRANSPARENT?",topic:"English",o:["Clear","Bright","Opaque","Visible"],a:2,e:"Opaque means not allowing light to pass through."},
{q:"Pen is to Write as Knife is to:",topic:"General Knowledge",o:["Draw","Cut","Read","Paint"],a:1,e:"A pen is used to write; a knife is used to cut."},
{q:"Which one is different?",topic:"Logical Reasoning",o:["Mercury","Venus","Mars","Moon"],a:3,e:"The Moon is a natural satellite, while the others are planets."},
{q:"Choose the correct spelling.",topic:"English",o:["Acommodation","Accommodation","Accomodation","Acomodation"],a:1,e:"The correct spelling is Accommodation."},
{q:"Which instrument measures atmospheric pressure?",topic:"General Knowledge",o:["Thermometer","Barometer","Hygrometer","Stethoscope"],a:1,e:"A barometer measures atmospheric pressure."},
{q:"What is the opposite of CONTRACT?",topic:"English",o:["Reduce","Expand","Shrink","Decrease"],a:1,e:"Expand means to increase in size or volume."},
{q:"Bird is to Nest as Bee is to:",topic:"General Knowledge",o:["Cave","Hive","Den","Web"],a:1,e:"A bee lives in a hive, just as a bird lives in a nest."},

{q:"Which one is a unit of mass?",topic:"Logical Reasoning",o:["Kilogram","Litre","Metre","Second"],a:0,e:"Kilogram is the SI base unit of mass."},
{q:"Author is to Book as Composer is to:",topic:"General Knowledge",o:["Painting","Music","Building","Medicine"],a:1,e:"An author writes books; a composer creates music."},
{q:"All doctors are educated. Sara is a doctor. What can we conclude?",topic:"Logical Reasoning",o:["Sara is educated","Sara is a teacher","Sara is a nurse","No conclusion"],a:0,e:"Since all doctors are educated and Sara is a doctor, Sara is educated."},
{q:"Ali is older than Bilal. Bilal is older than Kamran. Who is the youngest?",topic:"Logical Reasoning",o:["Ali","Bilal","Kamran","Cannot determine"],a:2,e:"The order is Ali, Bilal, Kamran. Kamran is youngest."},
{q:"A person faces East and turns 180 degrees. Which direction is he facing?",topic:"Logical Reasoning",o:["North","South","West","East"],a:2,e:"A 180-degree turn from East points West."},
{q:"If yesterday was Thursday, what day will it be 3 days after tomorrow?",topic:"General Knowledge",o:["Sunday","Monday","Tuesday","Wednesday"],a:2,e:"Yesterday was Thursday, so today is Friday. Tomorrow is Saturday; three days after Saturday is Tuesday."},
{q:"A is the sister of B. B is the father of C. What is A to C?",topic:"Mathematics",o:["Mother","Sister","Aunt","Grandmother"],a:2,e:"A is the sister of C's father, so A is C's aunt."},
{q:"All squares are rectangles. Which statement is correct?",topic:"Logical Reasoning",o:["All rectangles are squares","Every square is a rectangle","No square is a rectangle","All circles are rectangles"],a:1,e:"A square has all the properties of a rectangle."},
{q:"Five people sit in a row. Who occupies the middle position?",topic:"General Knowledge",o:["First person","Second person","Third person","Fourth person"],a:2,e:"The third position is the middle of five positions."},
{q:"If NORTH is coded as OPSUI, how is SOUTH coded using the same rule?",topic:"Logical Reasoning",o:["TPVUI","TPVTH","RNTUG","TPVTI"],a:0,e:"Each letter moves one position forward: SOUTH becomes TPVUI."},

{q:"A man walks 6 km West and then 8 km North. How far is he from the starting point?",topic:"Logical Reasoning",o:["8 km","10 km","12 km","14 km"],a:1,e:"Using the Pythagorean theorem, √(6² + 8²) = 10 km."},
{q:"What is the opposite direction of South-East?",topic:"English",o:["North-East","North-West","South-West","East"],a:1,e:"The opposite of South-East is North-West."},
{q:"What comes next? C, F, I, L, ?",topic:"Logical Reasoning",o:["M","N","O","P"],a:2,e:"Each letter advances three positions. The next letter is O."},
{q:"What comes next? 2, 3, 5, 8, 12, 17, ?",topic:"Logical Reasoning",o:["21","22","23","24"],a:2,e:"The differences are 1, 2, 3, 4, 5, then 6. 17 + 6 = 23."},
{q:"How many faces does a cube have?",topic:"Logical Reasoning",o:["4","5","6","8"],a:2,e:"A cube has six square faces."},
{q:"How many degrees are in a right angle?",topic:"Mathematics",o:["45°","60°","90°","180°"],a:2,e:"A right angle measures 90 degrees."},
{q:"What is the perimeter of a rectangle with length 8 cm and width 5 cm?",topic:"Mathematics",o:["13 cm","26 cm","30 cm","40 cm"],a:1,e:"Perimeter = 2 × (8 + 5) = 26 cm."},
{q:"What comes next? 1, 4, 13, 40, ?",topic:"Logical Reasoning",o:["80","100","121","123"],a:3,e:"Each number is multiplied by 3 and then 1 is added. 40 × 3 + 1 = 121? Correction: this sequence gives 121, so the correct answer is 121."},
{q:"Which number is a multiple of both 4 and 7?",topic:"General Knowledge",o:["21","24","28","32"],a:2,e:"28 is divisible by both 4 and 7."},
{q:"Find the median of 3, 7, 9, 11, 15.",topic:"Mathematics",o:["7","9","11","15"],a:1,e:"The middle value in the ordered list is 9."},

// ======================================
//  200 QUESTIONS  COMPLETE HERE.
// ======================================

{q:"What is true about the diagonals of a rectangle?",topic:"Mathematics",o:["They are always unequal","They are equal in length","They never intersect","They are curved"],a:1,e:"The diagonals of a rectangle are equal in length."},
{q:"What is 5 cubed?",topic:"Mathematics",o:["25","75","100","125"],a:3,e:"5³ = 5 × 5 × 5 = 125."},
{q:"What comes next? 3, 6, 12, 24, ? (Alternate version 1)",topic:"Logical Reasoning",o:["36","42","48","54"],a:2,e:"Each number is multiplied by 2. 24 × 2 = 48."},
{q:"What comes next? 100, 90, 80, 70, ? (Alternate version 1)",topic:"Logical Reasoning",o:["50","55","60","65"],a:2,e:"Each number decreases by 10. The next number is 60."},
{q:"Find the missing number: 7, 14, 21, 28, ?",topic:"Logical Reasoning",o:["32","35","38","42"],a:1,e:"The sequence increases by 7 each time. 28 + 7 = 35."},
{q:"What is 25% of 400?",topic:"Mathematics",o:["50","75","100","125"],a:2,e:"25% of 400 = 100."},
{q:"If 12 pens cost Rs. 120, what is the cost of 1 pen?",topic:"Mathematics",o:["Rs. 5","Rs. 10","Rs. 12","Rs. 15"],a:1,e:"120 ÷ 12 = Rs. 10."},
{q:"What is 15 × 12?",topic:"Mathematics",o:["160","170","180","190"],a:2,e:"15 × 12 = 180."},
{q:"What is the next prime number after 13?",topic:"Mathematics",o:["14","15","16","17"],a:3,e:"17 is the next prime number after 13."},
{q:"Which number is a perfect square?",topic:"General Knowledge",o:["45","49","52","60"],a:1,e:"49 = 7 × 7."},

{q:"What is 3/4 of 80? (Alternate version 1)",topic:"Mathematics",o:["40","50","60","70"],a:2,e:"80 × 3/4 = 60."},
{q:"A shirt costs Rs. 1,000. A discount of 10% is given. What is the sale price?",topic:"Mathematics",o:["Rs. 800","Rs. 850","Rs. 900","Rs. 950"],a:2,e:"10% of 1,000 is 100. Sale price = Rs. 900."},
{q:"Which number is divisible by 5?",topic:"Mathematics",o:["123","246","355","412"],a:2,e:"A number ending in 0 or 5 is divisible by 5."},
{q:"What is the Roman numeral for 50?",topic:"Mathematics",o:["X","L","C","D"],a:1,e:"L represents 50 in Roman numerals."},
{q:"How many sides does an octagon have?",topic:"Mathematics",o:["6","7","8","9"],a:2,e:"An octagon has eight sides."},
{q:"How many months have 31 days? (Alternate version 1)",topic:"Mathematics",o:["5","6","7","8"],a:2,e:"Seven months have 31 days."},
{q:"How many minutes are there in 3 hours?",topic:"Mathematics",o:["120","150","180","210"],a:2,e:"3 × 60 = 180 minutes."},
{q:"Which is the smallest unit?",topic:"General Knowledge",o:["Kilometre","Metre","Centimetre","Millimetre"],a:3,e:"A millimetre is smaller than a centimetre, metre and kilometre."},
{q:"Which planet is known as the Red Planet? (Alternate version 1)",topic:"Science",o:["Venus","Mars","Jupiter","Saturn"],a:1,e:"Mars is called the Red Planet because of its reddish appearance."},
{q:"Which gas do plants absorb during photosynthesis?",topic:"Science",o:["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"],a:2,e:"Plants absorb carbon dioxide during photosynthesis."},

{q:"Which organ is mainly responsible for pumping blood?",topic:"Science",o:["Liver","Heart","Kidney","Lungs"],a:1,e:"The heart pumps blood throughout the body."},
{q:"Which organ helps in breathing?",topic:"Science",o:["Stomach","Lungs","Pancreas","Spleen"],a:1,e:"The lungs are the main organs of respiration."},
{q:"What is the normal average body temperature in Celsius?",topic:"Science",o:["35°C","37°C","39°C","40°C"],a:1,e:"About 37°C is commonly used as the average normal body temperature."},
{q:"Which blood cells help in clotting?",topic:"Laboratory Knowledge",o:["Red blood cells","White blood cells","Platelets","Plasma cells"],a:2,e:"Platelets play an important role in blood clotting."},
{q:"Which blood cells carry oxygen?",topic:"Laboratory Knowledge",o:["Red blood cells","White blood cells","Platelets","Lymphocytes"],a:0,e:"Red blood cells contain haemoglobin, which carries oxygen."},
{q:"Which component of blood fights infection?",topic:"Science",o:["RBCs","WBCs","Platelets","Albumin"],a:1,e:"White blood cells help the body fight infections."},
{q:"Which organ filters blood to produce urine? (Alternate version 1)",topic:"Science",o:["Heart","Liver","Kidney","Lungs"],a:2,e:"The kidneys filter blood and produce urine."},
{q:"Which test is commonly used to measure haemoglobin?",topic:"Laboratory Knowledge",o:["CBC","LFT","RFT","Lipid profile"],a:0,e:"A Complete Blood Count (CBC) includes haemoglobin measurement."},
{q:"What does CBC stand for? (Alternate version 1)",topic:"Laboratory Knowledge",o:["Complete Blood Count","Clinical Blood Check","Common Blood Chemistry","Complete Body Count"],a:0,e:"CBC stands for Complete Blood Count."},
{q:"Which specimen is commonly used for a urine routine examination?",topic:"Laboratory Knowledge",o:["Blood","Urine","Saliva","Sputum"],a:1,e:"Urine is the specimen used for routine urine examination."},

{q:"Which anticoagulant is commonly used for CBC testing?",topic:"Laboratory Knowledge",o:["EDTA","Sodium fluoride","Sodium citrate","Plain tube"],a:0,e:"EDTA is commonly used for CBC samples."},
{q:"Which tube is commonly used for blood glucose testing?",topic:"Laboratory Knowledge",o:["Plain tube","Sodium fluoride tube","EDTA tube","Sodium citrate tube"],a:1,e:"Sodium fluoride tubes help inhibit glycolysis in glucose samples."},
{q:"What does ESR stand for? (Alternate version 1)",topic:"Laboratory Knowledge",o:["Estimated Serum Rate","Erythrocyte Sedimentation Rate","Enzyme Sedimentation Ratio","Erythrocyte Serum Reaction"],a:1,e:"ESR stands for Erythrocyte Sedimentation Rate."},
{q:"Which test is commonly used to assess kidney function?",topic:"Laboratory Knowledge",o:["ALT","Creatinine","Troponin","Amylase"],a:1,e:"Serum creatinine is commonly used to assess kidney function."},
{q:"Which enzyme is commonly associated with liver cell injury?",topic:"Science",o:["ALT","CK-MB","Lipase","Troponin"],a:0,e:"ALT is an enzyme commonly measured in liver function assessment."},
{q:"Which test is commonly used to assess thyroid function?",topic:"Laboratory Knowledge",o:["TSH","CBC","ESR","PT"],a:0,e:"TSH is commonly used in the initial assessment of thyroid function."},
{q:"Which test helps assess blood clotting through the extrinsic pathway?",topic:"Laboratory Knowledge",o:["PT","ESR","CBC","HbA1c"],a:0,e:"Prothrombin Time (PT) evaluates the extrinsic and common coagulation pathways."},
{q:"What does HbA1c indicate?",topic:"Laboratory Knowledge",o:["Recent oxygen level","Average blood glucose over about 2–3 months","Kidney filtration","Blood clotting time"],a:1,e:"HbA1c reflects average blood glucose over approximately 2–3 months."},
{q:"Which blood group is known as the universal red-cell donor in emergencies?",topic:"Laboratory Knowledge",o:["AB positive","O negative","A positive","B negative"],a:1,e:"O negative red cells are commonly considered the universal red-cell donor type."},
{q:"Which blood group is the universal red-cell recipient?",topic:"Laboratory Knowledge",o:["O negative","A positive","AB positive","B positive"],a:2,e:"AB positive individuals can generally receive red cells from all ABO and Rh groups, subject to compatibility testing."},

{q:"What is the liquid part of blood called?",topic:"Science",o:["Serum only","Plasma","Platelets","Haemoglobin"],a:1,e:"Plasma is the liquid component of blood."},
{q:"Which microscope lens usually provides the highest magnification in routine light microscopy?",topic:"Laboratory Knowledge",o:["10× objective","20× objective","40× objective","100× oil immersion objective"],a:3,e:"The 100× oil immersion objective provides the highest common magnification in routine light microscopy."},
{q:"What is the main purpose of a centrifuge?",topic:"Laboratory Knowledge",o:["Heating samples","Separating components by density","Measuring pH","Counting cells"],a:1,e:"A centrifuge separates sample components using centrifugal force."},
{q:"Which instrument is used to measure pH?",topic:"General Knowledge",o:["Centrifuge","pH meter","Microscope","Incubator"],a:1,e:"A pH meter measures the acidity or alkalinity of a solution."},
{q:"What is the SI unit of temperature?",topic:"Science",o:["Celsius","Fahrenheit","Kelvin","Joule"],a:2,e:"Kelvin is the SI base unit of thermodynamic temperature."},
{q:"Which vitamin is produced in the skin with sunlight exposure?",topic:"Science",o:["Vitamin A","Vitamin B12","Vitamin C","Vitamin D"],a:3,e:"The skin produces vitamin D after exposure to ultraviolet B radiation."},
{q:"Which vitamin is important for normal blood clotting?",topic:"Science",o:["Vitamin A","Vitamin C","Vitamin D","Vitamin K"],a:3,e:"Vitamin K is essential for the production of several clotting factors."},
{q:"Which mineral is essential for haemoglobin formation?",topic:"Laboratory Knowledge",o:["Calcium","Iron","Sodium","Potassium"],a:1,e:"Iron is an essential component of haemoglobin."},
{q:"Which part of the cell contains most of its genetic material?",topic:"Science",o:["Cell membrane","Nucleus","Cytoplasm","Ribosome"],a:1,e:"The nucleus contains most of the cell's genetic material."},
{q:"What is the basic structural and functional unit of life?",topic:"Mathematics",o:["Tissue","Organ","Cell","System"],a:2,e:"The cell is the basic structural and functional unit of life."},

{q:"Which microorganism is responsible for tuberculosis?",topic:"Science",o:["Escherichia coli","Mycobacterium tuberculosis","Staphylococcus aureus","Salmonella typhi"],a:1,e:"Tuberculosis is caused by Mycobacterium tuberculosis."},
{q:"Which method is commonly used to sterilize heat-resistant laboratory instruments?",topic:"Laboratory Knowledge",o:["Refrigeration","Autoclaving","Freezing","Sunlight exposure"],a:1,e:"Autoclaving uses pressurized steam to sterilize suitable heat-resistant items."},
{q:"What does PPE stand for in laboratory safety?",topic:"Laboratory Knowledge",o:["Personal Protective Equipment","Patient Protection Examination","Primary Processing Equipment","Personal Procedure Evaluation"],a:0,e:"PPE stands for Personal Protective Equipment."},
{q:"What should be done first after a chemical splash in the eyes?",topic:"General Knowledge",o:["Rub the eyes","Immediately flush with plenty of water at an eyewash station","Cover the eyes and continue working","Wait for symptoms"],a:1,e:"Immediately flush the eyes at an eyewash station and follow the laboratory emergency protocol."},
{q:"What comes next? 2, 6, 12, 20, 30, ? (Alternate version 1)",topic:"Logical Reasoning",o:["36","40","42","44"],a:2,e:"The differences are 4, 6, 8, 10, then 12. 30 + 12 = 42."},
{q:"Find the missing number: 81, 27, 9, 3, ?",topic:"Logical Reasoning",o:["0","1","2","6"],a:1,e:"Each number is divided by 3. 3 ÷ 3 = 1."},
{q:"What comes next? 1, 8, 27, 64, ? (Alternate version 1)",topic:"Logical Reasoning",o:["100","121","125","144"],a:2,e:"These are cubes: 1³, 2³, 3³, 4³, then 5³ = 125."},
{q:"What is 40% of 250?",topic:"Mathematics",o:["80","90","100","110"],a:2,e:"40% of 250 = 100."},
{q:"If 7 books cost Rs. 560, what is the cost of 3 books?",topic:"Mathematics",o:["Rs. 180","Rs. 210","Rs. 240","Rs. 280"],a:2,e:"One book costs 560 ÷ 7 = 80. Three books cost Rs. 240."},
{q:"What is 18 × 15?",topic:"Mathematics",o:["240","250","270","280"],a:2,e:"18 × 15 = 270."},

{q:"Which is the odd one out? (Alternate version 1)",topic:"Logical Reasoning",o:["2","3","5","9"],a:3,e:"2, 3 and 5 are prime numbers. 9 is not prime."},
{q:"What is the square of 17?",topic:"Mathematics",o:["269","279","289","299"],a:2,e:"17 × 17 = 289."},
{q:"What is 5/8 of 160?",topic:"Mathematics",o:["80","90","100","120"],a:2,e:"160 × 5/8 = 100."},
{q:"A product costs Rs. 1,200 and is sold for Rs. 1,500. What is the profit?",topic:"Mathematics",o:["Rs. 200","Rs. 250","Rs. 300","Rs. 350"],a:2,e:"Profit = selling price − cost price = Rs. 300."},
{q:"Which number is divisible by 11?",topic:"Mathematics",o:["121","123","125","127"],a:0,e:"121 ÷ 11 = 11."},
{q:"What is the Roman numeral for 100?",topic:"Mathematics",o:["L","C","D","M"],a:1,e:"C represents 100 in Roman numerals."},
{q:"How many sides does a decagon have?",topic:"Mathematics",o:["8","9","10","12"],a:2,e:"A decagon has ten sides."},
{q:"How many seconds are there in 5 minutes?",topic:"Mathematics",o:["200","250","300","350"],a:2,e:"5 × 60 = 300 seconds."},
{q:"Which is the largest unit of length?",topic:"Mathematics",o:["Millimetre","Centimetre","Metre","Kilometre"],a:3,e:"A kilometre is larger than a metre, centimetre and millimetre."},
{q:"Which planet is the largest in our solar system?",topic:"Science",o:["Earth","Saturn","Jupiter","Neptune"],a:2,e:"Jupiter is the largest planet in our solar system."},

{q:"Which gas is most abundant in Earth's atmosphere?",topic:"Science",o:["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"],a:1,e:"Nitrogen makes up approximately 78% of Earth's atmosphere."},
{q:"Which organ produces insulin?",topic:"Science",o:["Liver","Pancreas","Kidney","Spleen"],a:1,e:"Insulin is produced by beta cells in the pancreas."},
{q:"Which organ is mainly responsible for detoxifying many substances in the body?",topic:"Science",o:["Heart","Liver","Lungs","Stomach"],a:1,e:"The liver processes many drugs and harmful substances."},
{q:"Which blood component contains haemoglobin?",topic:"Laboratory Knowledge",o:["Plasma","Red blood cells","Platelets","White blood cells"],a:1,e:"Haemoglobin is found inside red blood cells."},
{q:"Which cells are primarily responsible for producing antibodies?",topic:"Science",o:["Red blood cells","B lymphocytes","Platelets","Neutrophils"],a:1,e:"B lymphocytes can differentiate into plasma cells that produce antibodies."},
{q:"Which test is commonly used to evaluate platelet count?",topic:"Laboratory Knowledge",o:["CBC","LFT","RFT","Lipid profile"],a:0,e:"A CBC includes a platelet count."},
{q:"What does MCV measure?",topic:"Laboratory Knowledge",o:["Average red blood cell volume","White blood cell count","Platelet function","Blood glucose"],a:0,e:"MCV means Mean Corpuscular Volume and measures average red blood cell size."},
{q:"Which test is commonly used to detect malaria parasites?",topic:"Laboratory Knowledge",o:["Peripheral blood smear","Urine routine","Lipid profile","Stool occult blood"],a:0,e:"A peripheral blood smear can be examined for malaria parasites."},
{q:"Which specimen is commonly used for a stool routine examination?",topic:"Laboratory Knowledge",o:["Urine","Stool","Serum","Sputum"],a:1,e:"A stool sample is used for routine stool examination."},
{q:"Which test is used to measure total cholesterol?",topic:"Laboratory Knowledge",o:["Lipid profile","CBC","ESR","PT"],a:0,e:"A lipid profile measures cholesterol and related blood lipids."},

{q:"What does RFT commonly stand for?",topic:"Laboratory Knowledge",o:["Renal Function Tests","Rapid Fever Test","Routine Fluid Test","Red Cell Function Test"],a:0,e:"RFT stands for Renal Function Tests."},
{q:"Which test is commonly used to assess pancreatic lipase activity?",topic:"Laboratory Knowledge",o:["Lipase test","TSH","ESR","PT"],a:0,e:"Serum lipase is commonly measured when pancreatic disease is suspected."},
{q:"Which tube commonly contains sodium citrate for coagulation testing?",topic:"Laboratory Knowledge",o:["Blue-top tube","Purple-top tube","Grey-top tube","Green-top tube"],a:0,e:"A light-blue-top tube commonly contains sodium citrate."},
{q:"What is the purpose of quality control in a laboratory?",topic:"Laboratory Knowledge",o:["To increase workload","To ensure reliable test results","To reduce reporting","To change patient identity"],a:1,e:"Quality control helps monitor the accuracy and reliability of laboratory testing."},
{q:"Which instrument is used to measure absorbance in colorimetric tests?",topic:"General Knowledge",o:["Spectrophotometer","Centrifuge","Incubator","Autoclave"],a:0,e:"A spectrophotometer measures light absorbance at selected wavelengths."},
{q:"What is the purpose of a laboratory incubator?",topic:"Laboratory Knowledge",o:["To maintain controlled temperature for sample or culture incubation","To weigh samples","To measure blood pressure","To separate serum"],a:0,e:"An incubator maintains suitable environmental conditions, commonly controlled temperature."},
{q:"Which stain is commonly used for peripheral blood smears?",topic:"Laboratory Knowledge",o:["Wright stain","Gram stain only","India ink only","Acid-fast stain only"],a:0,e:"Wright stain is commonly used for peripheral blood film examination."},
{q:"Which stain is commonly used in Gram staining?",topic:"Laboratory Knowledge",o:["Crystal violet","Methylene blue only","Eosin only","Safranin only"],a:0,e:"Crystal violet is the primary stain in the Gram staining procedure."},
{q:"Which microorganism is commonly associated with typhoid fever?",topic:"Science",o:["Salmonella Typhi","Mycobacterium tuberculosis","Vibrio cholerae","Streptococcus pneumoniae"],a:0,e:"Typhoid fever is caused by Salmonella enterica serovar Typhi."},
{q:"Which organism commonly causes cholera?",topic:"Science",o:["Vibrio cholerae","Salmonella Typhi","E. coli O157:H7","Staphylococcus aureus"],a:0,e:"Cholera is caused by Vibrio cholerae."},

{q:"What is the main purpose of hand hygiene in a laboratory?",topic:"Laboratory Knowledge",o:["Improve handwriting","Prevent spread of infection","Increase sample volume","Improve microscope focus"],a:1,e:"Hand hygiene reduces the transmission of microorganisms."},
{q:"What should be used to dispose of used needles?",topic:"Laboratory Knowledge",o:["Ordinary dustbin","Sharps container","Paper bag","Open tray"],a:1,e:"Used needles must be disposed of in an approved puncture-resistant sharps container."},
{q:"Which blood group antigen determines the Rh-positive status?",topic:"Laboratory Knowledge",o:["A antigen","B antigen","D antigen","H antigen"],a:2,e:"The presence of the D antigen generally indicates Rh-positive status."},
{q:"What is crossmatching performed for?",topic:"Laboratory Knowledge",o:["Checking blood compatibility before transfusion","Measuring glucose","Counting platelets","Measuring urine protein"],a:0,e:"Crossmatching helps assess compatibility between donor red cells and recipient serum or plasma."},
{q:"Which test is commonly used to detect pregnancy by measuring a hormone?",topic:"Laboratory Knowledge",o:["hCG test","ESR","CBC","PT"],a:0,e:"Pregnancy tests detect human chorionic gonadotropin (hCG)."}, 
{q:"What does CRP stand for?",topic:"Laboratory Knowledge",o:["C-reactive protein","Complete red profile","Cell reaction process","Clinical renal parameter"],a:0,e:"CRP stands for C-reactive protein, a marker of inflammation."},
{q:"Which electrolyte is most important for maintaining normal extracellular fluid balance?",topic:"Science",o:["Sodium","Iron","Zinc","Iodine"],a:0,e:"Sodium is the major cation in extracellular fluid."},
{q:"Which electrolyte is especially important for normal heart and muscle function?",topic:"Science",o:["Potassium","Fluoride","Iron","Copper"],a:0,e:"Potassium is essential for normal nerve, muscle and cardiac electrical activity."},
{q:"Which vitamin deficiency can cause scurvy?",topic:"Science",o:["Vitamin A","Vitamin B12","Vitamin C","Vitamin D"],a:2,e:"Scurvy is caused by vitamin C deficiency."},
{q:"Which vitamin deficiency can cause megaloblastic anaemia?",topic:"Science",o:["Vitamin B12","Vitamin K","Vitamin E","Vitamin A"],a:0,e:"Vitamin B12 deficiency can cause megaloblastic anaemia."},

// ======================================
//  300 QUESTIONS  COMPLETE HERE.
// ======================================

{q:"Which part of the microscope controls the amount of light passing through the specimen?",topic:"Laboratory Knowledge",o:["Eyepiece","Diaphragm","Objective lens","Stage clip"],a:1,e:"The diaphragm regulates the amount of light reaching the specimen."},
{q:"What is the function of an objective lens?",topic:"Mathematics",o:["Magnify the specimen","Hold the slide","Control temperature","Measure weight"],a:0,e:"The objective lens provides magnification of the specimen."},
{q:"What does the term aseptic technique mean?",topic:"Laboratory Knowledge",o:["Technique to prevent contamination","Technique to increase temperature","Method of weighing samples","Method of staining slides"],a:0,e:"Aseptic technique helps prevent contamination by unwanted microorganisms."},
{q:"Which type of water is generally used for preparing laboratory reagents?",topic:"Laboratory Knowledge",o:["Distilled or deionized water as specified by the method","Tap water in all cases","Sea water","Mineral water"],a:0,e:"Laboratory methods specify the required water quality; distilled or deionized water is commonly used."},
{q:"What is the main purpose of calibrating laboratory equipment?",topic:"Laboratory Knowledge",o:["To compare measurements with a known standard","To clean the equipment only","To increase sample size","To change the test method"],a:0,e:"Calibration checks measurement accuracy against known standards."},
{q:"Which document gives instructions for performing a laboratory test?",topic:"Laboratory Knowledge",o:["SOP","ID card","Invoice","Attendance sheet"],a:0,e:"SOP means Standard Operating Procedure and describes how a task should be performed."},
{q:"Which number completes the series? 5, 10, 20, 40, ?",topic:"Logical Reasoning",o:["60","70","80","90"],a:2,e:"Each number is multiplied by 2."},
{q:"If 7 + 3 = 40 and 8 + 2 = 60, then 9 + 1 = ?",topic:"General Knowledge",o:["70","80","90","100"],a:1,e:"The pattern is (first number minus second number) multiplied by 10: 9 - 1 = 8, so 80."},
{q:"Which one is different? (Alternate version 1)",topic:"Logical Reasoning",o:["Triangle","Square","Circle","Rectangle"],a:2,e:"A circle has no straight sides or corners."},
{q:"Find the missing number: 4, 9, 16, 25, ?",topic:"Logical Reasoning",o:["30","32","36","49"],a:2,e:"These are squares: 2², 3², 4², 5², 6²."},

{q:"If CAT is coded as DBU, how is DOG coded? (Alternate version 1)",topic:"Logical Reasoning",o:["EPH","CNG","FPI","EOG"],a:0,e:"Each letter is moved one step forward in the alphabet."},
{q:"Which number is the smallest?",topic:"General Knowledge",o:["0.5","0.05","0.55","0.505"],a:1,e:"0.05 is smaller than the other decimal values."},
{q:"A clock shows 3:00. What is the angle between its hands? (Alternate version 1)",topic:"Mathematics",o:["45°","60°","90°","120°"],a:2,e:"At 3:00, the hands form a right angle of 90 degrees."},
{q:"Which word does not belong? (Alternate version 2)",topic:"English",o:["Apple","Mango","Carrot","Banana"],a:2,e:"Carrot is a vegetable; the others are fruits."},
{q:"What comes next? 1, 4, 9, 16, 25, ?",topic:"Logical Reasoning",o:["30","35","36","49"],a:2,e:"The sequence contains square numbers: 1² through 6²."},
{q:"If all roses are flowers, which statement must be true?",topic:"Logical Reasoning",o:["All flowers are roses","Some roses are not flowers","All roses are flowers","No roses are flowers"],a:2,e:"This is exactly what the statement tells us."},
{q:"A dozen eggs contains how many eggs?",topic:"Mathematics",o:["10","12","14","16"],a:1,e:"One dozen equals 12."},
{q:"Which number is divisible by 9? (Alternate version 1)",topic:"Mathematics",o:["124","135","142","151"],a:1,e:"1 + 3 + 5 = 9, so 135 is divisible by 9."},
{q:"If today is Monday, what day will it be after 10 days? (Alternate version 2)",topic:"General Knowledge",o:["Wednesday","Thursday","Friday","Saturday"],a:1,e:"Seven days later is Monday; three more days is Thursday."},
{q:"Complete the pattern: 2, 6, 12, 20, 30, ?",topic:"Logical Reasoning",o:["36","40","42","44"],a:2,e:"The differences are 4, 6, 8, 10, then 12. So 30 + 12 = 42."},

{q:"Which is the odd one out? (Alternate version 2)",topic:"Logical Reasoning",o:["January","March","May","Monday"],a:3,e:"Monday is a day of the week; the others are months."},
{q:"If 5 workers complete a task in 10 days, how many worker-days are needed?",topic:"Mathematics",o:["15","25","50","100"],a:2,e:"5 workers × 10 days = 50 worker-days."},
{q:"What is half of three quarters of 80?",topic:"Mathematics",o:["20","25","30","40"],a:2,e:"Three quarters of 80 is 60; half of 60 is 30."},
{q:"Which number completes the series? 100, 90, 81, 73, ?",topic:"Logical Reasoning",o:["64","66","67","68"],a:2,e:"Subtract 10, 9, 8, then 7. So 73 - 7 = 66."},
{q:"A book costs 200 rupees. What is its price after a 10% discount?",topic:"Mathematics",o:["160","170","180","190"],a:2,e:"10% of 200 is 20; 200 - 20 = 180."},
{q:"Which shape has exactly five sides?",topic:"General Knowledge",o:["Hexagon","Pentagon","Octagon","Triangle"],a:1,e:"A pentagon has five sides."},
{q:"Find the missing letter: A, C, E, G, ?",topic:"Logical Reasoning",o:["H","I","J","K"],a:1,e:"The sequence skips one letter each time: A, C, E, G, I."},
{q:"If BOOK is coded as CPPL, how is PEN coded?",topic:"Logical Reasoning",o:["QFO","ODM","QEN","RFO"],a:0,e:"Each letter moves one step forward: P→Q, E→F, N→O."},
{q:"Which number is a prime number? (Alternate version 1)",topic:"Mathematics",o:["21","27","29","33"],a:2,e:"29 has no divisors other than 1 and itself."},
{q:"What is 15% of 200?",topic:"Mathematics",o:["15","20","25","30"],a:3,e:"15% of 200 = 30."},

{q:"Which pair has the same relationship as Doctor : Hospital?",topic:"Logical Reasoning",o:["Teacher : School","Driver : Road","Chef : Food","Farmer : Crop"],a:0,e:"A doctor commonly works in a hospital, just as a teacher commonly works in a school."},
{q:"Complete the series: 81, 27, 9, 3, ?",topic:"Logical Reasoning",o:["0","1","2","6"],a:1,e:"Each number is divided by 3."},
{q:"If 4 pencils cost 40 rupees, how much do 7 pencils cost at the same rate?",topic:"Mathematics",o:["60","65","70","80"],a:2,e:"One pencil costs 10 rupees; 7 cost 70 rupees."},
{q:"Which is heavier: 1 kilogram of iron or 1 kilogram of cotton?",topic:"Mathematics",o:["Iron","Cotton","Both are equal","Cannot be determined"],a:2,e:"Both have the same mass: one kilogram."},
{q:"A father is 40 years old and his son is 10. How old will the father be when the son is 20?",topic:"General Knowledge",o:["45","50","55","60"],a:1,e:"Ten years will pass, so the father will be 50."},
{q:"Which number comes next? 11, 22, 33, 44, ?",topic:"Logical Reasoning",o:["50","55","66","77"],a:1,e:"Each number increases by 11."},
{q:"Which one is not a mammal?",topic:"Science",o:["Whale","Bat","Dolphin","Crocodile"],a:3,e:"Crocodiles are reptiles."},
{q:"What is the opposite of 'expand'?",topic:"English",o:["Increase","Stretch","Contract","Enlarge"],a:2,e:"Contract means to become smaller."},
{q:"If NORTH is opposite to SOUTH, what is opposite to EAST?",topic:"English",o:["North","West","South","North-East"],a:1,e:"West is the opposite direction of east."},
{q:"A train travels 60 km in one hour. How far will it travel in 3 hours at the same speed?",topic:"Mathematics",o:["120 km","150 km","180 km","200 km"],a:2,e:"Distance = speed × time = 60 × 3 = 180 km."},

{q:"Which number completes the pattern? 3, 8, 15, 24, 35, ?",topic:"Logical Reasoning",o:["42","46","48","50"],a:2,e:"The differences are 5, 7, 9, 11, then 13. The next number is 48."},
{q:"Which is the largest fraction? (Alternate version 1)",topic:"Mathematics",o:["1/2","2/3","3/4","1/4"],a:2,e:"3/4 equals 0.75, which is the largest."},
{q:"If yesterday was Friday, what day is tomorrow?",topic:"General Knowledge",o:["Saturday","Sunday","Monday","Thursday"],a:1,e:"Yesterday Friday means today Saturday and tomorrow Sunday."},
{q:"Which item is used to measure temperature?",topic:"Science",o:["Barometer","Thermometer","Hygrometer","Ammeter"],a:1,e:"A thermometer measures temperature."},
{q:"What is the square root of 144?",topic:"Mathematics",o:["10","11","12","14"],a:2,e:"12 × 12 = 144."},
{q:"Which word is spelled correctly?",topic:"English",o:["Recieve","Receive","Receeve","Receve"],a:1,e:"The correct spelling is receive."},
{q:"Complete the sequence: Z, X, V, T, ?",topic:"Logical Reasoning",o:["R","S","Q","P"],a:0,e:"The sequence moves backward by two letters each time."},
{q:"If 2 cats catch 2 mice in 2 minutes, how many cats are needed to catch 6 mice in 2 minutes at the same rate?",topic:"Mathematics",o:["2","4","6","8"],a:2,e:"Each cat catches one mouse in two minutes, so six cats are needed."},
{q:"Which number is the median of 3, 9, 5, 7, 1?",topic:"Mathematics",o:["3","5","7","9"],a:1,e:"In order: 1, 3, 5, 7, 9. The middle number is 5."},
{q:"What comes next? 1, 2, 4, 8, 16, ? (Alternate version 1)",topic:"Logical Reasoning",o:["24","28","30","32"],a:3,e:"Each number is doubled."},

{q:"Which is the odd one out? (Alternate version 3)",topic:"Logical Reasoning",o:["Copper","Iron","Silver","Plastic"],a:3,e:"Plastic is not a metal."},
{q:"If a = 3 and b = 4, what is a² + b²?",topic:"Mathematics",o:["12","18","25","49"],a:2,e:"3² + 4² = 9 + 16 = 25."},
{q:"A person faces north and turns right. Which direction is the person facing?",topic:"Logical Reasoning",o:["West","East","South","North"],a:1,e:"A right turn from north points east."},
{q:"How many minutes are there in 2.5 hours?",topic:"Mathematics",o:["120","130","150","180"],a:2,e:"2.5 × 60 = 150 minutes."},
{q:"Which number is missing? 7, 14, 28, 56, ?",topic:"General Knowledge",o:["84","98","112","120"],a:2,e:"Each number is multiplied by 2."},
{q:"Which organ pumps blood around the body?",topic:"Science",o:["Lungs","Brain","Heart","Kidney"],a:2,e:"The heart pumps blood through the circulatory system."},
{q:"If 20 is increased by 25%, what is the result?",topic:"Mathematics",o:["22","24","25","30"],a:2,e:"25% of 20 is 5; 20 + 5 = 25."},
{q:"Which word is closest in meaning to 'rapid'?",topic:"English",o:["Slow","Fast","Weak","Quiet"],a:1,e:"Rapid means fast or quick."},
{q:"Complete the pattern: 2, 5, 10, 17, 26, ?",topic:"Logical Reasoning",o:["35","36","37","38"],a:2,e:"The differences are 3, 5, 7, 9, then 11. The next number is 37."},
{q:"If 3 books weigh 6 kg, what is the weight of 5 identical books?",topic:"Mathematics",o:["8 kg","10 kg","12 kg","15 kg"],a:1,e:"Each book weighs 2 kg; five books weigh 10 kg."},

{q:"Which number is divisible by both 2 and 5?",topic:"Mathematics",o:["12","15","20","25"],a:2,e:"20 is divisible by both 2 and 5."},
{q:"A meeting starts at 9:35 AM and lasts 1 hour 45 minutes. When does it end?",topic:"General Knowledge",o:["10:50 AM","11:10 AM","11:20 AM","11:30 AM"],a:2,e:"9:35 + 1 hour 45 minutes = 11:20 AM."},
{q:"Which one is different? (Alternate version 2)",topic:"Logical Reasoning",o:["Eagle","Sparrow","Penguin","Butterfly"],a:3,e:"Butterfly is an insect; the others are birds."},
{q:"What is 7 cubed?",topic:"Mathematics",o:["49","147","343","512"],a:2,e:"7 × 7 × 7 = 343."},
{q:"If the code for 1 is A, 2 is B, 3 is C, what is the code for 5?",topic:"Logical Reasoning",o:["D","E","F","G"],a:1,e:"The fifth letter of the alphabet is E."},
{q:"Which number completes the sequence? 50, 45, 39, 32, 24, ?",topic:"Logical Reasoning",o:["14","15","16","17"],a:1,e:"Subtract 5, 6, 7, 8, then 9. So 24 - 9 = 15."},
{q:"Which part of the human body controls balance and coordination?",topic:"Science",o:["Cerebellum","Stomach","Liver","Pancreas"],a:0,e:"The cerebellum helps coordinate movement and balance."},
{q:"What is the next prime number after 13? (Alternate version 1)",topic:"Mathematics",o:["14","15","16","17"],a:3,e:"17 is the next number divisible only by 1 and itself."},
{q:"If a dozen bananas cost 120 rupees, what is the cost of 3 bananas?",topic:"Mathematics",o:["20","25","30","40"],a:2,e:"One banana costs 10 rupees; three cost 30 rupees."},
{q:"Which word does not belong? (Alternate version 3)",topic:"English",o:["Monday","Tuesday","April","Friday"],a:2,e:"April is a month; the others are days."},

{q:"Complete the sequence: 64, 32, 16, 8, ?",topic:"Logical Reasoning",o:["2","4","6","12"],a:1,e:"Each number is divided by 2."},
{q:"What is the perimeter of a square with a side of 6 cm?",topic:"Mathematics",o:["12 cm","18 cm","24 cm","36 cm"],a:2,e:"Perimeter = 4 × side = 24 cm."},
{q:"If all doctors are educated and Ali is a doctor, what follows?",topic:"Logical Reasoning",o:["Ali is educated","Ali is a teacher","All educated people are doctors","Ali is a nurse"],a:0,e:"If all doctors are educated, Ali must be educated."},
{q:"Which instrument measures atmospheric pressure? (Alternate version 1)",topic:"General Knowledge",o:["Thermometer","Barometer","Microscope","Stethoscope"],a:1,e:"A barometer measures atmospheric pressure."},
{q:"What is 0.25 expressed as a percentage?",topic:"Mathematics",o:["2.5%","20%","25%","250%"],a:2,e:"0.25 × 100 = 25%."},
{q:"Which number comes next? 6, 11, 21, 41, ?",topic:"Logical Reasoning",o:["61","71","81","91"],a:2,e:"Each number is multiplied by 2 and then 1 is subtracted."},
{q:"Which is the correct order from smallest to largest?",topic:"Logical Reasoning",o:["0.8, 0.08, 0.18","0.08, 0.18, 0.8","0.18, 0.8, 0.08","0.8, 0.18, 0.08"],a:1,e:"The values increase from 0.08 to 0.18 to 0.8."},
{q:"A car uses 5 litres of fuel for 100 km. How much fuel does it use for 300 km at the same rate?",topic:"Mathematics",o:["10 litres","12 litres","15 litres","20 litres"],a:2,e:"300 km is three times 100 km, so 5 × 3 = 15 litres."},
{q:"Which letter comes three places after M?",topic:"General Knowledge",o:["N","O","P","Q"],a:2,e:"N is one, O is two, and P is three places after M."},
{q:"What is the sum of the first five positive even numbers?",topic:"Mathematics",o:["20","25","30","35"],a:2,e:"2 + 4 + 6 + 8 + 10 = 30."},

{q:"Which one is not a unit of length?",topic:"Logical Reasoning",o:["Metre","Centimetre","Kilogram","Kilometre"],a:2,e:"Kilogram is a unit of mass, not length."},
{q:"If 12 people shake hands with each other exactly once, how many handshakes occur?",topic:"Mathematics",o:["44","60","66","72"],a:2,e:"The number is 12 × 11 ÷ 2 = 66."},
{q:"Find the missing number: 1, 8, 27, 64, ?",topic:"Logical Reasoning",o:["100","125","144","216"],a:1,e:"These are cubes: 1³, 2³, 3³, 4³, 5³."},
{q:"Which gas do plants mainly absorb during photosynthesis?",topic:"Science",o:["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"],a:2,e:"Plants absorb carbon dioxide for photosynthesis."},
{q:"If a clock loses 5 minutes every hour, how many minutes will it lose in 6 hours?",topic:"Mathematics",o:["20","25","30","35"],a:2,e:"5 × 6 = 30 minutes."},
{q:"Which number is the greatest?",topic:"General Knowledge",o:["3²","2⁴","4²","5²"],a:3,e:"5² = 25, which is greater than 9, 16 and 16."},
{q:"A shopkeeper buys an item for 500 rupees and sells it for 600. What is the profit percentage?",topic:"Mathematics",o:["10%","15%","20%","25%"],a:2,e:"Profit is 100; 100 ÷ 500 × 100 = 20%."},
{q:"Which word is the opposite of 'ancient'?",topic:"English",o:["Old","Historic","Modern","Traditional"],a:2,e:"Modern means recent or current, opposite to ancient."},
{q:"Complete the series: 13, 18, 23, 28, ?",topic:"Logical Reasoning",o:["30","31","32","33"],a:3,e:"Each number increases by 5."},
{q:"If 8 machines make 8 items in 8 minutes, how long would 16 machines take to make 16 items at the same rate?",topic:"General Knowledge",o:["4 minutes","8 minutes","16 minutes","32 minutes"],a:1,e:"Each machine makes one item in 8 minutes, so 16 machines make 16 items in 8 minutes."},

{q:"Which is the correct Roman numeral for 50?",topic:"Mathematics",o:["X","L","C","D"],a:1,e:"L represents 50 in Roman numerals."},
{q:"What is the average of 10, 20, 30 and 40?",topic:"Mathematics",o:["20","25","30","35"],a:1,e:"The sum is 100; 100 divided by 4 equals 25."},
{q:"Which one is a renewable source of energy?",topic:"Science",o:["Coal","Petrol","Natural gas","Solar energy"],a:3,e:"Solar energy is naturally replenished by sunlight."},
{q:"If 6 is to 36, then 8 is to what?",topic:"General Knowledge",o:["48","56","64","72"],a:2,e:"The relationship is squaring: 6² = 36, so 8² = 64."},
{q:"Which number completes the sequence? 121, 100, 81, 64, ?",topic:"Logical Reasoning",o:["36","49","52","56"],a:1,e:"These are descending squares: 11², 10², 9², 8², 7²."},
{q:"A person walks 4 km east and then 3 km north. How far is the person from the starting point in a straight line?",topic:"Logical Reasoning",o:["5 km","6 km","7 km","8 km"],a:0,e:"Using the 3-4-5 right triangle, the distance is 5 km."},
{q:"Which blood cells mainly help fight infections?",topic:"Laboratory Knowledge",o:["Red blood cells","White blood cells","Platelets","Plasma"],a:1,e:"White blood cells are important for immune defence."},
{q:"What is 3/5 of 100?",topic:"Mathematics",o:["30","40","50","60"],a:3,e:"100 × 3/5 = 60."},
{q:"Which number is missing? 9, 18, 36, 72, ?",topic:"General Knowledge",o:["108","124","144","162"],a:2,e:"Each number is doubled."},
{q:"If the day before yesterday was Wednesday, what day is today?",topic:"General Knowledge",o:["Thursday","Friday","Saturday","Sunday"],a:1,e:"Yesterday was Thursday, so today is Friday."},

// ======================================
//  400 QUESTIONS  COMPLETE HERE.
// ======================================

{q:"Which one is not a primary colour of light?",topic:"Science",o:["Red","Green","Blue","Yellow"],a:3,e:"The primary colours of light are red, green and blue."},
{q:"A rectangle has length 9 cm and width 4 cm. What is its area?",topic:"Mathematics",o:["13 cm²","26 cm²","36 cm²","40 cm²"],a:2,e:"Area = length × width = 9 × 4 = 36 cm²."},
{q:"Which number is both a perfect square and a perfect cube?",topic:"Mathematics",o:["16","36","64","100"],a:2,e:"64 = 8² and also 4³."},
{q:"If 3 pens and 2 pencils cost 70 rupees, and each pen costs 20 rupees, what is the cost of both pencils together?",topic:"Mathematics",o:["10","20","30","40"],a:2,e:"Three pens cost 60; 70 - 60 = 10 for two pencils."},
{q:"Which part of a cell contains most of its genetic material?",topic:"Science",o:["Cell membrane","Nucleus","Cytoplasm","Ribosome"],a:1,e:"The nucleus contains most of the cell's DNA."},
{q:"What comes next? 4, 7, 13, 25, 49, ?",topic:"Logical Reasoning",o:["73","89","97","99"],a:2,e:"Each number is multiplied by 2 and then 1 is subtracted: 49 × 2 - 1 = 97."},
{q:"Which number is exactly halfway between 18 and 42?",topic:"General Knowledge",o:["25","28","30","32"],a:2,e:"(18 + 42) ÷ 2 = 30."},
{q:"If a word is written backwards, how does TABLE appear?",topic:"Laboratory Knowledge",o:["ELBAT","ELTAB","BATEL","TELAB"],a:0,e:"Reading TABLE from right to left gives ELBAT."},
{q:"How many sides do two hexagons have altogether?",topic:"Mathematics",o:["10","12","14","16"],a:1,e:"A hexagon has 6 sides; two have 12 sides altogether."},
{q:"Which number is missing? 2, 3, 5, 8, 12, 17, ?",topic:"General Knowledge",o:["21","22","23","24"],a:2,e:"The differences are 1, 2, 3, 4, 5, then 6. So 17 + 6 = 23."},

{q:"What is the chemical symbol for gold?",topic:"Science",o:["Ag","Au","Gd","Go"],a:1,e:"The chemical symbol for gold is Au."},
{q:"A water tank is 1/4 full. If its capacity is 200 litres, how much water is inside?",topic:"Mathematics",o:["25 litres","40 litres","50 litres","75 litres"],a:2,e:"One quarter of 200 litres is 50 litres."},
{q:"Which number is not a factor of 24?",topic:"Mathematics",o:["3","4","6","5"],a:3,e:"24 cannot be divided evenly by 5."},
{q:"If 10% of a number is 15, what is the number?",topic:"Mathematics",o:["100","120","150","200"],a:2,e:"If 10% is 15, then 100% is 150."},
{q:"Which one is different from the others?",topic:"Logical Reasoning",o:["Cube","Sphere","Cylinder","Kilogram"],a:3,e:"Kilogram is a unit of mass; the others are three-dimensional shapes."},
{q:"What is the next number? 1, 3, 6, 10, 15, ?",topic:"Mathematics",o:["18","20","21","25"],a:2,e:"Add 2, 3, 4, 5, then 6. The next number is 21."},
{q:"What comes next? 12, 24, 48, 96, ?",topic:"Logical Reasoning",o:["144","168","192","200"],a:2,e:"Each number is multiplied by 2. 96 × 2 = 192."},
{q:"Find the missing number: 5, 9, 17, 33, 65, ?",topic:"Logical Reasoning",o:["97","127","129","131"],a:2,e:"Each number is multiplied by 2 and 1 is subtracted. 65 × 2 - 1 = 129."},
{q:"Which number does not belong? 4, 9, 16, 25, 36, 48",topic:"Logical Reasoning",o:["16","25","36","48"],a:3,e:"The first five numbers are perfect squares. 48 is not."},
{q:"If 6 workers finish a job in 8 days, how many days will 12 workers need at the same rate?",topic:"Mathematics",o:["2","4","6","8"],a:1,e:"Doubling the workers halves the time. 8 ÷ 2 = 4 days."},

{q:"What is 35% of 400?",topic:"Mathematics",o:["120","130","140","150"],a:2,e:"400 × 0.35 = 140."},
{q:"Which letter comes next? B, E, I, N, T, ?",topic:"Logical Reasoning",o:["X","Y","Z","W"],a:2,e:"The letter gaps are +3, +4, +5, +6, then +7. T + 7 = A after wrapping? The alphabet position is 20 + 7 = 27, which wraps to A."},
{q:"Which word is the opposite of 'generous'?",topic:"English",o:["Kind","Selfish","Helpful","Friendly"],a:1,e:"Selfish means unwilling to give or share, opposite to generous."},
{q:"A number divided by 5 gives 14. What is the number?",topic:"Mathematics",o:["60","65","70","75"],a:2,e:"14 × 5 = 70."},
{q:"Which is the smallest prime number?",topic:"Mathematics",o:["0","1","2","3"],a:2,e:"2 is the smallest prime number and the only even prime."},
{q:"Complete the sequence: 10, 13, 19, 28, 40, ?",topic:"Logical Reasoning",o:["52","53","55","57"],a:2,e:"The differences are 3, 6, 9, 12, then 15. 40 + 15 = 55."},
{q:"If HAND is coded as IBOE, how is FOOT coded?",topic:"Logical Reasoning",o:["GPPU","GQPU","EPPS","HPPU"],a:0,e:"Each letter moves one position forward: F→G, O→P, O→P, T→U."},
{q:"A bus travels 240 km in 4 hours. What is its average speed?",topic:"Mathematics",o:["50 km/h","55 km/h","60 km/h","65 km/h"],a:2,e:"Speed = distance ÷ time = 240 ÷ 4 = 60 km/h."},
{q:"What is the value of 9² + 4²?",topic:"Mathematics",o:["81","97","105","121"],a:1,e:"9² + 4² = 81 + 16 = 97."},
{q:"Which shape has eight sides?",topic:"General Knowledge",o:["Hexagon","Heptagon","Octagon","Nonagon"],a:2,e:"An octagon has eight sides."},

{q:"If 3 notebooks cost 90 rupees, what is the cost of 8 notebooks?",topic:"Mathematics",o:["180","210","240","270"],a:2,e:"One notebook costs 30 rupees. Eight cost 240 rupees."},
{q:"Which number completes the pattern? 2, 7, 14, 23, 34, ?",topic:"Logical Reasoning",o:["45","47","49","51"],a:1,e:"The differences are 5, 7, 9, 11, then 13. 34 + 13 = 47."},
{q:"Which one is different? (Alternate version 3)",topic:"Logical Reasoning",o:["Mercury","Venus","Earth","Moon"],a:3,e:"The Moon is a natural satellite; the others are planets."},
{q:"What is the average of 15, 25, 35 and 45?",topic:"Mathematics",o:["25","30","35","40"],a:1,e:"The sum is 120. 120 ÷ 4 = 30."},
{q:"A person faces west and turns left. Which direction are they facing?",topic:"Logical Reasoning",o:["North","South","East","West"],a:1,e:"A left turn from west points south."},
{q:"What is 2/5 of 150? (Alternate version 1)",topic:"Mathematics",o:["50","55","60","75"],a:2,e:"150 × 2/5 = 60."},
{q:"Which number comes next? 3, 6, 11, 18, 27, ?",topic:"Logical Reasoning",o:["36","38","40","42"],a:1,e:"The differences are 3, 5, 7, 9, then 11. 27 + 11 = 38."},
{q:"Which word is closest in meaning to 'accurate'?",topic:"English",o:["Correct","Careless","Unclear","Doubtful"],a:0,e:"Accurate means correct or precise."},
{q:"If 20% of a number is 30, what is the number?",topic:"Mathematics",o:["100","120","150","180"],a:2,e:"30 ÷ 0.20 = 150."},
{q:"How many seconds are there in 5 minutes? (Alternate version 1)",topic:"Mathematics",o:["200","250","300","350"],a:2,e:"5 × 60 = 300 seconds."},

{q:"Which number is a perfect cube?",topic:"Mathematics",o:["36","49","64","81"],a:2,e:"64 = 4 × 4 × 4 = 4³."},
{q:"Complete the analogy: Eye is to See as Ear is to ____.",topic:"Logical Reasoning",o:["Speak","Hear","Touch","Smell"],a:1,e:"Eyes are used for seeing; ears are used for hearing."},
{q:"A shopkeeper sells an item for 900 rupees after giving a 10% discount. What was the original price?",topic:"Mathematics",o:["950","980","1000","1100"],a:2,e:"900 represents 90% of the original price. 900 ÷ 0.9 = 1000."},
{q:"Which number is divisible by 3?",topic:"Mathematics",o:["124","221","333","502"],a:2,e:"3 + 3 + 3 = 9, which is divisible by 3."},
{q:"What comes next? 100, 81, 64, 49, 36, ?",topic:"Logical Reasoning",o:["16","20","25","30"],a:2,e:"These are descending squares: 10², 9², 8², 7², 6², 5²."},
{q:"Which one is not a primary colour of light? (Alternate version 1)",topic:"Science",o:["Red","Green","Blue","Orange"],a:3,e:"The primary colours of light are red, green and blue."},
{q:"If A = 1, B = 2, and C = 3, what is the value of CAB?",topic:"Mathematics",o:["5","6","7","8"],a:1,e:"C + A + B = 3 + 1 + 2 = 6."},
{q:"A rectangle has an area of 72 cm² and a length of 9 cm. What is its width?",topic:"Mathematics",o:["6 cm","7 cm","8 cm","9 cm"],a:2,e:"Width = area ÷ length = 72 ÷ 9 = 8 cm."},
{q:"Which is the odd one out? (Alternate version 4)",topic:"Logical Reasoning",o:["January","June","September","Sunday"],a:3,e:"Sunday is a day of the week; the others are months."},
{q:"What is the next number? 1, 5, 14, 30, 55, ?",topic:"Mathematics",o:["81","91","95","105"],a:1,e:"The differences are 4, 9, 16, 25, then 36. 55 + 36 = 91."},

{q:"If 8 people complete a task in 15 days, how long will 4 people take at the same rate?",topic:"General Knowledge",o:["20 days","25 days","30 days","35 days"],a:2,e:"Half the workers need twice the time. 15 × 2 = 30 days."},
{q:"Which instrument measures humidity?",topic:"General Knowledge",o:["Barometer","Hygrometer","Thermometer","Ammeter"],a:1,e:"A hygrometer measures humidity in the air."},
{q:"What is the Roman numeral for 100? (Alternate version 1)",topic:"Mathematics",o:["L","C","D","M"],a:1,e:"C represents 100 in Roman numerals."},
{q:"Which number is the median of 8, 2, 10, 4, 6?",topic:"Mathematics",o:["4","6","8","10"],a:1,e:"Ordered values are 2, 4, 6, 8, 10. The middle value is 6."},
{q:"A tank contains 600 litres. If 15% is used, how much remains?",topic:"Mathematics",o:["480 L","490 L","510 L","520 L"],a:2,e:"15% of 600 is 90. Remaining water = 600 - 90 = 510 litres."},
{q:"Which word is the opposite of 'temporary'?",topic:"English",o:["Brief","Permanent","Short","Limited"],a:1,e:"Permanent means lasting or continuing indefinitely."},
{q:"Complete the series: 4, 12, 36, 108, ?",topic:"Logical Reasoning",o:["216","324","432","540"],a:1,e:"Each number is multiplied by 3. 108 × 3 = 324."},
{q:"Which number is missing? 6, 13, 27, 55, ?",topic:"General Knowledge",o:["99","101","109","111"],a:3,e:"Each number is multiplied by 2 and then 1 is added. 55 × 2 + 1 = 111."},
{q:"If a car travels 150 km using 10 litres of fuel, how far will it travel using 20 litres at the same rate?",topic:"Mathematics",o:["250 km","280 km","300 km","350 km"],a:2,e:"20 litres is double 10 litres, so the distance is 300 km."},
{q:"Which of the following is a mammal?",topic:"Science",o:["Shark","Frog","Dolphin","Crocodile"],a:2,e:"Dolphins are mammals because they breathe air and feed their young with milk."},

{q:"What is 125% of 80?",topic:"Mathematics",o:["80","90","100","120"],a:2,e:"80 × 1.25 = 100."},
{q:"Which letter is exactly in the middle of the English alphabet?",topic:"General Knowledge",o:["M","N","O","P"],a:1,e:"There are 26 letters; N is the 14th letter, just after the midpoint."},
{q:"A father is three times as old as his son. Their total age is 48. How old is the son?",topic:"General Knowledge",o:["10","12","14","16"],a:1,e:"Let the son's age be x. x + 3x = 48, so x = 12."},
{q:"Which number is not a factor of 36?",topic:"Mathematics",o:["4","6","9","8"],a:3,e:"36 cannot be divided evenly by 8."},
{q:"What is the next number? 2, 4, 8, 14, 22, ?",topic:"Mathematics",o:["30","31","32","34"],a:2,e:"The differences are 2, 4, 6, 8, then 10. 22 + 10 = 32."},
{q:"Which device is used to measure electric current?",topic:"Science",o:["Voltmeter","Ammeter","Thermometer","Barometer"],a:1,e:"An ammeter measures electric current."},
{q:"If 5 machines produce 100 items in 2 hours, how many items will 10 machines produce in 2 hours at the same rate?",topic:"Mathematics",o:["150","180","200","250"],a:2,e:"Doubling the machines doubles production: 100 × 2 = 200."},
{q:"Which number is both even and prime?",topic:"General Knowledge",o:["1","2","4","6"],a:1,e:"2 is the only even prime number."},
{q:"Complete the sequence: 15, 30, 60, 120, ?",topic:"Logical Reasoning",o:["180","200","220","240"],a:3,e:"Each number is doubled."},
{q:"Which word is closest in meaning to 'reluctant'?",topic:"English",o:["Unwilling","Excited","Certain","Cheerful"],a:0,e:"Reluctant means unwilling or hesitant."},

{q:"A square has an area of 121 cm². What is the length of one side?",topic:"Mathematics",o:["9 cm","10 cm","11 cm","12 cm"],a:2,e:"The square root of 121 is 11."},
{q:"If 3/8 of a number is 24, what is the number?",topic:"Mathematics",o:["48","56","64","72"],a:2,e:"24 × 8 ÷ 3 = 64."},
{q:"Which planet is known for its prominent ring system?",topic:"Science",o:["Mars","Venus","Saturn","Mercury"],a:2,e:"Saturn is famous for its extensive ring system."},
{q:"What is the next letter? C, F, J, O, ?",topic:"Mathematics",o:["S","T","U","V"],a:2,e:"The gaps are +3, +4, +5, then +6. O + 6 = U."},
{q:"If 40% of a class of 50 students are girls, how many are boys?",topic:"Mathematics",o:["20","25","30","35"],a:2,e:"Girls = 20, so boys = 50 - 20 = 30."},
{q:"Which one is different? (Alternate version 4)",topic:"Logical Reasoning",o:["Kilometre","Metre","Centimetre","Litre"],a:3,e:"Litre measures volume; the others measure length."},
{q:"What is the sum of the angles inside a triangle?",topic:"Mathematics",o:["90°","180°","270°","360°"],a:1,e:"The interior angles of a triangle add up to 180 degrees."},
{q:"Which number comes next? 14, 28, 56, 112, ?",topic:"Logical Reasoning",o:["196","210","224","240"],a:2,e:"Each number is multiplied by 2."},
{q:"If 4 pens cost 100 rupees, what is the cost of 10 pens?",topic:"Mathematics",o:["200","225","250","275"],a:2,e:"One pen costs 25 rupees. Ten pens cost 250 rupees."},
{q:"Which part of the human body is primarily responsible for pumping blood?",topic:"Science",o:["Liver","Heart","Kidney","Lung"],a:1,e:"The heart pumps blood throughout the body."},

{q:"What is 7/10 expressed as a percentage?",topic:"Mathematics",o:["7%","17%","70%","700%"],a:2,e:"7/10 × 100 = 70%."},
{q:"Which number is missing? 1, 4, 10, 19, 31, ?",topic:"General Knowledge",o:["42","44","46","48"],a:2,e:"The differences are 3, 6, 9, 12, then 15. 31 + 15 = 46."},
{q:"A person travels 90 km in 1.5 hours. What is the average speed?",topic:"Mathematics",o:["45 km/h","50 km/h","60 km/h","75 km/h"],a:2,e:"90 ÷ 1.5 = 60 km/h."},
{q:"Which is the opposite of 'increase'?",topic:"English",o:["Grow","Expand","Decrease","Improve"],a:2,e:"Decrease means to become smaller or less."},
{q:"How many sides do three pentagons have altogether?",topic:"Mathematics",o:["12","15","18","20"],a:1,e:"Each pentagon has 5 sides. Three have 15 sides altogether."},
{q:"What is the value of 1000 ÷ 25?",topic:"Mathematics",o:["20","30","40","50"],a:2,e:"1000 ÷ 25 = 40."},
{q:"Which blood component is primarily responsible for clot formation?",topic:"Laboratory Knowledge",o:["Red blood cells","Platelets","Lymphocytes","Plasma water"],a:1,e:"Platelets help form the initial plug during blood clotting."},
{q:"Which specimen is commonly used for a routine complete blood count?",topic:"Laboratory Knowledge",o:["EDTA blood","Plain urine","Sputum","Saliva"],a:0,e:"EDTA blood is commonly used for CBC testing."},
{q:"Which organ produces insulin? (Alternate version 1)",topic:"Science",o:["Liver","Pancreas","Kidney","Spleen"],a:1,e:"Insulin is produced by beta cells in the pancreas."},
{q:"Which test is commonly used to assess long-term average blood glucose?",topic:"Laboratory Knowledge",o:["ESR","HbA1c","PT","ALT"],a:1,e:"HbA1c reflects average blood glucose over approximately 2–3 months."},

{q:"Which laboratory instrument is used to separate components by spinning?",topic:"Laboratory Knowledge",o:["Incubator","Centrifuge","Microscope","Autoclave"],a:1,e:"A centrifuge separates components using centrifugal force."},
{q:"Which blood cells primarily transport oxygen?",topic:"Laboratory Knowledge",o:["Platelets","Red blood cells","Lymphocytes","Monocytes"],a:1,e:"Red blood cells contain haemoglobin, which carries oxygen."},
{q:"Which stain is commonly used for a peripheral blood smear?",topic:"Laboratory Knowledge",o:["Gram stain","Leishman stain","India ink","Ziehl-Neelsen stain"],a:1,e:"Leishman stain is commonly used for peripheral blood film examination."},
{q:"Which anticoagulant is commonly used for PT and APTT testing?",topic:"Laboratory Knowledge",o:["EDTA","Sodium citrate","Fluoride","Plain tube"],a:1,e:"Sodium citrate is commonly used for coagulation testing."},
{q:"What does RBC stand for?",topic:"Laboratory Knowledge",o:["Red Blood Cell","Rapid Blood Count","Reticulocyte Blood Count","Red Body Component"],a:0,e:"RBC stands for Red Blood Cell."},
{q:"Which instrument measures the acidity or alkalinity of a solution?",topic:"Science",o:["pH meter","Barometer","Ammeter","Caliper"],a:0,e:"A pH meter measures the pH of a solution."},
{q:"Which organ primarily filters blood to produce urine?",topic:"Science",o:["Heart","Kidney","Lung","Stomach"],a:1,e:"The kidneys filter blood and produce urine."},
{q:"Which vitamin is essential for normal blood clotting?",topic:"Science",o:["Vitamin A","Vitamin B12","Vitamin C","Vitamin K"],a:3,e:"Vitamin K is required for the production of several clotting factors."},
{q:"Which gas is mainly absorbed by plants during photosynthesis?",topic:"Science",o:["Oxygen","Carbon dioxide","Nitrogen","Hydrogen"],a:1,e:"Plants use carbon dioxide during photosynthesis."},
{q:"What is the normal approximate arterial blood pH range?",topic:"Science",o:["6.5–6.9","7.00–7.20","7.35–7.45","7.60–7.80"],a:2,e:"Normal arterial blood pH is approximately 7.35–7.45."},

// ======================================
//  500 QUESTIONS  COMPLETE HERE.
// ======================================

{q:"Which test is commonly used to assess kidney filtration function?",topic:"Laboratory Knowledge",o:["Serum creatinine","Serum amylase","Troponin","Bilirubin"],a:0,e:"Serum creatinine is commonly used to estimate kidney function through eGFR."},
{q:"Which microorganism causes malaria?",topic:"Science",o:["Salmonella","Plasmodium","Staphylococcus","Candida"],a:1,e:"Malaria is caused by parasites belonging to the genus Plasmodium."},
{q:"Which laboratory device measures light absorbance?",topic:"Laboratory Knowledge",o:["Spectrophotometer","Centrifuge","Water bath","Hot plate"],a:0,e:"A spectrophotometer measures the absorbance of light by a sample."},
{q:"Which white blood cells are often increased in allergic conditions?",topic:"Laboratory Knowledge",o:["Eosinophils","Red blood cells","Platelets","Reticulocytes"],a:0,e:"Eosinophils may increase in certain allergic conditions and parasitic infections."},
{q:"Which test is commonly used to assess heart muscle injury?",topic:"Laboratory Knowledge",o:["Troponin","Urea","Albumin","Amylase"],a:0,e:"Cardiac troponin is an important marker of myocardial injury."},
{q:"What does CSF stand for?",topic:"Laboratory Knowledge",o:["Cell Serum Fraction","Cerebrospinal Fluid","Central Sample Factor","Clotting Serum Fluid"],a:1,e:"CSF stands for cerebrospinal fluid."},
{q:"What is 10 + 9?",topic:"Mathematics",o:["24", "19", "16", "21"],a:1,e:"10 + 9 = 19."},
{q:"What is 13 + 16?",topic:"Mathematics",o:["31", "26", "34", "29"],a:3,e:"13 + 16 = 29."},
{q:"What is 16 + 4?",topic:"Mathematics",o:["25", "20", "17", "22"],a:1,e:"16 + 4 = 20."},
{q:"What is 19 + 11?",topic:"Mathematics",o:["27", "30", "35", "32"],a:1,e:"19 + 11 = 30."},

{q:"What is 22 + 18?",topic:"Mathematics",o:["40", "42", "45", "37"],a:0,e:"22 + 18 = 40."},
{q:"What is 25 + 6?",topic:"Mathematics",o:["36", "28", "33", "31"],a:3,e:"25 + 6 = 31."},
{q:"What is 28 + 13?",topic:"Mathematics",o:["46", "43", "41", "38"],a:2,e:"28 + 13 = 41."},
{q:"What is 31 + 20?",topic:"Mathematics",o:["51", "48", "56", "53"],a:0,e:"31 + 20 = 51."},
{q:"What is 34 + 8?",topic:"Mathematics",o:["42", "44", "39", "47"],a:0,e:"34 + 8 = 42."},
{q:"What is 37 + 15?",topic:"Mathematics",o:["57", "49", "54", "52"],a:3,e:"37 + 15 = 52."},
{q:"What is 40 + 3?",topic:"Mathematics",o:["43", "45", "40", "48"],a:0,e:"40 + 3 = 43."},
{q:"What is 43 + 10?",topic:"Mathematics",o:["53", "50", "55", "58"],a:0,e:"43 + 10 = 53."},
{q:"What is 46 + 17?",topic:"Mathematics",o:["68", "63", "65", "60"],a:1,e:"46 + 17 = 63."},
{q:"What is 49 + 5?",topic:"Mathematics",o:["56", "59", "51", "54"],a:3,e:"49 + 5 = 54."},

{q:"What is 52 + 12?",topic:"Mathematics",o:["69", "61", "64", "66"],a:2,e:"52 + 12 = 64."},
{q:"What is 55 + 19?",topic:"Mathematics",o:["74", "79", "76", "71"],a:0,e:"55 + 19 = 74."},
{q:"What is 58 + 7?",topic:"Mathematics",o:["65", "62", "67", "70"],a:0,e:"58 + 7 = 65."},
{q:"What is 61 + 14?",topic:"Mathematics",o:["72", "80", "75", "77"],a:2,e:"61 + 14 = 75."},
{q:"What is 64 + 2?",topic:"Mathematics",o:["68", "71", "63", "66"],a:3,e:"64 + 2 = 66."},
{q:"What is 67 + 9?",topic:"Mathematics",o:["73", "76", "81", "78"],a:1,e:"67 + 9 = 76."},
{q:"What is 70 + 16?",topic:"Mathematics",o:["86", "83", "91", "88"],a:0,e:"70 + 16 = 86."},
{q:"What is 73 + 4?",topic:"Mathematics",o:["82", "74", "77", "79"],a:2,e:"73 + 4 = 77."},
{q:"What is 76 + 11?",topic:"Mathematics",o:["89", "92", "87", "84"],a:2,e:"76 + 11 = 87."},
{q:"What is 79 + 18?",topic:"Mathematics",o:["99", "97", "94", "102"],a:1,e:"79 + 18 = 97."},

{q:"What is 82 + 6?",topic:"Mathematics",o:["90", "85", "88", "93"],a:2,e:"82 + 6 = 88."},
{q:"What is 85 + 13?",topic:"Mathematics",o:["103", "98", "95", "100"],a:1,e:"85 + 13 = 98."},
{q:"What is 88 + 20?",topic:"Mathematics",o:["108", "110", "105", "113"],a:0,e:"88 + 20 = 108."},
{q:"What is 91 + 8?",topic:"Mathematics",o:["101", "104", "96", "99"],a:3,e:"91 + 8 = 99."},
{q:"What is 94 + 15?",topic:"Mathematics",o:["114", "106", "111", "109"],a:3,e:"94 + 15 = 109."},
{q:"What is 97 + 3?",topic:"Mathematics",o:["102", "100", "105", "97"],a:1,e:"97 + 3 = 100."},
{q:"What is 100 + 10?",topic:"Mathematics",o:["107", "115", "112", "110"],a:3,e:"100 + 10 = 110."},
{q:"What is 103 + 17?",topic:"Mathematics",o:["122", "117", "125", "120"],a:3,e:"103 + 17 = 120."},
{q:"What is 106 + 5?",topic:"Mathematics",o:["116", "111", "108", "113"],a:1,e:"106 + 5 = 111."},
{q:"What is 109 + 12?",topic:"Mathematics",o:["123", "121", "126", "118"],a:1,e:"109 + 12 = 121."},

{q:"What is 112 + 19?",topic:"Mathematics",o:["136", "133", "131", "128"],a:2,e:"112 + 19 = 131."},
{q:"What is 115 + 7?",topic:"Mathematics",o:["124", "127", "122", "119"],a:2,e:"115 + 7 = 122."},
{q:"What is 118 + 14?",topic:"Mathematics",o:["134", "137", "129", "132"],a:3,e:"118 + 14 = 132."},
{q:"What is 121 + 2?",topic:"Mathematics",o:["120", "123", "125", "128"],a:1,e:"121 + 2 = 123."},
{q:"What is 124 + 9?",topic:"Mathematics",o:["133", "130", "138", "135"],a:0,e:"124 + 9 = 133."},
{q:"What is 127 + 16?",topic:"Mathematics",o:["145", "143", "140", "148"],a:1,e:"127 + 16 = 143."},
{q:"What is 130 + 4?",topic:"Mathematics",o:["131", "134", "136", "139"],a:1,e:"130 + 4 = 134."},
{q:"What is 133 + 11?",topic:"Mathematics",o:["141", "146", "149", "144"],a:3,e:"133 + 11 = 144."},
{q:"What is 136 + 18?",topic:"Mathematics",o:["151", "159", "156", "154"],a:3,e:"136 + 18 = 154."},
{q:"What is 139 + 6?",topic:"Mathematics",o:["147", "145", "142", "150"],a:1,e:"139 + 6 = 145."},

{q:"What is 142 + 13?",topic:"Mathematics",o:["155", "160", "157", "152"],a:0,e:"142 + 13 = 155."},
{q:"What is 145 + 20?",topic:"Mathematics",o:["162", "170", "167", "165"],a:3,e:"145 + 20 = 165."},
{q:"What is 148 + 8?",topic:"Mathematics",o:["161", "158", "156", "153"],a:2,e:"148 + 8 = 156."},
{q:"What is 151 + 15?",topic:"Mathematics",o:["171", "168", "166", "163"],a:2,e:"151 + 15 = 166."},
{q:"What is 154 + 3?",topic:"Mathematics",o:["162", "154", "159", "157"],a:3,e:"154 + 3 = 157."},
{q:"What is 157 + 10?",topic:"Mathematics",o:["167", "164", "169", "172"],a:0,e:"157 + 10 = 167."},
{q:"What is 160 + 17?",topic:"Mathematics",o:["182", "177", "174", "179"],a:1,e:"160 + 17 = 177."},
{q:"What is 163 + 5?",topic:"Mathematics",o:["173", "170", "168", "165"],a:2,e:"163 + 5 = 168."},
{q:"What is 166 + 12?",topic:"Mathematics",o:["178", "175", "183", "180"],a:0,e:"166 + 12 = 178."},
{q:"What is 169 + 19?",topic:"Mathematics",o:["188", "185", "193", "190"],a:0,e:"169 + 19 = 188."},

{q:"What is 172 + 7?",topic:"Mathematics",o:["181", "176", "184", "179"],a:3,e:"172 + 7 = 179."},
{q:"What is 175 + 14?",topic:"Mathematics",o:["194", "186", "191", "189"],a:3,e:"175 + 14 = 189."},
{q:"What is 178 + 2?",topic:"Mathematics",o:["177", "185", "182", "180"],a:3,e:"178 + 2 = 180."},
{q:"What is 181 + 9?",topic:"Mathematics",o:["195", "187", "190", "192"],a:2,e:"181 + 9 = 190."},
{q:"What is 184 + 16?",topic:"Mathematics",o:["197", "205", "200", "202"],a:2,e:"184 + 16 = 200."},
{q:"What is 187 + 4?",topic:"Mathematics",o:["196", "191", "193", "188"],a:1,e:"187 + 4 = 191."},
{q:"What is 190 + 11?",topic:"Mathematics",o:["203", "198", "201", "206"],a:2,e:"190 + 11 = 201."},
{q:"What is 193 + 18?",topic:"Mathematics",o:["216", "208", "211", "213"],a:2,e:"193 + 18 = 211."},
{q:"What is 196 + 6?",topic:"Mathematics",o:["202", "199", "204", "207"],a:0,e:"196 + 6 = 202."},
{q:"What is 199 + 13?",topic:"Mathematics",o:["209", "214", "212", "217"],a:2,e:"199 + 13 = 212."},

{q:"What is 202 + 20?",topic:"Mathematics",o:["222", "219", "224", "227"],a:0,e:"202 + 20 = 222."},
{q:"What is 205 + 8?",topic:"Mathematics",o:["218", "210", "215", "213"],a:3,e:"205 + 8 = 213."},
{q:"What is 208 + 15?",topic:"Mathematics",o:["220", "225", "228", "223"],a:3,e:"208 + 15 = 223."},
{q:"What is 211 + 3?",topic:"Mathematics",o:["216", "214", "211", "219"],a:1,e:"211 + 3 = 214."},
{q:"What is 214 + 10?",topic:"Mathematics",o:["226", "221", "229", "224"],a:3,e:"214 + 10 = 224."},
{q:"What is 217 + 17?",topic:"Mathematics",o:["239", "231", "236", "234"],a:3,e:"217 + 17 = 234."},
{q:"What is 220 + 5?",topic:"Mathematics",o:["227", "225", "230", "222"],a:1,e:"220 + 5 = 225."},
{q:"What is 223 + 12?",topic:"Mathematics",o:["237", "240", "232", "235"],a:3,e:"223 + 12 = 235."},
{q:"What is 226 + 19?",topic:"Mathematics",o:["250", "247", "245", "242"],a:2,e:"226 + 19 = 245."},
{q:"What is 229 + 7?",topic:"Mathematics",o:["233", "241", "238", "236"],a:3,e:"229 + 7 = 236."},

{q:"What is 232 + 14?",topic:"Mathematics",o:["246", "248", "243", "251"],a:0,e:"232 + 14 = 246."},
{q:"Calculate 124 − 18.",topic:"Mathematics",o:["106", "116", "101", "110"],a:0,e:"124 − 18 = 106."},
{q:"Calculate 128 − 23.",topic:"Mathematics",o:["105", "115", "100", "109"],a:0,e:"128 − 23 = 105."},
{q:"Calculate 132 − 28.",topic:"Mathematics",o:["108", "104", "99", "114"],a:1,e:"132 − 28 = 104."},
{q:"Calculate 136 − 33.",topic:"Mathematics",o:["107", "98", "113", "103"],a:3,e:"136 − 33 = 103."},
{q:"Calculate 140 − 38.",topic:"Mathematics",o:["106", "102", "112", "97"],a:1,e:"140 − 38 = 102."},
{q:"Calculate 144 − 43.",topic:"Mathematics",o:["96", "105", "101", "111"],a:2,e:"144 − 43 = 101."},
{q:"Calculate 148 − 48.",topic:"Mathematics",o:["100", "110", "95", "104"],a:0,e:"148 − 48 = 100."},
{q:"Calculate 152 − 16.",topic:"Mathematics",o:["146", "136", "131", "140"],a:1,e:"152 − 16 = 136."},
{q:"Calculate 156 − 21.",topic:"Mathematics",o:["145", "139", "135", "130"],a:2,e:"156 − 21 = 135."},

{q:"Calculate 160 − 26.",topic:"Mathematics",o:["138", "134", "129", "144"],a:1,e:"160 − 26 = 134."},
{q:"Calculate 164 − 31.",topic:"Mathematics",o:["133", "128", "143", "137"],a:0,e:"164 − 31 = 133."},
{q:"Calculate 168 − 36.",topic:"Mathematics",o:["132", "136", "127", "142"],a:0,e:"168 − 36 = 132."},
{q:"Calculate 172 − 41.",topic:"Mathematics",o:["141", "135", "126", "131"],a:3,e:"172 − 41 = 131."},
{q:"Calculate 176 − 46.",topic:"Mathematics",o:["140", "130", "125", "134"],a:1,e:"176 − 46 = 130."},
{q:"Calculate 180 − 14.",topic:"Mathematics",o:["170", "176", "166", "161"],a:2,e:"180 − 14 = 166."},
{q:"Calculate 184 − 19.",topic:"Mathematics",o:["169", "175", "165", "160"],a:2,e:"184 − 19 = 165."},
{q:"Calculate 188 − 24.",topic:"Mathematics",o:["174", "159", "164", "168"],a:2,e:"188 − 24 = 164."},
{q:"Calculate 192 − 29.",topic:"Mathematics",o:["158", "163", "173", "167"],a:1,e:"192 − 29 = 163."},
{q:"Calculate 196 − 34.",topic:"Mathematics",o:["172", "166", "162", "157"],a:2,e:"196 − 34 = 162."},

// ======================================
//  600 QUESTIONS  COMPLETE HERE.
// ======================================

{q:"Calculate 200 − 39.",topic:"Mathematics",o:["156", "171", "161", "165"],a:2,e:"200 − 39 = 161."},
{q:"Calculate 204 − 44.",topic:"Mathematics",o:["155", "164", "170", "160"],a:3,e:"204 − 44 = 160."},
{q:"Calculate 208 − 49.",topic:"Mathematics",o:["159", "169", "154", "163"],a:0,e:"208 − 49 = 159."},
{q:"Calculate 212 − 17.",topic:"Mathematics",o:["190", "205", "199", "195"],a:3,e:"212 − 17 = 195."},
{q:"Calculate 216 − 22.",topic:"Mathematics",o:["198", "194", "204", "189"],a:1,e:"216 − 22 = 194."},
{q:"Calculate 220 − 27.",topic:"Mathematics",o:["188", "203", "193", "197"],a:2,e:"220 − 27 = 193."},
{q:"Calculate 224 − 32.",topic:"Mathematics",o:["202", "196", "187", "192"],a:3,e:"224 − 32 = 192."},
{q:"Calculate 228 − 37.",topic:"Mathematics",o:["195", "201", "186", "191"],a:3,e:"228 − 37 = 191."},
{q:"Calculate 232 − 42.",topic:"Mathematics",o:["190", "185", "200", "194"],a:0,e:"232 − 42 = 190."},
{q:"Calculate 236 − 47.",topic:"Mathematics",o:["199", "193", "189", "184"],a:2,e:"236 − 47 = 189."},

{q:"Calculate 240 − 15.",topic:"Mathematics",o:["225", "220", "229", "235"],a:0,e:"240 − 15 = 225."},
{q:"Calculate 244 − 20.",topic:"Mathematics",o:["234", "224", "228", "219"],a:1,e:"244 − 20 = 224."},
{q:"Calculate 248 − 25.",topic:"Mathematics",o:["218", "227", "223", "233"],a:2,e:"248 − 25 = 223."},
{q:"Calculate 252 − 30.",topic:"Mathematics",o:["222", "217", "226", "232"],a:0,e:"252 − 30 = 222."},
{q:"Calculate 256 − 35.",topic:"Mathematics",o:["225", "221", "216", "231"],a:1,e:"256 − 35 = 221."},
{q:"Calculate 260 − 40.",topic:"Mathematics",o:["220", "224", "230", "215"],a:0,e:"260 − 40 = 220."},
{q:"Calculate 264 − 45.",topic:"Mathematics",o:["223", "219", "214", "229"],a:1,e:"264 − 45 = 219."},
{q:"Calculate 268 − 13.",topic:"Mathematics",o:["250", "259", "265", "255"],a:3,e:"268 − 13 = 255."},
{q:"Calculate 272 − 18.",topic:"Mathematics",o:["254", "249", "264", "258"],a:0,e:"272 − 18 = 254."},
{q:"Calculate 276 − 23.",topic:"Mathematics",o:["263", "257", "248", "253"],a:3,e:"276 − 23 = 253."},

{q:"Calculate 280 − 28.",topic:"Mathematics",o:["247", "256", "262", "252"],a:3,e:"280 − 28 = 252."},
{q:"Calculate 284 − 33.",topic:"Mathematics",o:["261", "255", "246", "251"],a:3,e:"284 − 33 = 251."},
{q:"Calculate 288 − 38.",topic:"Mathematics",o:["245", "254", "250", "260"],a:2,e:"288 − 38 = 250."},
{q:"Calculate 292 − 43.",topic:"Mathematics",o:["259", "244", "249", "253"],a:2,e:"292 − 43 = 249."},
{q:"Calculate 296 − 48.",topic:"Mathematics",o:["243", "252", "248", "258"],a:2,e:"296 − 48 = 248."},
{q:"Calculate 300 − 16.",topic:"Mathematics",o:["288", "284", "279", "294"],a:1,e:"300 − 16 = 284."},
{q:"Calculate 304 − 21.",topic:"Mathematics",o:["278", "293", "283", "287"],a:2,e:"304 − 21 = 283."},
{q:"Calculate 308 − 26.",topic:"Mathematics",o:["282", "277", "292", "286"],a:0,e:"308 − 26 = 282."},
{q:"Calculate 312 − 31.",topic:"Mathematics",o:["285", "281", "276", "291"],a:1,e:"312 − 31 = 281."},
{q:"Calculate 316 − 36.",topic:"Mathematics",o:["275", "284", "290", "280"],a:3,e:"316 − 36 = 280."},

{q:"Calculate 320 − 41.",topic:"Mathematics",o:["289", "279", "283", "274"],a:1,e:"320 − 41 = 279."},
{q:"Calculate 324 − 46.",topic:"Mathematics",o:["282", "278", "273", "288"],a:1,e:"324 − 46 = 278."},
{q:"Calculate 328 − 14.",topic:"Mathematics",o:["318", "314", "309", "324"],a:1,e:"328 − 14 = 314."},
{q:"Calculate 332 − 19.",topic:"Mathematics",o:["317", "308", "313", "323"],a:2,e:"332 − 19 = 313."},
{q:"Calculate 336 − 24.",topic:"Mathematics",o:["312", "307", "322", "316"],a:0,e:"336 − 24 = 312."},
{q:"Calculate 340 − 29.",topic:"Mathematics",o:["311", "315", "321", "306"],a:0,e:"340 − 29 = 311."},
{q:"Calculate 344 − 34.",topic:"Mathematics",o:["305", "310", "314", "320"],a:1,e:"344 − 34 = 310."},
{q:"Calculate 348 − 39.",topic:"Mathematics",o:["313", "304", "309", "319"],a:2,e:"348 − 39 = 309."},
{q:"Calculate 352 − 44.",topic:"Mathematics",o:["318", "303", "308", "312"],a:2,e:"352 − 44 = 308."},
{q:"Calculate 356 − 49.",topic:"Mathematics",o:["302", "311", "307", "317"],a:2,e:"356 − 49 = 307."},

{q:"Calculate 360 − 17.",topic:"Mathematics",o:["353", "347", "338", "343"],a:3,e:"360 − 17 = 343."},
{q:"Calculate 364 − 22.",topic:"Mathematics",o:["352", "342", "337", "346"],a:1,e:"364 − 22 = 342."},
{q:"Calculate 368 − 27.",topic:"Mathematics",o:["345", "351", "336", "341"],a:3,e:"368 − 27 = 341."},
{q:"Calculate 372 − 32.",topic:"Mathematics",o:["344", "340", "335", "350"],a:1,e:"372 − 32 = 340."},
{q:"Calculate 376 − 37.",topic:"Mathematics",o:["349", "343", "334", "339"],a:3,e:"376 − 37 = 339."},
{q:"Calculate 380 − 42.",topic:"Mathematics",o:["333", "342", "348", "338"],a:3,e:"380 − 42 = 338."},
{q:"Calculate 384 − 47.",topic:"Mathematics",o:["337", "347", "332", "341"],a:0,e:"384 − 47 = 337."},
{q:"Calculate 388 − 15.",topic:"Mathematics",o:["368", "383", "373", "377"],a:2,e:"388 − 15 = 373."},
{q:"Calculate 392 − 20.",topic:"Mathematics",o:["382", "376", "367", "372"],a:3,e:"392 − 20 = 372."},
{q:"Calculate 396 − 25.",topic:"Mathematics",o:["375", "371", "381", "366"],a:1,e:"396 − 25 = 371."},

{q:"Calculate 400 − 30.",topic:"Mathematics",o:["370", "374", "380", "365"],a:0,e:"400 − 30 = 370."},
{q:"Calculate 404 − 35.",topic:"Mathematics",o:["364", "369", "373", "379"],a:1,e:"404 − 35 = 369."},
{q:"Calculate 408 − 40.",topic:"Mathematics",o:["372", "378", "368", "363"],a:2,e:"408 − 40 = 368."},
{q:"Calculate 412 − 45.",topic:"Mathematics",o:["367", "377", "371", "362"],a:0,e:"412 − 45 = 367."},
{q:"Calculate 416 − 13.",topic:"Mathematics",o:["398", "413", "407", "403"],a:3,e:"416 − 13 = 403."},
{q:"Calculate 420 − 18.",topic:"Mathematics",o:["406", "397", "402", "412"],a:2,e:"420 − 18 = 402."},
{q:"What is 4 × 7?",topic:"Mathematics",o:["38", "32", "35", "28"],a:3,e:"4 × 7 = 28."},
{q:"What is 5 × 10?",topic:"Mathematics",o:["50", "51", "49", "52"],a:0,e:"5 × 10 = 50."},
{q:"What is 6 × 13?",topic:"Mathematics",o:["91", "84", "88", "78"],a:3,e:"6 × 13 = 78."},
{q:"What is 7 × 16?",topic:"Mathematics",o:["119", "128", "112", "122"],a:2,e:"7 × 16 = 112."},

{q:"What is 8 × 6?",topic:"Mathematics",o:["54", "48", "56", "58"],a:1,e:"8 × 6 = 48."},
{q:"What is 9 × 9?",topic:"Mathematics",o:["81", "82", "80", "83"],a:0,e:"9 × 9 = 81."},
{q:"What is 10 × 12?",topic:"Mathematics",o:["120", "121", "119", "122"],a:0,e:"10 × 12 = 120."},
{q:"What is 11 × 15?",topic:"Mathematics",o:["176", "165", "175", "180"],a:1,e:"11 × 15 = 165."},
{q:"What is 12 × 5?",topic:"Mathematics",o:["65", "72", "70", "60"],a:3,e:"12 × 5 = 60."},
{q:"What is 13 × 8?",topic:"Mathematics",o:["112", "117", "104", "114"],a:2,e:"13 × 8 = 104."},
{q:"What is 14 × 11?",topic:"Mathematics",o:["168", "154", "164", "165"],a:1,e:"14 × 11 = 154."},
{q:"What is 15 × 14?",topic:"Mathematics",o:["225", "210", "224", "220"],a:1,e:"15 × 14 = 210."},
{q:"What is 16 × 4?",topic:"Mathematics",o:["68", "64", "74", "80"],a:1,e:"16 × 4 = 64."},
{q:"What is 17 × 7?",topic:"Mathematics",o:["119", "129", "136", "126"],a:0,e:"17 × 7 = 119."},

{q:"What is 18 × 10?",topic:"Mathematics",o:["180", "181", "179", "182"],a:0,e:"18 × 10 = 180."},
{q:"What is 19 × 13?",topic:"Mathematics",o:["257", "247", "260", "266"],a:1,e:"19 × 13 = 247."},
{q:"What is 3 × 16?",topic:"Mathematics",o:["51", "58", "48", "64"],a:2,e:"3 × 16 = 48."},
{q:"What is 4 × 6?",topic:"Mathematics",o:["28", "34", "24", "30"],a:2,e:"4 × 6 = 24."},
{q:"What is 5 × 9?",topic:"Mathematics",o:["50", "45", "55", "54"],a:1,e:"5 × 9 = 45."},
{q:"What is 6 × 12?",topic:"Mathematics",o:["82", "72", "84", "78"],a:1,e:"6 × 12 = 72."},
{q:"What is 7 × 15?",topic:"Mathematics",o:["120", "105", "115", "112"],a:1,e:"7 × 15 = 105."},
{q:"What is 8 × 5?",topic:"Mathematics",o:["45", "48", "50", "40"],a:3,e:"8 × 5 = 40."},
{q:"What is 9 × 8?",topic:"Mathematics",o:["72", "82", "81", "80"],a:0,e:"9 × 8 = 72."},
{q:"What is 10 × 11?",topic:"Mathematics",o:["110", "111", "109", "112"],a:0,e:"10 × 11 = 110."},

{q:"What is 11 × 14?",topic:"Mathematics",o:["164", "168", "154", "165"],a:2,e:"11 × 14 = 154."},
{q:"What is 12 × 4?",topic:"Mathematics",o:["60", "52", "48", "58"],a:2,e:"12 × 4 = 48."},
{q:"What is 13 × 7?",topic:"Mathematics",o:["91", "104", "98", "101"],a:0,e:"13 × 7 = 91."},
{q:"What is 14 × 10?",topic:"Mathematics",o:["140", "141", "139", "142"],a:0,e:"14 × 10 = 140."},
{q:"What is 15 × 13?",topic:"Mathematics",o:["208", "205", "195", "210"],a:2,e:"15 × 13 = 195."},
{q:"What is 16 × 16?",topic:"Mathematics",o:["256", "257", "255", "258"],a:0,e:"16 × 16 = 256."},
{q:"What is 17 × 6?",topic:"Mathematics",o:["108", "119", "112", "102"],a:3,e:"17 × 6 = 102."},
{q:"What is 18 × 9?",topic:"Mathematics",o:["180", "172", "162", "171"],a:2,e:"18 × 9 = 162."},
{q:"What is 19 × 12?",topic:"Mathematics",o:["238", "228", "240", "247"],a:1,e:"19 × 12 = 228."},
{q:"What is 3 × 15?",topic:"Mathematics",o:["55", "45", "48", "60"],a:1,e:"3 × 15 = 45."},
{q:"What is 4 × 5?",topic:"Mathematics",o:["24", "20", "30", "25"],a:1,e:"4 × 5 = 20."},

{q:"What is 5 × 8?",topic:"Mathematics",o:["40", "50", "45", "48"],a:0,e:"5 × 8 = 40."},
{q:"What is 6 × 11?",topic:"Mathematics",o:["72", "77", "66", "76"],a:2,e:"6 × 11 = 66."},
{q:"What is 7 × 14?",topic:"Mathematics",o:["108", "105", "98", "112"],a:2,e:"7 × 14 = 98."},
{q:"What is 8 × 4?",topic:"Mathematics",o:["40", "36", "42", "32"],a:3,e:"8 × 4 = 32."},
{q:"What is 9 × 7?",topic:"Mathematics",o:["70", "72", "73", "63"],a:3,e:"9 × 7 = 63."},
{q:"What is 10 × 10?",topic:"Mathematics",o:["100", "101", "99", "102"],a:0,e:"10 × 10 = 100."},
{q:"What is 11 × 13?",topic:"Mathematics",o:["153", "154", "143", "156"],a:2,e:"11 × 13 = 143."},
{q:"What is 12 × 16?",topic:"Mathematics",o:["202", "192", "204", "208"],a:1,e:"12 × 16 = 192."},
{q:"What is 13 × 6?",topic:"Mathematics",o:["78", "84", "91", "88"],a:0,e:"13 × 6 = 78."},
{q:"What is 14 × 9?",topic:"Mathematics",o:["126", "135", "136", "140"],a:0,e:"14 × 9 = 126."},

// ======================================
//  700 QUESTIONS  COMPLETE HERE.
// ======================================

{q:"What is 15 × 12?",topic:"Mathematics",o:["190", "195", "192", "180"],a:3,e:"15 × 12 = 180."},
{q:"What is 16 × 15?",topic:"Mathematics",o:["255", "240", "256", "250"],a:1,e:"16 × 15 = 240."},
{q:"What is 17 × 5?",topic:"Mathematics",o:["85", "102", "90", "95"],a:0,e:"17 × 5 = 85."},
{q:"What is 18 × 8?",topic:"Mathematics",o:["144", "162", "154", "152"],a:0,e:"18 × 8 = 144."},
{q:"What is 19 × 11?",topic:"Mathematics",o:["220", "209", "228", "219"],a:1,e:"19 × 11 = 209."},
{q:"What is 3 × 14?",topic:"Mathematics",o:["42", "45", "56", "52"],a:0,e:"3 × 14 = 42."},
{q:"What is 4 × 4?",topic:"Mathematics",o:["16", "17", "15", "18"],a:0,e:"4 × 4 = 16."},
{q:"What is 5 × 7?",topic:"Mathematics",o:["42", "35", "40", "45"],a:1,e:"5 × 7 = 35."},
{q:"What is 6 × 10?",topic:"Mathematics",o:["60", "61", "59", "62"],a:0,e:"6 × 10 = 60."},
{q:"What is 7 × 13?",topic:"Mathematics",o:["104", "101", "98", "91"],a:3,e:"7 × 13 = 91."},

{q:"What is 8 × 16?",topic:"Mathematics",o:["128", "144", "136", "138"],a:0,e:"8 × 16 = 128."},
{q:"What is 9 × 6?",topic:"Mathematics",o:["64", "54", "63", "60"],a:1,e:"9 × 6 = 54."},
{q:"What is 10 × 9?",topic:"Mathematics",o:["90", "91", "89", "92"],a:0,e:"10 × 9 = 90."},
{q:"What is 11 × 12?",topic:"Mathematics",o:["143", "142", "144", "132"],a:3,e:"11 × 12 = 132."},
{q:"What is 12 × 15?",topic:"Mathematics",o:["195", "190", "180", "192"],a:2,e:"12 × 15 = 180."},
{q:"What is 13 × 5?",topic:"Mathematics",o:["78", "70", "65", "75"],a:2,e:"13 × 5 = 65."},
{q:"What is 14 × 8?",topic:"Mathematics",o:["112", "126", "122", "120"],a:0,e:"14 × 8 = 112."},
{q:"What is 15 × 11?",topic:"Mathematics",o:["165", "176", "180", "175"],a:0,e:"15 × 11 = 165."},
{q:"What is 16 × 14?",topic:"Mathematics",o:["240", "224", "234", "238"],a:1,e:"16 × 14 = 224."},
{q:"What is 17 × 4?",topic:"Mathematics",o:["68", "72", "85", "78"],a:0,e:"17 × 4 = 68."},
{q:"What is 18 × 7?",topic:"Mathematics",o:["144", "136", "133", "126"],a:3,e:"18 × 7 = 126."},

{q:"What is 19 × 10?",topic:"Mathematics",o:["190", "191", "189", "192"],a:0,e:"19 × 10 = 190."},
{q:"What is 3 × 13?",topic:"Mathematics",o:["49", "42", "39", "52"],a:2,e:"3 × 13 = 39."},
{q:"What is 4 × 16?",topic:"Mathematics",o:["68", "80", "74", "64"],a:3,e:"4 × 16 = 64."},
{q:"What is 5 × 6?",topic:"Mathematics",o:["36", "30", "40", "35"],a:1,e:"5 × 6 = 30."},
{q:"What is 6 × 9?",topic:"Mathematics",o:["54", "60", "63", "64"],a:0,e:"6 × 9 = 54."},
{q:"What is 7 × 12?",topic:"Mathematics",o:["96", "84", "91", "94"],a:1,e:"7 × 12 = 84."},
{q:"What is 8 × 15?",topic:"Mathematics",o:["130", "120", "135", "128"],a:1,e:"8 × 15 = 120."},
{q:"What is 9 × 5?",topic:"Mathematics",o:["45", "50", "55", "54"],a:0,e:"9 × 5 = 45."},
{q:"What is 10 × 8?",topic:"Mathematics",o:["80", "81", "79", "82"],a:0,e:"10 × 8 = 80."},
{q:"Divide 36 by 3.",topic:"Mathematics",o:["12", "13", "10", "15"],a:0,e:"36 ÷ 3 = 12."},

{q:"Divide 76 by 4.",topic:"Mathematics",o:["17", "19", "20", "22"],a:1,e:"76 ÷ 4 = 19."},
{q:"Divide 130 by 5.",topic:"Mathematics",o:["27", "24", "29", "26"],a:3,e:"130 ÷ 5 = 26."},
{q:"Divide 60 by 6.",topic:"Mathematics",o:["8", "13", "10", "11"],a:2,e:"60 ÷ 6 = 10."},
{q:"Divide 119 by 7.",topic:"Mathematics",o:["17", "20", "15", "18"],a:0,e:"119 ÷ 7 = 17."},
{q:"Divide 192 by 8.",topic:"Mathematics",o:["25", "24", "22", "27"],a:1,e:"192 ÷ 8 = 24."},
{q:"Divide 72 by 9.",topic:"Mathematics",o:["8", "9", "11", "6"],a:0,e:"72 ÷ 9 = 8."},
{q:"Divide 150 by 10.",topic:"Mathematics",o:["13", "18", "15", "16"],a:2,e:"150 ÷ 10 = 15."},
{q:"Divide 242 by 11.",topic:"Mathematics",o:["20", "25", "23", "22"],a:3,e:"242 ÷ 11 = 22."},
{q:"Divide 72 by 12.",topic:"Mathematics",o:["4", "7", "9", "6"],a:3,e:"72 ÷ 12 = 6."},
{q:"Divide 169 by 13.",topic:"Mathematics",o:["16", "13", "14", "11"],a:1,e:"169 ÷ 13 = 13."},

{q:"Divide 280 by 14.",topic:"Mathematics",o:["20", "23", "18", "21"],a:0,e:"280 ÷ 14 = 20."},
{q:"Divide 405 by 15.",topic:"Mathematics",o:["27", "30", "25", "28"],a:0,e:"405 ÷ 15 = 27."},
{q:"Divide 176 by 16.",topic:"Mathematics",o:["9", "11", "14", "12"],a:1,e:"176 ÷ 16 = 11."},
{q:"Divide 36 by 2.",topic:"Mathematics",o:["18", "19", "16", "21"],a:0,e:"36 ÷ 2 = 18."},
{q:"Divide 75 by 3.",topic:"Mathematics",o:["23", "26", "28", "25"],a:3,e:"75 ÷ 3 = 25."},
{q:"Divide 36 by 4.",topic:"Mathematics",o:["7", "10", "9", "12"],a:2,e:"36 ÷ 4 = 9."},
{q:"Divide 80 by 5.",topic:"Mathematics",o:["19", "14", "17", "16"],a:3,e:"80 ÷ 5 = 16."},
{q:"Divide 138 by 6.",topic:"Mathematics",o:["21", "26", "23", "24"],a:2,e:"138 ÷ 6 = 23."},
{q:"Divide 49 by 7.",topic:"Mathematics",o:["8", "7", "5", "10"],a:1,e:"49 ÷ 7 = 7."},
{q:"Divide 112 by 8.",topic:"Mathematics",o:["17", "14", "15", "12"],a:1,e:"112 ÷ 8 = 14."},

{q:"Divide 189 by 9.",topic:"Mathematics",o:["22", "19", "21", "24"],a:2,e:"189 ÷ 9 = 21."},
{q:"Divide 50 by 10.",topic:"Mathematics",o:["3", "6", "8", "5"],a:3,e:"50 ÷ 10 = 5."},
{q:"Divide 132 by 11.",topic:"Mathematics",o:["12", "15", "10", "13"],a:0,e:"132 ÷ 11 = 12."},
{q:"Divide 228 by 12.",topic:"Mathematics",o:["22", "19", "17", "20"],a:1,e:"228 ÷ 12 = 19."},
{q:"Divide 338 by 13.",topic:"Mathematics",o:["29", "24", "27", "26"],a:3,e:"338 ÷ 13 = 26."},
{q:"Divide 140 by 14.",topic:"Mathematics",o:["13", "11", "8", "10"],a:3,e:"140 ÷ 14 = 10."},
{q:"Divide 255 by 15.",topic:"Mathematics",o:["17", "20", "18", "15"],a:0,e:"255 ÷ 15 = 17."},
{q:"Divide 384 by 16.",topic:"Mathematics",o:["24", "22", "25", "27"],a:0,e:"384 ÷ 16 = 24."},
{q:"Divide 16 by 2.",topic:"Mathematics",o:["6", "9", "11", "8"],a:3,e:"16 ÷ 2 = 8."},
{q:"Divide 45 by 3.",topic:"Mathematics",o:["16", "18", "15", "13"],a:2,e:"45 ÷ 3 = 15."},

{q:"Divide 88 by 4.",topic:"Mathematics",o:["22", "25", "20", "23"],a:0,e:"88 ÷ 4 = 22."},
{q:"Divide 30 by 5.",topic:"Mathematics",o:["9", "6", "7", "4"],a:1,e:"30 ÷ 5 = 6."},
{q:"Divide 78 by 6.",topic:"Mathematics",o:["13", "16", "11", "14"],a:0,e:"78 ÷ 6 = 13."},
{q:"Divide 140 by 7.",topic:"Mathematics",o:["18", "23", "20", "21"],a:2,e:"140 ÷ 7 = 20."},
{q:"Divide 216 by 8.",topic:"Mathematics",o:["28", "30", "25", "27"],a:3,e:"216 ÷ 8 = 27."},
{q:"Divide 99 by 9.",topic:"Mathematics",o:["11", "9", "14", "12"],a:0,e:"99 ÷ 9 = 11."},
{q:"Divide 180 by 10.",topic:"Mathematics",o:["21", "16", "19", "18"],a:3,e:"180 ÷ 10 = 18."},
{q:"Divide 275 by 11.",topic:"Mathematics",o:["28", "25", "23", "26"],a:1,e:"275 ÷ 11 = 25."},
{q:"Divide 108 by 12.",topic:"Mathematics",o:["10", "9", "7", "12"],a:1,e:"108 ÷ 12 = 9."},
{q:"Divide 208 by 13.",topic:"Mathematics",o:["17", "16", "19", "14"],a:1,e:"208 ÷ 13 = 16."},

{q:"Divide 322 by 14.",topic:"Mathematics",o:["24", "21", "26", "23"],a:3,e:"322 ÷ 14 = 23."},
{q:"Divide 105 by 15.",topic:"Mathematics",o:["5", "7", "10", "8"],a:1,e:"105 ÷ 15 = 7."},
{q:"Divide 224 by 16.",topic:"Mathematics",o:["12", "14", "15", "17"],a:1,e:"224 ÷ 16 = 14."},
{q:"Divide 42 by 2.",topic:"Mathematics",o:["22", "24", "21", "19"],a:2,e:"42 ÷ 2 = 21."},
{q:"Divide 15 by 3.",topic:"Mathematics",o:["8", "5", "3", "6"],a:1,e:"15 ÷ 3 = 5."},
{q:"Divide 48 by 4.",topic:"Mathematics",o:["12", "13", "15", "10"],a:0,e:"48 ÷ 4 = 12."},
{q:"Divide 95 by 5.",topic:"Mathematics",o:["20", "22", "19", "17"],a:2,e:"95 ÷ 5 = 19."},
{q:"Divide 156 by 6.",topic:"Mathematics",o:["26", "27", "24", "29"],a:0,e:"156 ÷ 6 = 26."},
{q:"Divide 70 by 7.",topic:"Mathematics",o:["13", "11", "10", "8"],a:2,e:"70 ÷ 7 = 10."},
{q:"Divide 136 by 8.",topic:"Mathematics",o:["17", "20", "18", "15"],a:0,e:"136 ÷ 8 = 17."},

{q:"Divide 216 by 9.",topic:"Mathematics",o:["25", "27", "24", "22"],a:2,e:"216 ÷ 9 = 24."},
{q:"Divide 80 by 10.",topic:"Mathematics",o:["6", "9", "11", "8"],a:3,e:"80 ÷ 10 = 8."},
{q:"Divide 165 by 11.",topic:"Mathematics",o:["18", "13", "15", "16"],a:2,e:"165 ÷ 11 = 15."},
{q:"Divide 264 by 12.",topic:"Mathematics",o:["20", "25", "22", "23"],a:2,e:"264 ÷ 12 = 22."},
{q:"Divide 78 by 13.",topic:"Mathematics",o:["9", "4", "7", "6"],a:3,e:"78 ÷ 13 = 6."},
{q:"Divide 182 by 14.",topic:"Mathematics",o:["11", "13", "16", "14"],a:1,e:"182 ÷ 14 = 13."},
{q:"Divide 300 by 15.",topic:"Mathematics",o:["18", "23", "20", "21"],a:2,e:"300 ÷ 15 = 20."},
{q:"Divide 432 by 16.",topic:"Mathematics",o:["30", "28", "25", "27"],a:3,e:"432 ÷ 16 = 27."},
{q:"Divide 22 by 2.",topic:"Mathematics",o:["9", "11", "14", "12"],a:1,e:"22 ÷ 2 = 11."},
{q:"Divide 54 by 3.",topic:"Mathematics",o:["18", "21", "16", "19"],a:0,e:"54 ÷ 3 = 18."},

{q:"Divide 100 by 4.",topic:"Mathematics",o:["28", "26", "25", "23"],a:2,e:"100 ÷ 4 = 25."},
{q:"Divide 45 by 5.",topic:"Mathematics",o:["12", "7", "9", "10"],a:2,e:"45 ÷ 5 = 9."},
{q:"Divide 96 by 6.",topic:"Mathematics",o:["14", "17", "19", "16"],a:3,e:"96 ÷ 6 = 16."},
{q:"Divide 161 by 7.",topic:"Mathematics",o:["24", "23", "26", "21"],a:1,e:"161 ÷ 7 = 23."},
{q:"Divide 56 by 8.",topic:"Mathematics",o:["5", "10", "8", "7"],a:3,e:"56 ÷ 8 = 7."},
{q:"Divide 126 by 9.",topic:"Mathematics",o:["17", "15", "12", "14"],a:3,e:"126 ÷ 9 = 14."},
{q:"Divide 210 by 10.",topic:"Mathematics",o:["22", "21", "19", "24"],a:1,e:"210 ÷ 10 = 21."},
{q:"Divide 55 by 11.",topic:"Mathematics",o:["8", "5", "6", "3"],a:1,e:"55 ÷ 11 = 5."},
{q:"Divide 144 by 12.",topic:"Mathematics",o:["15", "13", "10", "12"],a:3,e:"144 ÷ 12 = 12."},
{q:"Divide 247 by 13.",topic:"Mathematics",o:["19", "20", "22", "17"],a:0,e:"247 ÷ 13 = 19."},

// ======================================
//  800 QUESTIONS  COMPLETE HERE.
// ======================================

{q:"Divide 364 by 14.",topic:"Mathematics",o:["29", "27", "24", "26"],a:3,e:"364 ÷ 14 = 26."},
{q:"What number comes next in the series 3, 6, 9, 12, ?",topic:"Logical Reasoning",o:["12", "18", "15", "21"],a:2,e:"The sequence increases by 3 each time; the next number is 15."},
{q:"What number comes next in the series 5, 9, 13, 17, ?",topic:"Logical Reasoning",o:["17", "25", "21", "29"],a:2,e:"The sequence increases by 4 each time; the next number is 21."},
{q:"What number comes next in the series 7, 12, 17, 22, ?",topic:"Logical Reasoning",o:["27", "37", "22", "32"],a:0,e:"The sequence increases by 5 each time; the next number is 27."},
{q:"What number comes next in the series 9, 15, 21, 27, ?",topic:"Logical Reasoning",o:["27", "45", "39", "33"],a:3,e:"The sequence increases by 6 each time; the next number is 33."},
{q:"What number comes next in the series 11, 18, 25, 32, ?",topic:"Logical Reasoning",o:["32", "46", "53", "39"],a:3,e:"The sequence increases by 7 each time; the next number is 39."},
{q:"What number comes next in the series 13, 21, 29, 37, ?",topic:"Logical Reasoning",o:["45", "37", "53", "61"],a:0,e:"The sequence increases by 8 each time; the next number is 45."},
{q:"What number comes next in the series 15, 24, 33, 42, ?",topic:"Logical Reasoning",o:["69", "42", "60", "51"],a:3,e:"The sequence increases by 9 each time; the next number is 51."},
{q:"What number comes next in the series 17, 27, 37, 47, ?",topic:"Logical Reasoning",o:["47", "57", "67", "77"],a:1,e:"The sequence increases by 10 each time; the next number is 57."},
{q:"What number comes next in the series 19, 30, 41, 52, ?",topic:"Logical Reasoning",o:["52", "74", "63", "85"],a:2,e:"The sequence increases by 11 each time; the next number is 63."},

{q:"What number comes next in the series 21, 33, 45, 57, ?",topic:"Logical Reasoning",o:["69", "93", "57", "81"],a:0,e:"The sequence increases by 12 each time; the next number is 69."},
{q:"What number comes next in the series 23, 36, 49, 62, ?",topic:"Logical Reasoning",o:["62", "101", "75", "88"],a:2,e:"The sequence increases by 13 each time; the next number is 75."},
{q:"What number comes next in the series 25, 39, 53, 67, ?",topic:"Logical Reasoning",o:["95", "81", "109", "67"],a:1,e:"The sequence increases by 14 each time; the next number is 81."},
{q:"What number comes next in the series 27, 29, 31, 33, ?",topic:"Logical Reasoning",o:["37", "33", "35", "39"],a:2,e:"The sequence increases by 2 each time; the next number is 35."},
{q:"What number comes next in the series 29, 32, 35, 38, ?",topic:"Logical Reasoning",o:["38", "41", "44", "47"],a:1,e:"The sequence increases by 3 each time; the next number is 41."},
{q:"What number comes next in the series 31, 35, 39, 43, ?",topic:"Logical Reasoning",o:["55", "51", "47", "43"],a:2,e:"The sequence increases by 4 each time; the next number is 47."},
{q:"What number comes next in the series 33, 38, 43, 48, ?",topic:"Logical Reasoning",o:["63", "58", "53", "48"],a:2,e:"The sequence increases by 5 each time; the next number is 53."},
{q:"What number comes next in the series 35, 41, 47, 53, ?",topic:"Logical Reasoning",o:["53", "65", "71", "59"],a:3,e:"The sequence increases by 6 each time; the next number is 59."},
{q:"What number comes next in the series 37, 44, 51, 58, ?",topic:"Logical Reasoning",o:["79", "65", "72", "58"],a:1,e:"The sequence increases by 7 each time; the next number is 65."},
{q:"What number comes next in the series 39, 47, 55, 63, ?",topic:"Logical Reasoning",o:["63", "87", "71", "79"],a:2,e:"The sequence increases by 8 each time; the next number is 71."},

{q:"What number comes next in the series 41, 50, 59, 68, ?",topic:"Logical Reasoning",o:["95", "86", "68", "77"],a:3,e:"The sequence increases by 9 each time; the next number is 77."},
{q:"What number comes next in the series 43, 53, 63, 73, ?",topic:"Logical Reasoning",o:["83", "103", "93", "73"],a:0,e:"The sequence increases by 10 each time; the next number is 83."},
{q:"What number comes next in the series 45, 56, 67, 78, ?",topic:"Logical Reasoning",o:["78", "89", "100", "111"],a:1,e:"The sequence increases by 11 each time; the next number is 89."},
{q:"What number comes next in the series 47, 59, 71, 83, ?",topic:"Logical Reasoning",o:["119", "107", "95", "83"],a:2,e:"The sequence increases by 12 each time; the next number is 95."},
{q:"What number comes next in the series 49, 62, 75, 88, ?",topic:"Logical Reasoning",o:["114", "101", "88", "127"],a:1,e:"The sequence increases by 13 each time; the next number is 101."},
{q:"What number comes next in the series 51, 65, 79, 93, ?",topic:"Logical Reasoning",o:["121", "93", "107", "135"],a:2,e:"The sequence increases by 14 each time; the next number is 107."},
{q:"What number comes next in the series 53, 55, 57, 59, ?",topic:"Logical Reasoning",o:["61", "59", "65", "63"],a:0,e:"The sequence increases by 2 each time; the next number is 61."},
{q:"What number comes next in the series 55, 58, 61, 64, ?",topic:"Logical Reasoning",o:["67", "73", "64", "70"],a:0,e:"The sequence increases by 3 each time; the next number is 67."},
{q:"What number comes next in the series 57, 61, 65, 69, ?",topic:"Logical Reasoning",o:["81", "77", "73", "69"],a:2,e:"The sequence increases by 4 each time; the next number is 73."},
{q:"What number comes next in the series 59, 64, 69, 74, ?",topic:"Logical Reasoning",o:["74", "84", "89", "79"],a:3,e:"The sequence increases by 5 each time; the next number is 79."},

{q:"What number comes next in the series 61, 67, 73, 79, ?",topic:"Logical Reasoning",o:["91", "85", "97", "79"],a:1,e:"The sequence increases by 6 each time; the next number is 85."},
{q:"What number comes next in the series 63, 70, 77, 84, ?",topic:"Logical Reasoning",o:["98", "105", "91", "84"],a:2,e:"The sequence increases by 7 each time; the next number is 91."},
{q:"What number comes next in the series 65, 73, 81, 89, ?",topic:"Logical Reasoning",o:["89", "105", "97", "113"],a:2,e:"The sequence increases by 8 each time; the next number is 97."},
{q:"What number comes next in the series 67, 76, 85, 94, ?",topic:"Logical Reasoning",o:["103", "121", "94", "112"],a:0,e:"The sequence increases by 9 each time; the next number is 103."},
{q:"What number comes next in the series 69, 79, 89, 99, ?",topic:"Logical Reasoning",o:["119", "129", "109", "99"],a:2,e:"The sequence increases by 10 each time; the next number is 109."},
{q:"What number comes next in the series 71, 82, 93, 104, ?",topic:"Logical Reasoning",o:["115", "137", "104", "126"],a:0,e:"The sequence increases by 11 each time; the next number is 115."},
{q:"What number comes next in the series 73, 85, 97, 109, ?",topic:"Logical Reasoning",o:["121", "109", "133", "145"],a:0,e:"The sequence increases by 12 each time; the next number is 121."},
{q:"What number comes next in the series 75, 88, 101, 114, ?",topic:"Logical Reasoning",o:["140", "153", "127", "114"],a:2,e:"The sequence increases by 13 each time; the next number is 127."},
{q:"What number comes next in the series 77, 91, 105, 119, ?",topic:"Logical Reasoning",o:["161", "133", "119", "147"],a:1,e:"The sequence increases by 14 each time; the next number is 133."},
{q:"What number comes next in the series 79, 81, 83, 85, ?",topic:"Logical Reasoning",o:["87", "85", "89", "91"],a:0,e:"The sequence increases by 2 each time; the next number is 87."},

{q:"What number comes next in the series 81, 84, 87, 90, ?",topic:"Logical Reasoning",o:["90", "96", "99", "93"],a:3,e:"The sequence increases by 3 each time; the next number is 93."},
{q:"What number comes next in the series 83, 87, 91, 95, ?",topic:"Logical Reasoning",o:["95", "99", "107", "103"],a:1,e:"The sequence increases by 4 each time; the next number is 99."},
{q:"What number comes next in the series 85, 90, 95, 100, ?",topic:"Logical Reasoning",o:["105", "115", "110", "100"],a:0,e:"The sequence increases by 5 each time; the next number is 105."},
{q:"What number comes next in the series 87, 93, 99, 105, ?",topic:"Logical Reasoning",o:["105", "123", "111", "117"],a:2,e:"The sequence increases by 6 each time; the next number is 111."},
{q:"What number comes next in the series 89, 96, 103, 110, ?",topic:"Logical Reasoning",o:["131", "117", "124", "110"],a:1,e:"The sequence increases by 7 each time; the next number is 117."},
{q:"What number comes next in the series 91, 99, 107, 115, ?",topic:"Logical Reasoning",o:["131", "115", "123", "139"],a:2,e:"The sequence increases by 8 each time; the next number is 123."},
{q:"What number comes next in the series 93, 102, 111, 120, ?",topic:"Logical Reasoning",o:["138", "129", "120", "147"],a:1,e:"The sequence increases by 9 each time; the next number is 129."},
{q:"What number comes next in the series 95, 105, 115, 125, ?",topic:"Logical Reasoning",o:["145", "135", "125", "155"],a:1,e:"The sequence increases by 10 each time; the next number is 135."},
{q:"What number comes next in the series 97, 108, 119, 130, ?",topic:"Logical Reasoning",o:["152", "163", "141", "130"],a:2,e:"The sequence increases by 11 each time; the next number is 141."},
{q:"What number comes next in the series 99, 111, 123, 135, ?",topic:"Logical Reasoning",o:["171", "135", "147", "159"],a:2,e:"The sequence increases by 12 each time; the next number is 147."},
{q:"What number comes next in the series 101, 114, 127, 140, ?",topic:"Logical Reasoning",o:["140", "179", "166", "153"],a:3,e:"The sequence increases by 13 each time; the next number is 153."},

{q:"What number comes next in the series 103, 117, 131, 145, ?",topic:"Logical Reasoning",o:["173", "187", "145", "159"],a:3,e:"The sequence increases by 14 each time; the next number is 159."},
{q:"What number comes next in the series 105, 107, 109, 111, ?",topic:"Logical Reasoning",o:["113", "117", "115", "111"],a:0,e:"The sequence increases by 2 each time; the next number is 113."},
{q:"What number comes next in the series 107, 110, 113, 116, ?",topic:"Logical Reasoning",o:["119", "116", "125", "122"],a:0,e:"The sequence increases by 3 each time; the next number is 119."},
{q:"What number comes next in the series 109, 113, 117, 121, ?",topic:"Logical Reasoning",o:["125", "129", "133", "121"],a:0,e:"The sequence increases by 4 each time; the next number is 125."},
{q:"What number comes next in the series 111, 116, 121, 126, ?",topic:"Logical Reasoning",o:["126", "141", "136", "131"],a:3,e:"The sequence increases by 5 each time; the next number is 131."},
{q:"What number comes next in the series 113, 119, 125, 131, ?",topic:"Logical Reasoning",o:["137", "131", "143", "149"],a:0,e:"The sequence increases by 6 each time; the next number is 137."},
{q:"What number comes next in the series 115, 122, 129, 136, ?",topic:"Logical Reasoning",o:["143", "136", "157", "150"],a:0,e:"The sequence increases by 7 each time; the next number is 143."},
{q:"What number comes next in the series 117, 125, 133, 141, ?",topic:"Logical Reasoning",o:["165", "157", "141", "149"],a:3,e:"The sequence increases by 8 each time; the next number is 149."},
{q:"What number comes next in the series 119, 128, 137, 146, ?",topic:"Logical Reasoning",o:["146", "155", "173", "164"],a:1,e:"The sequence increases by 9 each time; the next number is 155."},
{q:"What number comes next in the series 121, 131, 141, 151, ?",topic:"Logical Reasoning",o:["161", "171", "181", "151"],a:0,e:"The sequence increases by 10 each time; the next number is 161."},

{q:"What number comes next in the series 123, 134, 145, 156, ?",topic:"Logical Reasoning",o:["189", "178", "167", "156"],a:2,e:"The sequence increases by 11 each time; the next number is 167."},
{q:"What number comes next in the series 125, 137, 149, 161, ?",topic:"Logical Reasoning",o:["161", "197", "185", "173"],a:3,e:"The sequence increases by 12 each time; the next number is 173."},
{q:"What number comes next in the series 127, 140, 153, 166, ?",topic:"Logical Reasoning",o:["166", "179", "205", "192"],a:1,e:"The sequence increases by 13 each time; the next number is 179."},
{q:"What number comes next in the series 129, 143, 157, 171, ?",topic:"Logical Reasoning",o:["199", "213", "185", "171"],a:2,e:"The sequence increases by 14 each time; the next number is 185."},
{q:"What number comes next in the series 131, 133, 135, 137, ?",topic:"Logical Reasoning",o:["143", "137", "139", "141"],a:2,e:"The sequence increases by 2 each time; the next number is 139."},
{q:"What number comes next in the series 133, 136, 139, 142, ?",topic:"Logical Reasoning",o:["142", "148", "151", "145"],a:3,e:"The sequence increases by 3 each time; the next number is 145."},
{q:"What number comes next in the series 135, 139, 143, 147, ?",topic:"Logical Reasoning",o:["151", "159", "155", "147"],a:0,e:"The sequence increases by 4 each time; the next number is 151."},
{q:"What number comes next in the series 137, 142, 147, 152, ?",topic:"Logical Reasoning",o:["152", "157", "167", "162"],a:1,e:"The sequence increases by 5 each time; the next number is 157."},
{q:"What number comes next in the series 139, 145, 151, 157, ?",topic:"Logical Reasoning",o:["163", "175", "169", "157"],a:0,e:"The sequence increases by 6 each time; the next number is 163."},
{q:"What number comes next in the series 141, 148, 155, 162, ?",topic:"Logical Reasoning",o:["183", "176", "162", "169"],a:3,e:"The sequence increases by 7 each time; the next number is 169."},

{q:"What number comes next in the series 143, 151, 159, 167, ?",topic:"Logical Reasoning",o:["191", "183", "167", "175"],a:3,e:"The sequence increases by 8 each time; the next number is 175."},
{q:"What number comes next in the series 145, 154, 163, 172, ?",topic:"Logical Reasoning",o:["172", "199", "181", "190"],a:2,e:"The sequence increases by 9 each time; the next number is 181."},
{q:"What number comes next in the series 147, 157, 167, 177, ?",topic:"Logical Reasoning",o:["207", "187", "197", "177"],a:1,e:"The sequence increases by 10 each time; the next number is 187."},
{q:"What number comes next in the series 149, 160, 171, 182, ?",topic:"Logical Reasoning",o:["182", "204", "215", "193"],a:3,e:"The sequence increases by 11 each time; the next number is 193."},
{q:"What number comes next in the series 151, 163, 175, 187, ?",topic:"Logical Reasoning",o:["187", "211", "223", "199"],a:3,e:"The sequence increases by 12 each time; the next number is 199."},
{q:"What number comes next in the series 153, 166, 179, 192, ?",topic:"Logical Reasoning",o:["205", "218", "192", "231"],a:0,e:"The sequence increases by 13 each time; the next number is 205."},
{q:"What number comes next in the series 155, 169, 183, 197, ?",topic:"Logical Reasoning",o:["197", "225", "211", "239"],a:2,e:"The sequence increases by 14 each time; the next number is 211."},
{q:"What number comes next in the series 157, 159, 161, 163, ?",topic:"Logical Reasoning",o:["167", "169", "165", "163"],a:2,e:"The sequence increases by 2 each time; the next number is 165."},
{q:"What number comes next in the series 159, 162, 165, 168, ?",topic:"Logical Reasoning",o:["174", "171", "168", "177"],a:1,e:"The sequence increases by 3 each time; the next number is 171."},
{q:"What number comes next in the series 161, 165, 169, 173, ?",topic:"Logical Reasoning",o:["177", "181", "173", "185"],a:0,e:"The sequence increases by 4 each time; the next number is 177."},

{q:"What number comes next in the series 163, 168, 173, 178, ?",topic:"Logical Reasoning",o:["178", "183", "188", "193"],a:1,e:"The sequence increases by 5 each time; the next number is 183."},
{q:"What number comes next in the series 165, 171, 177, 183, ?",topic:"Logical Reasoning",o:["201", "189", "195", "183"],a:1,e:"The sequence increases by 6 each time; the next number is 189."},
{q:"What number comes next in the series 167, 174, 181, 188, ?",topic:"Logical Reasoning",o:["209", "195", "202", "188"],a:1,e:"The sequence increases by 7 each time; the next number is 195."},
{q:"What number comes next in the series 169, 177, 185, 193, ?",topic:"Logical Reasoning",o:["201", "193", "217", "209"],a:0,e:"The sequence increases by 8 each time; the next number is 201."},
{q:"What number comes next in the series 171, 180, 189, 198, ?",topic:"Logical Reasoning",o:["225", "198", "207", "216"],a:2,e:"The sequence increases by 9 each time; the next number is 207."},
{q:"What number comes next in the series 173, 183, 193, 203, ?",topic:"Logical Reasoning",o:["203", "233", "213", "223"],a:2,e:"The sequence increases by 10 each time; the next number is 213."},
{q:"What number comes next in the series 175, 186, 197, 208, ?",topic:"Logical Reasoning",o:["241", "219", "230", "208"],a:1,e:"The sequence increases by 11 each time; the next number is 219."},
{q:"What number comes next in the series 177, 189, 201, 213, ?",topic:"Logical Reasoning",o:["249", "237", "213", "225"],a:3,e:"The sequence increases by 12 each time; the next number is 225."},
{q:"What number comes next in the series 179, 192, 205, 218, ?",topic:"Logical Reasoning",o:["231", "257", "218", "244"],a:0,e:"The sequence increases by 13 each time; the next number is 231."},
{q:"What number comes next in the series 181, 195, 209, 223, ?",topic:"Logical Reasoning",o:["237", "251", "223", "265"],a:0,e:"The sequence increases by 14 each time; the next number is 237."},

{q:"What number comes next in the series 183, 185, 187, 189, ?",topic:"Logical Reasoning",o:["191", "189", "193", "195"],a:0,e:"The sequence increases by 2 each time; the next number is 191."},
{q:"What number comes next in the series 185, 188, 191, 194, ?",topic:"Logical Reasoning",o:["203", "194", "200", "197"],a:3,e:"The sequence increases by 3 each time; the next number is 197."},
{q:"What number comes next in the series 187, 191, 195, 199, ?",topic:"Logical Reasoning",o:["203", "207", "211", "199"],a:0,e:"The sequence increases by 4 each time; the next number is 203."},
{q:"What number comes next in the series 189, 194, 199, 204, ?",topic:"Logical Reasoning",o:["219", "204", "209", "214"],a:2,e:"The sequence increases by 5 each time; the next number is 209."},
{q:"What number comes next in the series 191, 197, 203, 209, ?",topic:"Logical Reasoning",o:["227", "209", "215", "221"],a:2,e:"The sequence increases by 6 each time; the next number is 215."},
{q:"What number comes next in the series 193, 200, 207, 214, ?",topic:"Logical Reasoning",o:["214", "221", "228", "235"],a:1,e:"The sequence increases by 7 each time; the next number is 221."},
{q:"What number comes next in the series 195, 203, 211, 219, ?",topic:"Logical Reasoning",o:["235", "227", "243", "219"],a:1,e:"The sequence increases by 8 each time; the next number is 227."},
{q:"What number comes next in the series 197, 206, 215, 224, ?",topic:"Logical Reasoning",o:["224", "233", "242", "251"],a:1,e:"The sequence increases by 9 each time; the next number is 233."},
{q:"What number comes next in the series 199, 209, 219, 229, ?",topic:"Logical Reasoning",o:["229", "249", "259", "239"],a:3,e:"The sequence increases by 10 each time; the next number is 239."},
{q:"What number comes next in the series 201, 212, 223, 234, ?",topic:"Logical Reasoning",o:["245", "256", "234", "267"],a:0,e:"The sequence increases by 11 each time; the next number is 245."},

// ======================================
//  900 QUESTIONS  COMPLETE HERE.
// ======================================

{q:"Complete the multiplication pattern 3, 9, 27, 81, ?",topic:"Logical Reasoning",o:["243", "246", "240", "486"],a:0,e:"Each term is the previous term multiplied by 3; the next is 243."},
{q:"Complete the multiplication pattern 4, 16, 64, 256, ?",topic:"Logical Reasoning",o:["1020", "1028", "1024", "2048"],a:2,e:"Each term is the previous term multiplied by 4; the next is 1024."},
{q:"Complete the multiplication pattern 5, 25, 125, 625, ?",topic:"Logical Reasoning",o:["6250", "3120", "3125", "3130"],a:2,e:"Each term is the previous term multiplied by 5; the next is 3125."},
{q:"Complete the multiplication pattern 6, 36, 216, 1296, ?",topic:"Logical Reasoning",o:["7776", "7782", "15552", "7770"],a:0,e:"Each term is the previous term multiplied by 6; the next is 7776."},
{q:"Complete the multiplication pattern 7, 49, 343, 2401, ?",topic:"Logical Reasoning",o:["16807", "33614", "16800", "16814"],a:0,e:"Each term is the previous term multiplied by 7; the next is 16807."},
{q:"Complete the multiplication pattern 8, 64, 512, 4096, ?",topic:"Logical Reasoning",o:["32768", "65536", "32776", "32760"],a:0,e:"Each term is the previous term multiplied by 8; the next is 32768."},
{q:"Complete the multiplication pattern 9, 81, 729, 6561, ?",topic:"Logical Reasoning",o:["59058", "59049", "118098", "59040"],a:1,e:"Each term is the previous term multiplied by 9; the next is 59049."},
{q:"Complete the multiplication pattern 2, 4, 8, 16, ?",topic:"Logical Reasoning",o:["64", "32", "34", "30"],a:1,e:"Each term is the previous term multiplied by 2; the next is 32."},
{q:"Complete the multiplication pattern 3, 9, 27, 81, ? (Additional question 406)",topic:"Logical Reasoning",o:["246", "486", "243", "240"],a:2,e:"Each term is the previous term multiplied by 3; the next is 243."},
{q:"Complete the multiplication pattern 4, 16, 64, 256, ? (Additional question 407)",topic:"Logical Reasoning",o:["1024", "1020", "1028", "2048"],a:0,e:"Each term is the previous term multiplied by 4; the next is 1024."},

{q:"Complete the multiplication pattern 5, 25, 125, 625, ? (Additional question 408)",topic:"Logical Reasoning",o:["6250", "3120", "3130", "3125"],a:3,e:"Each term is the previous term multiplied by 5; the next is 3125."},
{q:"Complete the multiplication pattern 6, 36, 216, 1296, ? (Additional question 409)",topic:"Logical Reasoning",o:["15552", "7770", "7782", "7776"],a:3,e:"Each term is the previous term multiplied by 6; the next is 7776."},
{q:"Complete the multiplication pattern 7, 49, 343, 2401, ? (Additional question 410)",topic:"Logical Reasoning",o:["16814", "33614", "16800", "16807"],a:3,e:"Each term is the previous term multiplied by 7; the next is 16807."},
{q:"Complete the multiplication pattern 8, 64, 512, 4096, ? (Additional question 411)",topic:"Logical Reasoning",o:["32776", "32760", "32768", "65536"],a:2,e:"Each term is the previous term multiplied by 8; the next is 32768."},
{q:"Complete the multiplication pattern 9, 81, 729, 6561, ? (Additional question 412)",topic:"Logical Reasoning",o:["59049", "118098", "59040", "59058"],a:0,e:"Each term is the previous term multiplied by 9; the next is 59049."},
{q:"Complete the multiplication pattern 2, 4, 8, 16, ? (Additional question 413)",topic:"Logical Reasoning",o:["30", "32", "64", "34"],a:1,e:"Each term is the previous term multiplied by 2; the next is 32."},
{q:"Complete the multiplication pattern 3, 9, 27, 81, ? (Additional question 414)",topic:"Logical Reasoning",o:["243", "246", "486", "240"],a:0,e:"Each term is the previous term multiplied by 3; the next is 243."},
{q:"Complete the multiplication pattern 4, 16, 64, 256, ? (Additional question 415)",topic:"Logical Reasoning",o:["1024", "1028", "1020", "2048"],a:0,e:"Each term is the previous term multiplied by 4; the next is 1024."},
{q:"Complete the multiplication pattern 5, 25, 125, 625, ? (Additional question 416)",topic:"Logical Reasoning",o:["6250", "3130", "3125", "3120"],a:2,e:"Each term is the previous term multiplied by 5; the next is 3125."},
{q:"Complete the multiplication pattern 6, 36, 216, 1296, ? (Additional question 417)",topic:"Logical Reasoning",o:["15552", "7782", "7770", "7776"],a:3,e:"Each term is the previous term multiplied by 6; the next is 7776."},

{q:"Complete the multiplication pattern 7, 49, 343, 2401, ? (Additional question 418)",topic:"Logical Reasoning",o:["33614", "16814", "16800", "16807"],a:3,e:"Each term is the previous term multiplied by 7; the next is 16807."},
{q:"Complete the multiplication pattern 8, 64, 512, 4096, ? (Additional question 419)",topic:"Logical Reasoning",o:["65536", "32776", "32760", "32768"],a:3,e:"Each term is the previous term multiplied by 8; the next is 32768."},
{q:"Complete the multiplication pattern 9, 81, 729, 6561, ? (Additional question 420)",topic:"Logical Reasoning",o:["59049", "59058", "59040", "118098"],a:0,e:"Each term is the previous term multiplied by 9; the next is 59049."},
{q:"Complete the multiplication pattern 2, 4, 8, 16, ? (Additional question 421)",topic:"Logical Reasoning",o:["64", "30", "32", "34"],a:2,e:"Each term is the previous term multiplied by 2; the next is 32."},
{q:"Complete the multiplication pattern 3, 9, 27, 81, ? (Additional question 422)",topic:"Logical Reasoning",o:["486", "240", "246", "243"],a:3,e:"Each term is the previous term multiplied by 3; the next is 243."},
{q:"Complete the multiplication pattern 4, 16, 64, 256, ? (Additional question 423)",topic:"Logical Reasoning",o:["1020", "2048", "1024", "1028"],a:2,e:"Each term is the previous term multiplied by 4; the next is 1024."},
{q:"Complete the multiplication pattern 5, 25, 125, 625, ? (Additional question 424)",topic:"Logical Reasoning",o:["6250", "3125", "3130", "3120"],a:1,e:"Each term is the previous term multiplied by 5; the next is 3125."},
{q:"Complete the multiplication pattern 6, 36, 216, 1296, ? (Additional question 425)",topic:"Logical Reasoning",o:["7770", "7782", "15552", "7776"],a:3,e:"Each term is the previous term multiplied by 6; the next is 7776."},
{q:"Complete the multiplication pattern 7, 49, 343, 2401, ? (Additional question 426)",topic:"Logical Reasoning",o:["16800", "16807", "33614", "16814"],a:1,e:"Each term is the previous term multiplied by 7; the next is 16807."},
{q:"Complete the multiplication pattern 8, 64, 512, 4096, ? (Additional question 427)",topic:"Logical Reasoning",o:["32776", "32760", "32768", "65536"],a:2,e:"Each term is the previous term multiplied by 8; the next is 32768."},

{q:"Complete the multiplication pattern 9, 81, 729, 6561, ? (Additional question 428)",topic:"Logical Reasoning",o:["59049", "59040", "118098", "59058"],a:0,e:"Each term is the previous term multiplied by 9; the next is 59049."},
{q:"Complete the multiplication pattern 2, 4, 8, 16, ? (Additional question 429)",topic:"Logical Reasoning",o:["30", "32", "64", "34"],a:1,e:"Each term is the previous term multiplied by 2; the next is 32."},
{q:"Complete the multiplication pattern 3, 9, 27, 81, ? (Additional question 430)",topic:"Logical Reasoning",o:["486", "246", "243", "240"],a:2,e:"Each term is the previous term multiplied by 3; the next is 243."},
{q:"Complete the multiplication pattern 4, 16, 64, 256, ? (Additional question 431)",topic:"Logical Reasoning",o:["1028", "1024", "2048", "1020"],a:1,e:"Each term is the previous term multiplied by 4; the next is 1024."},
{q:"Complete the multiplication pattern 5, 25, 125, 625, ? (Additional question 432)",topic:"Logical Reasoning",o:["3125", "6250", "3120", "3130"],a:0,e:"Each term is the previous term multiplied by 5; the next is 3125."},
{q:"Complete the multiplication pattern 6, 36, 216, 1296, ? (Additional question 433)",topic:"Logical Reasoning",o:["7770", "7776", "15552", "7782"],a:1,e:"Each term is the previous term multiplied by 6; the next is 7776."},
{q:"Complete the multiplication pattern 7, 49, 343, 2401, ? (Additional question 434)",topic:"Logical Reasoning",o:["16814", "33614", "16807", "16800"],a:2,e:"Each term is the previous term multiplied by 7; the next is 16807."},
{q:"Complete the multiplication pattern 8, 64, 512, 4096, ? (Additional question 435)",topic:"Logical Reasoning",o:["32760", "32768", "32776", "65536"],a:1,e:"Each term is the previous term multiplied by 8; the next is 32768."},
{q:"Complete the multiplication pattern 9, 81, 729, 6561, ? (Additional question 436)",topic:"Logical Reasoning",o:["59058", "59040", "59049", "118098"],a:2,e:"Each term is the previous term multiplied by 9; the next is 59049."},
{q:"Complete the multiplication pattern 2, 4, 8, 16, ? (Additional question 437)",topic:"Logical Reasoning",o:["30", "34", "32", "64"],a:2,e:"Each term is the previous term multiplied by 2; the next is 32."},

{q:"Complete the multiplication pattern 3, 9, 27, 81, ? (Additional question 438)",topic:"Logical Reasoning",o:["240", "246", "243", "486"],a:2,e:"Each term is the previous term multiplied by 3; the next is 243."},
{q:"Complete the multiplication pattern 4, 16, 64, 256, ? (Additional question 439)",topic:"Logical Reasoning",o:["1028", "2048", "1024", "1020"],a:2,e:"Each term is the previous term multiplied by 4; the next is 1024."},
{q:"Complete the multiplication pattern 5, 25, 125, 625, ? (Additional question 440)",topic:"Logical Reasoning",o:["6250", "3120", "3125", "3130"],a:2,e:"Each term is the previous term multiplied by 5; the next is 3125."},
{q:"Complete the multiplication pattern 6, 36, 216, 1296, ? (Additional question 441)",topic:"Logical Reasoning",o:["7770", "7782", "7776", "15552"],a:2,e:"Each term is the previous term multiplied by 6; the next is 7776."},
{q:"Complete the multiplication pattern 7, 49, 343, 2401, ? (Additional question 442)",topic:"Logical Reasoning",o:["16800", "16807", "33614", "16814"],a:1,e:"Each term is the previous term multiplied by 7; the next is 16807."},
{q:"Complete the multiplication pattern 8, 64, 512, 4096, ? (Additional question 443)",topic:"Logical Reasoning",o:["32760", "65536", "32776", "32768"],a:3,e:"Each term is the previous term multiplied by 8; the next is 32768."},
{q:"Complete the multiplication pattern 9, 81, 729, 6561, ? (Additional question 444)",topic:"Logical Reasoning",o:["118098", "59058", "59040", "59049"],a:3,e:"Each term is the previous term multiplied by 9; the next is 59049."},
{q:"Complete the multiplication pattern 2, 4, 8, 16, ? (Additional question 445)",topic:"Logical Reasoning",o:["34", "64", "30", "32"],a:3,e:"Each term is the previous term multiplied by 2; the next is 32."},
{q:"Complete the multiplication pattern 3, 9, 27, 81, ? (Additional question 446)",topic:"Logical Reasoning",o:["486", "243", "240", "246"],a:1,e:"Each term is the previous term multiplied by 3; the next is 243."},
{q:"Complete the multiplication pattern 4, 16, 64, 256, ? (Additional question 447)",topic:"Logical Reasoning",o:["2048", "1024", "1028", "1020"],a:1,e:"Each term is the previous term multiplied by 4; the next is 1024."},

{q:"Complete the multiplication pattern 5, 25, 125, 625, ? (Additional question 448)",topic:"Logical Reasoning",o:["3120", "6250", "3125", "3130"],a:2,e:"Each term is the previous term multiplied by 5; the next is 3125."},
{q:"Complete the multiplication pattern 6, 36, 216, 1296, ? (Additional question 449)",topic:"Logical Reasoning",o:["7782", "7770", "15552", "7776"],a:3,e:"Each term is the previous term multiplied by 6; the next is 7776."},
{q:"Complete the multiplication pattern 7, 49, 343, 2401, ? (Additional question 450)",topic:"Logical Reasoning",o:["33614", "16814", "16807", "16800"],a:2,e:"Each term is the previous term multiplied by 7; the next is 16807."},
{q:"Complete the multiplication pattern 8, 64, 512, 4096, ? (Additional question 451)",topic:"Logical Reasoning",o:["32760", "32776", "32768", "65536"],a:2,e:"Each term is the previous term multiplied by 8; the next is 32768."},
{q:"Complete the multiplication pattern 9, 81, 729, 6561, ? (Additional question 452)",topic:"Logical Reasoning",o:["118098", "59049", "59040", "59058"],a:1,e:"Each term is the previous term multiplied by 9; the next is 59049."},
{q:"Complete the multiplication pattern 2, 4, 8, 16, ? (Additional question 453)",topic:"Logical Reasoning",o:["64", "34", "32", "30"],a:2,e:"Each term is the previous term multiplied by 2; the next is 32."},
{q:"Complete the multiplication pattern 3, 9, 27, 81, ? (Additional question 454)",topic:"Logical Reasoning",o:["246", "240", "486", "243"],a:3,e:"Each term is the previous term multiplied by 3; the next is 243."},
{q:"Complete the multiplication pattern 4, 16, 64, 256, ? (Additional question 455)",topic:"Logical Reasoning",o:["2048", "1024", "1028", "1020"],a:1,e:"Each term is the previous term multiplied by 4; the next is 1024."},
{q:"Complete the multiplication pattern 5, 25, 125, 625, ? (Additional question 456)",topic:"Logical Reasoning",o:["3120", "3130", "6250", "3125"],a:3,e:"Each term is the previous term multiplied by 5; the next is 3125."},
{q:"Complete the multiplication pattern 6, 36, 216, 1296, ? (Additional question 457)",topic:"Logical Reasoning",o:["7770", "15552", "7782", "7776"],a:3,e:"Each term is the previous term multiplied by 6; the next is 7776."},

{q:"Complete the multiplication pattern 7, 49, 343, 2401, ? (Additional question 458)",topic:"Logical Reasoning",o:["33614", "16800", "16807", "16814"],a:2,e:"Each term is the previous term multiplied by 7; the next is 16807."},
{q:"Complete the multiplication pattern 8, 64, 512, 4096, ? (Additional question 459)",topic:"Logical Reasoning",o:["32776", "32768", "32760", "65536"],a:1,e:"Each term is the previous term multiplied by 8; the next is 32768."},
{q:"Complete the multiplication pattern 9, 81, 729, 6561, ? (Additional question 460)",topic:"Logical Reasoning",o:["59058", "59049", "59040", "118098"],a:1,e:"Each term is the previous term multiplied by 9; the next is 59049."},
{q:"Complete the multiplication pattern 2, 4, 8, 16, ? (Additional question 461)",topic:"Logical Reasoning",o:["30", "34", "32", "64"],a:2,e:"Each term is the previous term multiplied by 2; the next is 32."},
{q:"Complete the multiplication pattern 3, 9, 27, 81, ? (Additional question 462)",topic:"Logical Reasoning",o:["243", "486", "246", "240"],a:0,e:"Each term is the previous term multiplied by 3; the next is 243."},
{q:"Complete the multiplication pattern 4, 16, 64, 256, ? (Additional question 463)",topic:"Logical Reasoning",o:["1024", "1028", "2048", "1020"],a:0,e:"Each term is the previous term multiplied by 4; the next is 1024."},
{q:"Complete the multiplication pattern 5, 25, 125, 625, ? (Additional question 464)",topic:"Logical Reasoning",o:["3125", "6250", "3120", "3130"],a:0,e:"Each term is the previous term multiplied by 5; the next is 3125."},
{q:"Complete the multiplication pattern 6, 36, 216, 1296, ? (Additional question 465)",topic:"Logical Reasoning",o:["15552", "7782", "7770", "7776"],a:3,e:"Each term is the previous term multiplied by 6; the next is 7776."},
{q:"Complete the multiplication pattern 7, 49, 343, 2401, ? (Additional question 466)",topic:"Logical Reasoning",o:["33614", "16800", "16814", "16807"],a:3,e:"Each term is the previous term multiplied by 7; the next is 16807."},
{q:"Complete the multiplication pattern 8, 64, 512, 4096, ? (Additional question 467)",topic:"Logical Reasoning",o:["32776", "65536", "32760", "32768"],a:3,e:"Each term is the previous term multiplied by 8; the next is 32768."},

{q:"Complete the multiplication pattern 9, 81, 729, 6561, ? (Additional question 468)",topic:"Logical Reasoning",o:["118098", "59049", "59040", "59058"],a:1,e:"Each term is the previous term multiplied by 9; the next is 59049."},
{q:"Complete the multiplication pattern 2, 4, 8, 16, ? (Additional question 469)",topic:"Logical Reasoning",o:["32", "64", "30", "34"],a:0,e:"Each term is the previous term multiplied by 2; the next is 32."},
{q:"Complete the multiplication pattern 3, 9, 27, 81, ? (Additional question 470)",topic:"Logical Reasoning",o:["246", "240", "243", "486"],a:2,e:"Each term is the previous term multiplied by 3; the next is 243."},
{q:"Complete the multiplication pattern 4, 16, 64, 256, ? (Additional question 471)",topic:"Logical Reasoning",o:["1028", "1024", "1020", "2048"],a:1,e:"Each term is the previous term multiplied by 4; the next is 1024."},
{q:"Complete the multiplication pattern 5, 25, 125, 625, ? (Additional question 472)",topic:"Logical Reasoning",o:["3130", "3125", "3120", "6250"],a:1,e:"Each term is the previous term multiplied by 5; the next is 3125."},
{q:"Complete the multiplication pattern 6, 36, 216, 1296, ? (Additional question 473)",topic:"Logical Reasoning",o:["7782", "15552", "7776", "7770"],a:2,e:"Each term is the previous term multiplied by 6; the next is 7776."},
{q:"Complete the multiplication pattern 7, 49, 343, 2401, ? (Additional question 474)",topic:"Logical Reasoning",o:["33614", "16807", "16814", "16800"],a:1,e:"Each term is the previous term multiplied by 7; the next is 16807."},
{q:"Complete the multiplication pattern 8, 64, 512, 4096, ? (Additional question 475)",topic:"Logical Reasoning",o:["32760", "32776", "32768", "65536"],a:2,e:"Each term is the previous term multiplied by 8; the next is 32768."},
{q:"Complete the multiplication pattern 9, 81, 729, 6561, ? (Additional question 476)",topic:"Logical Reasoning",o:["59049", "59040", "59058", "118098"],a:0,e:"Each term is the previous term multiplied by 9; the next is 59049."},
{q:"Complete the multiplication pattern 2, 4, 8, 16, ? (Additional question 477)",topic:"Logical Reasoning",o:["30", "34", "32", "64"],a:2,e:"Each term is the previous term multiplied by 2; the next is 32."},

{q:"Complete the multiplication pattern 3, 9, 27, 81, ? (Additional question 478)",topic:"Logical Reasoning",o:["486", "246", "240", "243"],a:3,e:"Each term is the previous term multiplied by 3; the next is 243."},
{q:"Complete the multiplication pattern 4, 16, 64, 256, ? (Additional question 479)",topic:"Logical Reasoning",o:["1020", "1024", "2048", "1028"],a:1,e:"Each term is the previous term multiplied by 4; the next is 1024."},
{q:"Complete the multiplication pattern 5, 25, 125, 625, ? (Additional question 480)",topic:"Logical Reasoning",o:["6250", "3120", "3130", "3125"],a:3,e:"Each term is the previous term multiplied by 5; the next is 3125."},
{q:"Complete the multiplication pattern 6, 36, 216, 1296, ? (Additional question 481)",topic:"Logical Reasoning",o:["7782", "7770", "7776", "15552"],a:2,e:"Each term is the previous term multiplied by 6; the next is 7776."},
{q:"Complete the multiplication pattern 7, 49, 343, 2401, ? (Additional question 482)",topic:"Logical Reasoning",o:["16814", "33614", "16800", "16807"],a:3,e:"Each term is the previous term multiplied by 7; the next is 16807."},
{q:"Complete the multiplication pattern 8, 64, 512, 4096, ? (Additional question 483)",topic:"Logical Reasoning",o:["32760", "32776", "32768", "65536"],a:2,e:"Each term is the previous term multiplied by 8; the next is 32768."},
{q:"Complete the multiplication pattern 9, 81, 729, 6561, ? (Additional question 484)",topic:"Logical Reasoning",o:["59040", "59058", "59049", "118098"],a:2,e:"Each term is the previous term multiplied by 9; the next is 59049."},
{q:"Complete the multiplication pattern 2, 4, 8, 16, ? (Additional question 485)",topic:"Logical Reasoning",o:["64", "32", "34", "30"],a:1,e:"Each term is the previous term multiplied by 2; the next is 32."},
{q:"Complete the multiplication pattern 3, 9, 27, 81, ? (Additional question 486)",topic:"Logical Reasoning",o:["486", "240", "246", "243"],a:3,e:"Each term is the previous term multiplied by 3; the next is 243."},
{q:"Complete the multiplication pattern 4, 16, 64, 256, ? (Additional question 487)",topic:"Logical Reasoning",o:["2048", "1028", "1020", "1024"],a:3,e:"Each term is the previous term multiplied by 4; the next is 1024."},

{q:"Complete the multiplication pattern 5, 25, 125, 625, ? (Additional question 488)",topic:"Logical Reasoning",o:["3130", "3125", "6250", "3120"],a:1,e:"Each term is the previous term multiplied by 5; the next is 3125."},
{q:"Complete the multiplication pattern 6, 36, 216, 1296, ? (Additional question 489)",topic:"Logical Reasoning",o:["15552", "7770", "7782", "7776"],a:3,e:"Each term is the previous term multiplied by 6; the next is 7776."},
{q:"Complete the multiplication pattern 7, 49, 343, 2401, ? (Additional question 490)",topic:"Logical Reasoning",o:["16807", "16800", "16814", "33614"],a:0,e:"Each term is the previous term multiplied by 7; the next is 16807."},
{q:"Complete the multiplication pattern 8, 64, 512, 4096, ? (Additional question 491)",topic:"Logical Reasoning",o:["65536", "32768", "32760", "32776"],a:1,e:"Each term is the previous term multiplied by 8; the next is 32768."},
{q:"Complete the multiplication pattern 9, 81, 729, 6561, ? (Additional question 492)",topic:"Logical Reasoning",o:["59049", "59040", "59058", "118098"],a:0,e:"Each term is the previous term multiplied by 9; the next is 59049."},
{q:"Complete the multiplication pattern 2, 4, 8, 16, ? (Additional question 493)",topic:"Logical Reasoning",o:["34", "64", "32", "30"],a:2,e:"Each term is the previous term multiplied by 2; the next is 32."},
{q:"Complete the multiplication pattern 3, 9, 27, 81, ? (Additional question 494)",topic:"Logical Reasoning",o:["486", "246", "240", "243"],a:3,e:"Each term is the previous term multiplied by 3; the next is 243."},
{q:"Complete the multiplication pattern 4, 16, 64, 256, ? (Additional question 495)",topic:"Logical Reasoning",o:["1020", "1028", "2048", "1024"],a:3,e:"Each term is the previous term multiplied by 4; the next is 1024."},
{q:"Complete the multiplication pattern 5, 25, 125, 625, ? (Additional question 496)",topic:"Logical Reasoning",o:["6250", "3120", "3130", "3125"],a:3,e:"Each term is the previous term multiplied by 5; the next is 3125."},
{q:"Complete the multiplication pattern 6, 36, 216, 1296, ? (Additional question 497)",topic:"Logical Reasoning",o:["7776", "7770", "7782", "15552"],a:0,e:"Each term is the previous term multiplied by 6; the next is 7776."},

// ======================================
//  1,000 QUESTIONS  COMPLETE HERE.
// ======================================

{q:"Which word is closest in meaning to “abundant”?",topic:"English",o:["distant", "plentiful", "ordinary", "uncertain"],a:1,e:"Abundant means plentiful."},
{q:"Which word is the opposite of “abundant”?",topic:"English",o:["scarce", "neutral", "plentiful", "similar"],a:0,e:"The opposite of abundant is scarce."},
{q:"Which word is closest in meaning to “accurate”?",topic:"English",o:["distant", "uncertain", "ordinary", "correct"],a:3,e:"Accurate means correct."},
{q:"Which word is the opposite of “accurate”?",topic:"English",o:["similar", "correct", "neutral", "inaccurate"],a:3,e:"The opposite of accurate is inaccurate."},
{q:"Which word is closest in meaning to “ancient”?",topic:"English",o:["distant", "ordinary", "old", "uncertain"],a:2,e:"Ancient means old."},
{q:"Which word is the opposite of “ancient”?",topic:"English",o:["similar", "neutral", "old", "modern"],a:3,e:"The opposite of ancient is modern."},
{q:"Which word is closest in meaning to “brief”?",topic:"English",o:["distant", "uncertain", "short", "ordinary"],a:2,e:"Brief means short."},
{q:"Which word is the opposite of “brief”?",topic:"English",o:["similar", "neutral", "short", "lengthy"],a:3,e:"The opposite of brief is lengthy."},
{q:"Which word is closest in meaning to “calm”?",topic:"English",o:["distant", "uncertain", "peaceful", "ordinary"],a:2,e:"Calm means peaceful."},
{q:"Which word is the opposite of “calm”?",topic:"English",o:["peaceful", "neutral", "similar", "agitated"],a:3,e:"The opposite of calm is agitated."},

{q:"Which word is closest in meaning to “candid”?",topic:"English",o:["ordinary", "distant", "honest", "uncertain"],a:2,e:"Candid means honest."},
{q:"Which word is the opposite of “candid”?",topic:"English",o:["similar", "honest", "deceitful", "neutral"],a:2,e:"The opposite of candid is deceitful."},
{q:"Which word is closest in meaning to “cautious”?",topic:"English",o:["ordinary", "uncertain", "careful", "distant"],a:2,e:"Cautious means careful."},
{q:"Which word is the opposite of “cautious”?",topic:"English",o:["reckless", "neutral", "careful", "similar"],a:0,e:"The opposite of cautious is reckless."},
{q:"Which word is closest in meaning to “complex”?",topic:"English",o:["distant", "uncertain", "complicated", "ordinary"],a:2,e:"Complex means complicated."},
{q:"Which word is the opposite of “complex”?",topic:"English",o:["similar", "neutral", "complicated", "simple"],a:3,e:"The opposite of complex is simple."},
{q:"Which word is closest in meaning to “conceal”?",topic:"English",o:["distant", "uncertain", "hide", "ordinary"],a:2,e:"Conceal means hide."},
{q:"Which word is the opposite of “conceal”?",topic:"English",o:["hide", "similar", "reveal", "neutral"],a:2,e:"The opposite of conceal is reveal."},
{q:"Which word is closest in meaning to “confident”?",topic:"English",o:["distant", "uncertain", "ordinary", "assured"],a:3,e:"Confident means assured."},
{q:"Which word is the opposite of “confident”?",topic:"English",o:["assured", "similar", "neutral", "uncertain"],a:3,e:"The opposite of confident is uncertain."},

{q:"Which word is closest in meaning to “diligent”?",topic:"English",o:["ordinary", "uncertain", "distant", "hardworking"],a:3,e:"Diligent means hardworking."},
{q:"Which word is the opposite of “diligent”?",topic:"English",o:["similar", "hardworking", "neutral", "lazy"],a:3,e:"The opposite of diligent is lazy."},
{q:"Which word is closest in meaning to “diminish”?",topic:"English",o:["uncertain", "ordinary", "distant", "decrease"],a:3,e:"Diminish means decrease."},
{q:"Which word is the opposite of “diminish”?",topic:"English",o:["increase", "neutral", "similar", "decrease"],a:0,e:"The opposite of diminish is increase."},
{q:"Which word is closest in meaning to “eager”?",topic:"English",o:["keen", "ordinary", "uncertain", "distant"],a:0,e:"Eager means keen."},
{q:"Which word is the opposite of “eager”?",topic:"English",o:["reluctant", "keen", "neutral", "similar"],a:0,e:"The opposite of eager is reluctant."},
{q:"Which word is closest in meaning to “expand”?",topic:"English",o:["ordinary", "enlarge", "distant", "uncertain"],a:1,e:"Expand means enlarge."},
{q:"Which word is the opposite of “expand”?",topic:"English",o:["contract", "similar", "enlarge", "neutral"],a:0,e:"The opposite of expand is contract."},
{q:"Which word is closest in meaning to “fragile”?",topic:"English",o:["delicate", "distant", "ordinary", "uncertain"],a:0,e:"Fragile means delicate."},
{q:"Which word is the opposite of “fragile”?",topic:"English",o:["delicate", " sturdy", "neutral", "similar"],a:1,e:"The opposite of fragile is  sturdy."},

{q:"Which word is closest in meaning to “frequent”?",topic:"English",o:["ordinary", "common", "uncertain", "distant"],a:1,e:"Frequent means common."},
{q:"Which word is the opposite of “frequent”?",topic:"English",o:["similar", "common", "neutral", "rare"],a:3,e:"The opposite of frequent is rare."},
{q:"Which word is closest in meaning to “generous”?",topic:"English",o:["giving", "ordinary", "uncertain", "distant"],a:0,e:"Generous means giving."},
{q:"Which word is the opposite of “generous”?",topic:"English",o:["similar", "giving", "selfish", "neutral"],a:2,e:"The opposite of generous is selfish."},
{q:"Which word is closest in meaning to “genuine”?",topic:"English",o:["uncertain", "distant", "ordinary", "authentic"],a:3,e:"Genuine means authentic."},
{q:"Which word is the opposite of “genuine”?",topic:"English",o:["neutral", "fake", "similar", "authentic"],a:1,e:"The opposite of genuine is fake."},
{q:"Which word is closest in meaning to “hostile”?",topic:"English",o:["distant", "ordinary", "unfriendly", "uncertain"],a:2,e:"Hostile means unfriendly."},
{q:"Which word is the opposite of “hostile”?",topic:"English",o:["neutral", "unfriendly", "similar", "friendly"],a:3,e:"The opposite of hostile is friendly."},
{q:"Which word is closest in meaning to “humble”?",topic:"English",o:["distant", "ordinary", "uncertain", "modest"],a:3,e:"Humble means modest."},
{q:"Which word is the opposite of “humble”?",topic:"English",o:["neutral", "arrogant", "similar", "modest"],a:1,e:"The opposite of humble is arrogant."},

{q:"Which word is closest in meaning to “identical”?",topic:"English",o:["same", "uncertain", "ordinary", "distant"],a:0,e:"Identical means same."},
{q:"Which word is the opposite of “identical”?",topic:"English",o:["different", "neutral", "similar", "same"],a:0,e:"The opposite of identical is different."},
{q:"Which word is closest in meaning to “impartial”?",topic:"English",o:["ordinary", "fair", "distant", "uncertain"],a:1,e:"Impartial means fair."},
{q:"Which word is the opposite of “impartial”?",topic:"English",o:["similar", "fair", "neutral", "biased"],a:3,e:"The opposite of impartial is biased."},
{q:"Which word is closest in meaning to “include”?",topic:"English",o:["distant", "ordinary", "uncertain", "contain"],a:3,e:"Include means contain."},
{q:"Which word is the opposite of “include”?",topic:"English",o:["neutral", "contain", "exclude", "similar"],a:2,e:"The opposite of include is exclude."},
{q:"Which word is closest in meaning to “innocent”?",topic:"English",o:["uncertain", "ordinary", "blameless", "distant"],a:2,e:"Innocent means blameless."},
{q:"Which word is the opposite of “innocent”?",topic:"English",o:["neutral", "guilty", "blameless", "similar"],a:1,e:"The opposite of innocent is guilty."},
{q:"Which word is closest in meaning to “intelligent”?",topic:"English",o:["ordinary", "clever", "uncertain", "distant"],a:1,e:"Intelligent means clever."},
{q:"Which word is the opposite of “intelligent”?",topic:"English",o:["clever", "neutral", "similar", "unintelligent"],a:3,e:"The opposite of intelligent is unintelligent."},

{q:"Which word is closest in meaning to “joyful”?",topic:"English",o:["happy", "ordinary", "uncertain", "distant"],a:0,e:"Joyful means happy."},
{q:"Which word is the opposite of “joyful”?",topic:"English",o:["happy", "similar", "miserable", "neutral"],a:2,e:"The opposite of joyful is miserable."},
{q:"Which word is closest in meaning to “mandatory”?",topic:"English",o:["uncertain", "compulsory", "distant", "ordinary"],a:1,e:"Mandatory means compulsory."},
{q:"Which word is the opposite of “mandatory”?",topic:"English",o:["compulsory", "optional", "neutral", "similar"],a:1,e:"The opposite of mandatory is optional."},
{q:"Which word is closest in meaning to “mature”?",topic:"English",o:["distant", "developed", "uncertain", "ordinary"],a:1,e:"Mature means developed."},
{q:"Which word is the opposite of “mature”?",topic:"English",o:["developed", "neutral", "similar", "immature"],a:3,e:"The opposite of mature is immature."},
{q:"Which word is closest in meaning to “narrow”?",topic:"English",o:["ordinary", "distant", "slim", "uncertain"],a:2,e:"Narrow means slim."},
{q:"Which word is the opposite of “narrow”?",topic:"English",o:["slim", "similar", "wide", "neutral"],a:2,e:"The opposite of narrow is wide."},
{q:"Which word is closest in meaning to “obvious”?",topic:"English",o:["uncertain", "distant", "clear", "ordinary"],a:2,e:"Obvious means clear."},
{q:"Which word is the opposite of “obvious”?",topic:"English",o:["clear", "similar", "neutral", "obscure"],a:3,e:"The opposite of obvious is obscure."},

{q:"Which word is closest in meaning to “optimistic”?",topic:"English",o:["distant", "hopeful", "ordinary", "uncertain"],a:1,e:"Optimistic means hopeful."},
{q:"Which word is the opposite of “optimistic”?",topic:"English",o:["neutral", "hopeful", "pessimistic", "similar"],a:2,e:"The opposite of optimistic is pessimistic."},
{q:"Which word is closest in meaning to “ordinary”?",topic:"English",o:["usual", "ordinary", "uncertain", "distant"],a:0,e:"Ordinary means usual."},
{q:"Which word is the opposite of “ordinary”?",topic:"English",o:["usual", "similar", "exceptional", "neutral"],a:2,e:"The opposite of ordinary is exceptional."},
{q:"Which word is closest in meaning to “permanent”?",topic:"English",o:["ordinary", "uncertain", "distant", "lasting"],a:3,e:"Permanent means lasting."},
{q:"Which word is the opposite of “permanent”?",topic:"English",o:["similar", "temporary", "lasting", "neutral"],a:1,e:"The opposite of permanent is temporary."},
{q:"Which word is closest in meaning to “polite”?",topic:"English",o:["ordinary", "uncertain", "distant", "courteous"],a:3,e:"Polite means courteous."},
{q:"Which word is the opposite of “polite”?",topic:"English",o:["similar", "neutral", "courteous", "rude"],a:3,e:"The opposite of polite is rude."},
{q:"Which word is closest in meaning to “precise”?",topic:"English",o:["distant", "exact", "uncertain", "ordinary"],a:1,e:"Precise means exact."},
{q:"Which word is the opposite of “precise”?",topic:"English",o:["vague", "exact", "neutral", "similar"],a:0,e:"The opposite of precise is vague."},

{q:"Which word is closest in meaning to “rapid”?",topic:"English",o:["distant", "ordinary", "uncertain", "swift"],a:3,e:"Rapid means swift."},
{q:"Which word is the opposite of “rapid”?",topic:"English",o:["swift", "neutral", "slow", "similar"],a:2,e:"The opposite of rapid is slow."},
{q:"Which word is closest in meaning to “reluctant”?",topic:"English",o:["ordinary", "uncertain", "distant", "unwilling"],a:3,e:"Reluctant means unwilling."},
{q:"Which word is the opposite of “reluctant”?",topic:"English",o:["unwilling", "similar", "neutral", "willing"],a:3,e:"The opposite of reluctant is willing."},
{q:"Which word is closest in meaning to “remote”?",topic:"English",o:["uncertain", "distant", "ordinary", "unrelated"],a:1,e:"Remote means distant."},
{q:"Which word is the opposite of “remote”?",topic:"English",o:["similar", "neutral", "distant", "near"],a:3,e:"The opposite of remote is near."},
{q:"Which word is closest in meaning to “rigid”?",topic:"English",o:["stiff", "ordinary", "distant", "uncertain"],a:0,e:"Rigid means stiff."},
{q:"Which word is the opposite of “rigid”?",topic:"English",o:["similar", "stiff", "neutral", "flexible"],a:3,e:"The opposite of rigid is flexible."},
{q:"Which word is closest in meaning to “scarce”?",topic:"English",o:["distant", "uncertain", "limited", "ordinary"],a:2,e:"Scarce means limited."},
{q:"Which word is the opposite of “scarce”?",topic:"English",o:["similar", "limited", "neutral", "abundant"],a:3,e:"The opposite of scarce is abundant."},

{q:"Which word is closest in meaning to “silent”?",topic:"English",o:["distant", "ordinary", "quiet", "uncertain"],a:2,e:"Silent means quiet."},
{q:"Which word is the opposite of “silent”?",topic:"English",o:["neutral", "noisy", "similar", "quiet"],a:1,e:"The opposite of silent is noisy."},
{q:"Which word is closest in meaning to “strengthen”?",topic:"English",o:["ordinary", "reinforce", "distant", "uncertain"],a:1,e:"Strengthen means reinforce."},
{q:"Which word is the opposite of “strengthen”?",topic:"English",o:["weaken", "similar", "reinforce", "neutral"],a:0,e:"The opposite of strengthen is weaken."},
{q:"Which word is closest in meaning to “superior”?",topic:"English",o:["ordinary", "better", "distant", "uncertain"],a:1,e:"Superior means better."},
{q:"Which word is the opposite of “superior”?",topic:"English",o:["neutral", "similar", "inferior", "better"],a:2,e:"The opposite of superior is inferior."},
{q:"Which word is closest in meaning to “transparent”?",topic:"English",o:["clear", "distant", "ordinary", "uncertain"],a:0,e:"Transparent means clear."},
{q:"Which word is the opposite of “transparent”?",topic:"English",o:["neutral", "opaque", "similar", "clear"],a:1,e:"The opposite of transparent is opaque."},
{q:"Which word is closest in meaning to “vacant”?",topic:"English",o:["distant", "empty", "uncertain", "ordinary"],a:1,e:"Vacant means empty."},
{q:"Which word is the opposite of “vacant”?",topic:"English",o:["empty", "similar", "neutral", "occupied"],a:3,e:"The opposite of vacant is occupied."},

{q:"Which word is closest in meaning to “valuable”?",topic:"English",o:["distant", "ordinary", "precious", "uncertain"],a:2,e:"Valuable means precious."},
{q:"Which word is the opposite of “valuable”?",topic:"English",o:["neutral", "similar", "precious", "worthless"],a:3,e:"The opposite of valuable is worthless."},
{q:"Which word is closest in meaning to “victory”?",topic:"English",o:["ordinary", "uncertain", "triumph", "distant"],a:2,e:"Victory means triumph."},
{q:"Which word is the opposite of “victory”?",topic:"English",o:["triumph", "neutral", "defeat", "similar"],a:2,e:"The opposite of victory is defeat."},
{q:"Which word is closest in meaning to “visible”?",topic:"English",o:["uncertain", "seen", "ordinary", "distant"],a:1,e:"Visible means seen."},
{q:"Which word is the opposite of “visible”?",topic:"English",o:["invisible", "neutral", "seen", "similar"],a:0,e:"The opposite of visible is invisible."},
{q:"Which word is closest in meaning to “weary”?",topic:"English",o:["distant", "uncertain", "ordinary", "tired"],a:3,e:"Weary means tired."},
{q:"Which word is the opposite of “weary”?",topic:"English",o:["neutral", "tired", "energetic", "similar"],a:2,e:"The opposite of weary is energetic."},
{q:"Which word is closest in meaning to “wisdom”?",topic:"English",o:["distant", "good judgement", "ordinary", "uncertain"],a:1,e:"Wisdom means good judgement."},
{q:"Which word is the opposite of “wisdom”?",topic:"English",o:["similar", "foolishness", "good judgement", "neutral"],a:1,e:"The opposite of wisdom is foolishness."},

// ======================================
//  1,100 QUESTIONS  COMPLETE HERE.
// ======================================

{q:"Which word is closest in meaning to “adapt”?",topic:"English",o:["adjust", "distant", "ordinary", "uncertain"],a:0,e:"Adapt means adjust."},
{q:"Which word is the opposite of “adapt”?",topic:"English",o:["adjust", "resist", "similar", "neutral"],a:1,e:"The opposite of adapt is resist."},
{q:"Which word is closest in meaning to “adequate”?",topic:"English",o:["distant", "ordinary", "sufficient", "uncertain"],a:2,e:"Adequate means sufficient."},
{q:"Which word is the opposite of “adequate”?",topic:"English",o:["neutral", "sufficient", "insufficient", "similar"],a:2,e:"The opposite of adequate is insufficient."},
{q:"Which word is closest in meaning to “adverse”?",topic:"English",o:["unfavourable", "ordinary", "distant", "uncertain"],a:0,e:"Adverse means unfavourable."},
{q:"Which word is the opposite of “adverse”?",topic:"English",o:["unfavourable", "favourable", "neutral", "similar"],a:1,e:"The opposite of adverse is favourable."},
{q:"Which word is closest in meaning to “ambiguous”?",topic:"English",o:["ordinary", "uncertain", "distant", "unclear"],a:3,e:"Ambiguous means unclear."},
{q:"Which word is the opposite of “ambiguous”?",topic:"English",o:["neutral", "unclear", "similar", "clear"],a:3,e:"The opposite of ambiguous is clear."},
{q:"Which word is closest in meaning to “ample”?",topic:"English",o:["plentiful", "uncertain", "distant", "ordinary"],a:0,e:"Ample means plentiful."},
{q:"Which word is the opposite of “ample”?",topic:"English",o:["similar", "neutral", "limited", "plentiful"],a:2,e:"The opposite of ample is limited."},

{q:"Which word is closest in meaning to “anxious”?",topic:"English",o:["ordinary", "uncertain", "distant", "worried"],a:3,e:"Anxious means worried."},
{q:"Which word is the opposite of “anxious”?",topic:"English",o:["neutral", "relaxed", "similar", "worried"],a:1,e:"The opposite of anxious is relaxed."},
{q:"Which word is closest in meaning to “apparent”?",topic:"English",o:["distant", "evident", "uncertain", "ordinary"],a:1,e:"Apparent means evident."},
{q:"Which word is the opposite of “apparent”?",topic:"English",o:["neutral", "hidden", "evident", "similar"],a:1,e:"The opposite of apparent is hidden."},
{q:"Which word is closest in meaning to “assemble”?",topic:"English",o:["gather", "ordinary", "distant", "uncertain"],a:0,e:"Assemble means gather."},
{q:"Which word is the opposite of “assemble”?",topic:"English",o:["neutral", "scatter", "similar", "gather"],a:1,e:"The opposite of assemble is scatter."},
{q:"Which word is closest in meaning to “beneficial”?",topic:"English",o:["helpful", "uncertain", "ordinary", "distant"],a:0,e:"Beneficial means helpful."},
{q:"Which word is the opposite of “beneficial”?",topic:"English",o:["harmful", "helpful", "similar", "neutral"],a:0,e:"The opposite of beneficial is harmful."},
{q:"Which word is closest in meaning to “cease”?",topic:"English",o:["uncertain", "ordinary", "distant", "stop"],a:3,e:"Cease means stop."},
{q:"Which word is the opposite of “cease”?",topic:"English",o:["stop", "similar", "continue", "neutral"],a:2,e:"The opposite of cease is continue."},

{q:"Which word is closest in meaning to “combine”?",topic:"English",o:["merge", "uncertain", "distant", "ordinary"],a:0,e:"Combine means merge."},
{q:"Which word is the opposite of “combine”?",topic:"English",o:["merge", "similar", "neutral", "separate"],a:3,e:"The opposite of combine is separate."},
{q:"Which word is closest in meaning to “compassion”?",topic:"English",o:["uncertain", "sympathy", "ordinary", "distant"],a:1,e:"Compassion means sympathy."},
{q:"Which word is the opposite of “compassion”?",topic:"English",o:["neutral", "cruelty", "sympathy", "similar"],a:1,e:"The opposite of compassion is cruelty."},
{q:"Which word is closest in meaning to “courteous”?",topic:"English",o:["ordinary", "polite", "uncertain", "distant"],a:1,e:"Courteous means polite."},
{q:"Which word is the opposite of “courteous”?",topic:"English",o:["polite", "impolite", "neutral", "similar"],a:1,e:"The opposite of courteous is impolite."},
{q:"Which word is closest in meaning to “decline”?",topic:"English",o:["distant", "ordinary", "decrease", "uncertain"],a:2,e:"Decline means decrease."},
{q:"Which word is the opposite of “decline”?",topic:"English",o:["similar", "rise", "neutral", "decrease"],a:1,e:"The opposite of decline is rise."},
{q:"Which word is closest in meaning to “defend”?",topic:"English",o:["protect", "ordinary", "distant", "uncertain"],a:0,e:"Defend means protect."},
{q:"Which word is the opposite of “defend”?",topic:"English",o:["neutral", "protect", "attack", "similar"],a:2,e:"The opposite of defend is attack."},

{q:"Which word is closest in meaning to “dense”?",topic:"English",o:["ordinary", "uncertain", "thick", "distant"],a:2,e:"Dense means thick."},
{q:"Which word is the opposite of “dense”?",topic:"English",o:["sparse", "thick", "neutral", "similar"],a:0,e:"The opposite of dense is sparse."},
{q:"Which word is closest in meaning to “depart”?",topic:"English",o:["leave", "distant", "ordinary", "uncertain"],a:0,e:"Depart means leave."},
{q:"Which word is the opposite of “depart”?",topic:"English",o:["similar", "leave", "arrive", "neutral"],a:2,e:"The opposite of depart is arrive."},
{q:"Which word is closest in meaning to “dread”?",topic:"English",o:["distant", "uncertain", "ordinary", "fear"],a:3,e:"Dread means fear."},
{q:"Which word is the opposite of “dread”?",topic:"English",o:["confidence", "similar", "fear", "neutral"],a:0,e:"The opposite of dread is confidence."},
{q:"Which word is closest in meaning to “elaborate”?",topic:"English",o:["uncertain", "ordinary", "detailed", "distant"],a:2,e:"Elaborate means detailed."},
{q:"Which word is the opposite of “elaborate”?",topic:"English",o:["similar", "neutral", "detailed", "simple"],a:3,e:"The opposite of elaborate is simple."},
{q:"Which word is closest in meaning to “emerge”?",topic:"English",o:["uncertain", "ordinary", "appear", "distant"],a:2,e:"Emerge means appear."},
{q:"Which word is the opposite of “emerge”?",topic:"English",o:["neutral", "appear", "disappear", "similar"],a:2,e:"The opposite of emerge is disappear."},

{q:"Which word is closest in meaning to “essential”?",topic:"English",o:["uncertain", "necessary", "distant", "ordinary"],a:1,e:"Essential means necessary."},
{q:"Which word is the opposite of “essential”?",topic:"English",o:["unnecessary", "similar", "neutral", "necessary"],a:0,e:"The opposite of essential is unnecessary."},
{q:"Which word is closest in meaning to “exaggerate”?",topic:"English",o:["distant", "uncertain", "overstate", "ordinary"],a:2,e:"Exaggerate means overstate."},
{q:"Which word is the opposite of “exaggerate”?",topic:"English",o:["understate", "overstate", "similar", "neutral"],a:0,e:"The opposite of exaggerate is understate."},
{q:"Which word is closest in meaning to “exclude”?",topic:"English",o:["uncertain", "ordinary", "distant", "omit"],a:3,e:"Exclude means omit."},
{q:"Which word is the opposite of “exclude”?",topic:"English",o:["include", "neutral", "omit", "similar"],a:0,e:"The opposite of exclude is include."},
{q:"Which word is closest in meaning to “exhausted”?",topic:"English",o:["uncertain", "ordinary", "distant", "tired"],a:3,e:"Exhausted means tired."},
{q:"Which word is the opposite of “exhausted”?",topic:"English",o:["energetic", "similar", "tired", "neutral"],a:0,e:"The opposite of exhausted is energetic."},
{q:"Which word is closest in meaning to “feasible”?",topic:"English",o:["ordinary", "possible", "uncertain", "distant"],a:1,e:"Feasible means possible."},
{q:"Which word is the opposite of “feasible”?",topic:"English",o:["similar", "neutral", "impossible", "possible"],a:2,e:"The opposite of feasible is impossible."},

{q:"Which word is closest in meaning to “gloomy”?",topic:"English",o:["uncertain", "distant", "ordinary", "sad"],a:3,e:"Gloomy means sad."},
{q:"Which word is the opposite of “gloomy”?",topic:"English",o:["neutral", "similar", "sad", "cheerful"],a:3,e:"The opposite of gloomy is cheerful."},
{q:"Which word is closest in meaning to “grateful”?",topic:"English",o:["distant", "thankful", "ordinary", "uncertain"],a:1,e:"Grateful means thankful."},
{q:"Which word is the opposite of “grateful”?",topic:"English",o:["similar", "ungrateful", "thankful", "neutral"],a:1,e:"The opposite of grateful is ungrateful."},
{q:"Which word is closest in meaning to “hinder”?",topic:"English",o:["ordinary", "distant", "uncertain", "obstruct"],a:3,e:"Hinder means obstruct."},
{q:"Which word is the opposite of “hinder”?",topic:"English",o:["assist", "neutral", "obstruct", "similar"],a:0,e:"The opposite of hinder is assist."},
{q:"Which word is closest in meaning to “improve”?",topic:"English",o:["distant", "ordinary", "enhance", "uncertain"],a:2,e:"Improve means enhance."},
{q:"Which word is the opposite of “improve”?",topic:"English",o:["worsen", "neutral", "similar", "enhance"],a:0,e:"The opposite of improve is worsen."},
{q:"Which word is closest in meaning to “inevitable”?",topic:"English",o:["uncertain", "distant", "ordinary", "unavoidable"],a:3,e:"Inevitable means unavoidable."},
{q:"Which word is the opposite of “inevitable”?",topic:"English",o:["avoidable", "similar", "unavoidable", "neutral"],a:0,e:"The opposite of inevitable is avoidable."},

{q:"Which word is closest in meaning to “inferior”?",topic:"English",o:["ordinary", "distant", "lower", "uncertain"],a:2,e:"Inferior means lower."},
{q:"Which word is the opposite of “inferior”?",topic:"English",o:["lower", "neutral", "superior", "similar"],a:2,e:"The opposite of inferior is superior."},
{q:"Which word is closest in meaning to “liberty”?",topic:"English",o:["freedom", "distant", "ordinary", "uncertain"],a:0,e:"Liberty means freedom."},
{q:"Which word is the opposite of “liberty”?",topic:"English",o:["neutral", "similar", "captivity", "freedom"],a:2,e:"The opposite of liberty is captivity."},
{q:"Which word is closest in meaning to “loyal”?",topic:"English",o:["distant", "ordinary", "uncertain", "faithful"],a:3,e:"Loyal means faithful."},
{q:"Which word is the opposite of “loyal”?",topic:"English",o:["disloyal", "neutral", "similar", "faithful"],a:0,e:"The opposite of loyal is disloyal."},
{q:"Which word is closest in meaning to “negligent”?",topic:"English",o:["careless", "ordinary", "uncertain", "distant"],a:0,e:"Negligent means careless."},
{q:"Which word is the opposite of “negligent”?",topic:"English",o:["neutral", "careful", "careless", "similar"],a:1,e:"The opposite of negligent is careful."},
{q:"Which word is closest in meaning to “obtain”?",topic:"English",o:["distant", "acquire", "uncertain", "ordinary"],a:1,e:"Obtain means acquire."},
{q:"Which word is the opposite of “obtain”?",topic:"English",o:["lose", "similar", "neutral", "acquire"],a:0,e:"The opposite of obtain is lose."},
  
{q:"Which word is closest in meaning to “peril”?",topic:"English",o:["ordinary", "distant", "uncertain", "danger"],a:3,e:"Peril means danger."},
{q:"Which word is the opposite of “peril”?",topic:"English",o:["safety", "similar", "danger", "neutral"],a:0,e:"The opposite of peril is safety."},
{q:"Which word is closest in meaning to “prohibit”?",topic:"English",o:["uncertain", "forbid", "ordinary", "distant"],a:1,e:"Prohibit means forbid."},
{q:"Which word is the opposite of “prohibit”?",topic:"English",o:["neutral", "similar", "permit", "forbid"],a:2,e:"The opposite of prohibit is permit."},
{q:"Which word is closest in meaning to “relevant”?",topic:"English",o:["uncertain", "distant", "related", "ordinary"],a:2,e:"Relevant means related."},
{q:"Which word is the opposite of “relevant”?",topic:"English",o:["irrelevant", "related", "similar", "neutral"],a:0,e:"The opposite of relevant is irrelevant."},
{q:"Which word is closest in meaning to “relieve”?",topic:"English",o:["ordinary", "distant", "uncertain", "ease"],a:3,e:"Relieve means ease."},
{q:"Which word is the opposite of “relieve”?",topic:"English",o:["aggravate", "similar", "neutral", "ease"],a:0,e:"The opposite of relieve is aggravate."},
{q:"Which word is closest in meaning to “retain”?",topic:"English",o:["ordinary", "keep", "distant", "uncertain"],a:1,e:"Retain means keep."},
{q:"Which word is the opposite of “retain”?",topic:"English",o:["similar", "neutral", "release", "keep"],a:2,e:"The opposite of retain is release."},

{q:"Which word is closest in meaning to “robust”?",topic:"English",o:["uncertain", "ordinary", "distant", "strong"],a:3,e:"Robust means strong."},
{q:"Which word is the opposite of “robust”?",topic:"English",o:["weak", "similar", "neutral", "strong"],a:0,e:"The opposite of robust is weak."},
{q:"Which word is closest in meaning to “temporary”?",topic:"English",o:["uncertain", "short-term", "distant", "ordinary"],a:1,e:"Temporary means short-term."},
{q:"Which word is the opposite of “temporary”?",topic:"English",o:["short-term", "similar", "neutral", "permanent"],a:3,e:"The opposite of temporary is permanent."},
{q:"Which word is closest in meaning to “unite”?",topic:"English",o:["uncertain", "distant", "join", "ordinary"],a:2,e:"Unite means join."},
{q:"Which word is the opposite of “unite”?",topic:"English",o:["join", "similar", "neutral", "divide"],a:3,e:"The opposite of unite is divide."},
{q:"Which word is closest in meaning to “verify”?",topic:"English",o:["confirm", "distant", "uncertain", "ordinary"],a:0,e:"Verify means confirm."},
{q:"Which word is the opposite of “verify”?",topic:"English",o:["neutral", "confirm", "disprove", "similar"],a:2,e:"The opposite of verify is disprove."},
{q:"Which word is closest in meaning to “vital”?",topic:"English",o:["essential", "distant", "uncertain", "ordinary"],a:0,e:"Vital means essential."},
{q:"Which word is the opposite of “vital”?",topic:"English",o:["neutral", "unimportant", "essential", "similar"],a:1,e:"The opposite of vital is unimportant."},

{q:"Which word is closest in meaning to “wary”?",topic:"English",o:["distant", "ordinary", "uncertain", "cautious"],a:3,e:"Wary means cautious."},
{q:"Which word is the opposite of “wary”?",topic:"English",o:["carefree", "neutral", "cautious", "similar"],a:0,e:"The opposite of wary is carefree."},
{q:"Which word is closest in meaning to “yield”?",topic:"English",o:["uncertain", "distant", "produce", "ordinary"],a:2,e:"Yield means produce."},
{q:"Which word is the opposite of “yield”?",topic:"English",o:["produce", "similar", "neutral", "withhold"],a:3,e:"The opposite of yield is withhold."},
{q:"Which word is closest in meaning to “zeal”?",topic:"English",o:["uncertain", "enthusiasm", "distant", "ordinary"],a:1,e:"Zeal means enthusiasm."},
{q:"Which word is the opposite of “zeal”?",topic:"English",o:["enthusiasm", "neutral", "apathy", "similar"],a:2,e:"The opposite of zeal is apathy."},
{q:"Which word is closest in meaning to “conclude”?",topic:"English",o:["distant", "ordinary", "uncertain", "finish"],a:3,e:"Conclude means finish."},
{q:"Which word is the opposite of “conclude”?",topic:"English",o:["similar", "finish", "neutral", "begin"],a:3,e:"The opposite of conclude is begin."},
{q:"Which word is closest in meaning to “elevate”?",topic:"English",o:["raise", "distant", "ordinary", "uncertain"],a:0,e:"Elevate means raise."},
{q:"Which word is the opposite of “elevate”?",topic:"English",o:["raise", "lower", "similar", "neutral"],a:1,e:"The opposite of elevate is lower."},

// ======================================
//  1,200 QUESTIONS  COMPLETE HERE.
// ======================================

{q:"What is Photosynthesis?",topic:"Science",o:["blood clotting", "cell division", "protein digestion", "the process by which plants use light to make food"],a:3,e:"Photosynthesis: the process by which plants use light to make food."},
{q:"Which option correctly describes Photosynthesis?",topic:"Science",o:["the process by which plants use light to make food", "cell division", "protein digestion", "blood clotting"],a:0,e:"Photosynthesis: the process by which plants use light to make food."},
{q:"Select the correct fact about Photosynthesis.",topic:"Science",o:["the process by which plants use light to make food", "cell division", "blood clotting", "protein digestion"],a:0,e:"Photosynthesis: the process by which plants use light to make food."},
{q:"Photosynthesis is best associated with which answer?",topic:"Science",o:["blood clotting", "the process by which plants use light to make food", "cell division", "protein digestion"],a:1,e:"Photosynthesis: the process by which plants use light to make food."},
{q:"What is Mitochondrion?",topic:"Science",o:["DNA packaging", "lipid storage", "protein synthesis", "the main site of ATP production in many cells"],a:3,e:"Mitochondrion: the main site of ATP production in many cells."},
{q:"Which option correctly describes Mitochondrion?",topic:"Science",o:["lipid storage", "the main site of ATP production in many cells", "DNA packaging", "protein synthesis"],a:1,e:"Mitochondrion: the main site of ATP production in many cells."},
{q:"Select the correct fact about Mitochondrion.",topic:"Science",o:["lipid storage", "the main site of ATP production in many cells", "protein synthesis", "DNA packaging"],a:1,e:"Mitochondrion: the main site of ATP production in many cells."},
{q:"Mitochondrion is best associated with which answer?",topic:"Science",o:["lipid storage", "DNA packaging", "the main site of ATP production in many cells", "protein synthesis"],a:2,e:"Mitochondrion: the main site of ATP production in many cells."},
{q:"What is Ribosome?",topic:"Science",o:["oxygen transport", "fat digestion", "DNA replication", "the site of protein synthesis"],a:3,e:"Ribosome: the site of protein synthesis."},
{q:"Which option correctly describes Ribosome?",topic:"Science",o:["the site of protein synthesis", "DNA replication", "fat digestion", "oxygen transport"],a:0,e:"Ribosome: the site of protein synthesis."},

{q:"Select the correct fact about Ribosome.",topic:"Science",o:["DNA replication", "fat digestion", "the site of protein synthesis", "oxygen transport"],a:2,e:"Ribosome: the site of protein synthesis."},
{q:"Ribosome is best associated with which answer?",topic:"Science",o:["oxygen transport", "DNA replication", "fat digestion", "the site of protein synthesis"],a:3,e:"Ribosome: the site of protein synthesis."},
{q:"What is DNA?",topic:"Science",o:["a clotting cell", "a digestive enzyme", "the main blood pigment", "the molecule that stores hereditary information"],a:3,e:"DNA: the molecule that stores hereditary information."},
{q:"Which option correctly describes DNA?",topic:"Science",o:["the molecule that stores hereditary information", "the main blood pigment", "a digestive enzyme", "a clotting cell"],a:0,e:"DNA: the molecule that stores hereditary information."},
{q:"Select the correct fact about DNA.",topic:"Science",o:["the main blood pigment", "a clotting cell", "a digestive enzyme", "the molecule that stores hereditary information"],a:3,e:"DNA: the molecule that stores hereditary information."},
{q:"DNA is best associated with which answer?",topic:"Science",o:["a digestive enzyme", "the molecule that stores hereditary information", "the main blood pigment", "a clotting cell"],a:1,e:"DNA: the molecule that stores hereditary information."},
{q:"What is Osmosis?",topic:"Science",o:["formation of antibodies", "breakdown of glucose", "movement of water across a selectively permeable membrane", "movement of proteins using ATP"],a:2,e:"Osmosis: movement of water across a selectively permeable membrane."},
{q:"Which option correctly describes Osmosis?",topic:"Science",o:["movement of water across a selectively permeable membrane", "movement of proteins using ATP", "breakdown of glucose", "formation of antibodies"],a:0,e:"Osmosis: movement of water across a selectively permeable membrane."},
{q:"Select the correct fact about Osmosis.",topic:"Science",o:["breakdown of glucose", "movement of proteins using ATP", "movement of water across a selectively permeable membrane", "formation of antibodies"],a:2,e:"Osmosis: movement of water across a selectively permeable membrane."},
{q:"Osmosis is best associated with which answer?",topic:"Science",o:["breakdown of glucose", "movement of water across a selectively permeable membrane", "formation of antibodies", "movement of proteins using ATP"],a:1,e:"Osmosis: movement of water across a selectively permeable membrane."},

{q:"What is Diffusion?",topic:"Science",o:["movement against a gradient using energy", "movement of particles from higher to lower concentration", "cell engulfment", "blood coagulation"],a:1,e:"Diffusion: movement of particles from higher to lower concentration."},
{q:"Which option correctly describes Diffusion?",topic:"Science",o:["movement against a gradient using energy", "blood coagulation", "movement of particles from higher to lower concentration", "cell engulfment"],a:2,e:"Diffusion: movement of particles from higher to lower concentration."},
{q:"Select the correct fact about Diffusion.",topic:"Science",o:["blood coagulation", "movement of particles from higher to lower concentration", "cell engulfment", "movement against a gradient using energy"],a:1,e:"Diffusion: movement of particles from higher to lower concentration."},
{q:"Diffusion is best associated with which answer?",topic:"Science",o:["blood coagulation", "movement of particles from higher to lower concentration", "movement against a gradient using energy", "cell engulfment"],a:1,e:"Diffusion: movement of particles from higher to lower concentration."},
{q:"What is Neuron?",topic:"Science",o:["a cell specialized for transmitting nerve impulses", "a bone-forming cell", "a red blood cell", "a liver enzyme"],a:0,e:"Neuron: a cell specialized for transmitting nerve impulses."},
{q:"Which option correctly describes Neuron?",topic:"Science",o:["a liver enzyme", "a bone-forming cell", "a cell specialized for transmitting nerve impulses", "a red blood cell"],a:2,e:"Neuron: a cell specialized for transmitting nerve impulses."},
{q:"Select the correct fact about Neuron.",topic:"Science",o:["a cell specialized for transmitting nerve impulses", "a bone-forming cell", "a red blood cell", "a liver enzyme"],a:0,e:"Neuron: a cell specialized for transmitting nerve impulses."},
{q:"Neuron is best associated with which answer?",topic:"Science",o:["a liver enzyme", "a cell specialized for transmitting nerve impulses", "a bone-forming cell", "a red blood cell"],a:1,e:"Neuron: a cell specialized for transmitting nerve impulses."},
{q:"What is Insulin?",topic:"Science",o:["a digestive acid", "a clotting factor", "a hormone that lowers blood glucose", "a hormone that raises calcium"],a:2,e:"Insulin: a hormone that lowers blood glucose."},
{q:"Which option correctly describes Insulin?",topic:"Science",o:["a digestive acid", "a hormone that raises calcium", "a hormone that lowers blood glucose", "a clotting factor"],a:2,e:"Insulin: a hormone that lowers blood glucose."},

{q:"Select the correct fact about Insulin.",topic:"Science",o:["a clotting factor", "a hormone that raises calcium", "a digestive acid", "a hormone that lowers blood glucose"],a:3,e:"Insulin: a hormone that lowers blood glucose."},
{q:"Insulin is best associated with which answer?",topic:"Science",o:["a hormone that lowers blood glucose", "a hormone that raises calcium", "a clotting factor", "a digestive acid"],a:0,e:"Insulin: a hormone that lowers blood glucose."},
{q:"What is Glucagon?",topic:"Science",o:["a thyroid hormone", "a hormone that lowers glucose", "a plasma protein", "a hormone that raises blood glucose"],a:3,e:"Glucagon: a hormone that raises blood glucose."},
{q:"Which option correctly describes Glucagon?",topic:"Science",o:["a plasma protein", "a hormone that lowers glucose", "a hormone that raises blood glucose", "a thyroid hormone"],a:2,e:"Glucagon: a hormone that raises blood glucose."},
{q:"Select the correct fact about Glucagon.",topic:"Science",o:["a thyroid hormone", "a plasma protein", "a hormone that raises blood glucose", "a hormone that lowers glucose"],a:2,e:"Glucagon: a hormone that raises blood glucose."},
{q:"Glucagon is best associated with which answer?",topic:"Science",o:["a hormone that raises blood glucose", "a thyroid hormone", "a hormone that lowers glucose", "a plasma protein"],a:0,e:"Glucagon: a hormone that raises blood glucose."},
{q:"What is Hemoglobin?",topic:"Science",o:["the oxygen-carrying protein in red blood cells", "the main antibody", "a kidney enzyme", "a platelet receptor"],a:0,e:"Hemoglobin: the oxygen-carrying protein in red blood cells."},
{q:"Which option correctly describes Hemoglobin?",topic:"Science",o:["a kidney enzyme", "the main antibody", "the oxygen-carrying protein in red blood cells", "a platelet receptor"],a:2,e:"Hemoglobin: the oxygen-carrying protein in red blood cells."},
{q:"Select the correct fact about Hemoglobin.",topic:"Science",o:["the oxygen-carrying protein in red blood cells", "a platelet receptor", "a kidney enzyme", "the main antibody"],a:0,e:"Hemoglobin: the oxygen-carrying protein in red blood cells."},
{q:"Hemoglobin is best associated with which answer?",topic:"Science",o:["a kidney enzyme", "the oxygen-carrying protein in red blood cells", "the main antibody", "a platelet receptor"],a:1,e:"Hemoglobin: the oxygen-carrying protein in red blood cells."},

{q:"What is Platelets?",topic:"Science",o:["oxygen transport cells", "nerve cells", "cell fragments involved in haemostasis", "antibody-producing cells"],a:2,e:"Platelets: cell fragments involved in haemostasis."},
{q:"Which option correctly describes Platelets?",topic:"Science",o:["antibody-producing cells", "cell fragments involved in haemostasis", "nerve cells", "oxygen transport cells"],a:1,e:"Platelets: cell fragments involved in haemostasis."},
{q:"Select the correct fact about Platelets.",topic:"Science",o:["oxygen transport cells", "cell fragments involved in haemostasis", "nerve cells", "antibody-producing cells"],a:1,e:"Platelets: cell fragments involved in haemostasis."},
{q:"Platelets is best associated with which answer?",topic:"Science",o:["nerve cells", "antibody-producing cells", "cell fragments involved in haemostasis", "oxygen transport cells"],a:2,e:"Platelets: cell fragments involved in haemostasis."},
{q:"What is Neutrophils?",topic:"Science",o:["clotting proteins", "thyroid cells", "oxygen carriers", "white cells important in acute bacterial defence"],a:3,e:"Neutrophils: white cells important in acute bacterial defence."},
{q:"Which option correctly describes Neutrophils?",topic:"Science",o:["thyroid cells", "white cells important in acute bacterial defence", "oxygen carriers", "clotting proteins"],a:1,e:"Neutrophils: white cells important in acute bacterial defence."},
{q:"Select the correct fact about Neutrophils.",topic:"Science",o:["clotting proteins", "thyroid cells", "oxygen carriers", "white cells important in acute bacterial defence"],a:3,e:"Neutrophils: white cells important in acute bacterial defence."},
{q:"Neutrophils is best associated with which answer?",topic:"Science",o:["white cells important in acute bacterial defence", "thyroid cells", "oxygen carriers", "clotting proteins"],a:0,e:"Neutrophils: white cells important in acute bacterial defence."},
{q:"What is Antibodies?",topic:"Science",o:["enzymes that digest starch", "lipids in cell membranes", "proteins that specifically bind antigens", "molecules that carry oxygen"],a:2,e:"Antibodies: proteins that specifically bind antigens."},
{q:"Which option correctly describes Antibodies?",topic:"Science",o:["enzymes that digest starch", "proteins that specifically bind antigens", "molecules that carry oxygen", "lipids in cell membranes"],a:1,e:"Antibodies: proteins that specifically bind antigens."},

{q:"Select the correct fact about Antibodies.",topic:"Science",o:["lipids in cell membranes", "molecules that carry oxygen", "enzymes that digest starch", "proteins that specifically bind antigens"],a:3,e:"Antibodies: proteins that specifically bind antigens."},
{q:"Antibodies is best associated with which answer?",topic:"Science",o:["proteins that specifically bind antigens", "molecules that carry oxygen", "lipids in cell membranes", "enzymes that digest starch"],a:0,e:"Antibodies: proteins that specifically bind antigens."},
{q:"What is Alveoli?",topic:"Science",o:["tiny air sacs where gas exchange occurs", "the liver bile ducts", "the kidney filtration units", "the heart valves"],a:0,e:"Alveoli: tiny air sacs where gas exchange occurs."},
{q:"Which option correctly describes Alveoli?",topic:"Science",o:["the kidney filtration units", "tiny air sacs where gas exchange occurs", "the heart valves", "the liver bile ducts"],a:1,e:"Alveoli: tiny air sacs where gas exchange occurs."},
{q:"Select the correct fact about Alveoli.",topic:"Science",o:["tiny air sacs where gas exchange occurs", "the liver bile ducts", "the heart valves", "the kidney filtration units"],a:0,e:"Alveoli: tiny air sacs where gas exchange occurs."},
{q:"Alveoli is best associated with which answer?",topic:"Science",o:["the heart valves", "the kidney filtration units", "tiny air sacs where gas exchange occurs", "the liver bile ducts"],a:2,e:"Alveoli: tiny air sacs where gas exchange occurs."},
{q:"What is Nephron?",topic:"Science",o:["the functional unit of the lung", "a blood clot", "the smallest bone", "the functional unit of the kidney"],a:3,e:"Nephron: the functional unit of the kidney."},
{q:"Which option correctly describes Nephron?",topic:"Science",o:["a blood clot", "the smallest bone", "the functional unit of the lung", "the functional unit of the kidney"],a:3,e:"Nephron: the functional unit of the kidney."},
{q:"Select the correct fact about Nephron.",topic:"Science",o:["a blood clot", "the functional unit of the kidney", "the smallest bone", "the functional unit of the lung"],a:1,e:"Nephron: the functional unit of the kidney."},
{q:"Nephron is best associated with which answer?",topic:"Science",o:["the smallest bone", "a blood clot", "the functional unit of the kidney", "the functional unit of the lung"],a:2,e:"Nephron: the functional unit of the kidney."},

{q:"What is Cerebellum?",topic:"Science",o:["the hormone-producing pancreas", "the main site of vision", "the kidney cortex", "a brain region important for balance and coordination"],a:3,e:"Cerebellum: a brain region important for balance and coordination."},
{q:"Which option correctly describes Cerebellum?",topic:"Science",o:["the main site of vision", "a brain region important for balance and coordination", "the hormone-producing pancreas", "the kidney cortex"],a:1,e:"Cerebellum: a brain region important for balance and coordination."},
{q:"Select the correct fact about Cerebellum.",topic:"Science",o:["the kidney cortex", "the main site of vision", "the hormone-producing pancreas", "a brain region important for balance and coordination"],a:3,e:"Cerebellum: a brain region important for balance and coordination."},
{q:"Cerebellum is best associated with which answer?",topic:"Science",o:["the main site of vision", "a brain region important for balance and coordination", "the kidney cortex", "the hormone-producing pancreas"],a:1,e:"Cerebellum: a brain region important for balance and coordination."},
{q:"What is Aorta?",topic:"Science",o:["the largest vein entering the right atrium", "the largest artery leaving the left ventricle", "a lung air sac", "a kidney tubule"],a:1,e:"Aorta: the largest artery leaving the left ventricle."},
{q:"Which option correctly describes Aorta?",topic:"Science",o:["the largest vein entering the right atrium", "the largest artery leaving the left ventricle", "a lung air sac", "a kidney tubule"],a:1,e:"Aorta: the largest artery leaving the left ventricle."},
{q:"Select the correct fact about Aorta.",topic:"Science",o:["a lung air sac", "a kidney tubule", "the largest vein entering the right atrium", "the largest artery leaving the left ventricle"],a:3,e:"Aorta: the largest artery leaving the left ventricle."},
{q:"Aorta is best associated with which answer?",topic:"Science",o:["a lung air sac", "the largest vein entering the right atrium", "the largest artery leaving the left ventricle", "a kidney tubule"],a:2,e:"Aorta: the largest artery leaving the left ventricle."},
{q:"What is Bile?",topic:"Science",o:["an enzyme that digests protein", "a fluid that helps emulsify dietary fats", "a hormone that controls glucose", "a blood clotting factor"],a:1,e:"Bile: a fluid that helps emulsify dietary fats."},
{q:"Which option correctly describes Bile?",topic:"Science",o:["an enzyme that digests protein", "a hormone that controls glucose", "a blood clotting factor", "a fluid that helps emulsify dietary fats"],a:3,e:"Bile: a fluid that helps emulsify dietary fats."},

{q:"Select the correct fact about Bile.",topic:"Science",o:["a hormone that controls glucose", "a blood clotting factor", "an enzyme that digests protein", "a fluid that helps emulsify dietary fats"],a:3,e:"Bile: a fluid that helps emulsify dietary fats."},
{q:"Bile is best associated with which answer?",topic:"Science",o:["a fluid that helps emulsify dietary fats", "a blood clotting factor", "a hormone that controls glucose", "an enzyme that digests protein"],a:0,e:"Bile: a fluid that helps emulsify dietary fats."},
{q:"What is Amylase?",topic:"Science",o:["a protein that carries oxygen", "an enzyme that digests DNA", "an enzyme that breaks down starch", "a hormone that lowers glucose"],a:2,e:"Amylase: an enzyme that breaks down starch."},
{q:"Which option correctly describes Amylase?",topic:"Science",o:["a hormone that lowers glucose", "a protein that carries oxygen", "an enzyme that breaks down starch", "an enzyme that digests DNA"],a:2,e:"Amylase: an enzyme that breaks down starch."},
{q:"Select the correct fact about Amylase.",topic:"Science",o:["an enzyme that breaks down starch", "an enzyme that digests DNA", "a hormone that lowers glucose", "a protein that carries oxygen"],a:0,e:"Amylase: an enzyme that breaks down starch."},
{q:"Amylase is best associated with which answer?",topic:"Science",o:["an enzyme that digests DNA", "an enzyme that breaks down starch", "a hormone that lowers glucose", "a protein that carries oxygen"],a:1,e:"Amylase: an enzyme that breaks down starch."},
{q:"What is Pepsin?",topic:"Science",o:["a pancreatic hormone", "a clotting factor", "a kidney filtration protein", "a stomach enzyme that digests proteins"],a:3,e:"Pepsin: a stomach enzyme that digests proteins."},
{q:"Which option correctly describes Pepsin?",topic:"Science",o:["a kidney filtration protein", "a clotting factor", "a stomach enzyme that digests proteins", "a pancreatic hormone"],a:2,e:"Pepsin: a stomach enzyme that digests proteins."},
{q:"Select the correct fact about Pepsin.",topic:"Science",o:["a stomach enzyme that digests proteins", "a pancreatic hormone", "a clotting factor", "a kidney filtration protein"],a:0,e:"Pepsin: a stomach enzyme that digests proteins."},
{q:"Pepsin is best associated with which answer?",topic:"Science",o:["a kidney filtration protein", "a pancreatic hormone", "a clotting factor", "a stomach enzyme that digests proteins"],a:3,e:"Pepsin: a stomach enzyme that digests proteins."},

{q:"What is Vitamin C?",topic:"Science",o:["a vitamin important for collagen synthesis", "a vitamin required for clotting factor activation", "the main oxygen carrier", "a steroid hormone"],a:0,e:"Vitamin C: a vitamin important for collagen synthesis."},
{q:"Which option correctly describes Vitamin C?",topic:"Science",o:["a vitamin required for clotting factor activation", "a vitamin important for collagen synthesis", "a steroid hormone", "the main oxygen carrier"],a:1,e:"Vitamin C: a vitamin important for collagen synthesis."},
{q:"Select the correct fact about Vitamin C.",topic:"Science",o:["a vitamin important for collagen synthesis", "the main oxygen carrier", "a vitamin required for clotting factor activation", "a steroid hormone"],a:0,e:"Vitamin C: a vitamin important for collagen synthesis."},
{q:"Vitamin C is best associated with which answer?",topic:"Science",o:["a vitamin important for collagen synthesis", "a steroid hormone", "the main oxygen carrier", "a vitamin required for clotting factor activation"],a:0,e:"Vitamin C: a vitamin important for collagen synthesis."},
{q:"What is Vitamin D?",topic:"Science",o:["a vitamin important for calcium and bone regulation", "a digestive enzyme", "the main blood buffer", "a clotting cell"],a:0,e:"Vitamin D: a vitamin important for calcium and bone regulation."},
{q:"Which option correctly describes Vitamin D?",topic:"Science",o:["a clotting cell", "the main blood buffer", "a digestive enzyme", "a vitamin important for calcium and bone regulation"],a:3,e:"Vitamin D: a vitamin important for calcium and bone regulation."},
{q:"Select the correct fact about Vitamin D.",topic:"Science",o:["the main blood buffer", "a clotting cell", "a vitamin important for calcium and bone regulation", "a digestive enzyme"],a:2,e:"Vitamin D: a vitamin important for calcium and bone regulation."},
{q:"Vitamin D is best associated with which answer?",topic:"Science",o:["a vitamin important for calcium and bone regulation", "the main blood buffer", "a clotting cell", "a digestive enzyme"],a:0,e:"Vitamin D: a vitamin important for calcium and bone regulation."},
{q:"What is Calcium?",topic:"Science",o:["an ion important in bones, muscles and clotting", "a type of antibody", "a digestive hormone", "the main intracellular oxygen carrier"],a:0,e:"Calcium: an ion important in bones, muscles and clotting."},
{q:"Which option correctly describes Calcium?",topic:"Science",o:["a type of antibody", "the main intracellular oxygen carrier", "an ion important in bones, muscles and clotting", "a digestive hormone"],a:2,e:"Calcium: an ion important in bones, muscles and clotting."},

{q:"Select the correct fact about Calcium.",topic:"Science",o:["an ion important in bones, muscles and clotting", "a type of antibody", "a digestive hormone", "the main intracellular oxygen carrier"],a:0,e:"Calcium: an ion important in bones, muscles and clotting."},
{q:"Calcium is best associated with which answer?",topic:"Science",o:["a digestive hormone", "an ion important in bones, muscles and clotting", "a type of antibody", "the main intracellular oxygen carrier"],a:1,e:"Calcium: an ion important in bones, muscles and clotting."},
{q:"What is Iron?",topic:"Science",o:["a component of insulin only", "a clotting enzyme", "a mineral needed to make haemoglobin", "a thyroid hormone"],a:2,e:"Iron: a mineral needed to make haemoglobin."},
{q:"Which option correctly describes Iron?",topic:"Science",o:["a mineral needed to make haemoglobin", "a thyroid hormone", "a component of insulin only", "a clotting enzyme"],a:0,e:"Iron: a mineral needed to make haemoglobin."},
{q:"Select the correct fact about Iron.",topic:"Science",o:["a clotting enzyme", "a component of insulin only", "a thyroid hormone", "a mineral needed to make haemoglobin"],a:3,e:"Iron: a mineral needed to make haemoglobin."},
{q:"Iron is best associated with which answer?",topic:"Science",o:["a mineral needed to make haemoglobin", "a clotting enzyme", "a component of insulin only", "a thyroid hormone"],a:0,e:"Iron: a mineral needed to make haemoglobin."},
{q:"What is Iodine?",topic:"Science",o:["a component of haemoglobin", "a kidney enzyme", "a mineral needed for thyroid hormone synthesis", "a platelet granule"],a:2,e:"Iodine: a mineral needed for thyroid hormone synthesis."},
{q:"Which option correctly describes Iodine?",topic:"Science",o:["a mineral needed for thyroid hormone synthesis", "a component of haemoglobin", "a kidney enzyme", "a platelet granule"],a:0,e:"Iodine: a mineral needed for thyroid hormone synthesis."},
{q:"Select the correct fact about Iodine.",topic:"Science",o:["a component of haemoglobin", "a kidney enzyme", "a mineral needed for thyroid hormone synthesis", "a platelet granule"],a:2,e:"Iodine: a mineral needed for thyroid hormone synthesis."},
{q:"Iodine is best associated with which answer?",topic:"Science",o:["a kidney enzyme", "a platelet granule", "a component of haemoglobin", "a mineral needed for thyroid hormone synthesis"],a:3,e:"Iodine: a mineral needed for thyroid hormone synthesis."},

// ======================================
//  1,300 QUESTIONS  COMPLETE HERE.
// ======================================

{q:"What is Oxygen?",topic:"Science",o:["the main product of protein digestion", "a digestive hormone", "a gas used by cells in aerobic energy production", "a blood anticoagulant"],a:2,e:"Oxygen: a gas used by cells in aerobic energy production."},
{q:"Which option correctly describes Oxygen?",topic:"Science",o:["a blood anticoagulant", "a digestive hormone", "a gas used by cells in aerobic energy production", "the main product of protein digestion"],a:2,e:"Oxygen: a gas used by cells in aerobic energy production."},
{q:"Select the correct fact about Oxygen.",topic:"Science",o:["the main product of protein digestion", "a gas used by cells in aerobic energy production", "a blood anticoagulant", "a digestive hormone"],a:1,e:"Oxygen: a gas used by cells in aerobic energy production."},
{q:"Oxygen is best associated with which answer?",topic:"Science",o:["a gas used by cells in aerobic energy production", "a digestive hormone", "the main product of protein digestion", "a blood anticoagulant"],a:0,e:"Oxygen: a gas used by cells in aerobic energy production."},
{q:"What is Carbon dioxide?",topic:"Science",o:["a plasma antibody", "a waste gas transported from tissues to lungs", "the main oxygen carrier", "a clotting factor"],a:1,e:"Carbon dioxide: a waste gas transported from tissues to lungs."},
{q:"Which option correctly describes Carbon dioxide?",topic:"Science",o:["a plasma antibody", "a waste gas transported from tissues to lungs", "a clotting factor", "the main oxygen carrier"],a:1,e:"Carbon dioxide: a waste gas transported from tissues to lungs."},
{q:"Select the correct fact about Carbon dioxide.",topic:"Science",o:["a waste gas transported from tissues to lungs", "the main oxygen carrier", "a plasma antibody", "a clotting factor"],a:0,e:"Carbon dioxide: a waste gas transported from tissues to lungs."},
{q:"Carbon dioxide is best associated with which answer?",topic:"Science",o:["a plasma antibody", "a waste gas transported from tissues to lungs", "a clotting factor", "the main oxygen carrier"],a:1,e:"Carbon dioxide: a waste gas transported from tissues to lungs."},
{q:"What is Meiosis?",topic:"Science",o:["protein synthesis", "cell division that produces haploid gametes", "division producing two identical diploid cells", "cellular respiration"],a:1,e:"Meiosis: cell division that produces haploid gametes."},
{q:"Which option correctly describes Meiosis?",topic:"Science",o:["protein synthesis", "cell division that produces haploid gametes", "cellular respiration", "division producing two identical diploid cells"],a:1,e:"Meiosis: cell division that produces haploid gametes."},

{q:"Select the correct fact about Meiosis.",topic:"Science",o:["cell division that produces haploid gametes", "cellular respiration", "division producing two identical diploid cells", "protein synthesis"],a:0,e:"Meiosis: cell division that produces haploid gametes."},
{q:"Meiosis is best associated with which answer?",topic:"Science",o:["cell division that produces haploid gametes", "division producing two identical diploid cells", "protein synthesis", "cellular respiration"],a:0,e:"Meiosis: cell division that produces haploid gametes."},
{q:"What is Mitosis?",topic:"Science",o:["formation of gametes only", "antibody binding", "cell division producing two genetically similar daughter cells", "oxygen transport"],a:2,e:"Mitosis: cell division producing two genetically similar daughter cells."},
{q:"Which option correctly describes Mitosis?",topic:"Science",o:["oxygen transport", "formation of gametes only", "cell division producing two genetically similar daughter cells", "antibody binding"],a:2,e:"Mitosis: cell division producing two genetically similar daughter cells."},
{q:"Select the correct fact about Mitosis.",topic:"Science",o:["oxygen transport", "formation of gametes only", "antibody binding", "cell division producing two genetically similar daughter cells"],a:3,e:"Mitosis: cell division producing two genetically similar daughter cells."},
{q:"Mitosis is best associated with which answer?",topic:"Science",o:["antibody binding", "cell division producing two genetically similar daughter cells", "oxygen transport", "formation of gametes only"],a:1,e:"Mitosis: cell division producing two genetically similar daughter cells."},
{q:"What is Bacteria?",topic:"Science",o:["multicellular animals", "viruses with a nucleus", "plant organs", "single-celled prokaryotic organisms"],a:3,e:"Bacteria: single-celled prokaryotic organisms."},
{q:"Which option correctly describes Bacteria?",topic:"Science",o:["multicellular animals", "single-celled prokaryotic organisms", "viruses with a nucleus", "plant organs"],a:1,e:"Bacteria: single-celled prokaryotic organisms."},
{q:"Select the correct fact about Bacteria.",topic:"Science",o:["single-celled prokaryotic organisms", "multicellular animals", "plant organs", "viruses with a nucleus"],a:0,e:"Bacteria: single-celled prokaryotic organisms."},
{q:"Bacteria is best associated with which answer?",topic:"Science",o:["viruses with a nucleus", "multicellular animals", "plant organs", "single-celled prokaryotic organisms"],a:3,e:"Bacteria: single-celled prokaryotic organisms."},

{q:"What is Virus?",topic:"Science",o:["a fungal spore", "a free-living bacterium", "an infectious agent that requires host cells to replicate", "a human blood cell"],a:2,e:"Virus: an infectious agent that requires host cells to replicate."},
{q:"Which option correctly describes Virus?",topic:"Science",o:["a fungal spore", "an infectious agent that requires host cells to replicate", "a free-living bacterium", "a human blood cell"],a:1,e:"Virus: an infectious agent that requires host cells to replicate."},
{q:"Select the correct fact about Virus.",topic:"Science",o:["an infectious agent that requires host cells to replicate", "a fungal spore", "a human blood cell", "a free-living bacterium"],a:0,e:"Virus: an infectious agent that requires host cells to replicate."},
{q:"Virus is best associated with which answer?",topic:"Science",o:["a fungal spore", "an infectious agent that requires host cells to replicate", "a free-living bacterium", "a human blood cell"],a:1,e:"Virus: an infectious agent that requires host cells to replicate."},
{q:"What is Fungi?",topic:"Science",o:["a kidney structure", "a class of hormones", "a type of red blood cell", "organisms including yeasts and moulds"],a:3,e:"Fungi: organisms including yeasts and moulds."},
{q:"Which option correctly describes Fungi?",topic:"Science",o:["a class of hormones", "a type of red blood cell", "a kidney structure", "organisms including yeasts and moulds"],a:3,e:"Fungi: organisms including yeasts and moulds."},
{q:"Select the correct fact about Fungi.",topic:"Science",o:["organisms including yeasts and moulds", "a type of red blood cell", "a kidney structure", "a class of hormones"],a:0,e:"Fungi: organisms including yeasts and moulds."},
{q:"Fungi is best associated with which answer?",topic:"Science",o:["a class of hormones", "a type of red blood cell", "organisms including yeasts and moulds", "a kidney structure"],a:2,e:"Fungi: organisms including yeasts and moulds."},
{q:"What is Malaria?",topic:"Science",o:["a clotting disorder", "a bacterial urinary infection", "a disease caused by insulin deficiency", "an infection caused by Plasmodium parasites"],a:3,e:"Malaria: an infection caused by Plasmodium parasites."},
{q:"Which option correctly describes Malaria?",topic:"Science",o:["a disease caused by insulin deficiency", "a bacterial urinary infection", "an infection caused by Plasmodium parasites", "a clotting disorder"],a:2,e:"Malaria: an infection caused by Plasmodium parasites."},

{q:"Select the correct fact about Malaria.",topic:"Science",o:["a bacterial urinary infection", "a clotting disorder", "an infection caused by Plasmodium parasites", "a disease caused by insulin deficiency"],a:2,e:"Malaria: an infection caused by Plasmodium parasites."},
{q:"Malaria is best associated with which answer?",topic:"Science",o:["a disease caused by insulin deficiency", "an infection caused by Plasmodium parasites", "a bacterial urinary infection", "a clotting disorder"],a:1,e:"Malaria: an infection caused by Plasmodium parasites."},
{q:"What is Tuberculosis?",topic:"Science",o:["an infection commonly caused by Mycobacterium tuberculosis", "a viral liver disease", "a genetic anaemia", "a fungal skin condition"],a:0,e:"Tuberculosis: an infection commonly caused by Mycobacterium tuberculosis."},
{q:"Which option correctly describes Tuberculosis?",topic:"Science",o:["an infection commonly caused by Mycobacterium tuberculosis", "a viral liver disease", "a fungal skin condition", "a genetic anaemia"],a:0,e:"Tuberculosis: an infection commonly caused by Mycobacterium tuberculosis."},
{q:"Select the correct fact about Tuberculosis.",topic:"Science",o:["a genetic anaemia", "an infection commonly caused by Mycobacterium tuberculosis", "a viral liver disease", "a fungal skin condition"],a:1,e:"Tuberculosis: an infection commonly caused by Mycobacterium tuberculosis."},
{q:"Tuberculosis is best associated with which answer?",topic:"Science",o:["a viral liver disease", "a fungal skin condition", "a genetic anaemia", "an infection commonly caused by Mycobacterium tuberculosis"],a:3,e:"Tuberculosis: an infection commonly caused by Mycobacterium tuberculosis."},
{q:"What is Dengue?",topic:"Science",o:["a bacterial food poisoning", "a disease transmitted by ticks only", "a viral infection transmitted by Aedes mosquitoes", "a hereditary clotting disorder"],a:2,e:"Dengue: a viral infection transmitted by Aedes mosquitoes."},
{q:"Which option correctly describes Dengue?",topic:"Science",o:["a disease transmitted by ticks only", "a hereditary clotting disorder", "a viral infection transmitted by Aedes mosquitoes", "a bacterial food poisoning"],a:2,e:"Dengue: a viral infection transmitted by Aedes mosquitoes."},
{q:"Select the correct fact about Dengue.",topic:"Science",o:["a disease transmitted by ticks only", "a bacterial food poisoning", "a hereditary clotting disorder", "a viral infection transmitted by Aedes mosquitoes"],a:3,e:"Dengue: a viral infection transmitted by Aedes mosquitoes."},
{q:"Dengue is best associated with which answer?",topic:"Science",o:["a viral infection transmitted by Aedes mosquitoes", "a hereditary clotting disorder", "a disease transmitted by ticks only", "a bacterial food poisoning"],a:0,e:"Dengue: a viral infection transmitted by Aedes mosquitoes."},

{q:"What is Inflammation?",topic:"Science",o:["a kidney filtration test", "a process that makes red cells", "a protective response to tissue injury or infection", "a type of blood group"],a:2,e:"Inflammation: a protective response to tissue injury or infection."},
{q:"Which option correctly describes Inflammation?",topic:"Science",o:["a protective response to tissue injury or infection", "a type of blood group", "a process that makes red cells", "a kidney filtration test"],a:0,e:"Inflammation: a protective response to tissue injury or infection."},
{q:"Select the correct fact about Inflammation.",topic:"Science",o:["a protective response to tissue injury or infection", "a type of blood group", "a process that makes red cells", "a kidney filtration test"],a:0,e:"Inflammation: a protective response to tissue injury or infection."},
{q:"Inflammation is best associated with which answer?",topic:"Science",o:["a type of blood group", "a protective response to tissue injury or infection", "a kidney filtration test", "a process that makes red cells"],a:1,e:"Inflammation: a protective response to tissue injury or infection."},
{q:"What is Homeostasis?",topic:"Science",o:["maintenance of a relatively stable internal environment", "uncontrolled cell division", "breakdown of chromosomes", "formation of urine only"],a:0,e:"Homeostasis: maintenance of a relatively stable internal environment."},
{q:"Which option correctly describes Homeostasis?",topic:"Science",o:["formation of urine only", "maintenance of a relatively stable internal environment", "breakdown of chromosomes", "uncontrolled cell division"],a:1,e:"Homeostasis: maintenance of a relatively stable internal environment."},
{q:"Select the correct fact about Homeostasis.",topic:"Science",o:["maintenance of a relatively stable internal environment", "uncontrolled cell division", "formation of urine only", "breakdown of chromosomes"],a:0,e:"Homeostasis: maintenance of a relatively stable internal environment."},
{q:"Homeostasis is best associated with which answer?",topic:"Science",o:["formation of urine only", "maintenance of a relatively stable internal environment", "breakdown of chromosomes", "uncontrolled cell division"],a:1,e:"Homeostasis: maintenance of a relatively stable internal environment."},
{q:"What is Enzyme?",topic:"Science",o:["a type of vitamin", "a structural bone", "a blood group antigen", "a biological catalyst that speeds reactions"],a:3,e:"Enzyme: a biological catalyst that speeds reactions."},
{q:"Which option correctly describes Enzyme?",topic:"Science",o:["a biological catalyst that speeds reactions", "a structural bone", "a blood group antigen", "a type of vitamin"],a:0,e:"Enzyme: a biological catalyst that speeds reactions."},

{q:"Select the correct fact about Enzyme.",topic:"Science",o:["a structural bone", "a type of vitamin", "a biological catalyst that speeds reactions", "a blood group antigen"],a:2,e:"Enzyme: a biological catalyst that speeds reactions."},
{q:"Enzyme is best associated with which answer?",topic:"Science",o:["a blood group antigen", "a structural bone", "a type of vitamin", "a biological catalyst that speeds reactions"],a:3,e:"Enzyme: a biological catalyst that speeds reactions."},
{q:"What is pH?",topic:"Science",o:["a measure related to hydrogen ion activity", "a count of red cells", "a measure of clot strength", "a measure of body weight"],a:0,e:"pH: a measure related to hydrogen ion activity."},
{q:"Which option correctly describes pH?",topic:"Science",o:["a count of red cells", "a measure of body weight", "a measure related to hydrogen ion activity", "a measure of clot strength"],a:2,e:"pH: a measure related to hydrogen ion activity."},
{q:"Select the correct fact about pH.",topic:"Science",o:["a measure related to hydrogen ion activity", "a count of red cells", "a measure of clot strength", "a measure of body weight"],a:0,e:"pH: a measure related to hydrogen ion activity."},
{q:"pH is best associated with which answer?",topic:"Science",o:["a measure related to hydrogen ion activity", "a measure of clot strength", "a measure of body weight", "a count of red cells"],a:0,e:"pH: a measure related to hydrogen ion activity."},
{q:"What is Artery?",topic:"Science",o:["a lymph node", "a vessel that always carries deoxygenated blood", "a heart chamber", "a blood vessel that carries blood away from the heart"],a:3,e:"Artery: a blood vessel that carries blood away from the heart."},
{q:"Which option correctly describes Artery?",topic:"Science",o:["a vessel that always carries deoxygenated blood", "a lymph node", "a blood vessel that carries blood away from the heart", "a heart chamber"],a:2,e:"Artery: a blood vessel that carries blood away from the heart."},
{q:"Select the correct fact about Artery.",topic:"Science",o:["a blood vessel that carries blood away from the heart", "a vessel that always carries deoxygenated blood", "a heart chamber", "a lymph node"],a:0,e:"Artery: a blood vessel that carries blood away from the heart."},
{q:"Artery is best associated with which answer?",topic:"Science",o:["a vessel that always carries deoxygenated blood", "a heart chamber", "a lymph node", "a blood vessel that carries blood away from the heart"],a:3,e:"Artery: a blood vessel that carries blood away from the heart."},

{q:"What is Vein?",topic:"Science",o:["a blood vessel that carries blood toward the heart", "a vessel carrying blood away from the heart", "a blood cell", "a hormone gland"],a:0,e:"Vein: a blood vessel that carries blood toward the heart."},
{q:"Which option correctly describes Vein?",topic:"Science",o:["a vessel carrying blood away from the heart", "a hormone gland", "a blood vessel that carries blood toward the heart", "a blood cell"],a:2,e:"Vein: a blood vessel that carries blood toward the heart."},
{q:"Select the correct fact about Vein.",topic:"Science",o:["a hormone gland", "a blood cell", "a vessel carrying blood away from the heart", "a blood vessel that carries blood toward the heart"],a:3,e:"Vein: a blood vessel that carries blood toward the heart."},
{q:"Vein is best associated with which answer?",topic:"Science",o:["a blood vessel that carries blood toward the heart", "a hormone gland", "a blood cell", "a vessel carrying blood away from the heart"],a:0,e:"Vein: a blood vessel that carries blood toward the heart."},
{q:"What is Trachea?",topic:"Science",o:["the main artery", "the urinary bladder", "the windpipe connecting larynx and bronchi", "the food pipe"],a:2,e:"Trachea: the windpipe connecting larynx and bronchi."},
{q:"Which option correctly describes Trachea?",topic:"Science",o:["the food pipe", "the windpipe connecting larynx and bronchi", "the urinary bladder", "the main artery"],a:1,e:"Trachea: the windpipe connecting larynx and bronchi."},
{q:"Select the correct fact about Trachea.",topic:"Science",o:["the food pipe", "the urinary bladder", "the windpipe connecting larynx and bronchi", "the main artery"],a:2,e:"Trachea: the windpipe connecting larynx and bronchi."},
{q:"Trachea is best associated with which answer?",topic:"Science",o:["the urinary bladder", "the windpipe connecting larynx and bronchi", "the food pipe", "the main artery"],a:1,e:"Trachea: the windpipe connecting larynx and bronchi."},
{q:"What is Oesophagus?",topic:"Science",o:["the airway to the lungs", "a muscular tube carrying food to the stomach", "the kidney drainage tube", "the bile storage organ"],a:1,e:"Oesophagus: a muscular tube carrying food to the stomach."},
{q:"Which option correctly describes Oesophagus?",topic:"Science",o:["a muscular tube carrying food to the stomach", "the airway to the lungs", "the kidney drainage tube", "the bile storage organ"],a:0,e:"Oesophagus: a muscular tube carrying food to the stomach."},

{q:"Select the correct fact about Oesophagus.",topic:"Science",o:["the bile storage organ", "the kidney drainage tube", "the airway to the lungs", "a muscular tube carrying food to the stomach"],a:3,e:"Oesophagus: a muscular tube carrying food to the stomach."},
{q:"Oesophagus is best associated with which answer?",topic:"Science",o:["a muscular tube carrying food to the stomach", "the airway to the lungs", "the bile storage organ", "the kidney drainage tube"],a:0,e:"Oesophagus: a muscular tube carrying food to the stomach."},
{q:"What is Pancreas?",topic:"Science",o:["the main oxygen-carrying organ", "a lymph vessel", "the organ that stores urine", "an organ with endocrine and digestive functions"],a:3,e:"Pancreas: an organ with endocrine and digestive functions."},
{q:"Which option correctly describes Pancreas?",topic:"Science",o:["a lymph vessel", "the main oxygen-carrying organ", "an organ with endocrine and digestive functions", "the organ that stores urine"],a:2,e:"Pancreas: an organ with endocrine and digestive functions."},
{q:"Select the correct fact about Pancreas.",topic:"Science",o:["the organ that stores urine", "an organ with endocrine and digestive functions", "the main oxygen-carrying organ", "a lymph vessel"],a:1,e:"Pancreas: an organ with endocrine and digestive functions."},
{q:"Pancreas is best associated with which answer?",topic:"Science",o:["a lymph vessel", "the main oxygen-carrying organ", "the organ that stores urine", "an organ with endocrine and digestive functions"],a:3,e:"Pancreas: an organ with endocrine and digestive functions."},
{q:"What is Liver?",topic:"Science",o:["the organ that pumps blood", "the main site of gas exchange", "the main site of urine storage", "an organ involved in metabolism, detoxification and bile production"],a:3,e:"Liver: an organ involved in metabolism, detoxification and bile production."},
{q:"Which option correctly describes Liver?",topic:"Science",o:["the organ that pumps blood", "the main site of gas exchange", "an organ involved in metabolism, detoxification and bile production", "the main site of urine storage"],a:2,e:"Liver: an organ involved in metabolism, detoxification and bile production."},
{q:"Select the correct fact about Liver.",topic:"Science",o:["an organ involved in metabolism, detoxification and bile production", "the main site of gas exchange", "the main site of urine storage", "the organ that pumps blood"],a:0,e:"Liver: an organ involved in metabolism, detoxification and bile production."},
{q:"Liver is best associated with which answer?",topic:"Science",o:["the main site of urine storage", "an organ involved in metabolism, detoxification and bile production", "the main site of gas exchange", "the organ that pumps blood"],a:1,e:"Liver: an organ involved in metabolism, detoxification and bile production."},
{q:"What is Spleen?",topic:"Science",o:["the site of insulin synthesis", "the main site of oxygen exchange", "an organ involved in blood filtration and immune function", "the urinary outlet"],a:2,e:"Spleen: an organ involved in blood filtration and immune function."},

{q:"Which option correctly describes Spleen?",topic:"Science",o:["an organ involved in blood filtration and immune function", "the urinary outlet", "the main site of oxygen exchange", "the site of insulin synthesis"],a:0,e:"Spleen: an organ involved in blood filtration and immune function."},
{q:"Select the correct fact about Spleen.",topic:"Science",o:["the main site of oxygen exchange", "the urinary outlet", "the site of insulin synthesis", "an organ involved in blood filtration and immune function"],a:3,e:"Spleen: an organ involved in blood filtration and immune function."},
{q:"Spleen is best associated with which answer?",topic:"Science",o:["an organ involved in blood filtration and immune function", "the site of insulin synthesis", "the urinary outlet", "the main site of oxygen exchange"],a:0,e:"Spleen: an organ involved in blood filtration and immune function."},
{q:"What is Cornea?",topic:"Science",o:["the transparent front part of the eye", "a heart valve", "the light-sensitive layer at the back", "the hearing organ"],a:0,e:"Cornea: the transparent front part of the eye."},
{q:"Which option correctly describes Cornea?",topic:"Science",o:["the transparent front part of the eye", "a heart valve", "the hearing organ", "the light-sensitive layer at the back"],a:0,e:"Cornea: the transparent front part of the eye."},
{q:"Select the correct fact about Cornea.",topic:"Science",o:["the hearing organ", "a heart valve", "the transparent front part of the eye", "the light-sensitive layer at the back"],a:2,e:"Cornea: the transparent front part of the eye."},
{q:"Cornea is best associated with which answer?",topic:"Science",o:["the transparent front part of the eye", "the hearing organ", "the light-sensitive layer at the back", "a heart valve"],a:0,e:"Cornea: the transparent front part of the eye."},
{q:"What is Retina?",topic:"Science",o:["the middle ear bone", "the kidney capsule", "the light-sensitive tissue lining the back of the eye", "the transparent front of the eye"],a:2,e:"Retina: the light-sensitive tissue lining the back of the eye."},
{q:"Which option correctly describes Retina?",topic:"Science",o:["the transparent front of the eye", "the light-sensitive tissue lining the back of the eye", "the kidney capsule", "the middle ear bone"],a:1,e:"Retina: the light-sensitive tissue lining the back of the eye."},
{q:"Select the correct fact about Retina.",topic:"Science",o:["the light-sensitive tissue lining the back of the eye", "the kidney capsule", "the middle ear bone", "the transparent front of the eye"],a:0,e:"Retina: the light-sensitive tissue lining the back of the eye."},

{q:"Retina is best associated with which answer?",topic:"Science",o:["the light-sensitive tissue lining the back of the eye", "the transparent front of the eye", "the middle ear bone", "the kidney capsule"],a:0,e:"Retina: the light-sensitive tissue lining the back of the eye."},
{q:"What is Cochlea?",topic:"Science",o:["a blood vessel", "a part of the eye", "a structure of the inner ear important for hearing", "a lung air sac"],a:2,e:"Cochlea: a structure of the inner ear important for hearing."},
{q:"Which option correctly describes Cochlea?",topic:"Science",o:["a structure of the inner ear important for hearing", "a lung air sac", "a part of the eye", "a blood vessel"],a:0,e:"Cochlea: a structure of the inner ear important for hearing."},
{q:"Select the correct fact about Cochlea.",topic:"Science",o:["a lung air sac", "a part of the eye", "a blood vessel", "a structure of the inner ear important for hearing"],a:3,e:"Cochlea: a structure of the inner ear important for hearing."},
{q:"Cochlea is best associated with which answer?",topic:"Science",o:["a part of the eye", "a blood vessel", "a lung air sac", "a structure of the inner ear important for hearing"],a:3,e:"Cochlea: a structure of the inner ear important for hearing."},
{q:"What is Femur?",topic:"Science",o:["the thigh bone and longest bone in the human body", "a skull bone", "the breastbone", "the smallest hand bone"],a:0,e:"Femur: the thigh bone and longest bone in the human body."},
{q:"Which option correctly describes Femur?",topic:"Science",o:["the smallest hand bone", "a skull bone", "the breastbone", "the thigh bone and longest bone in the human body"],a:3,e:"Femur: the thigh bone and longest bone in the human body."},
{q:"Select the correct fact about Femur.",topic:"Science",o:["the breastbone", "the smallest hand bone", "a skull bone", "the thigh bone and longest bone in the human body"],a:3,e:"Femur: the thigh bone and longest bone in the human body."},
{q:"Femur is best associated with which answer?",topic:"Science",o:["the thigh bone and longest bone in the human body", "a skull bone", "the breastbone", "the smallest hand bone"],a:0,e:"Femur: the thigh bone and longest bone in the human body."},
{q:"What is CPU?",topic:"Computer Knowledge",o:["Computer Personal Unit", "Central Processing Unit", "Central Program Utility", "Control Power User"],a:1,e:"CPU: Central Processing Unit."},

// ======================================
//  1,400 QUESTIONS  COMPLETE HERE.
// ======================================

{q:"Which option correctly describes CPU?",topic:"Computer Knowledge",o:["Computer Personal Unit", "Central Processing Unit", "Control Power User", "Central Program Utility"],a:1,e:"CPU: Central Processing Unit."},
{q:"Select the correct fact about CPU.",topic:"Computer Knowledge",o:["Central Processing Unit", "Control Power User", "Computer Personal Unit", "Central Program Utility"],a:0,e:"CPU: Central Processing Unit."},
{q:"CPU is best associated with which answer?",topic:"Computer Knowledge",o:["Central Processing Unit", "Central Program Utility", "Computer Personal Unit", "Control Power User"],a:0,e:"CPU: Central Processing Unit."},
{q:"What is RAM?",topic:"Computer Knowledge",o:["Read Automatic Machine", "Rapid Action Module", "Random Access Memory", "Remote Access Method"],a:2,e:"RAM: Random Access Memory."},
{q:"Which option correctly describes RAM?",topic:"Computer Knowledge",o:["Rapid Action Module", "Read Automatic Machine", "Remote Access Method", "Random Access Memory"],a:3,e:"RAM: Random Access Memory."},
{q:"Select the correct fact about RAM.",topic:"Computer Knowledge",o:["Read Automatic Machine", "Remote Access Method", "Rapid Action Module", "Random Access Memory"],a:3,e:"RAM: Random Access Memory."},
{q:"RAM is best associated with which answer?",topic:"Computer Knowledge",o:["Remote Access Method", "Random Access Memory", "Read Automatic Machine", "Rapid Action Module"],a:1,e:"RAM: Random Access Memory."},
{q:"What is ROM?",topic:"Computer Knowledge",o:["Run Only Mode", "Read Only Memory", "Random Output Machine", "Read Open Memory"],a:1,e:"ROM: Read Only Memory."},
{q:"Which option correctly describes ROM?",topic:"Computer Knowledge",o:["Random Output Machine", "Read Open Memory", "Run Only Mode", "Read Only Memory"],a:3,e:"ROM: Read Only Memory."},
{q:"Select the correct fact about ROM.",topic:"Computer Knowledge",o:["Read Only Memory", "Run Only Mode", "Random Output Machine", "Read Open Memory"],a:0,e:"ROM: Read Only Memory."},

{q:"ROM is best associated with which answer?",topic:"Computer Knowledge",o:["Run Only Mode", "Read Only Memory", "Random Output Machine", "Read Open Memory"],a:1,e:"ROM: Read Only Memory."},
{q:"What is URL?",topic:"Computer Knowledge",o:["United Routing Language", "Universal Record Link", "User Reference List", "Uniform Resource Locator"],a:3,e:"URL: Uniform Resource Locator."},
{q:"Which option correctly describes URL?",topic:"Computer Knowledge",o:["User Reference List", "Uniform Resource Locator", "Universal Record Link", "United Routing Language"],a:1,e:"URL: Uniform Resource Locator."},
{q:"Select the correct fact about URL.",topic:"Computer Knowledge",o:["User Reference List", "Universal Record Link", "Uniform Resource Locator", "United Routing Language"],a:2,e:"URL: Uniform Resource Locator."},
{q:"URL is best associated with which answer?",topic:"Computer Knowledge",o:["United Routing Language", "Uniform Resource Locator", "User Reference List", "Universal Record Link"],a:1,e:"URL: Uniform Resource Locator."},
{q:"What is HTTP?",topic:"Computer Knowledge",o:["Hyperlink Technical Process", "Hypertext Transfer Protocol", "Host Text Transfer Path", "High Transfer Text Program"],a:1,e:"HTTP: Hypertext Transfer Protocol."},
{q:"Which option correctly describes HTTP?",topic:"Computer Knowledge",o:["Hyperlink Technical Process", "Host Text Transfer Path", "High Transfer Text Program", "Hypertext Transfer Protocol"],a:3,e:"HTTP: Hypertext Transfer Protocol."},
{q:"Select the correct fact about HTTP.",topic:"Computer Knowledge",o:["Hypertext Transfer Protocol", "High Transfer Text Program", "Hyperlink Technical Process", "Host Text Transfer Path"],a:0,e:"HTTP: Hypertext Transfer Protocol."},
{q:"HTTP is best associated with which answer?",topic:"Computer Knowledge",o:["Hypertext Transfer Protocol", "High Transfer Text Program", "Host Text Transfer Path", "Hyperlink Technical Process"],a:0,e:"HTTP: Hypertext Transfer Protocol."},
{q:"What is HTML?",topic:"Computer Knowledge",o:["High Text Machine Language", "Hyper Transfer Mode Language", "Home Tool Markup Link", "Hypertext Markup Language"],a:3,e:"HTML: Hypertext Markup Language."},

{q:"Which option correctly describes HTML?",topic:"Computer Knowledge",o:["Hyper Transfer Mode Language", "Hypertext Markup Language", "Home Tool Markup Link", "High Text Machine Language"],a:1,e:"HTML: Hypertext Markup Language."},
{q:"Select the correct fact about HTML.",topic:"Computer Knowledge",o:["High Text Machine Language", "Home Tool Markup Link", "Hyper Transfer Mode Language", "Hypertext Markup Language"],a:3,e:"HTML: Hypertext Markup Language."},
{q:"HTML is best associated with which answer?",topic:"Computer Knowledge",o:["Hypertext Markup Language", "Home Tool Markup Link", "Hyper Transfer Mode Language", "High Text Machine Language"],a:0,e:"HTML: Hypertext Markup Language."},
{q:"What is CSS?",topic:"Computer Knowledge",o:["Cascading Style Sheets", "Creative Software Setup", "Computer Style System", "Central Script Source"],a:0,e:"CSS: Cascading Style Sheets."},
{q:"Which option correctly describes CSS?",topic:"Computer Knowledge",o:["Creative Software Setup", "Central Script Source", "Computer Style System", "Cascading Style Sheets"],a:3,e:"CSS: Cascading Style Sheets."},
{q:"Select the correct fact about CSS.",topic:"Computer Knowledge",o:["Computer Style System", "Cascading Style Sheets", "Creative Software Setup", "Central Script Source"],a:1,e:"CSS: Cascading Style Sheets."},
{q:"CSS is best associated with which answer?",topic:"Computer Knowledge",o:["Computer Style System", "Central Script Source", "Creative Software Setup", "Cascading Style Sheets"],a:3,e:"CSS: Cascading Style Sheets."},
{q:"What is USB?",topic:"Computer Knowledge",o:["Universal Serial Bus", "Universal Storage Block", "User Service Base", "United System Board"],a:0,e:"USB: Universal Serial Bus."},
{q:"Which option correctly describes USB?",topic:"Computer Knowledge",o:["United System Board", "User Service Base", "Universal Serial Bus", "Universal Storage Block"],a:2,e:"USB: Universal Serial Bus."},
{q:"Select the correct fact about USB.",topic:"Computer Knowledge",o:["Universal Storage Block", "Universal Serial Bus", "User Service Base", "United System Board"],a:1,e:"USB: Universal Serial Bus."},

{q:"USB is best associated with which answer?",topic:"Computer Knowledge",o:["Universal Storage Block", "Universal Serial Bus", "User Service Base", "United System Board"],a:1,e:"USB: Universal Serial Bus."},
{q:"What is PDF?",topic:"Computer Knowledge",o:["Printed Document Form", "Personal Data File", "Program Display Format", "Portable Document Format"],a:3,e:"PDF: Portable Document Format."},
{q:"Which option correctly describes PDF?",topic:"Computer Knowledge",o:["Portable Document Format", "Program Display Format", "Printed Document Form", "Personal Data File"],a:0,e:"PDF: Portable Document Format."},
{q:"Select the correct fact about PDF.",topic:"Computer Knowledge",o:["Portable Document Format", "Printed Document Form", "Personal Data File", "Program Display Format"],a:0,e:"PDF: Portable Document Format."},
{q:"PDF is best associated with which answer?",topic:"Computer Knowledge",o:["Program Display Format", "Personal Data File", "Portable Document Format", "Printed Document Form"],a:2,e:"PDF: Portable Document Format."},
{q:"What is LAN?",topic:"Computer Knowledge",o:["Long Area Number", "Linked Application Network", "Local Area Network", "Large Access Node"],a:2,e:"LAN: Local Area Network."},
{q:"Which option correctly describes LAN?",topic:"Computer Knowledge",o:["Local Area Network", "Large Access Node", "Linked Application Network", "Long Area Number"],a:0,e:"LAN: Local Area Network."},
{q:"Select the correct fact about LAN.",topic:"Computer Knowledge",o:["Long Area Number", "Large Access Node", "Linked Application Network", "Local Area Network"],a:3,e:"LAN: Local Area Network."},
{q:"LAN is best associated with which answer?",topic:"Computer Knowledge",o:["Long Area Number", "Large Access Node", "Local Area Network", "Linked Application Network"],a:2,e:"LAN: Local Area Network."},
{q:"What is WAN?",topic:"Computer Knowledge",o:["World Analog Network", "Wide Area Network", "Web Application Node", "Wireless Access Number"],a:1,e:"WAN: Wide Area Network."},

{q:"Which option correctly describes WAN?",topic:"Computer Knowledge",o:["Wireless Access Number", "World Analog Network", "Wide Area Network", "Web Application Node"],a:2,e:"WAN: Wide Area Network."},
{q:"Select the correct fact about WAN.",topic:"Computer Knowledge",o:["Web Application Node", "Wireless Access Number", "World Analog Network", "Wide Area Network"],a:3,e:"WAN: Wide Area Network."},
{q:"WAN is best associated with which answer?",topic:"Computer Knowledge",o:["Wireless Access Number", "World Analog Network", "Wide Area Network", "Web Application Node"],a:2,e:"WAN: Wide Area Network."},
{q:"What is IP address?",topic:"Computer Knowledge",o:["a keyboard layout", "a numerical address identifying a device on an IP network", "a file compression format", "a computer screen resolution"],a:1,e:"IP address: a numerical address identifying a device on an IP network."},
{q:"Which option correctly describes IP address?",topic:"Computer Knowledge",o:["a keyboard layout", "a file compression format", "a computer screen resolution", "a numerical address identifying a device on an IP network"],a:3,e:"IP address: a numerical address identifying a device on an IP network."},
{q:"Select the correct fact about IP address.",topic:"Computer Knowledge",o:["a keyboard layout", "a computer screen resolution", "a numerical address identifying a device on an IP network", "a file compression format"],a:2,e:"IP address: a numerical address identifying a device on an IP network."},
{q:"IP address is best associated with which answer?",topic:"Computer Knowledge",o:["a numerical address identifying a device on an IP network", "a file compression format", "a keyboard layout", "a computer screen resolution"],a:0,e:"IP address: a numerical address identifying a device on an IP network."},
{q:"What is Operating system?",topic:"Computer Knowledge",o:["a spreadsheet formula", "software that manages hardware and applications", "a web search result", "a type of printer cable"],a:1,e:"Operating system: software that manages hardware and applications."},
{q:"Which option correctly describes Operating system?",topic:"Computer Knowledge",o:["a spreadsheet formula", "software that manages hardware and applications", "a web search result", "a type of printer cable"],a:1,e:"Operating system: software that manages hardware and applications."},
{q:"Select the correct fact about Operating system.",topic:"Computer Knowledge",o:["software that manages hardware and applications", "a type of printer cable", "a spreadsheet formula", "a web search result"],a:0,e:"Operating system: software that manages hardware and applications."},

{q:"Operating system is best associated with which answer?",topic:"Computer Knowledge",o:["a spreadsheet formula", "software that manages hardware and applications", "a web search result", "a type of printer cable"],a:1,e:"Operating system: software that manages hardware and applications."},
{q:"What is Browser?",topic:"Computer Knowledge",o:["software used only to edit videos", "a network cable", "a computer power supply", "software used to access websites"],a:3,e:"Browser: software used to access websites."},
{q:"Which option correctly describes Browser?",topic:"Computer Knowledge",o:["software used to access websites", "a computer power supply", "a network cable", "software used only to edit videos"],a:0,e:"Browser: software used to access websites."},
{q:"Select the correct fact about Browser.",topic:"Computer Knowledge",o:["a network cable", "software used to access websites", "a computer power supply", "software used only to edit videos"],a:1,e:"Browser: software used to access websites."},
{q:"Browser is best associated with which answer?",topic:"Computer Knowledge",o:["software used to access websites", "a computer power supply", "a network cable", "software used only to edit videos"],a:0,e:"Browser: software used to access websites."},
{q:"What is Firewall?",topic:"Computer Knowledge",o:["a security system that filters network traffic", "a device for cooling a CPU", "a tool for formatting text", "a type of memory chip"],a:0,e:"Firewall: a security system that filters network traffic."},
{q:"Which option correctly describes Firewall?",topic:"Computer Knowledge",o:["a device for cooling a CPU", "a tool for formatting text", "a security system that filters network traffic", "a type of memory chip"],a:2,e:"Firewall: a security system that filters network traffic."},
{q:"Select the correct fact about Firewall.",topic:"Computer Knowledge",o:["a tool for formatting text", "a device for cooling a CPU", "a security system that filters network traffic", "a type of memory chip"],a:2,e:"Firewall: a security system that filters network traffic."},
{q:"Firewall is best associated with which answer?",topic:"Computer Knowledge",o:["a security system that filters network traffic", "a type of memory chip", "a tool for formatting text", "a device for cooling a CPU"],a:0,e:"Firewall: a security system that filters network traffic."},
{q:"What is Phishing?",topic:"Computer Knowledge",o:["a type of computer display", "a method of backing up files", "a programming loop", "a fraudulent attempt to obtain sensitive information"],a:3,e:"Phishing: a fraudulent attempt to obtain sensitive information."},

{q:"Which option correctly describes Phishing?",topic:"Computer Knowledge",o:["a programming loop", "a type of computer display", "a fraudulent attempt to obtain sensitive information", "a method of backing up files"],a:2,e:"Phishing: a fraudulent attempt to obtain sensitive information."},
{q:"Select the correct fact about Phishing.",topic:"Computer Knowledge",o:["a programming loop", "a fraudulent attempt to obtain sensitive information", "a type of computer display", "a method of backing up files"],a:1,e:"Phishing: a fraudulent attempt to obtain sensitive information."},
{q:"Phishing is best associated with which answer?",topic:"Computer Knowledge",o:["a method of backing up files", "a fraudulent attempt to obtain sensitive information", "a type of computer display", "a programming loop"],a:1,e:"Phishing: a fraudulent attempt to obtain sensitive information."},
{q:"What is Malware?",topic:"Computer Knowledge",o:["a hardware component", "software designed to harm or exploit systems", "a safe system update", "a spreadsheet chart"],a:1,e:"Malware: software designed to harm or exploit systems."},
{q:"Which option correctly describes Malware?",topic:"Computer Knowledge",o:["a spreadsheet chart", "a safe system update", "a hardware component", "software designed to harm or exploit systems"],a:3,e:"Malware: software designed to harm or exploit systems."},
{q:"Select the correct fact about Malware.",topic:"Computer Knowledge",o:["a safe system update", "software designed to harm or exploit systems", "a hardware component", "a spreadsheet chart"],a:1,e:"Malware: software designed to harm or exploit systems."},
{q:"Malware is best associated with which answer?",topic:"Computer Knowledge",o:["a spreadsheet chart", "a hardware component", "a safe system update", "software designed to harm or exploit systems"],a:3,e:"Malware: software designed to harm or exploit systems."},
{q:"What is Backup?",topic:"Computer Knowledge",o:["a screen brightness setting", "a separate copy of data for recovery", "a network address", "a permanent deletion method"],a:1,e:"Backup: a separate copy of data for recovery."},
{q:"Which option correctly describes Backup?",topic:"Computer Knowledge",o:["a screen brightness setting", "a permanent deletion method", "a network address", "a separate copy of data for recovery"],a:3,e:"Backup: a separate copy of data for recovery."},
{q:"Select the correct fact about Backup.",topic:"Computer Knowledge",o:["a permanent deletion method", "a network address", "a screen brightness setting", "a separate copy of data for recovery"],a:3,e:"Backup: a separate copy of data for recovery."},

{q:"Backup is best associated with which answer?",topic:"Computer Knowledge",o:["a separate copy of data for recovery", "a screen brightness setting", "a permanent deletion method", "a network address"],a:0,e:"Backup: a separate copy of data for recovery."},
{q:"What is Algorithm?",topic:"Computer Knowledge",o:["a computer virus", "a physical storage disk", "a monitor connection", "a defined sequence of steps to solve a problem"],a:3,e:"Algorithm: a defined sequence of steps to solve a problem."},
{q:"Which option correctly describes Algorithm?",topic:"Computer Knowledge",o:["a monitor connection", "a physical storage disk", "a defined sequence of steps to solve a problem", "a computer virus"],a:2,e:"Algorithm: a defined sequence of steps to solve a problem."},
{q:"Select the correct fact about Algorithm.",topic:"Computer Knowledge",o:["a defined sequence of steps to solve a problem", "a physical storage disk", "a monitor connection", "a computer virus"],a:0,e:"Algorithm: a defined sequence of steps to solve a problem."},
{q:"Algorithm is best associated with which answer?",topic:"Computer Knowledge",o:["a computer virus", "a physical storage disk", "a monitor connection", "a defined sequence of steps to solve a problem"],a:3,e:"Algorithm: a defined sequence of steps to solve a problem."},
{q:"What is Database?",topic:"Computer Knowledge",o:["a graphics cable", "a type of computer mouse", "an organized collection of data", "a device for printing pages"],a:2,e:"Database: an organized collection of data."},
{q:"Which option correctly describes Database?",topic:"Computer Knowledge",o:["a device for printing pages", "a type of computer mouse", "an organized collection of data", "a graphics cable"],a:2,e:"Database: an organized collection of data."},
{q:"Select the correct fact about Database.",topic:"Computer Knowledge",o:["a type of computer mouse", "a graphics cable", "a device for printing pages", "an organized collection of data"],a:3,e:"Database: an organized collection of data."},
{q:"Database is best associated with which answer?",topic:"Computer Knowledge",o:["an organized collection of data", "a type of computer mouse", "a graphics cable", "a device for printing pages"],a:0,e:"Database: an organized collection of data."},
{q:"What is Spreadsheet?",topic:"Computer Knowledge",o:["a computer operating system", "a type of scanner", "software for routing network packets", "software for organizing data in rows and columns"],a:3,e:"Spreadsheet: software for organizing data in rows and columns."},

{q:"Which option correctly describes Spreadsheet?",topic:"Computer Knowledge",o:["a computer operating system", "software for routing network packets", "a type of scanner", "software for organizing data in rows and columns"],a:3,e:"Spreadsheet: software for organizing data in rows and columns."},
{q:"Select the correct fact about Spreadsheet.",topic:"Computer Knowledge",o:["a type of scanner", "software for routing network packets", "a computer operating system", "software for organizing data in rows and columns"],a:3,e:"Spreadsheet: software for organizing data in rows and columns."},
{q:"Spreadsheet is best associated with which answer?",topic:"Computer Knowledge",o:["a computer operating system", "software for organizing data in rows and columns", "a type of scanner", "software for routing network packets"],a:1,e:"Spreadsheet: software for organizing data in rows and columns."},
{q:"What is Cell in a spreadsheet?",topic:"Computer Knowledge",o:["a printer cartridge", "the intersection of a row and a column", "a complete worksheet file", "a network server"],a:1,e:"Cell in a spreadsheet: the intersection of a row and a column."},
{q:"Which option correctly describes Cell in a spreadsheet?",topic:"Computer Knowledge",o:["the intersection of a row and a column", "a printer cartridge", "a network server", "a complete worksheet file"],a:0,e:"Cell in a spreadsheet: the intersection of a row and a column."},
{q:"Select the correct fact about Cell in a spreadsheet.",topic:"Computer Knowledge",o:["a printer cartridge", "the intersection of a row and a column", "a complete worksheet file", "a network server"],a:1,e:"Cell in a spreadsheet: the intersection of a row and a column."},
{q:"Cell in a spreadsheet is best associated with which answer?",topic:"Computer Knowledge",o:["a complete worksheet file", "a network server", "the intersection of a row and a column", "a printer cartridge"],a:2,e:"Cell in a spreadsheet: the intersection of a row and a column."},
{q:"What is Ctrl+C?",topic:"Computer Knowledge",o:["the shortcut for Save", "the shortcut for Print", "the shortcut for Paste", "the common shortcut for Copy"],a:3,e:"Ctrl+C: the common shortcut for Copy."},
{q:"Which option correctly describes Ctrl+C?",topic:"Computer Knowledge",o:["the shortcut for Paste", "the shortcut for Print", "the shortcut for Save", "the common shortcut for Copy"],a:3,e:"Ctrl+C: the common shortcut for Copy."},
{q:"Select the correct fact about Ctrl+C.",topic:"Computer Knowledge",o:["the shortcut for Save", "the common shortcut for Copy", "the shortcut for Print", "the shortcut for Paste"],a:1,e:"Ctrl+C: the common shortcut for Copy."},

{q:"Ctrl+C is best associated with which answer?",topic:"Computer Knowledge",o:["the common shortcut for Copy", "the shortcut for Paste", "the shortcut for Print", "the shortcut for Save"],a:0,e:"Ctrl+C: the common shortcut for Copy."},
{q:"What is Ctrl+V?",topic:"Computer Knowledge",o:["the shortcut for Find", "the shortcut for Undo", "the common shortcut for Paste", "the shortcut for Copy"],a:2,e:"Ctrl+V: the common shortcut for Paste."},
{q:"Which option correctly describes Ctrl+V?",topic:"Computer Knowledge",o:["the common shortcut for Paste", "the shortcut for Undo", "the shortcut for Copy", "the shortcut for Find"],a:0,e:"Ctrl+V: the common shortcut for Paste."},
{q:"Select the correct fact about Ctrl+V.",topic:"Computer Knowledge",o:["the shortcut for Copy", "the shortcut for Find", "the common shortcut for Paste", "the shortcut for Undo"],a:2,e:"Ctrl+V: the common shortcut for Paste."},
{q:"Ctrl+V is best associated with which answer?",topic:"Computer Knowledge",o:["the common shortcut for Paste", "the shortcut for Undo", "the shortcut for Find", "the shortcut for Copy"],a:0,e:"Ctrl+V: the common shortcut for Paste."},
{q:"What is Ctrl+Z?",topic:"Computer Knowledge",o:["the shortcut for Print", "the shortcut for Select All", "the shortcut for Redo", "the common shortcut for Undo"],a:3,e:"Ctrl+Z: the common shortcut for Undo."},
{q:"Which option correctly describes Ctrl+Z?",topic:"Computer Knowledge",o:["the shortcut for Print", "the shortcut for Select All", "the common shortcut for Undo", "the shortcut for Redo"],a:2,e:"Ctrl+Z: the common shortcut for Undo."},
{q:"Select the correct fact about Ctrl+Z.",topic:"Computer Knowledge",o:["the shortcut for Redo", "the shortcut for Print", "the shortcut for Select All", "the common shortcut for Undo"],a:3,e:"Ctrl+Z: the common shortcut for Undo."},
{q:"Ctrl+Z is best associated with which answer?",topic:"Computer Knowledge",o:["the common shortcut for Undo", "the shortcut for Select All", "the shortcut for Print", "the shortcut for Redo"],a:0,e:"Ctrl+Z: the common shortcut for Undo."},
{q:"What is Ctrl+S?",topic:"Computer Knowledge",o:["the shortcut for Paste", "the common shortcut for Save", "the shortcut for Close", "the shortcut for Search"],a:1,e:"Ctrl+S: the common shortcut for Save."},

// ======================================
//  1,500 QUESTIONS  COMPLETE HERE.
// ======================================

{q:"Which option correctly describes Ctrl+S?",topic:"Computer Knowledge",o:["the shortcut for Search", "the common shortcut for Save", "the shortcut for Paste", "the shortcut for Close"],a:1,e:"Ctrl+S: the common shortcut for Save."},
{q:"Select the correct fact about Ctrl+S.",topic:"Computer Knowledge",o:["the shortcut for Paste", "the shortcut for Close", "the shortcut for Search", "the common shortcut for Save"],a:3,e:"Ctrl+S: the common shortcut for Save."},
{q:"Ctrl+S is best associated with which answer?",topic:"Computer Knowledge",o:["the shortcut for Search", "the shortcut for Paste", "the common shortcut for Save", "the shortcut for Close"],a:2,e:"Ctrl+S: the common shortcut for Save."},
{q:"What is Ctrl+P?",topic:"Computer Knowledge",o:["the common shortcut for Print", "the shortcut for Undo", "the shortcut for Paste", "the shortcut for Save"],a:0,e:"Ctrl+P: the common shortcut for Print."},
{q:"Which option correctly describes Ctrl+P?",topic:"Computer Knowledge",o:["the shortcut for Paste", "the common shortcut for Print", "the shortcut for Undo", "the shortcut for Save"],a:1,e:"Ctrl+P: the common shortcut for Print."},
{q:"Select the correct fact about Ctrl+P.",topic:"Computer Knowledge",o:["the shortcut for Save", "the shortcut for Paste", "the shortcut for Undo", "the common shortcut for Print"],a:3,e:"Ctrl+P: the common shortcut for Print."},
{q:"Ctrl+P is best associated with which answer?",topic:"Computer Knowledge",o:["the shortcut for Paste", "the common shortcut for Print", "the shortcut for Undo", "the shortcut for Save"],a:1,e:"Ctrl+P: the common shortcut for Print."},
{q:"What is Pixel?",topic:"Computer Knowledge",o:["a unit of computer memory", "a network protocol", "a type of processor", "the smallest addressable element of a digital image"],a:3,e:"Pixel: the smallest addressable element of a digital image."},
{q:"Which option correctly describes Pixel?",topic:"Computer Knowledge",o:["a type of processor", "a network protocol", "a unit of computer memory", "the smallest addressable element of a digital image"],a:3,e:"Pixel: the smallest addressable element of a digital image."},
{q:"Select the correct fact about Pixel.",topic:"Computer Knowledge",o:["a type of processor", "a unit of computer memory", "a network protocol", "the smallest addressable element of a digital image"],a:3,e:"Pixel: the smallest addressable element of a digital image."},

{q:"Pixel is best associated with which answer?",topic:"Computer Knowledge",o:["a network protocol", "a type of processor", "the smallest addressable element of a digital image", "a unit of computer memory"],a:2,e:"Pixel: the smallest addressable element of a digital image."},
{q:"What is Byte?",topic:"Computer Knowledge",o:["a type of CPU", "a unit of screen brightness", "a unit commonly consisting of eight bits", "a wireless standard"],a:2,e:"Byte: a unit commonly consisting of eight bits."},
{q:"Which option correctly describes Byte?",topic:"Computer Knowledge",o:["a unit commonly consisting of eight bits", "a unit of screen brightness", "a wireless standard", "a type of CPU"],a:0,e:"Byte: a unit commonly consisting of eight bits."},
{q:"Select the correct fact about Byte.",topic:"Computer Knowledge",o:["a unit of screen brightness", "a unit commonly consisting of eight bits", "a wireless standard", "a type of CPU"],a:1,e:"Byte: a unit commonly consisting of eight bits."},
{q:"Byte is best associated with which answer?",topic:"Computer Knowledge",o:["a unit of screen brightness", "a wireless standard", "a type of CPU", "a unit commonly consisting of eight bits"],a:3,e:"Byte: a unit commonly consisting of eight bits."},
{q:"What is Bit?",topic:"Computer Knowledge",o:["a storage folder", "a group of eight bytes", "a binary digit with value 0 or 1", "a computer program"],a:2,e:"Bit: a binary digit with value 0 or 1."},
{q:"Which option correctly describes Bit?",topic:"Computer Knowledge",o:["a group of eight bytes", "a storage folder", "a computer program", "a binary digit with value 0 or 1"],a:3,e:"Bit: a binary digit with value 0 or 1."},
{q:"Select the correct fact about Bit.",topic:"Computer Knowledge",o:["a computer program", "a binary digit with value 0 or 1", "a storage folder", "a group of eight bytes"],a:1,e:"Bit: a binary digit with value 0 or 1."},
{q:"Bit is best associated with which answer?",topic:"Computer Knowledge",o:["a group of eight bytes", "a computer program", "a storage folder", "a binary digit with value 0 or 1"],a:3,e:"Bit: a binary digit with value 0 or 1."},
{q:"What is Cloud computing?",topic:"Computer Knowledge",o:["delivery of computing services over a network, often the internet", "a computer cooling method", "storing data only on paper", "a type of monitor"],a:0,e:"Cloud computing: delivery of computing services over a network, often the internet."},

{q:"Which option correctly describes Cloud computing?",topic:"Computer Knowledge",o:["a computer cooling method", "a type of monitor", "delivery of computing services over a network, often the internet", "storing data only on paper"],a:2,e:"Cloud computing: delivery of computing services over a network, often the internet."},
{q:"Select the correct fact about Cloud computing.",topic:"Computer Knowledge",o:["a computer cooling method", "delivery of computing services over a network, often the internet", "storing data only on paper", "a type of monitor"],a:1,e:"Cloud computing: delivery of computing services over a network, often the internet."},
{q:"Cloud computing is best associated with which answer?",topic:"Computer Knowledge",o:["storing data only on paper", "a type of monitor", "a computer cooling method", "delivery of computing services over a network, often the internet"],a:3,e:"Cloud computing: delivery of computing services over a network, often the internet."},
{q:"What is Encryption?",topic:"Computer Knowledge",o:["compressing a keyboard", "increasing screen resolution", "converting information into a coded form to protect it", "deleting files permanently"],a:2,e:"Encryption: converting information into a coded form to protect it."},
{q:"Which option correctly describes Encryption?",topic:"Computer Knowledge",o:["converting information into a coded form to protect it", "deleting files permanently", "increasing screen resolution", "compressing a keyboard"],a:0,e:"Encryption: converting information into a coded form to protect it."},
{q:"Select the correct fact about Encryption.",topic:"Computer Knowledge",o:["increasing screen resolution", "compressing a keyboard", "deleting files permanently", "converting information into a coded form to protect it"],a:3,e:"Encryption: converting information into a coded form to protect it."},
{q:"Encryption is best associated with which answer?",topic:"Computer Knowledge",o:["compressing a keyboard", "increasing screen resolution", "converting information into a coded form to protect it", "deleting files permanently"],a:2,e:"Encryption: converting information into a coded form to protect it."},
{q:"What is Two-factor authentication?",topic:"Computer Knowledge",o:["sharing a password publicly", "turning off account security", "using two different verification factors to sign in", "using one short password"],a:2,e:"Two-factor authentication: using two different verification factors to sign in."},
{q:"Which option correctly describes Two-factor authentication?",topic:"Computer Knowledge",o:["turning off account security", "using one short password", "using two different verification factors to sign in", "sharing a password publicly"],a:2,e:"Two-factor authentication: using two different verification factors to sign in."},
{q:"Select the correct fact about Two-factor authentication.",topic:"Computer Knowledge",o:["sharing a password publicly", "using two different verification factors to sign in", "turning off account security", "using one short password"],a:1,e:"Two-factor authentication: using two different verification factors to sign in."},

{q:"Two-factor authentication is best associated with which answer?",topic:"Computer Knowledge",o:["using one short password", "sharing a password publicly", "using two different verification factors to sign in", "turning off account security"],a:2,e:"Two-factor authentication: using two different verification factors to sign in."},
{q:"What is Search engine?",topic:"Computer Knowledge",o:["a computer power cable", "a device for scanning paper", "a file system", "a service that helps find information on the web"],a:3,e:"Search engine: a service that helps find information on the web."},
{q:"Which option correctly describes Search engine?",topic:"Computer Knowledge",o:["a computer power cable", "a service that helps find information on the web", "a device for scanning paper", "a file system"],a:1,e:"Search engine: a service that helps find information on the web."},
{q:"Select the correct fact about Search engine.",topic:"Computer Knowledge",o:["a device for scanning paper", "a service that helps find information on the web", "a file system", "a computer power cable"],a:1,e:"Search engine: a service that helps find information on the web."},
{q:"Search engine is best associated with which answer?",topic:"Computer Knowledge",o:["a computer power cable", "a device for scanning paper", "a service that helps find information on the web", "a file system"],a:2,e:"Search engine: a service that helps find information on the web."},
{q:"What is Modem?",topic:"Computer Knowledge",o:["a graphics editing program", "a device that modulates and demodulates signals for communication", "a keyboard switch", "a type of computer memory"],a:1,e:"Modem: a device that modulates and demodulates signals for communication."},
{q:"Which option correctly describes Modem?",topic:"Computer Knowledge",o:["a keyboard switch", "a type of computer memory", "a device that modulates and demodulates signals for communication", "a graphics editing program"],a:2,e:"Modem: a device that modulates and demodulates signals for communication."},
{q:"Select the correct fact about Modem.",topic:"Computer Knowledge",o:["a device that modulates and demodulates signals for communication", "a graphics editing program", "a keyboard switch", "a type of computer memory"],a:0,e:"Modem: a device that modulates and demodulates signals for communication."},
{q:"Modem is best associated with which answer?",topic:"Computer Knowledge",o:["a graphics editing program", "a keyboard switch", "a type of computer memory", "a device that modulates and demodulates signals for communication"],a:3,e:"Modem: a device that modulates and demodulates signals for communication."},
{q:"What is Router?",topic:"Computer Knowledge",o:["a device that forwards data between networks", "a type of antivirus file", "a device that prints documents", "a computer display"],a:0,e:"Router: a device that forwards data between networks."},

{q:"Which option correctly describes Router?",topic:"Computer Knowledge",o:["a computer display", "a device that prints documents", "a type of antivirus file", "a device that forwards data between networks"],a:3,e:"Router: a device that forwards data between networks."},
{q:"Select the correct fact about Router.",topic:"Computer Knowledge",o:["a type of antivirus file", "a computer display", "a device that prints documents", "a device that forwards data between networks"],a:3,e:"Router: a device that forwards data between networks."},
{q:"Router is best associated with which answer?",topic:"Computer Knowledge",o:["a device that prints documents", "a device that forwards data between networks", "a computer display", "a type of antivirus file"],a:1,e:"Router: a device that forwards data between networks."},
{q:"What is Bluetooth?",topic:"Computer Knowledge",o:["a file extension", "a web browser", "a short-range wireless communication technology", "a wired printer connector only"],a:2,e:"Bluetooth: a short-range wireless communication technology."},
{q:"Which option correctly describes Bluetooth?",topic:"Computer Knowledge",o:["a short-range wireless communication technology", "a file extension", "a web browser", "a wired printer connector only"],a:0,e:"Bluetooth: a short-range wireless communication technology."},
{q:"Select the correct fact about Bluetooth.",topic:"Computer Knowledge",o:["a file extension", "a short-range wireless communication technology", "a wired printer connector only", "a web browser"],a:1,e:"Bluetooth: a short-range wireless communication technology."},
{q:"Bluetooth is best associated with which answer?",topic:"Computer Knowledge",o:["a short-range wireless communication technology", "a file extension", "a wired printer connector only", "a web browser"],a:0,e:"Bluetooth: a short-range wireless communication technology."},
{q:"What is Operating system example: Linux?",topic:"Computer Knowledge",o:["a spreadsheet program", "a computer port", "a web address", "an operating system"],a:3,e:"Operating system example: Linux: an operating system."},
{q:"Which option correctly describes Operating system example: Linux?",topic:"Computer Knowledge",o:["an operating system", "a spreadsheet program", "a web address", "a computer port"],a:0,e:"Operating system example: Linux: an operating system."},
{q:"Select the correct fact about Operating system example: Linux.",topic:"Computer Knowledge",o:["an operating system", "a spreadsheet program", "a web address", "a computer port"],a:0,e:"Operating system example: Linux: an operating system."},

{q:"Operating system example: Linux is best associated with which answer?",topic:"Computer Knowledge",o:["an operating system", "a web address", "a computer port", "a spreadsheet program"],a:0,e:"Operating system example: Linux: an operating system."},
{q:"What is Open-source software?",topic:"Computer Knowledge",o:["software that cannot be inspected", "software whose source code is available under a licence permitting use and modification", "software that runs without hardware", "software that is always malware"],a:1,e:"Open-source software: software whose source code is available under a licence permitting use and modification."},
{q:"Which option correctly describes Open-source software?",topic:"Computer Knowledge",o:["software that is always malware", "software whose source code is available under a licence permitting use and modification", "software that cannot be inspected", "software that runs without hardware"],a:1,e:"Open-source software: software whose source code is available under a licence permitting use and modification."},
{q:"Select the correct fact about Open-source software.",topic:"Computer Knowledge",o:["software whose source code is available under a licence permitting use and modification", "software that cannot be inspected", "software that is always malware", "software that runs without hardware"],a:0,e:"Open-source software: software whose source code is available under a licence permitting use and modification."},
{q:"Open-source software is best associated with which answer?",topic:"Computer Knowledge",o:["software that cannot be inspected", "software that runs without hardware", "software whose source code is available under a licence permitting use and modification", "software that is always malware"],a:2,e:"Open-source software: software whose source code is available under a licence permitting use and modification."},
{q:"What is Artificial intelligence?",topic:"Computer Knowledge",o:["a printer language", "computer systems performing tasks associated with human intelligence", "a physical storage unit", "a type of computer cable"],a:1,e:"Artificial intelligence: computer systems performing tasks associated with human intelligence."},
{q:"Which option correctly describes Artificial intelligence?",topic:"Computer Knowledge",o:["a printer language", "a physical storage unit", "a type of computer cable", "computer systems performing tasks associated with human intelligence"],a:3,e:"Artificial intelligence: computer systems performing tasks associated with human intelligence."},
{q:"Select the correct fact about Artificial intelligence.",topic:"Computer Knowledge",o:["computer systems performing tasks associated with human intelligence", "a type of computer cable", "a printer language", "a physical storage unit"],a:0,e:"Artificial intelligence: computer systems performing tasks associated with human intelligence."},
{q:"Artificial intelligence is best associated with which answer?",topic:"Computer Knowledge",o:["a physical storage unit", "a type of computer cable", "a printer language", "computer systems performing tasks associated with human intelligence"],a:3,e:"Artificial intelligence: computer systems performing tasks associated with human intelligence."},
{q:"What is QR code?",topic:"Computer Knowledge",o:["a type of audio speaker", "a keyboard shortcut", "a two-dimensional code that stores encoded information", "a computer processor"],a:2,e:"QR code: a two-dimensional code that stores encoded information."},

{q:"Which option correctly describes QR code?",topic:"Computer Knowledge",o:["a two-dimensional code that stores encoded information", "a keyboard shortcut", "a type of audio speaker", "a computer processor"],a:0,e:"QR code: a two-dimensional code that stores encoded information."},
{q:"Select the correct fact about QR code.",topic:"Computer Knowledge",o:["a keyboard shortcut", "a type of audio speaker", "a computer processor", "a two-dimensional code that stores encoded information"],a:3,e:"QR code: a two-dimensional code that stores encoded information."},
{q:"QR code is best associated with which answer?",topic:"Computer Knowledge",o:["a two-dimensional code that stores encoded information", "a computer processor", "a type of audio speaker", "a keyboard shortcut"],a:0,e:"QR code: a two-dimensional code that stores encoded information."},
{q:"What is JPEG?",topic:"Computer Knowledge",o:["a spreadsheet formula", "a commonly used image file format", "a network security protocol", "a video cable"],a:1,e:"JPEG: a commonly used image file format."},
{q:"Which option correctly describes JPEG?",topic:"Computer Knowledge",o:["a spreadsheet formula", "a video cable", "a network security protocol", "a commonly used image file format"],a:3,e:"JPEG: a commonly used image file format."},
{q:"Select the correct fact about JPEG.",topic:"Computer Knowledge",o:["a network security protocol", "a video cable", "a spreadsheet formula", "a commonly used image file format"],a:3,e:"JPEG: a commonly used image file format."},
{q:"JPEG is best associated with which answer?",topic:"Computer Knowledge",o:["a commonly used image file format", "a network security protocol", "a video cable", "a spreadsheet formula"],a:0,e:"JPEG: a commonly used image file format."},
{q:"What is MP3?",topic:"Computer Knowledge",o:["a database language", "an image format", "a printer driver", "a digital audio coding format"],a:3,e:"MP3: a digital audio coding format."},
{q:"Which option correctly describes MP3?",topic:"Computer Knowledge",o:["a database language", "a printer driver", "an image format", "a digital audio coding format"],a:3,e:"MP3: a digital audio coding format."},
{q:"Select the correct fact about MP3.",topic:"Computer Knowledge",o:["a printer driver", "a database language", "a digital audio coding format", "an image format"],a:2,e:"MP3: a digital audio coding format."},

{q:"MP3 is best associated with which answer?",topic:"Computer Knowledge",o:["an image format", "a digital audio coding format", "a printer driver", "a database language"],a:1,e:"MP3: a digital audio coding format."},
{q:"What is HTTPS?",topic:"Computer Knowledge",o:["a computer memory type", "HTTP protected by encryption using TLS", "a spreadsheet format", "a faster type of CPU"],a:1,e:"HTTPS: HTTP protected by encryption using TLS."},
{q:"Which option correctly describes HTTPS?",topic:"Computer Knowledge",o:["a computer memory type", "a spreadsheet format", "HTTP protected by encryption using TLS", "a faster type of CPU"],a:2,e:"HTTPS: HTTP protected by encryption using TLS."},
{q:"Select the correct fact about HTTPS.",topic:"Computer Knowledge",o:["HTTP protected by encryption using TLS", "a computer memory type", "a faster type of CPU", "a spreadsheet format"],a:0,e:"HTTPS: HTTP protected by encryption using TLS."},
{q:"HTTPS is best associated with which answer?",topic:"Computer Knowledge",o:["HTTP protected by encryption using TLS", "a faster type of CPU", "a spreadsheet format", "a computer memory type"],a:0,e:"HTTPS: HTTP protected by encryption using TLS."},
{q:"What is GUI?",topic:"Computer Knowledge",o:["General User Internet", "Graphical User Interface", "Graphic Unit Instruction", "Global Utility Input"],a:1,e:"GUI: Graphical User Interface."},
{q:"Which option correctly describes GUI?",topic:"Computer Knowledge",o:["Graphical User Interface", "General User Internet", "Graphic Unit Instruction", "Global Utility Input"],a:0,e:"GUI: Graphical User Interface."},
{q:"Select the correct fact about GUI.",topic:"Computer Knowledge",o:["Graphic Unit Instruction", "Global Utility Input", "Graphical User Interface", "General User Internet"],a:2,e:"GUI: Graphical User Interface."},
{q:"GUI is best associated with which answer?",topic:"Computer Knowledge",o:["Global Utility Input", "General User Internet", "Graphic Unit Instruction", "Graphical User Interface"],a:3,e:"GUI: Graphical User Interface."},
{q:"What is BIOS/UEFI?",topic:"Computer Knowledge",o:["firmware that initializes hardware and starts the boot process", "a spreadsheet function", "a type of antivirus", "a web search engine"],a:0,e:"BIOS/UEFI: firmware that initializes hardware and starts the boot process."},

{q:"Which option correctly describes BIOS/UEFI?",topic:"Computer Knowledge",o:["firmware that initializes hardware and starts the boot process", "a spreadsheet function", "a type of antivirus", "a web search engine"],a:0,e:"BIOS/UEFI: firmware that initializes hardware and starts the boot process."},
{q:"Select the correct fact about BIOS/UEFI.",topic:"Computer Knowledge",o:["a spreadsheet function", "a type of antivirus", "a web search engine", "firmware that initializes hardware and starts the boot process"],a:3,e:"BIOS/UEFI: firmware that initializes hardware and starts the boot process."},
{q:"BIOS/UEFI is best associated with which answer?",topic:"Computer Knowledge",o:["firmware that initializes hardware and starts the boot process", "a web search engine", "a type of antivirus", "a spreadsheet function"],a:0,e:"BIOS/UEFI: firmware that initializes hardware and starts the boot process."},
{q:"What is Cache?",topic:"Computer Knowledge",o:["temporary storage used to speed up data access", "a permanent paper record", "a type of keyboard", "a monitor connector"],a:0,e:"Cache: temporary storage used to speed up data access."},
{q:"Which option correctly describes Cache?",topic:"Computer Knowledge",o:["a permanent paper record", "a type of keyboard", "temporary storage used to speed up data access", "a monitor connector"],a:2,e:"Cache: temporary storage used to speed up data access."},
{q:"Select the correct fact about Cache.",topic:"Computer Knowledge",o:["a permanent paper record", "temporary storage used to speed up data access", "a type of keyboard", "a monitor connector"],a:1,e:"Cache: temporary storage used to speed up data access."},
{q:"Cache is best associated with which answer?",topic:"Computer Knowledge",o:["a permanent paper record", "a type of keyboard", "a monitor connector", "temporary storage used to speed up data access"],a:3,e:"Cache: temporary storage used to speed up data access."},
{q:"What is Recycle Bin?",topic:"Computer Knowledge",o:["a location for temporarily deleted files in many desktop systems", "a place to store passwords", "a network firewall", "a processor register"],a:0,e:"Recycle Bin: a location for temporarily deleted files in many desktop systems."},
{q:"Which option correctly describes Recycle Bin?",topic:"Computer Knowledge",o:["a processor register", "a place to store passwords", "a network firewall", "a location for temporarily deleted files in many desktop systems"],a:3,e:"Recycle Bin: a location for temporarily deleted files in many desktop systems."},
{q:"Select the correct fact about Recycle Bin.",topic:"Computer Knowledge",o:["a place to store passwords", "a network firewall", "a location for temporarily deleted files in many desktop systems", "a processor register"],a:2,e:"Recycle Bin: a location for temporarily deleted files in many desktop systems."},

{q:"Recycle Bin is best associated with which answer?",topic:"Computer Knowledge",o:["a network firewall", "a processor register", "a location for temporarily deleted files in many desktop systems", "a place to store passwords"],a:2,e:"Recycle Bin: a location for temporarily deleted files in many desktop systems."},
{q:"What is E-mail attachment?",topic:"Computer Knowledge",o:["a network password", "a web browser tab", "an email recipient", "a file sent along with an email message"],a:3,e:"E-mail attachment: a file sent along with an email message."},
{q:"Which option correctly describes E-mail attachment?",topic:"Computer Knowledge",o:["a file sent along with an email message", "an email recipient", "a web browser tab", "a network password"],a:0,e:"E-mail attachment: a file sent along with an email message."},
{q:"Select the correct fact about E-mail attachment.",topic:"Computer Knowledge",o:["a file sent along with an email message", "a network password", "an email recipient", "a web browser tab"],a:0,e:"E-mail attachment: a file sent along with an email message."},
{q:"E-mail attachment is best associated with which answer?",topic:"Computer Knowledge",o:["an email recipient", "a file sent along with an email message", "a web browser tab", "a network password"],a:1,e:"E-mail attachment: a file sent along with an email message."},
{q:"What is Capital of Pakistan?",topic:"Pakistan Studies",o:["Lahore", "Peshawar", "Islamabad", "Karachi"],a:2,e:"Capital of Pakistan: Islamabad."},
{q:"Which option correctly describes Capital of Pakistan?",topic:"Pakistan Studies",o:["Lahore", "Islamabad", "Karachi", "Peshawar"],a:1,e:"Capital of Pakistan: Islamabad."},
{q:"Select the correct fact about Capital of Pakistan.",topic:"Pakistan Studies",o:["Peshawar", "Karachi", "Islamabad", "Lahore"],a:2,e:"Capital of Pakistan: Islamabad."},
{q:"Capital of Pakistan is best associated with which answer?",topic:"Pakistan Studies",o:["Lahore", "Karachi", "Islamabad", "Peshawar"],a:2,e:"Capital of Pakistan: Islamabad."},
{q:"What is National language of Pakistan?",topic:"Pakistan Studies",o:["Sindhi", "Urdu", "Punjabi", "Pashto"],a:1,e:"National language of Pakistan: Urdu."},

// ======================================
//  1,600 QUESTIONS  COMPLETE HERE.
// ======================================

{q:"Which option correctly describes National language of Pakistan?",topic:"Pakistan Studies",o:["Sindhi", "Urdu", "Punjabi", "Pashto"],a:1,e:"National language of Pakistan: Urdu."},
{q:"Select the correct fact about National language of Pakistan.",topic:"Pakistan Studies",o:["Punjabi", "Urdu", "Pashto", "Sindhi"],a:1,e:"National language of Pakistan: Urdu."},
{q:"National language of Pakistan is best associated with which answer?",topic:"Pakistan Studies",o:["Urdu", "Sindhi", "Punjabi", "Pashto"],a:0,e:"National language of Pakistan: Urdu."},
{q:"What is Founder of Pakistan?",topic:"Pakistan Studies",o:["Muhammad Ali Jinnah", "Allama Iqbal", "Liaquat Ali Khan", "Sir Syed Ahmad Khan"],a:0,e:"Founder of Pakistan: Muhammad Ali Jinnah."},
{q:"Which option correctly describes Founder of Pakistan?",topic:"Pakistan Studies",o:["Sir Syed Ahmad Khan", "Muhammad Ali Jinnah", "Allama Iqbal", "Liaquat Ali Khan"],a:1,e:"Founder of Pakistan: Muhammad Ali Jinnah."},
{q:"Select the correct fact about Founder of Pakistan.",topic:"Pakistan Studies",o:["Sir Syed Ahmad Khan", "Liaquat Ali Khan", "Muhammad Ali Jinnah", "Allama Iqbal"],a:2,e:"Founder of Pakistan: Muhammad Ali Jinnah."},
{q:"Founder of Pakistan is best associated with which answer?",topic:"Pakistan Studies",o:["Allama Iqbal", "Muhammad Ali Jinnah", "Sir Syed Ahmad Khan", "Liaquat Ali Khan"],a:1,e:"Founder of Pakistan: Muhammad Ali Jinnah."},
{q:"What is Pakistan Independence Day?",topic:"Pakistan Studies",o:["25 December 1876", "6 September 1965", "14 August 1947", "23 March 1940"],a:2,e:"Pakistan Independence Day: 14 August 1947."},
{q:"Which option correctly describes Pakistan Independence Day?",topic:"Pakistan Studies",o:["6 September 1965", "14 August 1947", "25 December 1876", "23 March 1940"],a:1,e:"Pakistan Independence Day: 14 August 1947."},
{q:"Select the correct fact about Pakistan Independence Day.",topic:"Pakistan Studies",o:["6 September 1965", "14 August 1947", "23 March 1940", "25 December 1876"],a:1,e:"Pakistan Independence Day: 14 August 1947."},

{q:"Pakistan Independence Day is best associated with which answer?",topic:"Pakistan Studies",o:["23 March 1940", "6 September 1965", "14 August 1947", "25 December 1876"],a:2,e:"Pakistan Independence Day: 14 August 1947."},
{q:"What is Pakistan Resolution was passed in?",topic:"Pakistan Studies",o:["Karachi in 1947", "Lahore in 1940", "Dhaka in 1956", "Islamabad in 1962"],a:1,e:"Pakistan Resolution was passed in: Lahore in 1940."},
{q:"Which option correctly describes Pakistan Resolution was passed in?",topic:"Pakistan Studies",o:["Karachi in 1947", "Dhaka in 1956", "Lahore in 1940", "Islamabad in 1962"],a:2,e:"Pakistan Resolution was passed in: Lahore in 1940."},
{q:"Select the correct fact about Pakistan Resolution was passed in.",topic:"Pakistan Studies",o:["Islamabad in 1962", "Karachi in 1947", "Dhaka in 1956", "Lahore in 1940"],a:3,e:"Pakistan Resolution was passed in: Lahore in 1940."},
{q:"Pakistan Resolution was passed in is best associated with which answer?",topic:"Pakistan Studies",o:["Karachi in 1947", "Lahore in 1940", "Dhaka in 1956", "Islamabad in 1962"],a:1,e:"Pakistan Resolution was passed in: Lahore in 1940."},
{q:"What is Pakistan Day?",topic:"Pakistan Studies",o:["14 August", "25 December", "23 March", "6 September"],a:2,e:"Pakistan Day: 23 March."},
{q:"Which option correctly describes Pakistan Day?",topic:"Pakistan Studies",o:["25 December", "6 September", "23 March", "14 August"],a:2,e:"Pakistan Day: 23 March."},
{q:"Select the correct fact about Pakistan Day.",topic:"Pakistan Studies",o:["6 September", "14 August", "25 December", "23 March"],a:3,e:"Pakistan Day: 23 March."},
{q:"Pakistan Day is best associated with which answer?",topic:"Pakistan Studies",o:["14 August", "25 December", "6 September", "23 March"],a:3,e:"Pakistan Day: 23 March."},
{q:"What is First Governor-General of Pakistan?",topic:"Pakistan Studies",o:["Liaquat Ali Khan", "Iskander Mirza", "Ayub Khan", "Muhammad Ali Jinnah"],a:3,e:"First Governor-General of Pakistan: Muhammad Ali Jinnah."},

{q:"Which option correctly describes First Governor-General of Pakistan?",topic:"Pakistan Studies",o:["Liaquat Ali Khan", "Iskander Mirza", "Muhammad Ali Jinnah", "Ayub Khan"],a:2,e:"First Governor-General of Pakistan: Muhammad Ali Jinnah."},
{q:"Select the correct fact about First Governor-General of Pakistan.",topic:"Pakistan Studies",o:["Liaquat Ali Khan", "Ayub Khan", "Iskander Mirza", "Muhammad Ali Jinnah"],a:3,e:"First Governor-General of Pakistan: Muhammad Ali Jinnah."},
{q:"First Governor-General of Pakistan is best associated with which answer?",topic:"Pakistan Studies",o:["Iskander Mirza", "Liaquat Ali Khan", "Muhammad Ali Jinnah", "Ayub Khan"],a:2,e:"First Governor-General of Pakistan: Muhammad Ali Jinnah."},
{q:"What is First Prime Minister of Pakistan?",topic:"Pakistan Studies",o:["Muhammad Ali Jinnah", "Liaquat Ali Khan", "Khawaja Nazimuddin", "Zulfikar Ali Bhutto"],a:1,e:"First Prime Minister of Pakistan: Liaquat Ali Khan."},
{q:"Which option correctly describes First Prime Minister of Pakistan?",topic:"Pakistan Studies",o:["Liaquat Ali Khan", "Khawaja Nazimuddin", "Zulfikar Ali Bhutto", "Muhammad Ali Jinnah"],a:0,e:"First Prime Minister of Pakistan: Liaquat Ali Khan."},
{q:"Select the correct fact about First Prime Minister of Pakistan.",topic:"Pakistan Studies",o:["Khawaja Nazimuddin", "Muhammad Ali Jinnah", "Liaquat Ali Khan", "Zulfikar Ali Bhutto"],a:2,e:"First Prime Minister of Pakistan: Liaquat Ali Khan."},
{q:"First Prime Minister of Pakistan is best associated with which answer?",topic:"Pakistan Studies",o:["Liaquat Ali Khan", "Muhammad Ali Jinnah", "Zulfikar Ali Bhutto", "Khawaja Nazimuddin"],a:0,e:"First Prime Minister of Pakistan: Liaquat Ali Khan."},
{q:"What is National poet commonly known as Shair-e-Mashriq?",topic:"Pakistan Studies",o:["Faiz Ahmed Faiz", "Hafeez Jalandhari", "Allama Muhammad Iqbal", "Ahmad Faraz"],a:2,e:"National poet commonly known as Shair-e-Mashriq: Allama Muhammad Iqbal."},
{q:"Which option correctly describes National poet commonly known as Shair-e-Mashriq?",topic:"Pakistan Studies",o:["Faiz Ahmed Faiz", "Hafeez Jalandhari", "Allama Muhammad Iqbal", "Ahmad Faraz"],a:2,e:"National poet commonly known as Shair-e-Mashriq: Allama Muhammad Iqbal."},
{q:"Select the correct fact about National poet commonly known as Shair-e-Mashriq.",topic:"Pakistan Studies",o:["Ahmad Faraz", "Hafeez Jalandhari", "Allama Muhammad Iqbal", "Faiz Ahmed Faiz"],a:2,e:"National poet commonly known as Shair-e-Mashriq: Allama Muhammad Iqbal."},

{q:"National poet commonly known as Shair-e-Mashriq is best associated with which answer?",topic:"Pakistan Studies",o:["Allama Muhammad Iqbal", "Faiz Ahmed Faiz", "Ahmad Faraz", "Hafeez Jalandhari"],a:0,e:"National poet commonly known as Shair-e-Mashriq: Allama Muhammad Iqbal."},
{q:"What is National animal of Pakistan?",topic:"Pakistan Studies",o:["Markhor", "Lion", "Snow leopard", "Chinkara"],a:0,e:"National animal of Pakistan: Markhor."},
{q:"Which option correctly describes National animal of Pakistan?",topic:"Pakistan Studies",o:["Lion", "Chinkara", "Snow leopard", "Markhor"],a:3,e:"National animal of Pakistan: Markhor."},
{q:"Select the correct fact about National animal of Pakistan.",topic:"Pakistan Studies",o:["Chinkara", "Snow leopard", "Markhor", "Lion"],a:2,e:"National animal of Pakistan: Markhor."},
{q:"National animal of Pakistan is best associated with which answer?",topic:"Pakistan Studies",o:["Snow leopard", "Lion", "Markhor", "Chinkara"],a:2,e:"National animal of Pakistan: Markhor."},
{q:"What is National bird of Pakistan?",topic:"Pakistan Studies",o:["Eagle", "Chukar partridge", "Falcon", "Peacock"],a:1,e:"National bird of Pakistan: Chukar partridge."},
{q:"Which option correctly describes National bird of Pakistan?",topic:"Pakistan Studies",o:["Peacock", "Eagle", "Chukar partridge", "Falcon"],a:2,e:"National bird of Pakistan: Chukar partridge."},
{q:"Select the correct fact about National bird of Pakistan.",topic:"Pakistan Studies",o:["Peacock", "Chukar partridge", "Eagle", "Falcon"],a:1,e:"National bird of Pakistan: Chukar partridge."},
{q:"National bird of Pakistan is best associated with which answer?",topic:"Pakistan Studies",o:["Falcon", "Peacock", "Chukar partridge", "Eagle"],a:2,e:"National bird of Pakistan: Chukar partridge."},
{q:"What is National flower of Pakistan?",topic:"Pakistan Studies",o:["Rose", "Sunflower", "Tulip", "Jasmine"],a:3,e:"National flower of Pakistan: Jasmine."},

{q:"Which option correctly describes National flower of Pakistan?",topic:"Pakistan Studies",o:["Sunflower", "Jasmine", "Rose", "Tulip"],a:1,e:"National flower of Pakistan: Jasmine."},
{q:"Select the correct fact about National flower of Pakistan.",topic:"Pakistan Studies",o:["Jasmine", "Tulip", "Rose", "Sunflower"],a:0,e:"National flower of Pakistan: Jasmine."},
{q:"National flower of Pakistan is best associated with which answer?",topic:"Pakistan Studies",o:["Tulip", "Rose", "Jasmine", "Sunflower"],a:2,e:"National flower of Pakistan: Jasmine."},
{q:"What is National tree of Pakistan?",topic:"Pakistan Studies",o:["Deodar", "Neem", "Banyan", "Date palm"],a:0,e:"National tree of Pakistan: Deodar."},
{q:"Which option correctly describes National tree of Pakistan?",topic:"Pakistan Studies",o:["Neem", "Deodar", "Date palm", "Banyan"],a:1,e:"National tree of Pakistan: Deodar."},
{q:"Select the correct fact about National tree of Pakistan.",topic:"Pakistan Studies",o:["Banyan", "Date palm", "Neem", "Deodar"],a:3,e:"National tree of Pakistan: Deodar."},
{q:"National tree of Pakistan is best associated with which answer?",topic:"Pakistan Studies",o:["Banyan", "Deodar", "Date palm", "Neem"],a:1,e:"National tree of Pakistan: Deodar."},
{q:"What is Largest province of Pakistan by area?",topic:"Pakistan Studies",o:["Sindh", "Balochistan", "Khyber Pakhtunkhwa", "Punjab"],a:1,e:"Largest province of Pakistan by area: Balochistan."},
{q:"Which option correctly describes Largest province of Pakistan by area?",topic:"Pakistan Studies",o:["Sindh", "Balochistan", "Punjab", "Khyber Pakhtunkhwa"],a:1,e:"Largest province of Pakistan by area: Balochistan."},
{q:"Select the correct fact about Largest province of Pakistan by area.",topic:"Pakistan Studies",o:["Sindh", "Balochistan", "Punjab", "Khyber Pakhtunkhwa"],a:1,e:"Largest province of Pakistan by area: Balochistan."},

{q:"Largest province of Pakistan by area is best associated with which answer?",topic:"Pakistan Studies",o:["Balochistan", "Sindh", "Punjab", "Khyber Pakhtunkhwa"],a:0,e:"Largest province of Pakistan by area: Balochistan."},
{q:"What is Most populous province of Pakistan?",topic:"Pakistan Studies",o:["Balochistan", "Sindh", "Punjab", "Khyber Pakhtunkhwa"],a:2,e:"Most populous province of Pakistan: Punjab."},
{q:"Which option correctly describes Most populous province of Pakistan?",topic:"Pakistan Studies",o:["Sindh", "Khyber Pakhtunkhwa", "Punjab", "Balochistan"],a:2,e:"Most populous province of Pakistan: Punjab."},
{q:"Select the correct fact about Most populous province of Pakistan.",topic:"Pakistan Studies",o:["Khyber Pakhtunkhwa", "Sindh", "Punjab", "Balochistan"],a:2,e:"Most populous province of Pakistan: Punjab."},
{q:"Most populous province of Pakistan is best associated with which answer?",topic:"Pakistan Studies",o:["Balochistan", "Punjab", "Khyber Pakhtunkhwa", "Sindh"],a:1,e:"Most populous province of Pakistan: Punjab."},
{q:"What is Largest city of Pakistan by population?",topic:"Pakistan Studies",o:["Gilgit", "Karachi", "Quetta", "Multan"],a:1,e:"Largest city of Pakistan by population: Karachi."},
{q:"Which option correctly describes Largest city of Pakistan by population?",topic:"Pakistan Studies",o:["Gilgit", "Multan", "Quetta", "Karachi"],a:3,e:"Largest city of Pakistan by population: Karachi."},
{q:"Select the correct fact about Largest city of Pakistan by population.",topic:"Pakistan Studies",o:["Gilgit", "Quetta", "Multan", "Karachi"],a:3,e:"Largest city of Pakistan by population: Karachi."},
{q:"Largest city of Pakistan by population is best associated with which answer?",topic:"Pakistan Studies",o:["Karachi", "Quetta", "Gilgit", "Multan"],a:0,e:"Largest city of Pakistan by population: Karachi."},
{q:"What is Highest mountain in Pakistan?",topic:"Pakistan Studies",o:["Tirich Mir", "Nanga Parbat", "K2", "Rakaposhi"],a:2,e:"Highest mountain in Pakistan: K2."},

{q:"Which option correctly describes Highest mountain in Pakistan?",topic:"Pakistan Studies",o:["Nanga Parbat", "Tirich Mir", "K2", "Rakaposhi"],a:2,e:"Highest mountain in Pakistan: K2."},
{q:"Select the correct fact about Highest mountain in Pakistan.",topic:"Pakistan Studies",o:["Nanga Parbat", "K2", "Rakaposhi", "Tirich Mir"],a:1,e:"Highest mountain in Pakistan: K2."},
{q:"Highest mountain in Pakistan is best associated with which answer?",topic:"Pakistan Studies",o:["Nanga Parbat", "Tirich Mir", "K2", "Rakaposhi"],a:2,e:"Highest mountain in Pakistan: K2."},
{q:"What is Longest river of Pakistan?",topic:"Pakistan Studies",o:["Chenab River", "Ravi River", "Indus River", "Jhelum River"],a:2,e:"Longest river of Pakistan: Indus River."},
{q:"Which option correctly describes Longest river of Pakistan?",topic:"Pakistan Studies",o:["Jhelum River", "Indus River", "Chenab River", "Ravi River"],a:1,e:"Longest river of Pakistan: Indus River."},
{q:"Select the correct fact about Longest river of Pakistan.",topic:"Pakistan Studies",o:["Ravi River", "Jhelum River", "Indus River", "Chenab River"],a:2,e:"Longest river of Pakistan: Indus River."},
{q:"Longest river of Pakistan is best associated with which answer?",topic:"Pakistan Studies",o:["Jhelum River", "Chenab River", "Indus River", "Ravi River"],a:2,e:"Longest river of Pakistan: Indus River."},
{q:"What is National sport traditionally associated with Pakistan?",topic:"Pakistan Studies",o:["Cricket", "Squash", "Football", "Field hockey"],a:3,e:"National sport traditionally associated with Pakistan: Field hockey."},
{q:"Which option correctly describes National sport traditionally associated with Pakistan?",topic:"Pakistan Studies",o:["Cricket", "Football", "Field hockey", "Squash"],a:2,e:"National sport traditionally associated with Pakistan: Field hockey."},
{q:"Select the correct fact about National sport traditionally associated with Pakistan.",topic:"Pakistan Studies",o:["Field hockey", "Football", "Squash", "Cricket"],a:0,e:"National sport traditionally associated with Pakistan: Field hockey."},

{q:"National sport traditionally associated with Pakistan is best associated with which answer?",topic:"Pakistan Studies",o:["Field hockey", "Cricket", "Football", "Squash"],a:0,e:"National sport traditionally associated with Pakistan: Field hockey."},
{q:"What is Pakistan Standard Time?",topic:"Pakistan Studies",o:["UTC+5", "UTC+4", "UTC+6", "UTC+3"],a:0,e:"Pakistan Standard Time: UTC+5."},
{q:"Which option correctly describes Pakistan Standard Time?",topic:"Pakistan Studies",o:["UTC+5", "UTC+4", "UTC+6", "UTC+3"],a:0,e:"Pakistan Standard Time: UTC+5."},
{q:"Select the correct fact about Pakistan Standard Time.",topic:"Pakistan Studies",o:["UTC+6", "UTC+5", "UTC+3", "UTC+4"],a:1,e:"Pakistan Standard Time: UTC+5."},
{q:"Pakistan Standard Time is best associated with which answer?",topic:"Pakistan Studies",o:["UTC+3", "UTC+5", "UTC+6", "UTC+4"],a:1,e:"Pakistan Standard Time: UTC+5."},
{q:"What is Currency of Pakistan?",topic:"Pakistan Studies",o:["Pakistani rupee", "Taka", "Afghani", "Riyal"],a:0,e:"Currency of Pakistan: Pakistani rupee."},
{q:"Which option correctly describes Currency of Pakistan?",topic:"Pakistan Studies",o:["Pakistani rupee", "Afghani", "Taka", "Riyal"],a:0,e:"Currency of Pakistan: Pakistani rupee."},
{q:"Select the correct fact about Currency of Pakistan.",topic:"Pakistan Studies",o:["Afghani", "Riyal", "Pakistani rupee", "Taka"],a:2,e:"Currency of Pakistan: Pakistani rupee."},
{q:"Currency of Pakistan is best associated with which answer?",topic:"Pakistan Studies",o:["Riyal", "Afghani", "Pakistani rupee", "Taka"],a:2,e:"Currency of Pakistan: Pakistani rupee."},
{q:"What is State Bank of Pakistan began operations in?",topic:"Pakistan Studies",o:["23 March 1956", "14 August 1947", "1 July 1948", "1 January 1950"],a:2,e:"State Bank of Pakistan began operations in: 1 July 1948."},

{q:"Which option correctly describes State Bank of Pakistan began operations in?",topic:"Pakistan Studies",o:["1 January 1950", "14 August 1947", "1 July 1948", "23 March 1956"],a:2,e:"State Bank of Pakistan began operations in: 1 July 1948."},
{q:"Select the correct fact about State Bank of Pakistan began operations in.",topic:"Pakistan Studies",o:["1 January 1950", "23 March 1956", "14 August 1947", "1 July 1948"],a:3,e:"State Bank of Pakistan began operations in: 1 July 1948."},
{q:"State Bank of Pakistan began operations in is best associated with which answer?",topic:"Pakistan Studies",o:["14 August 1947", "1 January 1950", "1 July 1948", "23 March 1956"],a:2,e:"State Bank of Pakistan began operations in: 1 July 1948."},
{q:"What is Minar-e-Pakistan is located in?",topic:"Pakistan Studies",o:["Quetta", "Karachi", "Islamabad", "Lahore"],a:3,e:"Minar-e-Pakistan is located in: Lahore."},
{q:"Which option correctly describes Minar-e-Pakistan is located in?",topic:"Pakistan Studies",o:["Quetta", "Islamabad", "Lahore", "Karachi"],a:2,e:"Minar-e-Pakistan is located in: Lahore."},
{q:"Select the correct fact about Minar-e-Pakistan is located in.",topic:"Pakistan Studies",o:["Karachi", "Islamabad", "Quetta", "Lahore"],a:3,e:"Minar-e-Pakistan is located in: Lahore."},
{q:"Minar-e-Pakistan is located in is best associated with which answer?",topic:"Pakistan Studies",o:["Karachi", "Islamabad", "Quetta", "Lahore"],a:3,e:"Minar-e-Pakistan is located in: Lahore."},
{q:"What is Faisal Mosque is located in?",topic:"Pakistan Studies",o:["Lahore", "Hyderabad", "Islamabad", "Peshawar"],a:2,e:"Faisal Mosque is located in: Islamabad."},
{q:"Which option correctly describes Faisal Mosque is located in?",topic:"Pakistan Studies",o:["Lahore", "Hyderabad", "Peshawar", "Islamabad"],a:3,e:"Faisal Mosque is located in: Islamabad."},
{q:"Select the correct fact about Faisal Mosque is located in.",topic:"Pakistan Studies",o:["Lahore", "Hyderabad", "Peshawar", "Islamabad"],a:3,e:"Faisal Mosque is located in: Islamabad."},

{q:"Faisal Mosque is located in is best associated with which answer?",topic:"Pakistan Studies",o:["Lahore", "Islamabad", "Hyderabad", "Peshawar"],a:1,e:"Faisal Mosque is located in: Islamabad."},
{q:"What is Mazar-e-Quaid is located in?",topic:"Pakistan Studies",o:["Karachi", "Multan", "Lahore", "Islamabad"],a:0,e:"Mazar-e-Quaid is located in: Karachi."},
{q:"Which option correctly describes Mazar-e-Quaid is located in?",topic:"Pakistan Studies",o:["Multan", "Islamabad", "Lahore", "Karachi"],a:3,e:"Mazar-e-Quaid is located in: Karachi."},
{q:"Select the correct fact about Mazar-e-Quaid is located in.",topic:"Pakistan Studies",o:["Lahore", "Multan", "Karachi", "Islamabad"],a:2,e:"Mazar-e-Quaid is located in: Karachi."},
{q:"Mazar-e-Quaid is located in is best associated with which answer?",topic:"Pakistan Studies",o:["Lahore", "Karachi", "Islamabad", "Multan"],a:1,e:"Mazar-e-Quaid is located in: Karachi."},
{q:"What is Badshahi Mosque is located in?",topic:"Pakistan Studies",o:["Karachi", "Peshawar", "Lahore", "Sukkur"],a:2,e:"Badshahi Mosque is located in: Lahore."},
{q:"Which option correctly describes Badshahi Mosque is located in?",topic:"Pakistan Studies",o:["Peshawar", "Lahore", "Sukkur", "Karachi"],a:1,e:"Badshahi Mosque is located in: Lahore."},
{q:"Select the correct fact about Badshahi Mosque is located in.",topic:"Pakistan Studies",o:["Sukkur", "Lahore", "Karachi", "Peshawar"],a:1,e:"Badshahi Mosque is located in: Lahore."},
{q:"Badshahi Mosque is located in is best associated with which answer?",topic:"Pakistan Studies",o:["Peshawar", "Sukkur", "Lahore", "Karachi"],a:2,e:"Badshahi Mosque is located in: Lahore."},
{q:"What is Mohenjo-daro is in?",topic:"Pakistan Studies",o:["Balochistan", "Punjab", "Sindh", "Gilgit-Baltistan"],a:2,e:"Mohenjo-daro is in: Sindh."},

// ======================================
//    1,700 QUESTIONS  COMPLETE HERE.
// ======================================

{q:"Which option correctly describes Mohenjo-daro is in?",topic:"Pakistan Studies",o:["Sindh", "Gilgit-Baltistan", "Balochistan", "Punjab"],a:0,e:"Mohenjo-daro is in: Sindh."},
{q:"Select the correct fact about Mohenjo-daro is in.",topic:"Pakistan Studies",o:["Balochistan", "Punjab", "Sindh", "Gilgit-Baltistan"],a:2,e:"Mohenjo-daro is in: Sindh."},
{q:"Mohenjo-daro is in is best associated with which answer?",topic:"Pakistan Studies",o:["Punjab", "Balochistan", "Sindh", "Gilgit-Baltistan"],a:2,e:"Mohenjo-daro is in: Sindh."},
{q:"What is Taxila is in?",topic:"Pakistan Studies",o:["Sindh", "Azad Kashmir", "Balochistan", "Punjab"],a:3,e:"Taxila is in: Punjab."},
{q:"Which option correctly describes Taxila is in?",topic:"Pakistan Studies",o:["Azad Kashmir", "Balochistan", "Sindh", "Punjab"],a:3,e:"Taxila is in: Punjab."},
{q:"Select the correct fact about Taxila is in.",topic:"Pakistan Studies",o:["Balochistan", "Azad Kashmir", "Punjab", "Sindh"],a:2,e:"Taxila is in: Punjab."},
{q:"Taxila is in is best associated with which answer?",topic:"Pakistan Studies",o:["Punjab", "Sindh", "Azad Kashmir", "Balochistan"],a:0,e:"Taxila is in: Punjab."},
{q:"What is Gwadar Port is in?",topic:"Pakistan Studies",o:["Balochistan", "Sindh", "Khyber Pakhtunkhwa", "Punjab"],a:0,e:"Gwadar Port is in: Balochistan."},
{q:"Which option correctly describes Gwadar Port is in?",topic:"Pakistan Studies",o:["Punjab", "Sindh", "Khyber Pakhtunkhwa", "Balochistan"],a:3,e:"Gwadar Port is in: Balochistan."},
{q:"Select the correct fact about Gwadar Port is in.",topic:"Pakistan Studies",o:["Sindh", "Punjab", "Khyber Pakhtunkhwa", "Balochistan"],a:3,e:"Gwadar Port is in: Balochistan."},

{q:"Gwadar Port is in is best associated with which answer?",topic:"Pakistan Studies",o:["Balochistan", "Punjab", "Khyber Pakhtunkhwa", "Sindh"],a:0,e:"Gwadar Port is in: Balochistan."},
{q:"What is Khyber Pass connects Pakistan with?",topic:"Pakistan Studies",o:["India", "Iran", "China", "Afghanistan"],a:3,e:"Khyber Pass connects Pakistan with: Afghanistan."},
{q:"Which option correctly describes Khyber Pass connects Pakistan with?",topic:"Pakistan Studies",o:["Iran", "China", "Afghanistan", "India"],a:2,e:"Khyber Pass connects Pakistan with: Afghanistan."},
{q:"Select the correct fact about Khyber Pass connects Pakistan with.",topic:"Pakistan Studies",o:["India", "China", "Iran", "Afghanistan"],a:3,e:"Khyber Pass connects Pakistan with: Afghanistan."},
{q:"Khyber Pass connects Pakistan with is best associated with which answer?",topic:"Pakistan Studies",o:["Afghanistan", "India", "Iran", "China"],a:0,e:"Khyber Pass connects Pakistan with: Afghanistan."},
{q:"What is Karakoram Highway links Pakistan with?",topic:"Pakistan Studies",o:["Nepal", "Oman", "Iran", "China"],a:3,e:"Karakoram Highway links Pakistan with: China."},
{q:"Which option correctly describes Karakoram Highway links Pakistan with?",topic:"Pakistan Studies",o:["Oman", "Iran", "China", "Nepal"],a:2,e:"Karakoram Highway links Pakistan with: China."},
{q:"Select the correct fact about Karakoram Highway links Pakistan with.",topic:"Pakistan Studies",o:["Iran", "Nepal", "Oman", "China"],a:3,e:"Karakoram Highway links Pakistan with: China."},
{q:"Karakoram Highway links Pakistan with is best associated with which answer?",topic:"Pakistan Studies",o:["Oman", "China", "Nepal", "Iran"],a:1,e:"Karakoram Highway links Pakistan with: China."},
{q:"What is Pakistan shares a border with China?",topic:"Pakistan Studies",o:["only in the west", "in the north/northeast", "only in the east", "only in the south"],a:1,e:"Pakistan shares a border with China: in the north/northeast."},

{q:"Which option correctly describes Pakistan shares a border with China?",topic:"Pakistan Studies",o:["in the north/northeast", "only in the east", "only in the south", "only in the west"],a:0,e:"Pakistan shares a border with China: in the north/northeast."},
{q:"Select the correct fact about Pakistan shares a border with China.",topic:"Pakistan Studies",o:["only in the east", "only in the south", "in the north/northeast", "only in the west"],a:2,e:"Pakistan shares a border with China: in the north/northeast."},
{q:"Pakistan shares a border with China is best associated with which answer?",topic:"Pakistan Studies",o:["only in the east", "only in the south", "in the north/northeast", "only in the west"],a:2,e:"Pakistan shares a border with China: in the north/northeast."},
{q:"What is Arabian Sea lies to Pakistan’s?",topic:"Pakistan Studies",o:["west", "north", "south", "east"],a:2,e:"Arabian Sea lies to Pakistan’s: south."},
{q:"Which option correctly describes Arabian Sea lies to Pakistan’s?",topic:"Pakistan Studies",o:["east", "north", "west", "south"],a:3,e:"Arabian Sea lies to Pakistan’s: south."},
{q:"Select the correct fact about Arabian Sea lies to Pakistan’s.",topic:"Pakistan Studies",o:["east", "west", "south", "north"],a:2,e:"Arabian Sea lies to Pakistan’s: south."},
{q:"Arabian Sea lies to Pakistan’s is best associated with which answer?",topic:"Pakistan Studies",o:["north", "west", "south", "east"],a:2,e:"Arabian Sea lies to Pakistan’s: south."},
{q:"What is Pakistan’s first constitution was adopted in?",topic:"Pakistan Studies",o:["1973", "1962", "1956", "1947"],a:2,e:"Pakistan’s first constitution was adopted in: 1956."},
{q:"Which option correctly describes Pakistan’s first constitution was adopted in?",topic:"Pakistan Studies",o:["1962", "1947", "1956", "1973"],a:2,e:"Pakistan’s first constitution was adopted in: 1956."},
{q:"Select the correct fact about Pakistan’s first constitution was adopted in.",topic:"Pakistan Studies",o:["1962", "1956", "1973", "1947"],a:1,e:"Pakistan’s first constitution was adopted in: 1956."},

{q:"Pakistan’s first constitution was adopted in is best associated with which answer?",topic:"Pakistan Studies",o:["1973", "1956", "1947", "1962"],a:1,e:"Pakistan’s first constitution was adopted in: 1956."},
{q:"What is Current constitution of Pakistan was adopted in?",topic:"Pakistan Studies",o:["1962", "1985", "1973", "1956"],a:2,e:"Current constitution of Pakistan was adopted in: 1973."},
{q:"Which option correctly describes Current constitution of Pakistan was adopted in?",topic:"Pakistan Studies",o:["1973", "1985", "1962", "1956"],a:0,e:"Current constitution of Pakistan was adopted in: 1973."},
{q:"Select the correct fact about Current constitution of Pakistan was adopted in.",topic:"Pakistan Studies",o:["1956", "1985", "1973", "1962"],a:2,e:"Current constitution of Pakistan was adopted in: 1973."},
{q:"Current constitution of Pakistan was adopted in is best associated with which answer?",topic:"Pakistan Studies",o:["1973", "1985", "1956", "1962"],a:0,e:"Current constitution of Pakistan was adopted in: 1973."},
{q:"What is The national anthem lyrics were written by?",topic:"Pakistan Studies",o:["Allama Iqbal", "Hafeez Jalandhari", "Josh Malihabadi", "Faiz Ahmed Faiz"],a:1,e:"The national anthem lyrics were written by: Hafeez Jalandhari."},
{q:"Which option correctly describes The national anthem lyrics were written by?",topic:"Pakistan Studies",o:["Allama Iqbal", "Hafeez Jalandhari", "Josh Malihabadi", "Faiz Ahmed Faiz"],a:1,e:"The national anthem lyrics were written by: Hafeez Jalandhari."},
{q:"Select the correct fact about The national anthem lyrics were written by.",topic:"Pakistan Studies",o:["Faiz Ahmed Faiz", "Allama Iqbal", "Hafeez Jalandhari", "Josh Malihabadi"],a:2,e:"The national anthem lyrics were written by: Hafeez Jalandhari."},
{q:"The national anthem lyrics were written by is best associated with which answer?",topic:"Pakistan Studies",o:["Josh Malihabadi", "Hafeez Jalandhari", "Allama Iqbal", "Faiz Ahmed Faiz"],a:1,e:"The national anthem lyrics were written by: Hafeez Jalandhari."},
{q:"What is The national anthem music was composed by?",topic:"Pakistan Studies",o:["Nisar Bazmi", "Ahmad G. Chagla", "Nusrat Fateh Ali Khan", "Rahat Fateh Ali Khan"],a:1,e:"The national anthem music was composed by: Ahmad G. Chagla."},

{q:"Which option correctly describes The national anthem music was composed by?",topic:"Pakistan Studies",o:["Rahat Fateh Ali Khan", "Ahmad G. Chagla", "Nusrat Fateh Ali Khan", "Nisar Bazmi"],a:1,e:"The national anthem music was composed by: Ahmad G. Chagla."},
{q:"Select the correct fact about The national anthem music was composed by.",topic:"Pakistan Studies",o:["Ahmad G. Chagla", "Rahat Fateh Ali Khan", "Nusrat Fateh Ali Khan", "Nisar Bazmi"],a:0,e:"The national anthem music was composed by: Ahmad G. Chagla."},
{q:"The national anthem music was composed by is best associated with which answer?",topic:"Pakistan Studies",o:["Ahmad G. Chagla", "Nusrat Fateh Ali Khan", "Rahat Fateh Ali Khan", "Nisar Bazmi"],a:0,e:"The national anthem music was composed by: Ahmad G. Chagla."},
{q:"What is Pakistan joined the United Nations in?",topic:"Pakistan Studies",o:["1956", "1965", "1971", "1947"],a:3,e:"Pakistan joined the United Nations in: 1947."},
{q:"Which option correctly describes Pakistan joined the United Nations in?",topic:"Pakistan Studies",o:["1956", "1965", "1947", "1971"],a:2,e:"Pakistan joined the United Nations in: 1947."},
{q:"Select the correct fact about Pakistan joined the United Nations in.",topic:"Pakistan Studies",o:["1956", "1971", "1965", "1947"],a:3,e:"Pakistan joined the United Nations in: 1947."},
{q:"Pakistan joined the United Nations in is best associated with which answer?",topic:"Pakistan Studies",o:["1956", "1947", "1965", "1971"],a:1,e:"Pakistan joined the United Nations in: 1947."},
{q:"What is The 1965 Defence Day is observed on?",topic:"Pakistan Studies",o:["25 December", "6 September", "14 August", "23 March"],a:1,e:"The 1965 Defence Day is observed on: 6 September."},
{q:"Which option correctly describes The 1965 Defence Day is observed on?",topic:"Pakistan Studies",o:["6 September", "25 December", "14 August", "23 March"],a:0,e:"The 1965 Defence Day is observed on: 6 September."},
{q:"Select the correct fact about The 1965 Defence Day is observed on.",topic:"Pakistan Studies",o:["14 August", "6 September", "23 March", "25 December"],a:1,e:"The 1965 Defence Day is observed on: 6 September."},

{q:"The 1965 Defence Day is observed on is best associated with which answer?",topic:"Pakistan Studies",o:["14 August", "23 March", "25 December", "6 September"],a:3,e:"The 1965 Defence Day is observed on: 6 September."},
{q:"What is Youm-e-Takbeer is observed on?",topic:"Pakistan Studies",o:["6 September", "23 March", "28 May", "14 August"],a:2,e:"Youm-e-Takbeer is observed on: 28 May."},
{q:"Which option correctly describes Youm-e-Takbeer is observed on?",topic:"Pakistan Studies",o:["23 March", "28 May", "14 August", "6 September"],a:1,e:"Youm-e-Takbeer is observed on: 28 May."},
{q:"Select the correct fact about Youm-e-Takbeer is observed on.",topic:"Pakistan Studies",o:["28 May", "14 August", "23 March", "6 September"],a:0,e:"Youm-e-Takbeer is observed on: 28 May."},
{q:"Youm-e-Takbeer is observed on is best associated with which answer?",topic:"Pakistan Studies",o:["6 September", "23 March", "28 May", "14 August"],a:2,e:"Youm-e-Takbeer is observed on: 28 May."},
{q:"What is Pakistan conducted nuclear tests in?",topic:"Pakistan Studies",o:["1985", "2001", "1974", "1998"],a:3,e:"Pakistan conducted nuclear tests in: 1998."},
{q:"Which option correctly describes Pakistan conducted nuclear tests in?",topic:"Pakistan Studies",o:["1974", "1985", "2001", "1998"],a:3,e:"Pakistan conducted nuclear tests in: 1998."},
{q:"Select the correct fact about Pakistan conducted nuclear tests in.",topic:"Pakistan Studies",o:["1974", "2001", "1985", "1998"],a:3,e:"Pakistan conducted nuclear tests in: 1998."},
{q:"Pakistan conducted nuclear tests in is best associated with which answer?",topic:"Pakistan Studies",o:["1985", "2001", "1974", "1998"],a:3,e:"Pakistan conducted nuclear tests in: 1998."},
{q:"What is Allama Iqbal was born in?",topic:"Pakistan Studies",o:["Lahore", "Karachi", "Peshawar", "Sialkot"],a:3,e:"Allama Iqbal was born in: Sialkot."},

{q:"Which option correctly describes Allama Iqbal was born in?",topic:"Pakistan Studies",o:["Lahore", "Sialkot", "Peshawar", "Karachi"],a:1,e:"Allama Iqbal was born in: Sialkot."},
{q:"Select the correct fact about Allama Iqbal was born in.",topic:"Pakistan Studies",o:["Peshawar", "Lahore", "Sialkot", "Karachi"],a:2,e:"Allama Iqbal was born in: Sialkot."},
{q:"Allama Iqbal was born in is best associated with which answer?",topic:"Pakistan Studies",o:["Peshawar", "Sialkot", "Lahore", "Karachi"],a:1,e:"Allama Iqbal was born in: Sialkot."},
{q:"What is Quaid-e-Azam was born on?",topic:"Pakistan Studies",o:["14 August 1947", "9 November 1877", "25 December 1876", "23 March 1940"],a:2,e:"Quaid-e-Azam was born on: 25 December 1876."},
{q:"Which option correctly describes Quaid-e-Azam was born on?",topic:"Pakistan Studies",o:["9 November 1877", "25 December 1876", "23 March 1940", "14 August 1947"],a:1,e:"Quaid-e-Azam was born on: 25 December 1876."},
{q:"Select the correct fact about Quaid-e-Azam was born on.",topic:"Pakistan Studies",o:["14 August 1947", "9 November 1877", "23 March 1940", "25 December 1876"],a:3,e:"Quaid-e-Azam was born on: 25 December 1876."},
{q:"Quaid-e-Azam was born on is best associated with which answer?",topic:"Pakistan Studies",o:["23 March 1940", "9 November 1877", "14 August 1947", "25 December 1876"],a:3,e:"Quaid-e-Azam was born on: 25 December 1876."},
{q:"What is The Indus Waters Treaty was signed in?",topic:"Pakistan Studies",o:["1960", "1973", "1947", "1956"],a:0,e:"The Indus Waters Treaty was signed in: 1960."},
{q:"Which option correctly describes The Indus Waters Treaty was signed in?",topic:"Pakistan Studies",o:["1947", "1960", "1973", "1956"],a:1,e:"The Indus Waters Treaty was signed in: 1960."},
{q:"Select the correct fact about The Indus Waters Treaty was signed in.",topic:"Pakistan Studies",o:["1973", "1960", "1956", "1947"],a:1,e:"The Indus Waters Treaty was signed in: 1960."},

{q:"The Indus Waters Treaty was signed in is best associated with which answer?",topic:"Pakistan Studies",o:["1960", "1973", "1947", "1956"],a:0,e:"The Indus Waters Treaty was signed in: 1960."},
{q:"What is The largest desert in Pakistan commonly identified is?",topic:"Pakistan Studies",o:["Cholistan only", "Kharan Desert", "Thar Desert", "Katpana Desert"],a:2,e:"The largest desert in Pakistan commonly identified is: Thar Desert."},
{q:"Which option correctly describes The largest desert in Pakistan commonly identified is?",topic:"Pakistan Studies",o:["Katpana Desert", "Thar Desert", "Cholistan only", "Kharan Desert"],a:1,e:"The largest desert in Pakistan commonly identified is: Thar Desert."},
{q:"Select the correct fact about The largest desert in Pakistan commonly identified is.",topic:"Pakistan Studies",o:["Kharan Desert", "Cholistan only", "Katpana Desert", "Thar Desert"],a:3,e:"The largest desert in Pakistan commonly identified is: Thar Desert."},
{q:"The largest desert in Pakistan commonly identified is is best associated with which answer?",topic:"Pakistan Studies",o:["Thar Desert", "Katpana Desert", "Cholistan only", "Kharan Desert"],a:0,e:"The largest desert in Pakistan commonly identified is: Thar Desert."},
{q:"What is The Siachen Glacier is in the?",topic:"Pakistan Studies",o:["Kirthar Range", "Salt Range", "Sulaiman Range", "Karakoram range"],a:3,e:"The Siachen Glacier is in the: Karakoram range."},
{q:"Which option correctly describes The Siachen Glacier is in the?",topic:"Pakistan Studies",o:["Kirthar Range", "Karakoram range", "Sulaiman Range", "Salt Range"],a:1,e:"The Siachen Glacier is in the: Karakoram range."},
{q:"Select the correct fact about The Siachen Glacier is in the.",topic:"Pakistan Studies",o:["Karakoram range", "Salt Range", "Kirthar Range", "Sulaiman Range"],a:0,e:"The Siachen Glacier is in the: Karakoram range."},
{q:"The Siachen Glacier is in the is best associated with which answer?",topic:"Pakistan Studies",o:["Karakoram range", "Sulaiman Range", "Salt Range", "Kirthar Range"],a:0,e:"The Siachen Glacier is in the: Karakoram range."},
{q:"What is The Parliament of Pakistan is located in?",topic:"Pakistan Studies",o:["Islamabad", "Quetta", "Lahore", "Karachi"],a:0,e:"The Parliament of Pakistan is located in: Islamabad."},

{q:"Which option correctly describes The Parliament of Pakistan is located in?",topic:"Pakistan Studies",o:["Karachi", "Islamabad", "Lahore", "Quetta"],a:1,e:"The Parliament of Pakistan is located in: Islamabad."},
{q:"Select the correct fact about The Parliament of Pakistan is located in.",topic:"Pakistan Studies",o:["Lahore", "Islamabad", "Quetta", "Karachi"],a:1,e:"The Parliament of Pakistan is located in: Islamabad."},
{q:"The Parliament of Pakistan is located in is best associated with which answer?",topic:"Pakistan Studies",o:["Lahore", "Quetta", "Karachi", "Islamabad"],a:3,e:"The Parliament of Pakistan is located in: Islamabad."},
{q:"What is The lower house of Pakistan’s Parliament is the?",topic:"Pakistan Studies",o:["National Assembly", "Senate", "Supreme Court", "Cabinet"],a:0,e:"The lower house of Pakistan’s Parliament is the: National Assembly."},
{q:"Which option correctly describes The lower house of Pakistan’s Parliament is the?",topic:"Pakistan Studies",o:["Supreme Court", "National Assembly", "Senate", "Cabinet"],a:1,e:"The lower house of Pakistan’s Parliament is the: National Assembly."},
{q:"Select the correct fact about The lower house of Pakistan’s Parliament is the.",topic:"Pakistan Studies",o:["National Assembly", "Senate", "Supreme Court", "Cabinet"],a:0,e:"The lower house of Pakistan’s Parliament is the: National Assembly."},
{q:"The lower house of Pakistan’s Parliament is the is best associated with which answer?",topic:"Pakistan Studies",o:["Senate", "Supreme Court", "Cabinet", "National Assembly"],a:3,e:"The lower house of Pakistan’s Parliament is the: National Assembly."},
{q:"What is The upper house of Pakistan’s Parliament is the?",topic:"Pakistan Studies",o:["Senate", "Cabinet", "Provincial Assembly", "National Assembly"],a:0,e:"The upper house of Pakistan’s Parliament is the: Senate."},
{q:"Which option correctly describes The upper house of Pakistan’s Parliament is the?",topic:"Pakistan Studies",o:["Senate", "Cabinet", "National Assembly", "Provincial Assembly"],a:0,e:"The upper house of Pakistan’s Parliament is the: Senate."},
{q:"Select the correct fact about The upper house of Pakistan’s Parliament is the.",topic:"Pakistan Studies",o:["National Assembly", "Senate", "Provincial Assembly", "Cabinet"],a:1,e:"The upper house of Pakistan’s Parliament is the: Senate."},

{q:"The upper house of Pakistan’s Parliament is the is best associated with which answer?",topic:"Pakistan Studies",o:["Cabinet", "Provincial Assembly", "Senate", "National Assembly"],a:2,e:"The upper house of Pakistan’s Parliament is the: Senate."},
{q:"What is CBC?",topic:"Laboratory Knowledge",o:["Clinical Blood Chemistry", "Cellular Biopsy Count", "Coagulation Blood Check", "Complete Blood Count"],a:3,e:"CBC: Complete Blood Count."},
{q:"Which option correctly describes CBC?",topic:"Laboratory Knowledge",o:["Complete Blood Count", "Cellular Biopsy Count", "Clinical Blood Chemistry", "Coagulation Blood Check"],a:0,e:"CBC: Complete Blood Count."},
{q:"Select the correct fact about CBC.",topic:"Laboratory Knowledge",o:["Cellular Biopsy Count", "Clinical Blood Chemistry", "Complete Blood Count", "Coagulation Blood Check"],a:2,e:"CBC: Complete Blood Count."},
{q:"CBC is best associated with which answer?",topic:"Laboratory Knowledge",o:["Cellular Biopsy Count", "Coagulation Blood Check", "Clinical Blood Chemistry", "Complete Blood Count"],a:3,e:"CBC: Complete Blood Count."},
{q:"What is ESR?",topic:"Laboratory Knowledge",o:["Enzyme Sedimentation Reading", "Estimated Serum Reaction", "Erythrocyte Sedimentation Rate", "Erythrocyte Sugar Ratio"],a:2,e:"ESR: Erythrocyte Sedimentation Rate."},
{q:"Which option correctly describes ESR?",topic:"Laboratory Knowledge",o:["Erythrocyte Sedimentation Rate", "Enzyme Sedimentation Reading", "Erythrocyte Sugar Ratio", "Estimated Serum Reaction"],a:0,e:"ESR: Erythrocyte Sedimentation Rate."},
{q:"Select the correct fact about ESR.",topic:"Laboratory Knowledge",o:["Erythrocyte Sugar Ratio", "Estimated Serum Reaction", "Erythrocyte Sedimentation Rate", "Enzyme Sedimentation Reading"],a:2,e:"ESR: Erythrocyte Sedimentation Rate."},
{q:"ESR is best associated with which answer?",topic:"Laboratory Knowledge",o:["Erythrocyte Sedimentation Rate", "Enzyme Sedimentation Reading", "Erythrocyte Sugar Ratio", "Estimated Serum Reaction"],a:0,e:"ESR: Erythrocyte Sedimentation Rate."},
{q:"What is CRP?",topic:"Laboratory Knowledge",o:["Complete Red-cell Panel", "Creatinine Renal Profile", "C-reactive protein", "Clotting Response Protein"],a:2,e:"CRP: C-reactive protein."},

// ======================================
//  1,800 QUESTIONS  COMPLETE HERE.
// ======================================

{q:"Which option correctly describes CRP?",topic:"Laboratory Knowledge",o:["Clotting Response Protein", "Creatinine Renal Profile", "Complete Red-cell Panel", "C-reactive protein"],a:3,e:"CRP: C-reactive protein."},
{q:"Select the correct fact about CRP.",topic:"Laboratory Knowledge",o:["Complete Red-cell Panel", "C-reactive protein", "Creatinine Renal Profile", "Clotting Response Protein"],a:1,e:"CRP: C-reactive protein."},
{q:"CRP is best associated with which answer?",topic:"Laboratory Knowledge",o:["C-reactive protein", "Clotting Response Protein", "Creatinine Renal Profile", "Complete Red-cell Panel"],a:0,e:"CRP: C-reactive protein."},
{q:"What is PT?",topic:"Laboratory Knowledge",o:["Prothrombin Time", "Plasma Temperature", "Platelet Test", "Protein Titre"],a:0,e:"PT: Prothrombin Time."},
{q:"Which option correctly describes PT?",topic:"Laboratory Knowledge",o:["Plasma Temperature", "Protein Titre", "Prothrombin Time", "Platelet Test"],a:2,e:"PT: Prothrombin Time."},
{q:"Select the correct fact about PT.",topic:"Laboratory Knowledge",o:["Protein Titre", "Platelet Test", "Plasma Temperature", "Prothrombin Time"],a:3,e:"PT: Prothrombin Time."},
{q:"PT is best associated with which answer?",topic:"Laboratory Knowledge",o:["Prothrombin Time", "Plasma Temperature", "Protein Titre", "Platelet Test"],a:0,e:"PT: Prothrombin Time."},
{q:"What is APTT?",topic:"Laboratory Knowledge",o:["Arterial Partial Pressure Test", "Activated Partial Thromboplastin Time", "Absolute Plasma Thrombin Titre", "Activated Platelet Protein Test"],a:1,e:"APTT: Activated Partial Thromboplastin Time."},
{q:"Which option correctly describes APTT?",topic:"Laboratory Knowledge",o:["Activated Platelet Protein Test", "Activated Partial Thromboplastin Time", "Arterial Partial Pressure Test", "Absolute Plasma Thrombin Titre"],a:1,e:"APTT: Activated Partial Thromboplastin Time."},
{q:"Select the correct fact about APTT.",topic:"Laboratory Knowledge",o:["Arterial Partial Pressure Test", "Activated Partial Thromboplastin Time", "Activated Platelet Protein Test", "Absolute Plasma Thrombin Titre"],a:1,e:"APTT: Activated Partial Thromboplastin Time."},

{q:"APTT is best associated with which answer?",topic:"Laboratory Knowledge",o:["Absolute Plasma Thrombin Titre", "Activated Partial Thromboplastin Time", "Arterial Partial Pressure Test", "Activated Platelet Protein Test"],a:1,e:"APTT: Activated Partial Thromboplastin Time."},
{q:"What is INR?",topic:"Laboratory Knowledge",o:["Iron Normal Ratio", "International Neuron Range", "International Normalized Ratio", "Internal Neutrophil Reading"],a:2,e:"INR: International Normalized Ratio."},
{q:"Which option correctly describes INR?",topic:"Laboratory Knowledge",o:["Internal Neutrophil Reading", "International Normalized Ratio", "Iron Normal Ratio", "International Neuron Range"],a:1,e:"INR: International Normalized Ratio."},
{q:"Select the correct fact about INR.",topic:"Laboratory Knowledge",o:["Iron Normal Ratio", "Internal Neutrophil Reading", "International Neuron Range", "International Normalized Ratio"],a:3,e:"INR: International Normalized Ratio."},
{q:"INR is best associated with which answer?",topic:"Laboratory Knowledge",o:["International Neuron Range", "Iron Normal Ratio", "International Normalized Ratio", "Internal Neutrophil Reading"],a:2,e:"INR: International Normalized Ratio."},
{q:"What is HbA1c?",topic:"Laboratory Knowledge",o:["a test of kidney filtration", "a measure of glycated haemoglobin reflecting average glucose over roughly 2–3 months", "a direct measurement of insulin", "a platelet count"],a:1,e:"HbA1c: a measure of glycated haemoglobin reflecting average glucose over roughly 2–3 months."},
{q:"Which option correctly describes HbA1c?",topic:"Laboratory Knowledge",o:["a test of kidney filtration", "a direct measurement of insulin", "a platelet count", "a measure of glycated haemoglobin reflecting average glucose over roughly 2–3 months"],a:3,e:"HbA1c: a measure of glycated haemoglobin reflecting average glucose over roughly 2–3 months."},
{q:"Select the correct fact about HbA1c.",topic:"Laboratory Knowledge",o:["a platelet count", "a direct measurement of insulin", "a test of kidney filtration", "a measure of glycated haemoglobin reflecting average glucose over roughly 2–3 months"],a:3,e:"HbA1c: a measure of glycated haemoglobin reflecting average glucose over roughly 2–3 months."},
{q:"HbA1c is best associated with which answer?",topic:"Laboratory Knowledge",o:["a test of kidney filtration", "a direct measurement of insulin", "a platelet count", "a measure of glycated haemoglobin reflecting average glucose over roughly 2–3 months"],a:3,e:"HbA1c: a measure of glycated haemoglobin reflecting average glucose over roughly 2–3 months."},
{q:"What is ALT?",topic:"Laboratory Knowledge",o:["Aspartate Lipase Test", "Alanine Aminotransferase", "Albumin Level Test", "Activated Leukocyte Titre"],a:1,e:"ALT: Alanine Aminotransferase."},

{q:"Which option correctly describes ALT?",topic:"Laboratory Knowledge",o:["Aspartate Lipase Test", "Albumin Level Test", "Alanine Aminotransferase", "Activated Leukocyte Titre"],a:2,e:"ALT: Alanine Aminotransferase."},
{q:"Select the correct fact about ALT.",topic:"Laboratory Knowledge",o:["Albumin Level Test", "Activated Leukocyte Titre", "Aspartate Lipase Test", "Alanine Aminotransferase"],a:3,e:"ALT: Alanine Aminotransferase."},
{q:"ALT is best associated with which answer?",topic:"Laboratory Knowledge",o:["Alanine Aminotransferase", "Albumin Level Test", "Activated Leukocyte Titre", "Aspartate Lipase Test"],a:0,e:"ALT: Alanine Aminotransferase."},
{q:"What is AST?",topic:"Laboratory Knowledge",o:["Aspartate Aminotransferase", "Activated Sugar Test", "Absolute Sedimentation Time", "Alanine Serum Titre"],a:0,e:"AST: Aspartate Aminotransferase."},
{q:"Which option correctly describes AST?",topic:"Laboratory Knowledge",o:["Activated Sugar Test", "Absolute Sedimentation Time", "Alanine Serum Titre", "Aspartate Aminotransferase"],a:3,e:"AST: Aspartate Aminotransferase."},
{q:"Select the correct fact about AST.",topic:"Laboratory Knowledge",o:["Aspartate Aminotransferase", "Activated Sugar Test", "Alanine Serum Titre", "Absolute Sedimentation Time"],a:0,e:"AST: Aspartate Aminotransferase."},
{q:"AST is best associated with which answer?",topic:"Laboratory Knowledge",o:["Activated Sugar Test", "Absolute Sedimentation Time", "Alanine Serum Titre", "Aspartate Aminotransferase"],a:3,e:"AST: Aspartate Aminotransferase."},
{q:"What is ALP?",topic:"Laboratory Knowledge",o:["Activated Liver Protein", "Absolute Leukocyte Percentage", "Alkaline Phosphatase", "Albumin Lipid Profile"],a:2,e:"ALP: Alkaline Phosphatase."},
{q:"Which option correctly describes ALP?",topic:"Laboratory Knowledge",o:["Activated Liver Protein", "Albumin Lipid Profile", "Absolute Leukocyte Percentage", "Alkaline Phosphatase"],a:3,e:"ALP: Alkaline Phosphatase."},
{q:"Select the correct fact about ALP.",topic:"Laboratory Knowledge",o:["Albumin Lipid Profile", "Activated Liver Protein", "Absolute Leukocyte Percentage", "Alkaline Phosphatase"],a:3,e:"ALP: Alkaline Phosphatase."},

{q:"ALP is best associated with which answer?",topic:"Laboratory Knowledge",o:["Alkaline Phosphatase", "Absolute Leukocyte Percentage", "Albumin Lipid Profile", "Activated Liver Protein"],a:0,e:"ALP: Alkaline Phosphatase."},
{q:"What is Bilirubin?",topic:"Laboratory Knowledge",o:["a platelet fragment", "a pancreatic hormone", "a kidney filtration protein", "a yellow pigment formed during haem breakdown"],a:3,e:"Bilirubin: a yellow pigment formed during haem breakdown."},
{q:"Which option correctly describes Bilirubin?",topic:"Laboratory Knowledge",o:["a pancreatic hormone", "a kidney filtration protein", "a yellow pigment formed during haem breakdown", "a platelet fragment"],a:2,e:"Bilirubin: a yellow pigment formed during haem breakdown."},
{q:"Select the correct fact about Bilirubin.",topic:"Laboratory Knowledge",o:["a platelet fragment", "a kidney filtration protein", "a pancreatic hormone", "a yellow pigment formed during haem breakdown"],a:3,e:"Bilirubin: a yellow pigment formed during haem breakdown."},
{q:"Bilirubin is best associated with which answer?",topic:"Laboratory Knowledge",o:["a yellow pigment formed during haem breakdown", "a kidney filtration protein", "a pancreatic hormone", "a platelet fragment"],a:0,e:"Bilirubin: a yellow pigment formed during haem breakdown."},
{q:"What is Creatinine?",topic:"Laboratory Knowledge",o:["a thyroid hormone", "a white-cell pigment", "a waste product used to help assess kidney filtration", "a liver clotting factor"],a:2,e:"Creatinine: a waste product used to help assess kidney filtration."},
{q:"Which option correctly describes Creatinine?",topic:"Laboratory Knowledge",o:["a white-cell pigment", "a thyroid hormone", "a waste product used to help assess kidney filtration", "a liver clotting factor"],a:2,e:"Creatinine: a waste product used to help assess kidney filtration."},
{q:"Select the correct fact about Creatinine.",topic:"Laboratory Knowledge",o:["a waste product used to help assess kidney filtration", "a thyroid hormone", "a liver clotting factor", "a white-cell pigment"],a:0,e:"Creatinine: a waste product used to help assess kidney filtration."},
{q:"Creatinine is best associated with which answer?",topic:"Laboratory Knowledge",o:["a thyroid hormone", "a white-cell pigment", "a liver clotting factor", "a waste product used to help assess kidney filtration"],a:3,e:"Creatinine: a waste product used to help assess kidney filtration."},
{q:"What is Urea?",topic:"Laboratory Knowledge",o:["a clotting cell", "a pancreatic enzyme", "a red-cell protein", "a nitrogenous waste product formed in the liver and excreted by kidneys"],a:3,e:"Urea: a nitrogenous waste product formed in the liver and excreted by kidneys."},

{q:"Which option correctly describes Urea?",topic:"Laboratory Knowledge",o:["a red-cell protein", "a pancreatic enzyme", "a nitrogenous waste product formed in the liver and excreted by kidneys", "a clotting cell"],a:2,e:"Urea: a nitrogenous waste product formed in the liver and excreted by kidneys."},
{q:"Select the correct fact about Urea.",topic:"Laboratory Knowledge",o:["a nitrogenous waste product formed in the liver and excreted by kidneys", "a pancreatic enzyme", "a clotting cell", "a red-cell protein"],a:0,e:"Urea: a nitrogenous waste product formed in the liver and excreted by kidneys."},
{q:"Urea is best associated with which answer?",topic:"Laboratory Knowledge",o:["a nitrogenous waste product formed in the liver and excreted by kidneys", "a red-cell protein", "a clotting cell", "a pancreatic enzyme"],a:0,e:"Urea: a nitrogenous waste product formed in the liver and excreted by kidneys."},
{q:"What is eGFR?",topic:"Laboratory Knowledge",o:["a measure of platelet size", "an estimate of liver enzyme activity", "a direct blood glucose reading", "an estimate of glomerular filtration rate"],a:3,e:"eGFR: an estimate of glomerular filtration rate."},
{q:"Which option correctly describes eGFR?",topic:"Laboratory Knowledge",o:["an estimate of glomerular filtration rate", "a direct blood glucose reading", "a measure of platelet size", "an estimate of liver enzyme activity"],a:0,e:"eGFR: an estimate of glomerular filtration rate."},
{q:"Select the correct fact about eGFR.",topic:"Laboratory Knowledge",o:["an estimate of glomerular filtration rate", "a direct blood glucose reading", "a measure of platelet size", "an estimate of liver enzyme activity"],a:0,e:"eGFR: an estimate of glomerular filtration rate."},
{q:"eGFR is best associated with which answer?",topic:"Laboratory Knowledge",o:["an estimate of glomerular filtration rate", "a direct blood glucose reading", "an estimate of liver enzyme activity", "a measure of platelet size"],a:0,e:"eGFR: an estimate of glomerular filtration rate."},
{q:"What is Troponin?",topic:"Laboratory Knowledge",o:["a biomarker used to assess myocardial injury", "a kidney filtration marker", "a liver bile pigment", "a red-cell index"],a:0,e:"Troponin: a biomarker used to assess myocardial injury."},
{q:"Which option correctly describes Troponin?",topic:"Laboratory Knowledge",o:["a biomarker used to assess myocardial injury", "a liver bile pigment", "a kidney filtration marker", "a red-cell index"],a:0,e:"Troponin: a biomarker used to assess myocardial injury."},
{q:"Select the correct fact about Troponin.",topic:"Laboratory Knowledge",o:["a biomarker used to assess myocardial injury", "a kidney filtration marker", "a red-cell index", "a liver bile pigment"],a:0,e:"Troponin: a biomarker used to assess myocardial injury."},

{q:"Troponin is best associated with which answer?",topic:"Laboratory Knowledge",o:["a liver bile pigment", "a biomarker used to assess myocardial injury", "a red-cell index", "a kidney filtration marker"],a:1,e:"Troponin: a biomarker used to assess myocardial injury."},
{q:"What is D-dimer?",topic:"Laboratory Knowledge",o:["a thyroid hormone", "a liver enzyme", "a fibrin degradation product used in selected clot evaluation pathways", "a red-cell antibody"],a:2,e:"D-dimer: a fibrin degradation product used in selected clot evaluation pathways."},
{q:"Which option correctly describes D-dimer?",topic:"Laboratory Knowledge",o:["a liver enzyme", "a thyroid hormone", "a red-cell antibody", "a fibrin degradation product used in selected clot evaluation pathways"],a:3,e:"D-dimer: a fibrin degradation product used in selected clot evaluation pathways."},
{q:"Select the correct fact about D-dimer.",topic:"Laboratory Knowledge",o:["a fibrin degradation product used in selected clot evaluation pathways", "a thyroid hormone", "a liver enzyme", "a red-cell antibody"],a:0,e:"D-dimer: a fibrin degradation product used in selected clot evaluation pathways."},
{q:"D-dimer is best associated with which answer?",topic:"Laboratory Knowledge",o:["a thyroid hormone", "a red-cell antibody", "a liver enzyme", "a fibrin degradation product used in selected clot evaluation pathways"],a:3,e:"D-dimer: a fibrin degradation product used in selected clot evaluation pathways."},
{q:"What is Fibrinogen?",topic:"Laboratory Knowledge",o:["coagulation factor VIII", "a platelet hormone", "a red-cell membrane protein", "coagulation factor I, converted to fibrin during clot formation"],a:3,e:"Fibrinogen: coagulation factor I, converted to fibrin during clot formation."},
{q:"Which option correctly describes Fibrinogen?",topic:"Laboratory Knowledge",o:["a red-cell membrane protein", "coagulation factor VIII", "coagulation factor I, converted to fibrin during clot formation", "a platelet hormone"],a:2,e:"Fibrinogen: coagulation factor I, converted to fibrin during clot formation."},
{q:"Select the correct fact about Fibrinogen.",topic:"Laboratory Knowledge",o:["a red-cell membrane protein", "coagulation factor I, converted to fibrin during clot formation", "a platelet hormone", "coagulation factor VIII"],a:1,e:"Fibrinogen: coagulation factor I, converted to fibrin during clot formation."},
{q:"Fibrinogen is best associated with which answer?",topic:"Laboratory Knowledge",o:["a platelet hormone", "coagulation factor I, converted to fibrin during clot formation", "coagulation factor VIII", "a red-cell membrane protein"],a:1,e:"Fibrinogen: coagulation factor I, converted to fibrin during clot formation."},
{q:"What is Reticulocyte?",topic:"Laboratory Knowledge",o:["an immature red blood cell", "a plasma protein", "a mature neutrophil", "a platelet precursor"],a:0,e:"Reticulocyte: an immature red blood cell."},

{q:"Which option correctly describes Reticulocyte?",topic:"Laboratory Knowledge",o:["a plasma protein", "a mature neutrophil", "an immature red blood cell", "a platelet precursor"],a:2,e:"Reticulocyte: an immature red blood cell."},
{q:"Select the correct fact about Reticulocyte.",topic:"Laboratory Knowledge",o:["an immature red blood cell", "a mature neutrophil", "a plasma protein", "a platelet precursor"],a:0,e:"Reticulocyte: an immature red blood cell."},
{q:"Reticulocyte is best associated with which answer?",topic:"Laboratory Knowledge",o:["a plasma protein", "an immature red blood cell", "a mature neutrophil", "a platelet precursor"],a:1,e:"Reticulocyte: an immature red blood cell."},
{q:"What is MCV?",topic:"Laboratory Knowledge",o:["mean calcium volume", "mean cell viscosity", "mean corpuscular volume, the average red-cell size", "maximum clotting value"],a:2,e:"MCV: mean corpuscular volume, the average red-cell size."},
{q:"Which option correctly describes MCV?",topic:"Laboratory Knowledge",o:["maximum clotting value", "mean calcium volume", "mean corpuscular volume, the average red-cell size", "mean cell viscosity"],a:2,e:"MCV: mean corpuscular volume, the average red-cell size."},
{q:"Select the correct fact about MCV.",topic:"Laboratory Knowledge",o:["mean calcium volume", "mean corpuscular volume, the average red-cell size", "maximum clotting value", "mean cell viscosity"],a:1,e:"MCV: mean corpuscular volume, the average red-cell size."},
{q:"MCV is best associated with which answer?",topic:"Laboratory Knowledge",o:["mean calcium volume", "mean corpuscular volume, the average red-cell size", "maximum clotting value", "mean cell viscosity"],a:1,e:"MCV: mean corpuscular volume, the average red-cell size."},
{q:"What is MCH?",topic:"Laboratory Knowledge",o:["mean clotting time", "maximum haemoglobin concentration", "mean cell height", "mean corpuscular haemoglobin, the average haemoglobin amount per red cell"],a:3,e:"MCH: mean corpuscular haemoglobin, the average haemoglobin amount per red cell."},
{q:"Which option correctly describes MCH?",topic:"Laboratory Knowledge",o:["mean clotting time", "mean corpuscular haemoglobin, the average haemoglobin amount per red cell", "mean cell height", "maximum haemoglobin concentration"],a:1,e:"MCH: mean corpuscular haemoglobin, the average haemoglobin amount per red cell."},
{q:"Select the correct fact about MCH.",topic:"Laboratory Knowledge",o:["mean cell height", "mean corpuscular haemoglobin, the average haemoglobin amount per red cell", "maximum haemoglobin concentration", "mean clotting time"],a:1,e:"MCH: mean corpuscular haemoglobin, the average haemoglobin amount per red cell."},

{q:"MCH is best associated with which answer?",topic:"Laboratory Knowledge",o:["mean cell height", "mean corpuscular haemoglobin, the average haemoglobin amount per red cell", "mean clotting time", "maximum haemoglobin concentration"],a:1,e:"MCH: mean corpuscular haemoglobin, the average haemoglobin amount per red cell."},
{q:"What is MCHC?",topic:"Laboratory Knowledge",o:["mean calcium haemoglobin", "mean cell count per hour", "mean corpuscular haemoglobin concentration", "maximum clotting capacity"],a:2,e:"MCHC: mean corpuscular haemoglobin concentration."},
{q:"Which option correctly describes MCHC?",topic:"Laboratory Knowledge",o:["mean calcium haemoglobin", "mean corpuscular haemoglobin concentration", "maximum clotting capacity", "mean cell count per hour"],a:1,e:"MCHC: mean corpuscular haemoglobin concentration."},
{q:"Select the correct fact about MCHC.",topic:"Laboratory Knowledge",o:["mean corpuscular haemoglobin concentration", "mean calcium haemoglobin", "maximum clotting capacity", "mean cell count per hour"],a:0,e:"MCHC: mean corpuscular haemoglobin concentration."},
{q:"MCHC is best associated with which answer?",topic:"Laboratory Knowledge",o:["mean cell count per hour", "mean corpuscular haemoglobin concentration", "maximum clotting capacity", "mean calcium haemoglobin"],a:1,e:"MCHC: mean corpuscular haemoglobin concentration."},
{q:"What is RDW?",topic:"Laboratory Knowledge",o:["a measure of variation in red-cell size", "a kidney filtration rate", "a measure of white-cell function", "a platelet clotting time"],a:0,e:"RDW: a measure of variation in red-cell size."},
{q:"Which option correctly describes RDW?",topic:"Laboratory Knowledge",o:["a platelet clotting time", "a measure of variation in red-cell size", "a measure of white-cell function", "a kidney filtration rate"],a:1,e:"RDW: a measure of variation in red-cell size."},
{q:"Select the correct fact about RDW.",topic:"Laboratory Knowledge",o:["a kidney filtration rate", "a measure of white-cell function", "a measure of variation in red-cell size", "a platelet clotting time"],a:2,e:"RDW: a measure of variation in red-cell size."},
{q:"RDW is best associated with which answer?",topic:"Laboratory Knowledge",o:["a kidney filtration rate", "a platelet clotting time", "a measure of white-cell function", "a measure of variation in red-cell size"],a:3,e:"RDW: a measure of variation in red-cell size."},
{q:"What is WBC?",topic:"Laboratory Knowledge",o:["white bilirubin concentration", "white blood cell count", "weak blood coagulation", "whole blood calcium"],a:1,e:"WBC: white blood cell count."},

{q:"Which option correctly describes WBC?",topic:"Laboratory Knowledge",o:["whole blood calcium", "weak blood coagulation", "white blood cell count", "white bilirubin concentration"],a:2,e:"WBC: white blood cell count."},
{q:"Select the correct fact about WBC.",topic:"Laboratory Knowledge",o:["white bilirubin concentration", "whole blood calcium", "weak blood coagulation", "white blood cell count"],a:3,e:"WBC: white blood cell count."},
{q:"WBC is best associated with which answer?",topic:"Laboratory Knowledge",o:["white blood cell count", "white bilirubin concentration", "weak blood coagulation", "whole blood calcium"],a:0,e:"WBC: white blood cell count."},
{q:"What is RBC?",topic:"Laboratory Knowledge",o:["rapid bacterial culture", "red bilirubin concentration", "red blood cell count", "renal blood chemistry"],a:2,e:"RBC: red blood cell count."},
{q:"Which option correctly describes RBC?",topic:"Laboratory Knowledge",o:["rapid bacterial culture", "red blood cell count", "red bilirubin concentration", "renal blood chemistry"],a:1,e:"RBC: red blood cell count."},
{q:"Select the correct fact about RBC.",topic:"Laboratory Knowledge",o:["renal blood chemistry", "red bilirubin concentration", "red blood cell count", "rapid bacterial culture"],a:2,e:"RBC: red blood cell count."},
{q:"RBC is best associated with which answer?",topic:"Laboratory Knowledge",o:["renal blood chemistry", "red bilirubin concentration", "red blood cell count", "rapid bacterial culture"],a:2,e:"RBC: red blood cell count."},
{q:"What is HCT?",topic:"Laboratory Knowledge",o:["heart clotting time", "haemoglobin concentration test", "hepatic cell titre", "haematocrit, the proportion of blood volume occupied by red cells"],a:3,e:"HCT: haematocrit, the proportion of blood volume occupied by red cells."},
{q:"Which option correctly describes HCT?",topic:"Laboratory Knowledge",o:["heart clotting time", "haemoglobin concentration test", "hepatic cell titre", "haematocrit, the proportion of blood volume occupied by red cells"],a:3,e:"HCT: haematocrit, the proportion of blood volume occupied by red cells."},
{q:"Select the correct fact about HCT.",topic:"Laboratory Knowledge",o:["heart clotting time", "haematocrit, the proportion of blood volume occupied by red cells", "hepatic cell titre", "haemoglobin concentration test"],a:1,e:"HCT: haematocrit, the proportion of blood volume occupied by red cells."},

{q:"HCT is best associated with which answer?",topic:"Laboratory Knowledge",o:["heart clotting time", "haematocrit, the proportion of blood volume occupied by red cells", "hepatic cell titre", "haemoglobin concentration test"],a:1,e:"HCT: haematocrit, the proportion of blood volume occupied by red cells."},
{q:"What is Urine dipstick?",topic:"Laboratory Knowledge",o:["a tissue staining technique", "a rapid chemical screening method for urine", "a blood culture method", "a platelet aggregation test"],a:1,e:"Urine dipstick: a rapid chemical screening method for urine."},
{q:"Which option correctly describes Urine dipstick?",topic:"Laboratory Knowledge",o:["a rapid chemical screening method for urine", "a blood culture method", "a platelet aggregation test", "a tissue staining technique"],a:0,e:"Urine dipstick: a rapid chemical screening method for urine."},
{q:"Select the correct fact about Urine dipstick.",topic:"Laboratory Knowledge",o:["a platelet aggregation test", "a tissue staining technique", "a rapid chemical screening method for urine", "a blood culture method"],a:2,e:"Urine dipstick: a rapid chemical screening method for urine."},
{q:"Urine dipstick is best associated with which answer?",topic:"Laboratory Knowledge",o:["a platelet aggregation test", "a blood culture method", "a tissue staining technique", "a rapid chemical screening method for urine"],a:3,e:"Urine dipstick: a rapid chemical screening method for urine."},
{q:"What is Urine culture?",topic:"Laboratory Knowledge",o:["a test of urine colour only", "a kidney imaging method", "a test to grow and identify microorganisms in urine", "a blood clotting test"],a:2,e:"Urine culture: a test to grow and identify microorganisms in urine."},
{q:"Which option correctly describes Urine culture?",topic:"Laboratory Knowledge",o:["a kidney imaging method", "a test to grow and identify microorganisms in urine", "a blood clotting test", "a test of urine colour only"],a:1,e:"Urine culture: a test to grow and identify microorganisms in urine."},
{q:"Select the correct fact about Urine culture.",topic:"Laboratory Knowledge",o:["a kidney imaging method", "a test to grow and identify microorganisms in urine", "a blood clotting test", "a test of urine colour only"],a:1,e:"Urine culture: a test to grow and identify microorganisms in urine."},
{q:"Urine culture is best associated with which answer?",topic:"Laboratory Knowledge",o:["a test to grow and identify microorganisms in urine", "a test of urine colour only", "a kidney imaging method", "a blood clotting test"],a:0,e:"Urine culture: a test to grow and identify microorganisms in urine."},
{q:"What is Blood culture?",topic:"Laboratory Knowledge",o:["a platelet count", "a test used to detect microorganisms in blood", "a urine concentration test", "a test measuring haemoglobin only"],a:1,e:"Blood culture: a test used to detect microorganisms in blood."},

// ======================================
//  1,900 QUESTIONS  COMPLETE HERE.
// ======================================

{q:"Which option correctly describes Blood culture?",topic:"Laboratory Knowledge",o:["a test measuring haemoglobin only", "a urine concentration test", "a platelet count", "a test used to detect microorganisms in blood"],a:3,e:"Blood culture: a test used to detect microorganisms in blood."},
{q:"Select the correct fact about Blood culture.",topic:"Laboratory Knowledge",o:["a platelet count", "a test measuring haemoglobin only", "a test used to detect microorganisms in blood", "a urine concentration test"],a:2,e:"Blood culture: a test used to detect microorganisms in blood."},
{q:"Blood culture is best associated with which answer?",topic:"Laboratory Knowledge",o:["a test measuring haemoglobin only", "a platelet count", "a test used to detect microorganisms in blood", "a urine concentration test"],a:2,e:"Blood culture: a test used to detect microorganisms in blood."},
{q:"What is Gram stain?",topic:"Laboratory Knowledge",o:["a method for measuring electrolytes", "a differential stain that classifies many bacteria by cell-wall properties", "a stain for reticulocytes only", "a test for blood glucose"],a:1,e:"Gram stain: a differential stain that classifies many bacteria by cell-wall properties."},
{q:"Which option correctly describes Gram stain?",topic:"Laboratory Knowledge",o:["a test for blood glucose", "a method for measuring electrolytes", "a stain for reticulocytes only", "a differential stain that classifies many bacteria by cell-wall properties"],a:3,e:"Gram stain: a differential stain that classifies many bacteria by cell-wall properties."},
{q:"Select the correct fact about Gram stain.",topic:"Laboratory Knowledge",o:["a stain for reticulocytes only", "a method for measuring electrolytes", "a test for blood glucose", "a differential stain that classifies many bacteria by cell-wall properties"],a:3,e:"Gram stain: a differential stain that classifies many bacteria by cell-wall properties."},
{q:"Gram stain is best associated with which answer?",topic:"Laboratory Knowledge",o:["a differential stain that classifies many bacteria by cell-wall properties", "a method for measuring electrolytes", "a test for blood glucose", "a stain for reticulocytes only"],a:0,e:"Gram stain: a differential stain that classifies many bacteria by cell-wall properties."},
{q:"What is Leishman stain?",topic:"Laboratory Knowledge",o:["a Romanowsky-type stain used for peripheral blood films", "a urine dipstick reagent", "a special stain for kidney biopsy only", "a bacterial culture medium"],a:0,e:"Leishman stain: a Romanowsky-type stain used for peripheral blood films."},
{q:"Which option correctly describes Leishman stain?",topic:"Laboratory Knowledge",o:["a bacterial culture medium", "a special stain for kidney biopsy only", "a Romanowsky-type stain used for peripheral blood films", "a urine dipstick reagent"],a:2,e:"Leishman stain: a Romanowsky-type stain used for peripheral blood films."},
{q:"Select the correct fact about Leishman stain.",topic:"Laboratory Knowledge",o:["a urine dipstick reagent", "a Romanowsky-type stain used for peripheral blood films", "a bacterial culture medium", "a special stain for kidney biopsy only"],a:1,e:"Leishman stain: a Romanowsky-type stain used for peripheral blood films."},

{q:"Leishman stain is best associated with which answer?",topic:"Laboratory Knowledge",o:["a bacterial culture medium", "a urine dipstick reagent", "a special stain for kidney biopsy only", "a Romanowsky-type stain used for peripheral blood films"],a:3,e:"Leishman stain: a Romanowsky-type stain used for peripheral blood films."},
{q:"What is EDTA tube?",topic:"Laboratory Knowledge",o:["a tube containing fluoride only", "a sterile culture bottle", "a commonly used anticoagulant tube for CBC specimens", "a tube containing clot activator for serum"],a:2,e:"EDTA tube: a commonly used anticoagulant tube for CBC specimens."},
{q:"Which option correctly describes EDTA tube?",topic:"Laboratory Knowledge",o:["a tube containing clot activator for serum", "a tube containing fluoride only", "a sterile culture bottle", "a commonly used anticoagulant tube for CBC specimens"],a:3,e:"EDTA tube: a commonly used anticoagulant tube for CBC specimens."},
{q:"Select the correct fact about EDTA tube.",topic:"Laboratory Knowledge",o:["a tube containing fluoride only", "a commonly used anticoagulant tube for CBC specimens", "a sterile culture bottle", "a tube containing clot activator for serum"],a:1,e:"EDTA tube: a commonly used anticoagulant tube for CBC specimens."},
{q:"EDTA tube is best associated with which answer?",topic:"Laboratory Knowledge",o:["a sterile culture bottle", "a commonly used anticoagulant tube for CBC specimens", "a tube containing clot activator for serum", "a tube containing fluoride only"],a:1,e:"EDTA tube: a commonly used anticoagulant tube for CBC specimens."},
{q:"What is Sodium citrate tube?",topic:"Laboratory Knowledge",o:["a urine container", "an anticoagulant tube commonly used for coagulation tests", "a plain serum tube", "a tube used only for blood glucose"],a:1,e:"Sodium citrate tube: an anticoagulant tube commonly used for coagulation tests."},
{q:"Which option correctly describes Sodium citrate tube?",topic:"Laboratory Knowledge",o:["an anticoagulant tube commonly used for coagulation tests", "a plain serum tube", "a tube used only for blood glucose", "a urine container"],a:0,e:"Sodium citrate tube: an anticoagulant tube commonly used for coagulation tests."},
{q:"Select the correct fact about Sodium citrate tube.",topic:"Laboratory Knowledge",o:["an anticoagulant tube commonly used for coagulation tests", "a urine container", "a plain serum tube", "a tube used only for blood glucose"],a:0,e:"Sodium citrate tube: an anticoagulant tube commonly used for coagulation tests."},
{q:"Sodium citrate tube is best associated with which answer?",topic:"Laboratory Knowledge",o:["a plain serum tube", "a tube used only for blood glucose", "an anticoagulant tube commonly used for coagulation tests", "a urine container"],a:2,e:"Sodium citrate tube: an anticoagulant tube commonly used for coagulation tests."},
{q:"What is Serum?",topic:"Laboratory Knowledge",o:["whole blood with cells", "the fluid remaining after blood has clotted and been separated", "a urine sediment", "plasma containing all clotting factors unchanged"],a:1,e:"Serum: the fluid remaining after blood has clotted and been separated."},

{q:"Which option correctly describes Serum?",topic:"Laboratory Knowledge",o:["whole blood with cells", "a urine sediment", "plasma containing all clotting factors unchanged", "the fluid remaining after blood has clotted and been separated"],a:3,e:"Serum: the fluid remaining after blood has clotted and been separated."},
{q:"Select the correct fact about Serum.",topic:"Laboratory Knowledge",o:["plasma containing all clotting factors unchanged", "the fluid remaining after blood has clotted and been separated", "a urine sediment", "whole blood with cells"],a:1,e:"Serum: the fluid remaining after blood has clotted and been separated."},
{q:"Serum is best associated with which answer?",topic:"Laboratory Knowledge",o:["the fluid remaining after blood has clotted and been separated", "whole blood with cells", "plasma containing all clotting factors unchanged", "a urine sediment"],a:0,e:"Serum: the fluid remaining after blood has clotted and been separated."},
{q:"What is Plasma?",topic:"Laboratory Knowledge",o:["only red blood cells", "a platelet-free tissue sample", "the liquid component of anticoagulated blood", "the liquid after complete clotting"],a:2,e:"Plasma: the liquid component of anticoagulated blood."},
{q:"Which option correctly describes Plasma?",topic:"Laboratory Knowledge",o:["the liquid after complete clotting", "the liquid component of anticoagulated blood", "only red blood cells", "a platelet-free tissue sample"],a:1,e:"Plasma: the liquid component of anticoagulated blood."},
{q:"Select the correct fact about Plasma.",topic:"Laboratory Knowledge",o:["only red blood cells", "the liquid after complete clotting", "the liquid component of anticoagulated blood", "a platelet-free tissue sample"],a:2,e:"Plasma: the liquid component of anticoagulated blood."},
{q:"Plasma is best associated with which answer?",topic:"Laboratory Knowledge",o:["a platelet-free tissue sample", "only red blood cells", "the liquid component of anticoagulated blood", "the liquid after complete clotting"],a:2,e:"Plasma: the liquid component of anticoagulated blood."},
{q:"What is Centrifuge?",topic:"Laboratory Knowledge",o:["equipment that separates components by centrifugal force", "a device that stains slides", "a device that incubates cultures", "equipment that measures pH only"],a:0,e:"Centrifuge: equipment that separates components by centrifugal force."},
{q:"Which option correctly describes Centrifuge?",topic:"Laboratory Knowledge",o:["a device that incubates cultures", "a device that stains slides", "equipment that separates components by centrifugal force", "equipment that measures pH only"],a:2,e:"Centrifuge: equipment that separates components by centrifugal force."},
{q:"Select the correct fact about Centrifuge.",topic:"Laboratory Knowledge",o:["equipment that measures pH only", "a device that stains slides", "equipment that separates components by centrifugal force", "a device that incubates cultures"],a:2,e:"Centrifuge: equipment that separates components by centrifugal force."},

{q:"Centrifuge is best associated with which answer?",topic:"Laboratory Knowledge",o:["equipment that measures pH only", "equipment that separates components by centrifugal force", "a device that incubates cultures", "a device that stains slides"],a:1,e:"Centrifuge: equipment that separates components by centrifugal force."},
{q:"What is Microscope?",topic:"Laboratory Knowledge",o:["an instrument used to magnify small structures", "a device for weighing samples", "a device for measuring blood pressure", "a device for sterilizing glassware"],a:0,e:"Microscope: an instrument used to magnify small structures."},
{q:"Which option correctly describes Microscope?",topic:"Laboratory Knowledge",o:["a device for weighing samples", "a device for sterilizing glassware", "a device for measuring blood pressure", "an instrument used to magnify small structures"],a:3,e:"Microscope: an instrument used to magnify small structures."},
{q:"Select the correct fact about Microscope.",topic:"Laboratory Knowledge",o:["a device for weighing samples", "a device for sterilizing glassware", "an instrument used to magnify small structures", "a device for measuring blood pressure"],a:2,e:"Microscope: an instrument used to magnify small structures."},
{q:"Microscope is best associated with which answer?",topic:"Laboratory Knowledge",o:["an instrument used to magnify small structures", "a device for measuring blood pressure", "a device for weighing samples", "a device for sterilizing glassware"],a:0,e:"Microscope: an instrument used to magnify small structures."},
{q:"What is Spectrophotometer?",topic:"Laboratory Knowledge",o:["a culture incubator", "an instrument that measures light absorbance or transmission", "a tool for measuring temperature", "a device for cell counting only"],a:1,e:"Spectrophotometer: an instrument that measures light absorbance or transmission."},
{q:"Which option correctly describes Spectrophotometer?",topic:"Laboratory Knowledge",o:["an instrument that measures light absorbance or transmission", "a culture incubator", "a device for cell counting only", "a tool for measuring temperature"],a:0,e:"Spectrophotometer: an instrument that measures light absorbance or transmission."},
{q:"Select the correct fact about Spectrophotometer.",topic:"Laboratory Knowledge",o:["a tool for measuring temperature", "a device for cell counting only", "an instrument that measures light absorbance or transmission", "a culture incubator"],a:2,e:"Spectrophotometer: an instrument that measures light absorbance or transmission."},
{q:"Spectrophotometer is best associated with which answer?",topic:"Laboratory Knowledge",o:["a tool for measuring temperature", "a culture incubator", "an instrument that measures light absorbance or transmission", "a device for cell counting only"],a:2,e:"Spectrophotometer: an instrument that measures light absorbance or transmission."},
{q:"What is Quality control?",topic:"Laboratory Knowledge",o:["a process for billing only", "procedures used to monitor analytical performance", "a type of specimen container", "a method of patient registration"],a:1,e:"Quality control: procedures used to monitor analytical performance."},

{q:"Which option correctly describes Quality control?",topic:"Laboratory Knowledge",o:["a process for billing only", "a method of patient registration", "a type of specimen container", "procedures used to monitor analytical performance"],a:3,e:"Quality control: procedures used to monitor analytical performance."},
{q:"Select the correct fact about Quality control.",topic:"Laboratory Knowledge",o:["a process for billing only", "a method of patient registration", "a type of specimen container", "procedures used to monitor analytical performance"],a:3,e:"Quality control: procedures used to monitor analytical performance."},
{q:"Quality control is best associated with which answer?",topic:"Laboratory Knowledge",o:["a method of patient registration", "a process for billing only", "procedures used to monitor analytical performance", "a type of specimen container"],a:2,e:"Quality control: procedures used to monitor analytical performance."},
{q:"What is Calibration?",topic:"Laboratory Knowledge",o:["staining a blood film", "counting cells manually", "comparison and adjustment of an instrument against a standard", "routine disposal of samples"],a:2,e:"Calibration: comparison and adjustment of an instrument against a standard."},
{q:"Which option correctly describes Calibration?",topic:"Laboratory Knowledge",o:["staining a blood film", "comparison and adjustment of an instrument against a standard", "counting cells manually", "routine disposal of samples"],a:1,e:"Calibration: comparison and adjustment of an instrument against a standard."},
{q:"Select the correct fact about Calibration.",topic:"Laboratory Knowledge",o:["comparison and adjustment of an instrument against a standard", "routine disposal of samples", "counting cells manually", "staining a blood film"],a:0,e:"Calibration: comparison and adjustment of an instrument against a standard."},
{q:"Calibration is best associated with which answer?",topic:"Laboratory Knowledge",o:["counting cells manually", "routine disposal of samples", "comparison and adjustment of an instrument against a standard", "staining a blood film"],a:2,e:"Calibration: comparison and adjustment of an instrument against a standard."},
{q:"What is Haemolysis?",topic:"Laboratory Knowledge",o:["clot retraction", "increase in white cells", "rupture of red blood cells with release of their contents", "formation of platelets"],a:2,e:"Haemolysis: rupture of red blood cells with release of their contents."},
{q:"Which option correctly describes Haemolysis?",topic:"Laboratory Knowledge",o:["clot retraction", "rupture of red blood cells with release of their contents", "increase in white cells", "formation of platelets"],a:1,e:"Haemolysis: rupture of red blood cells with release of their contents."},
{q:"Select the correct fact about Haemolysis.",topic:"Laboratory Knowledge",o:["rupture of red blood cells with release of their contents", "formation of platelets", "clot retraction", "increase in white cells"],a:0,e:"Haemolysis: rupture of red blood cells with release of their contents."},

{q:"Haemolysis is best associated with which answer?",topic:"Laboratory Knowledge",o:["increase in white cells", "formation of platelets", "clot retraction", "rupture of red blood cells with release of their contents"],a:3,e:"Haemolysis: rupture of red blood cells with release of their contents."},
{q:"What is Lipemia?",topic:"Laboratory Knowledge",o:["low platelet count", "increased lipid content causing a turbid sample", "bacterial contamination", "absence of bilirubin"],a:1,e:"Lipemia: increased lipid content causing a turbid sample."},
{q:"Which option correctly describes Lipemia?",topic:"Laboratory Knowledge",o:["low platelet count", "increased lipid content causing a turbid sample", "absence of bilirubin", "bacterial contamination"],a:1,e:"Lipemia: increased lipid content causing a turbid sample."},
{q:"Select the correct fact about Lipemia.",topic:"Laboratory Knowledge",o:["low platelet count", "absence of bilirubin", "bacterial contamination", "increased lipid content causing a turbid sample"],a:3,e:"Lipemia: increased lipid content causing a turbid sample."},
{q:"Lipemia is best associated with which answer?",topic:"Laboratory Knowledge",o:["bacterial contamination", "absence of bilirubin", "low platelet count", "increased lipid content causing a turbid sample"],a:3,e:"Lipemia: increased lipid content causing a turbid sample."},
{q:"What is Icterus?",topic:"Laboratory Knowledge",o:["yellow discoloration associated with increased bilirubin", "high glucose in urine", "low sodium in plasma", "blue discoloration from oxygen"],a:0,e:"Icterus: yellow discoloration associated with increased bilirubin."},
{q:"Which option correctly describes Icterus?",topic:"Laboratory Knowledge",o:["yellow discoloration associated with increased bilirubin", "low sodium in plasma", "high glucose in urine", "blue discoloration from oxygen"],a:0,e:"Icterus: yellow discoloration associated with increased bilirubin."},
{q:"Select the correct fact about Icterus.",topic:"Laboratory Knowledge",o:["high glucose in urine", "low sodium in plasma", "yellow discoloration associated with increased bilirubin", "blue discoloration from oxygen"],a:2,e:"Icterus: yellow discoloration associated with increased bilirubin."},
{q:"Icterus is best associated with which answer?",topic:"Laboratory Knowledge",o:["high glucose in urine", "low sodium in plasma", "blue discoloration from oxygen", "yellow discoloration associated with increased bilirubin"],a:3,e:"Icterus: yellow discoloration associated with increased bilirubin."},
{q:"What is Aseptic technique?",topic:"Laboratory Knowledge",o:["a method of increasing sample clotting", "practices that reduce contamination by microorganisms", "a way to dilute serum", "a staining procedure"],a:1,e:"Aseptic technique: practices that reduce contamination by microorganisms."},

{q:"Which option correctly describes Aseptic technique?",topic:"Laboratory Knowledge",o:["practices that reduce contamination by microorganisms", "a method of increasing sample clotting", "a staining procedure", "a way to dilute serum"],a:0,e:"Aseptic technique: practices that reduce contamination by microorganisms."},
{q:"Select the correct fact about Aseptic technique.",topic:"Laboratory Knowledge",o:["a way to dilute serum", "a staining procedure", "practices that reduce contamination by microorganisms", "a method of increasing sample clotting"],a:2,e:"Aseptic technique: practices that reduce contamination by microorganisms."},
{q:"Aseptic technique is best associated with which answer?",topic:"Laboratory Knowledge",o:["a method of increasing sample clotting", "a way to dilute serum", "practices that reduce contamination by microorganisms", "a staining procedure"],a:2,e:"Aseptic technique: practices that reduce contamination by microorganisms."},
{q:"What is Phlebotomy?",topic:"Laboratory Knowledge",o:["the examination of urine sediment", "the collection of blood from a patient", "the counting of platelets", "the preparation of culture media"],a:1,e:"Phlebotomy: the collection of blood from a patient."},
{q:"Which option correctly describes Phlebotomy?",topic:"Laboratory Knowledge",o:["the preparation of culture media", "the examination of urine sediment", "the collection of blood from a patient", "the counting of platelets"],a:2,e:"Phlebotomy: the collection of blood from a patient."},
{q:"Select the correct fact about Phlebotomy.",topic:"Laboratory Knowledge",o:["the counting of platelets", "the examination of urine sediment", "the preparation of culture media", "the collection of blood from a patient"],a:3,e:"Phlebotomy: the collection of blood from a patient."},
{q:"Phlebotomy is best associated with which answer?",topic:"Laboratory Knowledge",o:["the preparation of culture media", "the counting of platelets", "the collection of blood from a patient", "the examination of urine sediment"],a:2,e:"Phlebotomy: the collection of blood from a patient."},
{q:"What is Crossmatch?",topic:"Laboratory Knowledge",o:["a test of kidney function", "a compatibility test before transfusion of donor red cells", "a platelet size measurement", "a test for malaria antigen"],a:1,e:"Crossmatch: a compatibility test before transfusion of donor red cells."},
{q:"Which option correctly describes Crossmatch?",topic:"Laboratory Knowledge",o:["a test of kidney function", "a platelet size measurement", "a compatibility test before transfusion of donor red cells", "a test for malaria antigen"],a:2,e:"Crossmatch: a compatibility test before transfusion of donor red cells."},
{q:"Select the correct fact about Crossmatch.",topic:"Laboratory Knowledge",o:["a compatibility test before transfusion of donor red cells", "a platelet size measurement", "a test for malaria antigen", "a test of kidney function"],a:0,e:"Crossmatch: a compatibility test before transfusion of donor red cells."},

{q:"Crossmatch is best associated with which answer?",topic:"Laboratory Knowledge",o:["a compatibility test before transfusion of donor red cells", "a platelet size measurement", "a test for malaria antigen", "a test of kidney function"],a:0,e:"Crossmatch: a compatibility test before transfusion of donor red cells."},
{q:"What is ABO system?",topic:"Laboratory Knowledge",o:["a system for measuring haemoglobin", "a method for testing urine", "a major blood group system based on A and B antigens", "a system for classifying white cells"],a:2,e:"ABO system: a major blood group system based on A and B antigens."},
{q:"Which option correctly describes ABO system?",topic:"Laboratory Knowledge",o:["a major blood group system based on A and B antigens", "a system for classifying white cells", "a system for measuring haemoglobin", "a method for testing urine"],a:0,e:"ABO system: a major blood group system based on A and B antigens."},
{q:"Select the correct fact about ABO system.",topic:"Laboratory Knowledge",o:["a system for classifying white cells", "a method for testing urine", "a system for measuring haemoglobin", "a major blood group system based on A and B antigens"],a:3,e:"ABO system: a major blood group system based on A and B antigens."},
{q:"ABO system is best associated with which answer?",topic:"Laboratory Knowledge",o:["a method for testing urine", "a system for classifying white cells", "a system for measuring haemoglobin", "a major blood group system based on A and B antigens"],a:3,e:"ABO system: a major blood group system based on A and B antigens."},
{q:"What is RhD?",topic:"Laboratory Knowledge",o:["a plasma enzyme", "a kidney hormone", "a coagulation pathway", "a clinically important red-cell antigen in the Rh blood group system"],a:3,e:"RhD: a clinically important red-cell antigen in the Rh blood group system."},
{q:"Which option correctly describes RhD?",topic:"Laboratory Knowledge",o:["a coagulation pathway", "a kidney hormone", "a clinically important red-cell antigen in the Rh blood group system", "a plasma enzyme"],a:2,e:"RhD: a clinically important red-cell antigen in the Rh blood group system."},
{q:"Select the correct fact about RhD.",topic:"Laboratory Knowledge",o:["a kidney hormone", "a coagulation pathway", "a clinically important red-cell antigen in the Rh blood group system", "a plasma enzyme"],a:2,e:"RhD: a clinically important red-cell antigen in the Rh blood group system."},
{q:"RhD is best associated with which answer?",topic:"Laboratory Knowledge",o:["a kidney hormone", "a clinically important red-cell antigen in the Rh blood group system", "a plasma enzyme", "a coagulation pathway"],a:1,e:"RhD: a clinically important red-cell antigen in the Rh blood group system."},
{q:"What is Thick blood film for malaria?",topic:"Laboratory Knowledge",o:["a sensitive method for detecting malaria parasites", "a urine microscopy method", "a method for measuring cholesterol", "a test for thyroid hormones"],a:0,e:"Thick blood film for malaria: a sensitive method for detecting malaria parasites."},

{q:"Which option correctly describes Thick blood film for malaria?",topic:"Laboratory Knowledge",o:["a test for thyroid hormones", "a sensitive method for detecting malaria parasites", "a urine microscopy method", "a method for measuring cholesterol"],a:1,e:"Thick blood film for malaria: a sensitive method for detecting malaria parasites."},
{q:"Select the correct fact about Thick blood film for malaria.",topic:"Laboratory Knowledge",o:["a sensitive method for detecting malaria parasites", "a test for thyroid hormones", "a method for measuring cholesterol", "a urine microscopy method"],a:0,e:"Thick blood film for malaria: a sensitive method for detecting malaria parasites."},
{q:"Thick blood film for malaria is best associated with which answer?",topic:"Laboratory Knowledge",o:["a sensitive method for detecting malaria parasites", "a method for measuring cholesterol", "a urine microscopy method", "a test for thyroid hormones"],a:0,e:"Thick blood film for malaria: a sensitive method for detecting malaria parasites."},
{q:"What is Thin blood film for malaria?",topic:"Laboratory Knowledge",o:["a method for counting reticulocytes", "a test for blood group", "a method that helps identify malaria species and parasitaemia", "a method for measuring sodium"],a:2,e:"Thin blood film for malaria: a method that helps identify malaria species and parasitaemia."},
{q:"Which option correctly describes Thin blood film for malaria?",topic:"Laboratory Knowledge",o:["a method for counting reticulocytes", "a method that helps identify malaria species and parasitaemia", "a method for measuring sodium", "a test for blood group"],a:1,e:"Thin blood film for malaria: a method that helps identify malaria species and parasitaemia."},
{q:"Select the correct fact about Thin blood film for malaria.",topic:"Laboratory Knowledge",o:["a method for counting reticulocytes", "a method that helps identify malaria species and parasitaemia", "a test for blood group", "a method for measuring sodium"],a:1,e:"Thin blood film for malaria: a method that helps identify malaria species and parasitaemia."},
{q:"Thin blood film for malaria is best associated with which answer?",topic:"Laboratory Knowledge",o:["a method that helps identify malaria species and parasitaemia", "a method for counting reticulocytes", "a test for blood group", "a method for measuring sodium"],a:0,e:"Thin blood film for malaria: a method that helps identify malaria species and parasitaemia."},
{q:"What is Stool occult blood test?",topic:"Laboratory Knowledge",o:["a test that detects hidden blood in stool", "a test for urine protein", "a liver enzyme test", "a direct platelet count"],a:0,e:"Stool occult blood test: a test that detects hidden blood in stool."},
{q:"Which option correctly describes Stool occult blood test?",topic:"Laboratory Knowledge",o:["a direct platelet count", "a test that detects hidden blood in stool", "a test for urine protein", "a liver enzyme test"],a:1,e:"Stool occult blood test: a test that detects hidden blood in stool."},
{q:"Select the correct fact about Stool occult blood test.",topic:"Laboratory Knowledge",o:["a test that detects hidden blood in stool", "a test for urine protein", "a direct platelet count", "a liver enzyme test"],a:0,e:"Stool occult blood test: a test that detects hidden blood in stool."},

{q:"Stool occult blood test is best associated with which answer?",topic:"Laboratory Knowledge",o:["a test that detects hidden blood in stool", "a direct platelet count", "a liver enzyme test", "a test for urine protein"],a:0,e:"Stool occult blood test: a test that detects hidden blood in stool."},
{q:"What is the square of 95?",topic:"Logical Reasoning",o:["9024", "9035", "9026", "9025"],a:3,e:"95 × 95 = 9025."},
{q:"What is the square of 96?",topic:"Logical Reasoning",o:["9226", "9217", "9215", "9216"],a:3,e:"96 × 96 = 9216."},
{q:"What is the square of 97?",topic:"Logical Reasoning",o:["9419", "9408", "9410", "9409"],a:3,e:"97 × 97 = 9409."},
{q:"What is the square of 98?",topic:"Logical Reasoning",o:["9614", "9604", "9605", "9603"],a:1,e:"98 × 98 = 9604."},
{q:"What is the square of 99?",topic:"Logical Reasoning",o:["9800", "9811", "9801", "9802"],a:2,e:"99 × 99 = 9801."}

// ======================================
//  1,996 QUESTIONS  COMPLETE HERE.
// ======================================




  
];



// ======================================
// LAB KNOWLEDGE - IQ PRACTICE SYSTEM
// COMPLETE CORRECTED VERSION
// ======================================

let currentQuestions = [];
let usedQuestionIds = [];

// HTML ELEMENTS
const iqQuestionsBox = document.getElementById("iqQuestions");
const iqResultBox = document.getElementById("iqResult");

const iqStartBtn = document.getElementById("iqStartBtn");
const iqSubmitBtn = document.getElementById("iqSubmitBtn");
const iqAgainBtn = document.getElementById("iqAgainBtn");

// ======================================
// GET QUESTION BANK
// ======================================

function getIQQuestionBank() {
  if (
    typeof iqQuestionBank !== "undefined" &&
    Array.isArray(iqQuestionBank)
  ) {
    return iqQuestionBank;
  }

  if (Array.isArray(window.iqQuestionBank)) {
    return window.iqQuestionBank;
  }

  return [];
}

// ======================================
// LOAD USED QUESTIONS
// ======================================

function loadUsedQuestions() {
  try {
    const saved = localStorage.getItem("labIQUsedQuestions");
    usedQuestionIds = saved ? JSON.parse(saved) : [];

    if (!Array.isArray(usedQuestionIds)) {
      usedQuestionIds = [];
    }
  } catch (error) {
    usedQuestionIds = [];
  }
}

// ======================================
// SAVE USED QUESTIONS
// ======================================

function saveUsedQuestions() {
  try {
    localStorage.setItem(
      "labIQUsedQuestions",
      JSON.stringify(usedQuestionIds)
    );
  } catch (error) {
    console.warn("Unable to save IQ history.");
  }
}

// ======================================
// SHUFFLE ARRAY
// ======================================

function shuffleArray(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] =
      [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

// ======================================
// ESCAPE HTML TEXT
// ======================================

function escapeIQText(value) {
  return String(value ?? "").replace(/[&<>"']/g, function(char) {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };

    return entities[char];
  });
}

// ======================================
// START IQ PRACTICE
// ======================================

window.startIQPractice = function() {

  if (!iqQuestionsBox || !iqResultBox) {
    console.error("IQ Practice HTML elements not found.");
    return;
  }

  const questionBank = getIQQuestionBank();

  if (!questionBank.length) {
    iqResultBox.style.display = "block";
    iqResultBox.textContent =
      "Question bank is not available.";
    return;
  }

  // VALIDATE QUESTIONS
  const validQuestions = questionBank.filter(question => {
    return (
      question &&
      typeof question.q === "string" &&
      question.q.trim() !== "" &&
      Array.isArray(question.o) &&
      question.o.length >= 2 &&
      Number.isInteger(question.a) &&
      question.a >= 0 &&
      question.a < question.o.length &&
      typeof question.e === "string"
    );
  });

  if (validQuestions.length < 10) {
    iqResultBox.style.display = "block";
    iqResultBox.textContent =
      "At least 10 valid questions are required.";
    return;
  }

  loadUsedQuestions();

  // FIND UNUSED QUESTIONS
  let availableQuestions = validQuestions.filter(
    question => !usedQuestionIds.includes(question.q)
  );

  // RESET HISTORY IF QUESTIONS FINISHED
  if (availableQuestions.length < 10) {
    usedQuestionIds = [];
    saveUsedQuestions();

    availableQuestions = [...validQuestions];
  }

  // SELECT 10 RANDOM QUESTIONS
  currentQuestions = shuffleArray(
    availableQuestions
  ).slice(0, 10);

  // SAVE USED QUESTIONS
  currentQuestions.forEach(question => {
    if (!usedQuestionIds.includes(question.q)) {
      usedQuestionIds.push(question.q);
    }
  });

  saveUsedQuestions();

  // ======================================
  // DISPLAY QUESTIONS
  // ======================================

  let html = "";

  currentQuestions.forEach((question, index) => {

    const topic = question.topic || "";
    const cleanQuestion = question.q;

    html += `
      <div class="iq-question-card">

        <div class="iq-question-header" style="display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;column-gap:12px;width:100%;margin:0 0 12px 0;">
          <h3 style="margin:0;text-align:left;">Question ${String(index + 1).padStart(2, "0")}</h3>
          ${topic ? `<span class="iq-topic-label" style="display:inline-block;justify-self:end;text-align:right;white-space:nowrap;padding:5px 11px;border-radius:20px;background:#e0f2fe;color:#075985;font-size:13px;font-weight:700;">${escapeIQText(topic)}</span>` : ""}
        </div>

        <p style="margin-top:0;">${escapeIQText(cleanQuestion)}</p>

        <div class="iq-options">

          ${question.o.map((option, optionIndex) => `
            <label>
              <input
                type="radio"
                name="iqAnswer${index}"
                value="${optionIndex}"
              >
              ${escapeIQText(option)}
            </label>
          `).join("")}

        </div>

      </div>
    `;
  });

  iqQuestionsBox.innerHTML = html;

  // CLEAR PREVIOUS RESULT
  iqResultBox.innerHTML = "";
  iqResultBox.style.display = "none";

  // BUTTON VISIBILITY
  if (iqStartBtn) {
    iqStartBtn.style.display = "none";
  }

  if (iqSubmitBtn) {
    iqSubmitBtn.style.display = "inline-block";
    iqSubmitBtn.disabled = false;
  }

  if (iqAgainBtn) {
    iqAgainBtn.style.display = "none";
  }

  // SCROLL TO QUESTIONS
  const firstQuestion =
    iqQuestionsBox.querySelector(".iq-question-card");

  if (firstQuestion) {
    firstQuestion.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
};

// ======================================
// SUBMIT IQ ANSWERS
// ======================================

window.submitIQAnswers = function() {

  if (currentQuestions.length !== 10 || !iqResultBox) {
    return;
  }

  // PREVENT DOUBLE SUBMISSION
  if (iqSubmitBtn && iqSubmitBtn.disabled) {
    return;
  }

  let score = 0;
  let resultHTML = "";

  // CHECK ANSWERS
  currentQuestions.forEach((question, index) => {

    const selected = document.querySelector(
      `input[name="iqAnswer${index}"]:checked`
    );

    const selectedAnswer = selected
      ? Number(selected.value)
      : -1;

    const isCorrect = selectedAnswer === question.a;

    if (isCorrect) {
      score++;
    }

    resultHTML += `
      <div class="iq-answer-review">

        <h4>Question ${index + 1}</h4>

        <p>${escapeIQText(question.q)}</p>

        <p>
          Your Answer:
          <strong>
            ${
              selectedAnswer >= 0
                ? escapeIQText(question.o[selectedAnswer])
                : "Not Answered"
            }
          </strong>
        </p>

        <p>
          Correct Answer:
          <strong>
            ${escapeIQText(question.o[question.a])}
          </strong>
        </p>

        <p>
          ${isCorrect ? "✅ Correct" : "❌ Incorrect"}
        </p>

        <p>
          Explanation:
          ${escapeIQText(question.e)}
        </p>

      </div>
    `;
  });

  // ======================================
  // CALCULATE RESULT
  // ======================================

  const percentage = score * 10;

  let performance = "";

  if (score >= 9) {
    performance = "Excellent Performance! 🏆";
  } else if (score >= 7) {
    performance = "Very Good! 🌟";
  } else if (score >= 5) {
    performance = "Good Effort! 👍";
  } else {
    performance = "Keep Practicing! 💪";
  }

  // ======================================
  // DISPLAY RESULT
  // ======================================

  iqResultBox.style.display = "block";

  iqResultBox.innerHTML = `
    <div class="iq-score-summary">

      <h2>🎯 Your IQ Practice Result</h2>

      <h3>Score: ${score} / 10</h3>

      <h3>Percentage: ${percentage}%</h3>

      <h3>${performance}</h3>

    </div>

    <h3>📋 Answer Review</h3>

    ${resultHTML}
  `;

  // LOCK ANSWERS
  document.querySelectorAll(
    "#iqQuestions input[type='radio']"
  ).forEach(input => {
    input.disabled = true;
  });

  // HIDE SUBMIT BUTTON
  if (iqSubmitBtn) {
    iqSubmitBtn.disabled = true;
    iqSubmitBtn.style.display = "none";
  }

  // SHOW PRACTICE AGAIN
  if (iqAgainBtn) {
    iqAgainBtn.style.display = "inline-block";
  }

  // SCROLL TO RESULT
  iqResultBox.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
};

// ======================================
// INITIALIZE IQ PRACTICE
// ======================================

loadUsedQuestions();

// ======================================
// BUTTON CONNECTIONS
// ======================================

if (iqStartBtn) {
  iqStartBtn.addEventListener("click", function(event) {
    event.preventDefault();
    window.startIQPractice();
  });
}

if (iqSubmitBtn) {
  iqSubmitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    window.submitIQAnswers();
  });
}

if (iqAgainBtn) {
  iqAgainBtn.addEventListener("click", function(event) {
    event.preventDefault();
    window.startIQPractice();
  });
}

// ======================================
// SYSTEM READY
// ======================================

console.log("Lab Knowledge IQ Practice System Ready!");

})();

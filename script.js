//Questions: my understanding is the inner header click event needs to return a value back to the outter function
/// The Loop

for (var i = 1; i < 101; i++){
    
    
    
    
    
    
    var h3=$('<h3> Accusation '+ i+'</h3>');
    var body = $(document.body);
    $(body).append(h3); 
    
    
        $(h3).click(privateHeader(i));
        
        
    }
    
    //$(h3).text(`Accusation ${num}: I accuse ${friend}, with the ${weapon} in the ${location}!`); 
/// END Loop
//When the page first loads, insert 100 h3 elements onto the page


// Outer Function- outside loop
function privateHeader(num){
    
   
    
    //privateHeader();
    return function(){

        
       // console.log(num);
        //console.log("h3 click!" +num);

        // ------------------------------------

        //mod friends
        //console.log(friends[num % friends.length]);
        
        var friend = friends[num % friends.length];
        // console.log(`testing template literal friend: ${friend}`);
        
        // ------------------------------------

        //mod weapons
       // console.log(weaponNames[num % weaponNames.length]);
       

        var weapon = weaponNames[num % weaponNames.length];
        // console.log(`testing template literal weapon: ${weapon}`);

// ------------------------------------

        //mod location
       // console.log(locationNames[num % locationNames.length]);
       

        var location = locationNames[num % locationNames.length];
        // console.log(`testing template literal location: ${location}`);

        
        alert(`Accusation ${num}: I accuse ${friend}, with the ${weapon} in the ${location}!`);
        //$(h3).text(`Accusation ${num}: I accuse ${friend}, with the ${weapon} in the ${location}!`); 
        
        
    }
    
};





//array of 5 friend names (Don't need this right now)
var friends = ['Vishal', 'Luke', 'Daniel', 'Drew', 'Matt' ];

//array of 10 location names

var locationNames = [

    'kitchen',
    'garden',
    'bathroom',
    'bathtub',
    'pool',
    'outhouse',
    'sewer',
    'dumpster',
    'alley',
    'attic'
    ]



// array of 20 weapon/object names
var weaponNames = [

    'Comet',
    'Poop',
    'Bloodrage',
    'Prideful Carbine',
    'Defender Launcher',
    'Dark Iron Fusil',
    'Corroded Stainless Shooter',
    'Discharge, Smasher Of The Wicked',
    'Oathkeeper, Emissary Of Wasted Time',
    'Devastation, Breaker Of Mourning',
    'The Pig',
    'Demise',
    'Crowd Control',
    'Gleaming Blaster',
    'Military Repeater',
    'Thunderfury Obsidian Launcher',
    'Frenzied Iron Fusil',
    'Typhoon, Crusader Of Necromancy',
    'Stalker, Musket Of Thunder',
    'Mercy, Soul Of Ancient Power'

]




//notes:

// let incrementer = privateCounter(publicCounter);

// incrementer();

/// starting point

// for (var i = 1; i < 11; i++) {
//     var h3 = $(`<h3>Accusation: ${i}</h3>`);
//     $(‘body’).append(h3);
//     h3.click(function() {
//       console.log(i);
//     });
//   }
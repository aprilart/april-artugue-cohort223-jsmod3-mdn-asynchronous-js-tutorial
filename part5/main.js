const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");

//   const spinAlice1 = alice1.animate(aliceTumbling, aliceTiming);
//   const spinAlice2 = alice2.animate(aliceTumbling, aliceTiming);
//   const spinAlice3 = alice3.animate(aliceTumbling, aliceTiming);


//callback hell method

// function spinAlice1(a) {
//     console.log("Spinning Alice #1.");
//     alice1.animate(aliceTumbling, aliceTiming).finished.then(a);
   
// }

// function spinAlice2(a) {
//     console.log("Spinning Alice #2.");
//     alice2.animate(aliceTumbling, aliceTiming).finished.then(a);
  
// }

// function spinAlice3(a) {
//     console.log("Finally... spinning Alice #3.");
//     alice3.animate(aliceTumbling, aliceTiming).finished.then(a);
    
// }

// spinAlice1 (() =>
//     spinAlice2 (() =>
//         spinAlice3(() => {
//             console.log('All done. Bye bye Alices!')
//         }

//         )

//     )

// ); 

//  Promise Chain method

// alice1.animate(aliceTumbling, aliceTiming).finished
    

// .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
       

// .then(() => alice3.animate(aliceTumbling, aliceTiming).finished, console.log('Bye, Bye Alices!'))
        

// .catch(error => console.error(Error `Tumbling Alices: ${error})`));
    
// Async and Await method


async function spinningAlice() {
    try {
      await alice1.animate(aliceTumbling, aliceTiming).finished;
        console.log("Bye, bye Alice #1");
      await alice2.animate(aliceTumbling, aliceTiming).finished;
        console.log("Bye, bye Alice #2");
      await alice3.animate(aliceTumbling, aliceTiming).finished;
        console.log("Bye, bye Alice #3! No more Alices...");
    }
    catch (error) {
      console.error(`Could not run Tumbling Alice sequence: ${error}`)
      
    }
  }
  
  spinningAlice();
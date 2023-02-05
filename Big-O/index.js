// O (n) => ok
// function logItems(n) {
//     for (let i = 0; i < n; i++) {
//         console.log(i)
//     }
// }

// logItems(10);

///////////////////////////////////////////////////
// O (2n) => bad
// function logItems(n) {
//     for (let i = 0; i < n; i++) {
//         console.log(i);
//     }

//     for (let j = 0; j < n; j++) {
//         console.log(j);
//     }
// }

// logItems(3);

/////////////////////////////////////////////////////
// O (n^2) => worst
// function logItems(n) {
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             console.log(i, j);
//         }
//     }
// }

// logItems(3);

//////////////////////////////////////////////////////
// O (n^2 + n) => really bad
// function logItems(n) {
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             console.log(i, j);
//         }
//     }
//     for (let k = 0; k < n; k++) {
//         console.log(k);
//     }
// }

// logItems(3);
//////////////////////////////////////////////////
// O (1) => Great
function addItems(n) {
    return n + n
}

logItems(3); // 6

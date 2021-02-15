/*let getId = () => 123;
console.log( getId() ); // 123

let getId = pref => pref + 123;
console.log( getId('ID: ') ); // ID: 123

let getId = (pref,suf) => pref + 123 + suf;
console.log( getId('ID: ','!') ); // ID: 123!
*/
let getId = (pref,suf) => {
    return pref + 123 + suf;
};
console.log( getId('ID: ','!') ); // ID: 123!


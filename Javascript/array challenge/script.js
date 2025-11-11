const kate = [4, 1, 15, 8, 3]
const julia = [3, 5, 2, 12, 7]
const checkDogs = function(first,second){
    const juliaCopied = [...second]
    console.log(`Julia's record: ${juliaCopied}`)
    juliaCopied.splice(0,1);
    juliaCopied.splice(-2);
    console.log(`Julia's record after deletion: ${juliaCopied}`)
    const allDogs = juliaCopied.concat(first);
    allDogs.forEach(function(age,i){
        const type = age>=3 ? 'adult':'puppy';
        console.log(`Dog ${i +1} is ${type} and is ${age} years old.`);
    });
};

checkDogs(kate,julia);

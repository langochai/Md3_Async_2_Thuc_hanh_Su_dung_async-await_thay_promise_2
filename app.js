async function onMyBirthDayAsync(isKayoSick){

    if (!isKayoSick) return 2;

    throw new Error("I am sad")
}

async function doSomethingAsync(isKayoSick){
    try {
        let result = await onMyBirthDayAsync(isKayoSick);
        console.log(`I have ${result} cakes`)
    }
    catch(error) {
        console.log(error.message);
    }
    finally {
        console.log("Party");
    }
}
let isKayoSick = true
doSomethingAsync(isKayoSick);
isKayoSick = false
doSomethingAsync(isKayoSick)
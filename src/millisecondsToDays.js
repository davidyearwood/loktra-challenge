export default function millisecondsToDays(milliseconds) {
    if (!Number.isInteger(milliseconds)) {
        throw new Error(milliseconds + " is not a number."); 
    }
    
    return parseInt(milliseconds / 1000 / 60 / 60 / 24, 10);  
}
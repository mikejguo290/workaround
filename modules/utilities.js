const formatNumber=(input)=>{
    // take the input and turn it into a string formatted with comma separators for thousands. 
    // the inputs will be of type string because function calculateAverage returns numbers converted to strings with toFixed()
    let number=Number(input); // turn input into a number first. 
    return number.toLocaleString('en-GB'); // proto.toLocaleString() will turn a number into a string and format it to look as expected in a particular language. 
}

export {formatNumber}